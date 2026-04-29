// api.js — Claude API 串接邏輯（支援多科目）
const MODEL = "claude-sonnet-4-6";

// 目前科目（由 app.js 透過 setSubject() 設定）
let _subject = "construction"; // "construction" | "materials" | "geology"

// 各科目的顯示名稱（用於 prompt）
const SUBJECT_NAMES = {
  construction: "施工法",
  materials:    "工程材料學",
  geology:      "工程地質"
};

/**
 * 由 app.js 呼叫，切換目前科目
 */
export function setSubject(subject) {
  _subject = subject;
}

/** 取得目前科目的中文名稱 */
function subjectName() {
  return SUBJECT_NAMES[_subject] ?? "施工法";
}

/**
 * 取得 localStorage 中的 API 設定
 */
function getApiConfig() {
  const endpoint = localStorage.getItem("api_endpoint") || "https://cc.zhihuiapi.top";
  const apiKey   = localStorage.getItem("api_key") || "";
  return { endpoint, apiKey };
}

/**
 * 檢查 API Key 是否已設定
 */
export function checkApiKey() {
  const { apiKey } = getApiConfig();
  if (!apiKey) {
    alert("尚未設定 API Key，請點右上角 ⚙️ 設定後再使用 AI 功能。");
    return false;
  }
  return true;
}

/**
 * 呼叫 Claude API
 */
async function callClaude(prompt, maxTokens = 1000) {
  const { endpoint, apiKey } = getApiConfig();

  const response = await fetch(`${endpoint}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type":      "application/json",
      "x-api-key":         apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: maxTokens,
      messages:   [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API 錯誤 ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text ?? "";
}

/**
 * ① AI 幫我想口訣
 */
export async function generateMnemonic(card) {
  const subject = subjectName();
  const prompt = `你是一位記憶技巧專家。以下是一個${subject}的知識點：

知識點名稱：${card.name}
內容：${card.content}

請幫我設計一個好記的口訣或聯想記憶法，讓我能快速背起這個知識點的重點。
請用繁體中文回答，並說明這個口訣怎麼對應到實際內容。`;

  return callClaude(prompt, 800);
}

/**
 * ② 單一知識點出申論題
 */
export async function generateCardQuestion(card, options = {}) {
  const { starred = false } = options;
  const subject = subjectName();

  const examHistory = (card.examYears && card.examYears.length > 0)
    ? `\n此知識點歷年考試紀錄：${card.examYears.join("、")}`
    : "";

  const starNote = starred
    ? "\n⚠️ 此知識點被使用者標記為重要，請優先以此知識點為核心命題，題目角度要有深度。"
    : "";

  const prompt = `你是一位${subject}的考試出題老師。以下是一個知識點：

知識點名稱：${card.name}
內容：${card.content}${examHistory}${starNote}

請根據此知識點出一題申論題，難度適合國家考試程度（高考三級或土木技師程度）。
只需輸出題目本身，不要包含答案。`;

  return callClaude(prompt, 400);
}

/**
 * ③ 本章出申論題
 */
export async function generateChapterQuestion(chapterData, options = {}) {
  const { starredIds = new Set() } = options;
  const subject = subjectName();

  const cardList = chapterData.cards
    .map(c => {
      const starMark = starredIds.has(c.id) ? "★【重要考點】" : "";
      const examNote = (c.examYears && c.examYears.length > 0)
        ? `（曾考：${c.examYears.slice(0, 3).join("、")}${c.examYears.length > 3 ? "等" : ""}）`
        : "";
      return `${starMark}【${c.name}】${examNote}\n${c.content}`;
    })
    .join("\n\n");

  const starredCards = chapterData.cards.filter(c => starredIds.has(c.id));
  const starredNote = starredCards.length > 0
    ? `\n⚠️ 使用者標記為重要的知識點（★）共 ${starredCards.length} 個，出題時應優先涵蓋這些知識點（佔比約 70%）：${starredCards.map(c => c.name).join("、")}`
    : "";

  const prompt = `你是一位${subject}的考試出題老師。以下是本章的知識點清單：

${cardList}
${starredNote}

請根據本章內容出一題涵蓋範圍較廣的申論題，難度適合國家考試程度（高考三級或土木技師程度）。
只需輸出題目本身，不要包含答案。`;

  return callClaude(prompt, 400);
}

/**
 * ④ AI 批改申論題
 */
export async function gradeAnswer({ question, content, studentAnswer }) {
  const subject = subjectName();
  const prompt = `你是一位${subject}的閱卷老師，請批改以下申論題的答案。

題目：${question}
知識點參考內容：${content}
學生答案：${studentAnswer}

請用以下格式回答（必須嚴格遵守）：

【批改後的學生答案】
將學生的原始答案重新呈現，並在其中標記錯誤與遺漏：
- 錯誤或不正確的文字：用 [[DEL]]錯誤文字[[/DEL]] 包住
- 遺漏或需補充的地方：在適當位置插入 [[INS]]補充文字[[/INS]]
- 正確的部分保持原樣

【完整詳解】
評分：＿／25
✅ 答對的部分：（條列說明）
❌ 遺漏或錯誤的部分：（條列說明）
📖 標準答案與說明：（完整說明）

請用繁體中文回答。`;

  return callClaude(prompt, 1800);
}
