// app.js — 主程式邏輯（支援多科目：施工法 / 工程材料）
import {
  checkApiKey,
  generateMnemonic,
  generateCardQuestion,
  generateChapterQuestion,
  gradeAnswer,
  setSubject          // ← api.js 新增的函式，用來切換 prompt 科目
} from "./api.js";

// ===== 科目定義 =====
const SUBJECTS = {
  construction: {
    label: "施工法",
    dataPath: "./data/construction/",
    chapters: Array.from({ length: 11 }, (_, i) => {
      const n = i + 2; // ch2 ~ ch12
      return { key: `ch${n}`, path: `./data/construction/ch${n}.js` };
    })
  },
  materials: {
    label: "工程材料",
    dataPath: "./data/materials/",
    chapters: Array.from({ length: 10 }, (_, i) => {
      const n = i + 2; // ch2 ~ ch11
      return { key: `ch${n}`, path: `./data/materials/ch${n}.js` };
    })
  },
  geology: {
    label: "工程地質",
    dataPath: "./data/geology/",
    chapters: Array.from({ length: 8 }, (_, i) => {
      const n = i + 1; // ch1 ~ ch8
      return { key: `ch${n}`, path: `./data/geology/ch${n}.js` };
    })
  }
};

// ===== 全域狀態 =====
let currentSubject = "construction"; // "construction" | "materials" | "geology"
let allChapters    = [];
let currentChapter = null;
let quizContext    = null;

// ===== DOM 參考 =====
const chapterTabs      = document.getElementById("chapter-tabs");
const chapterView      = document.getElementById("chapter-view");
const recordsView      = document.getElementById("records-view");
const chapterTitle     = document.getElementById("chapter-title");
const cardsContainer   = document.getElementById("cards-container");
const recordsContainer = document.getElementById("records-container");
const cardTemplate     = document.getElementById("card-template");

const quizModal          = document.getElementById("quiz-modal");
const quizModalTitle     = document.getElementById("quiz-modal-title");
const quizQuestionText   = document.getElementById("quiz-question-text");
const quizLoading        = document.getElementById("quiz-loading");
const quizAnswerInput    = document.getElementById("quiz-answer-input");
const btnSubmitQuiz      = document.getElementById("btn-submit-quiz");
const quizResult         = document.getElementById("quiz-result");
const quizGradingLoading = document.getElementById("quiz-grading-loading");
const quizResultContent  = document.getElementById("quiz-result-content");

const settingsModal    = document.getElementById("settings-modal");
const settingEndpoint  = document.getElementById("setting-endpoint");
const settingApiKey    = document.getElementById("setting-apikey");
const settingsSavedMsg = document.getElementById("settings-saved-msg");

let noteModalCardId = null;
let noteModalCard   = null;

// ===== 初始化 =====
async function init() {
  // 讀取上次使用的科目
  const saved = localStorage.getItem("current_subject");
  if (saved && SUBJECTS[saved]) currentSubject = saved;

  // 更新科目按鈕狀態
  document.querySelectorAll(".subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.subject === currentSubject);
  });

  bindSubjectEvents();
  bindNavEvents();
  bindQuizModalEvents();
  bindReviewModalEvents();
  bindSettingsModalEvents();
  bindNoteModalEvents();

  setSubject(currentSubject); // 告知 api.js 目前科目
  await loadChapters();
  if (allChapters.length > 0) renderChapter(allChapters[0]);
}

// ===== 科目切換 =====
function bindSubjectEvents() {
  document.querySelectorAll(".subject-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const newSubject = btn.dataset.subject;
      if (newSubject === currentSubject) return;

      currentSubject = newSubject;
      localStorage.setItem("current_subject", currentSubject);
      setSubject(currentSubject);

      document.querySelectorAll(".subject-btn").forEach(b =>
        b.classList.toggle("active", b.dataset.subject === currentSubject)
      );

      // 重置章節狀態，重新載入
      allChapters = [];
      currentChapter = null;
      currentFilter  = "all";
      chapterTabs.innerHTML = "";
      cardsContainer.innerHTML = "";
      chapterTitle.textContent = "";
      document.getElementById("chapter-progress-bar").innerHTML = "";

      showView("chapter");
      await loadChapters();
      if (allChapters.length > 0) renderChapter(allChapters[0]);
    });
  });
}

// ===== 載入章節資料 =====
async function loadChapters() {
  const modules = SUBJECTS[currentSubject].chapters;
  for (const mod of modules) {
    try {
      const module = await import(mod.path);
      allChapters.push(module.default);
    } catch (e) {
      console.warn(`無法載入 ${mod.path}:`, e);
    }
  }
  renderTabs();
}

// ===== 渲染 Tab =====
function renderTabs() {
  chapterTabs.innerHTML = "";
  allChapters.forEach((ch, idx) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (idx === 0 ? " active" : "");
    btn.textContent = ch.chapter;
    btn.title = ch.title;
    btn.dataset.idx = idx;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showView("chapter");
      renderChapter(allChapters[idx]);
    });
    chapterTabs.appendChild(btn);
  });
}

// ===== 切換檢視 =====
function showView(name) {
  chapterView.classList.remove("active");
  recordsView.classList.remove("active");
  if (name === "chapter") chapterView.classList.add("active");
  if (name === "records")  recordsView.classList.add("active");
}

// ===== localStorage key 加科目前綴（避免兩科衝突）=====
function storageKey(suffix) {
  return `${currentSubject}_${suffix}`;
}

// ===== 章節進度條 =====
function renderChapterProgress(chapterData) {
  const el = document.getElementById("chapter-progress-bar");
  if (!el) return;

  const sections = chapterData.sections ?? [{ cards: chapterData.cards }];
  const allCards  = sections.flatMap(s => s.cards);

  const visibleCards = (typeof cardMatchesFilter === "function")
    ? allCards.filter(cardMatchesFilter)
    : allCards;

  const total = visibleCards.length;
  if (total === 0) { el.innerHTML = ""; return; }

  let mastered = 0, review = 0;
  visibleCards.forEach(card => {
    const status = localStorage.getItem(storageKey(`card_status_${card.id}`)) || "";
    if (status === "熟練")        mastered++;
    else if (status === "待加強") review++;
  });
  const unreviewed = total - mastered - review;

  const filterLabel = { all: "", important: "（重點）", rare: "（不常考）" }[currentFilter ?? "all"] ?? "";

  const seg = (cls, count) => count > 0
    ? `<div class="chapter-progress-segment ${cls}" style="flex:${count}">${count}</div>`
    : "";

  el.innerHTML = `
    <div class="chapter-progress-track">
      ${seg("seg-mastered",  mastered)}
      ${seg("seg-review",    review)}
      ${seg("seg-unreviewed",unreviewed)}
    </div>
    <div class="chapter-progress-legend">
      <span><span class="legend-dot legend-dot-mastered"></span>熟練 ${mastered}</span>
      <span><span class="legend-dot legend-dot-review"></span>待加強 ${review}</span>
      <span><span class="legend-dot legend-dot-unreviewed"></span>未複習 ${unreviewed}</span>
      <span class="legend-total">共 ${total} 個知識點${filterLabel}</span>
    </div>
  `;
}

// ===== 篩選狀態 =====
let currentFilter = "all"; // "all" | "important" | "rare"

function cardMatchesFilter(card) {
  if (currentFilter === "all") return true;
  const starred     = isStarred(card.id);
  const examFocus   = card.isExamFocus === true;
  const neverTested = card.neverTested  === true;

  if (currentFilter === "important") return examFocus || starred;
  if (currentFilter === "rare")      return neverTested && !starred;
  return true;
}

// ===== 渲染章節 =====
function renderChapter(chapterData) {
  currentChapter = chapterData;
  chapterTitle.textContent = `${chapterData.chapter} ${chapterData.title}`;
  cardsContainer.innerHTML = "";
  renderChapterProgress(chapterData);
  renderFilterBar();
  renderCards(chapterData);
}

function renderCards(chapterData) {
  Array.from(cardsContainer.children).forEach(el => {
    if (!el.matches("#card-filter-bar")) el.remove();
  });

  const sections = chapterData.sections ?? [{ id: "_", title: null, cards: chapterData.cards }];
  let totalVisible = 0;

  sections.forEach(section => {
    const visibleCards = section.cards.filter(cardMatchesFilter);
    if (visibleCards.length === 0) return;

    totalVisible += visibleCards.length;

    const group = document.createElement("div");
    group.className = "section-group";

    if (section.title) {
      const heading = document.createElement("div");
      heading.className = "section-heading";
      heading.textContent = section.title;
      group.appendChild(heading);
    }

    const grid = document.createElement("div");
    grid.className = "cards-grid";

    visibleCards.forEach(card => {
      const node    = cardTemplate.content.cloneNode(true);
      const article = node.querySelector(".card");

      article.dataset.id = card.id;
      article.querySelector(".card-name").textContent  = card.name;
      article.querySelector(".card-content").innerHTML = card.content;

      applyExamBadge(article, card);

      const starBtn = document.createElement("button");
      starBtn.className   = "btn-star" + (isStarred(card.id) ? " starred" : "");
      starBtn.title       = "標記為重要考點";
      starBtn.textContent = isStarred(card.id) ? "★" : "☆";
      starBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleStar(starBtn, card.id);
        if (currentFilter !== "all") renderCards(currentChapter);
      });
      article.appendChild(starBtn);

      if (isStarred(card.id)) article.classList.add("card-starred");

      applyCardStatus(article, localStorage.getItem(storageKey(`card_status_${card.id}`)) || "");

      article.querySelector(".btn-mastered").addEventListener("click",    () => toggleStatus(article, card.id, "熟練"));
      article.querySelector(".btn-review").addEventListener("click",      () => toggleStatus(article, card.id, "待加強"));
      article.querySelector(".btn-note").addEventListener("click",        () => openNoteModal(card));
      article.querySelector(".btn-review-card").addEventListener("click", () => openReview(card));
      article.querySelector(".btn-quiz-card").addEventListener("click",   () => openCardQuiz(card));

      renderCardProgress(article, card);
      grid.appendChild(article);
    });

    group.appendChild(grid);
    cardsContainer.appendChild(group);
  });

  if (totalVisible === 0) {
    const empty = document.createElement("p");
    empty.className = "filter-empty";
    empty.textContent = currentFilter === "important"
      ? "本章目前沒有曾考過或打星星的知識點。"
      : "本章目前沒有從未考過且未打星星的知識點。";
    cardsContainer.appendChild(empty);
  }
}

function renderFilterBar() {
  const bar = document.createElement("div");
  bar.id = "card-filter-bar";
  bar.className = "card-filter-bar";

  const filters = [
    { key: "all",       label: "全部" },
    { key: "important", label: "⭐ 重點" },
    { key: "rare",      label: "📎 不常考" },
  ];

  filters.forEach(({ key, label }) => {
    const btn = document.createElement("button");
    btn.className   = "filter-btn" + (currentFilter === key ? " active" : "");
    btn.textContent = label;
    btn.dataset.filter = key;
    btn.addEventListener("click", () => {
      if (currentFilter === key) return;
      currentFilter = key;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderChapterProgress(currentChapter);
      renderCards(currentChapter);
    });
    bar.appendChild(btn);
  });

  cardsContainer.appendChild(bar);
}

// ===== 考試標記 =====
function applyExamBadge(article, card) {
  if (card.neverTested === true) article.classList.add("card-never-tested");
  if (card.isExamFocus === true) article.classList.add("card-exam-focus");

  if (card.examYears && card.examYears.length > 0) {
    const badgeDiv = document.createElement("div");
    badgeDiv.className = "card-exam-years";

    const label = document.createElement("span");
    label.className = "exam-years-label";
    label.textContent = "曾考：";
    badgeDiv.appendChild(label);

    card.examYears.forEach(yearStr => {
      const pill = document.createElement("span");
      pill.className = "exam-year-pill " + getExamPillClass(yearStr);
      pill.textContent = yearStr;
      pill.title = yearStr;
      badgeDiv.appendChild(pill);
    });

    const actions = article.querySelector(".card-actions");
    article.insertBefore(badgeDiv, actions);
  }
}

function getExamPillClass(yearStr) {
  if (yearStr.includes("高考二級") || yearStr.includes("高考一級")) return "pill-gaokao";
  if (yearStr.includes("地方三等")) return "pill-local3";
  if (yearStr.includes("地方四等")) return "pill-local4";
  if (yearStr.includes("普考"))     return "pill-general";
  if (yearStr.includes("技師"))     return "pill-tech";
  if (yearStr.includes("司法"))     return "pill-judicial";
  return "pill-other";
}

// ===== 星星功能（key 加科目前綴）=====
function isStarred(cardId) {
  return localStorage.getItem(storageKey(`card_star_${cardId}`)) === "1";
}

function toggleStar(btn, cardId) {
  const article    = btn.closest(".card");
  const nowStarred = !isStarred(cardId);

  if (nowStarred) {
    localStorage.setItem(storageKey(`card_star_${cardId}`), "1");
    btn.classList.add("starred");
    btn.textContent = "★";
    article.classList.add("card-starred");
    article.classList.remove("card-never-tested");
  } else {
    localStorage.removeItem(storageKey(`card_star_${cardId}`));
    btn.classList.remove("starred");
    btn.textContent = "☆";
    article.classList.remove("card-starred");
    const cardData = findCardById(cardId);
    if (cardData?.neverTested) article.classList.add("card-never-tested");
  }
}

function findCardById(cardId) {
  for (const ch of allChapters) {
    const sections = ch.sections ?? [{ cards: ch.cards }];
    for (const sec of sections) {
      const found = sec.cards.find(c => c.id === cardId);
      if (found) return found;
    }
  }
  return null;
}

function getStarredIdsInChapter(chapterData) {
  const sections = chapterData.sections ?? [{ cards: chapterData.cards }];
  const allCards  = sections.flatMap(s => s.cards);
  return new Set(allCards.filter(c => isStarred(c.id)).map(c => c.id));
}

// ===== 狀態切換（key 加科目前綴）=====
function toggleStatus(article, cardId, status) {
  const current = localStorage.getItem(storageKey(`card_status_${cardId}`)) || "";
  const next    = current === status ? "" : status;
  localStorage.setItem(storageKey(`card_status_${cardId}`), next);
  applyCardStatus(article, next);
  if (currentChapter) renderChapterProgress(currentChapter);
}

function applyCardStatus(article, status) {
  article.classList.remove("status-mastered", "status-review");
  article.querySelector(".btn-mastered").classList.remove("active");
  article.querySelector(".btn-review").classList.remove("active");

  if (status === "熟練") {
    article.classList.add("status-mastered");
    article.querySelector(".btn-mastered").classList.add("active");
  } else if (status === "待加強") {
    article.classList.add("status-review");
    article.querySelector(".btn-review").classList.add("active");
  }
}

// ===== 卡片進度點 =====
function renderCardProgress(article, card) {
  const progressEl = article.querySelector(".card-progress");
  if (!progressEl) return;
  const quizTotal = card.quiz?.length ?? 0;
  if (quizTotal === 0) return;

  const result = getReviewResult(card.id);
  const dots = Array.from({ length: quizTotal }, (_, i) => {
    if (!result) return `<span class="prog-dot prog-empty">○</span>`;
    const r = result.quiz?.[i];
    if (r === undefined) return `<span class="prog-dot prog-empty">○</span>`;
    return `<span class="prog-dot ${r.correct ? "prog-correct" : "prog-wrong"}">●</span>`;
  }).join("");
  progressEl.innerHTML = dots;
}

// ===== 筆記 Modal =====
function openNoteModal(card) {
  noteModalCardId = card.id;
  noteModalCard   = card;
  document.getElementById("note-modal-title").textContent = `📝 筆記：${card.name}`;
  document.getElementById("note-modal-input").value = localStorage.getItem(storageKey(`card_note_${card.id}`)) || "";

  const mnemonicSection = document.getElementById("note-modal-mnemonic");
  const mnemonicContent = document.getElementById("note-modal-mnemonic-content");
  const cached = localStorage.getItem(storageKey(`card_mnemonic_${card.id}`));
  if (cached) {
    mnemonicContent.textContent = cached;
    mnemonicSection.classList.remove("hidden");
  } else {
    mnemonicSection.classList.add("hidden");
    mnemonicContent.textContent = "";
  }

  document.getElementById("note-modal-saved-msg").classList.add("hidden");
  document.getElementById("note-modal").classList.remove("hidden");
}

function bindNoteModalEvents() {
  document.getElementById("note-modal-close").addEventListener("click", () =>
    document.getElementById("note-modal").classList.add("hidden"));

  document.getElementById("note-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("note-modal"))
      document.getElementById("note-modal").classList.add("hidden");
  });

  document.getElementById("btn-save-note-modal").addEventListener("click", () => {
    if (!noteModalCardId) return;
    const value = document.getElementById("note-modal-input").value;
    localStorage.setItem(storageKey(`card_note_${noteModalCardId}`), value);
    const msg = document.getElementById("note-modal-saved-msg");
    msg.classList.remove("hidden");
    setTimeout(() => msg.classList.add("hidden"), 1500);
  });

  document.getElementById("btn-ai-mnemonic-modal").addEventListener("click", () => {
    if (!noteModalCard) return;
    requestMnemonicModal(noteModalCard);
  });
}

async function requestMnemonicModal(card) {
  if (!checkApiKey()) return;
  const mnemonicSection = document.getElementById("note-modal-mnemonic");
  const mnemonicLoading = document.getElementById("note-modal-mnemonic-loading");
  const mnemonicContent = document.getElementById("note-modal-mnemonic-content");

  mnemonicSection.classList.remove("hidden");
  mnemonicLoading.classList.remove("hidden");
  mnemonicContent.textContent = "";

  try {
    const text = await generateMnemonic({ ...card, content: stripHtml(card.content) });
    localStorage.setItem(storageKey(`card_mnemonic_${card.id}`), text);
    mnemonicContent.textContent = text;
  } catch (e) {
    mnemonicContent.textContent = `❌ 發生錯誤：${e.message}`;
  } finally {
    mnemonicLoading.classList.add("hidden");
  }
}

// ===== 複習 Modal =====
let reviewCard = null;

function openReview(card) {
  const quiz = card.quiz ?? [];
  if (quiz.length === 0) { alert("此知識點尚無複習題目。"); return; }

  reviewCard = card;
  document.getElementById("review-modal-title").textContent = `📖 複習：${card.name}`;

  const existingResult = getReviewResult(card.id);
  if (existingResult) {
    renderReviewReadonly(card, existingResult);
  } else {
    renderReviewQuestions(card);
    document.getElementById("review-result").classList.add("hidden");
    document.getElementById("review-footer").classList.remove("hidden");
  }
  document.getElementById("review-modal").classList.remove("hidden");
}

function renderReviewQuestions(card) {
  const quiz = card.quiz ?? [];
  const container = document.getElementById("review-questions");
  container.innerHTML = "";

  quiz.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "review-block";
    block.dataset.answer      = JSON.stringify(q.answer);
    block.dataset.explanation = q.explanation || "";
    block.innerHTML = `
      <div class="review-q-label">第 ${i + 1} 題</div>
      <div class="review-q-text">${escapeHtml(q.question)}</div>
      <div class="review-options">
        ${q.options.map(opt => `
          <label class="review-option">
            <input type="checkbox" name="quiz-${i}" value="${escapeHtml(opt[0])}">
            <span>${escapeHtml(opt)}</span>
          </label>
        `).join("")}
      </div>
      <div class="review-feedback hidden"></div>
    `;
    container.appendChild(block);
  });
}

function renderReviewReadonly(card, result) {
  const quiz = card.quiz ?? [];
  const container = document.getElementById("review-questions");
  container.innerHTML = "";

  quiz.forEach((q, i) => {
    const r = result.quiz?.[i] ?? { selected: [], correct: false };
    const block = document.createElement("div");
    block.className = "review-block";
    block.innerHTML = `
      <div class="review-q-label">第 ${i + 1} 題</div>
      <div class="review-q-text">${escapeHtml(q.question)}</div>
      <div class="review-options">
        ${q.options.map(opt => {
          const val = opt[0];
          const isCorrectAns = q.answer.includes(val);
          const wasSelected  = r.selected.includes(val);
          let cls = "";
          if (isCorrectAns) cls = "option-correct";
          else if (wasSelected && !isCorrectAns) cls = "option-wrong";
          return `<label class="review-option ${cls}">
            <input type="checkbox" disabled ${wasSelected ? "checked" : ""}>
            <span>${escapeHtml(opt)}</span>
          </label>`;
        }).join("")}
      </div>
      <div class="review-feedback ${r.correct ? "correct" : "wrong"}">
        ${r.correct
          ? `✅ 正確！<span class="review-exp">${escapeHtml(q.explanation || "")}</span>`
          : `❌ 正確答案：${escapeHtml(q.answer.join("、"))}<br><span class="review-exp">${escapeHtml(q.explanation || "")}</span>`}
      </div>
    `;
    container.appendChild(block);
  });

  document.getElementById("review-footer").classList.add("hidden");
  document.getElementById("review-result").classList.remove("hidden");
  document.getElementById("review-result-content").innerHTML =
    `<div class="review-score">得分：${result.score}</div>`;
}

function submitReview() {
  const blocks = document.querySelectorAll("#review-questions .review-block");
  let correct = 0;
  const total = blocks.length;
  const quizResults = [];

  blocks.forEach(block => {
    const correctAnswer = JSON.parse(block.dataset.answer);
    const explanation   = block.dataset.explanation;
    const feedback      = block.querySelector(".review-feedback");
    feedback.classList.remove("hidden", "correct", "wrong");

    const checked = [...block.querySelectorAll("input[type=checkbox]:checked")].map(el => el.value);
    const isCorrect =
      checked.length === correctAnswer.length &&
      correctAnswer.every(a => checked.includes(a));

    if (isCorrect) correct++;

    feedback.className = `review-feedback ${isCorrect ? "correct" : "wrong"}`;
    feedback.innerHTML = isCorrect
      ? `✅ 正確！<span class="review-exp">${escapeHtml(explanation)}</span>`
      : `❌ 正確答案：${escapeHtml(correctAnswer.join("、"))}<br><span class="review-exp">${escapeHtml(explanation)}</span>`;

    block.querySelectorAll(".review-option").forEach(label => {
      const val = label.querySelector("input").value;
      const isCorrectAns = correctAnswer.includes(val);
      const wasSelected  = checked.includes(val);
      if (isCorrectAns) label.classList.add("option-correct");
      else if (wasSelected && !isCorrectAns) label.classList.add("option-wrong");
    });

    block.querySelectorAll("input[type=checkbox]").forEach(cb => cb.disabled = true);
    quizResults.push({ selected: checked, correct: isCorrect });
  });

  document.getElementById("review-footer").classList.add("hidden");
  document.getElementById("review-result").classList.remove("hidden");
  document.getElementById("review-result-content").innerHTML =
    `<div class="review-score">得分：${correct} / ${total}</div>`;

  if (reviewCard) {
    saveReviewResult(reviewCard.id, { score: `${correct}/${total}`, quiz: quizResults });
    const articleEl = document.querySelector(`.card[data-id="${reviewCard.id}"]`);
    if (articleEl) renderCardProgress(articleEl, reviewCard);
  }
}

function bindReviewModalEvents() {
  document.getElementById("review-modal-close").addEventListener("click", () =>
    document.getElementById("review-modal").classList.add("hidden"));
  document.getElementById("btn-submit-review").addEventListener("click", submitReview);
  document.getElementById("btn-review-reset").addEventListener("click", () => {
    if (!reviewCard) return;
    localStorage.removeItem(storageKey(`card_review_result_${reviewCard.id}`));
    const articleEl = document.querySelector(`.card[data-id="${reviewCard.id}"]`);
    if (articleEl) renderCardProgress(articleEl, reviewCard);
    renderReviewQuestions(reviewCard);
    document.getElementById("review-result").classList.add("hidden");
    document.getElementById("review-footer").classList.remove("hidden");
  });
  document.getElementById("btn-review-done").addEventListener("click", () =>
    document.getElementById("review-modal").classList.add("hidden"));
}

// ===== 導覽事件 =====
function bindNavEvents() {
  document.getElementById("btn-records").addEventListener("click", () => {
    showView("records");
    renderRecordsPage();
  });

  document.getElementById("btn-settings").addEventListener("click", () => {
    settingEndpoint.value = localStorage.getItem("api_endpoint") || "https://cc.zhihuiapi.top";
    settingApiKey.value   = localStorage.getItem("api_key") || "";
    settingsSavedMsg.classList.add("hidden");
    settingsModal.classList.remove("hidden");
  });

  document.getElementById("btn-chapter-quiz").addEventListener("click", () => {
    if (currentChapter) openChapterQuiz(currentChapter);
  });
}

// ===== 答題記錄（key 加科目前綴）=====
function renderRecordsPage() {
  const allRecords   = getQuizRecords();
  const essayRecords = allRecords
    .map((r, i) => ({ record: r, origIdx: i }))
    .filter(({ record }) => record.quizType === "essay");

  recordsContainer.innerHTML = "";

  if (essayRecords.length === 0) {
    recordsContainer.innerHTML = `<p class="records-empty">尚無申論題答題記錄</p>`;
    return;
  }

  const header   = document.createElement("div");
  header.className = "records-header";
  const clearBtn = document.createElement("button");
  clearBtn.className   = "btn-secondary";
  clearBtn.textContent = "🗑 清除所有記錄";
  clearBtn.addEventListener("click", () => {
    if (confirm("確定要清除所有申論題記錄嗎？")) {
      localStorage.setItem(storageKey("quiz_records"), JSON.stringify(
        allRecords.filter(r => r.quizType !== "essay")
      ));
      renderRecordsPage();
    }
  });
  header.appendChild(clearBtn);
  recordsContainer.appendChild(header);

  [...essayRecords].reverse().forEach(({ record, origIdx }) => {
    recordsContainer.appendChild(renderRecordCard(record, origIdx));
  });
}

function renderRecordCard(r, origIdx) {
  const div = document.createElement("div");
  div.className = "record-card";
  const scoreLabel   = r.score ? `${r.score}` : "—";
  const questionText = r.question || "";
  div.innerHTML = `
    <div class="record-summary">
      <div class="record-meta">
        <div class="record-date">${r.date}</div>
        <div class="record-score">${scoreLabel}</div>
      </div>
      <div class="record-body">
        <div class="record-card-name">${escapeHtml(r.cardName || "")}</div>
        <div class="record-question" title="${escapeHtml(questionText)}">${escapeHtml(questionText)}</div>
      </div>
      <span class="record-expand-icon">▶</span>
      <button class="btn-delete-record" title="刪除此記錄">✕</button>
    </div>
    <div class="record-detail hidden">
      <div class="record-detail-question">${escapeHtml(questionText)}</div>
      <div class="record-detail-feedback">${r.feedback ? parseGradingMarkup(r.feedback) : "<p style='color:var(--text-secondary)'>（無批改內容）</p>"}</div>
    </div>
  `;
  div.querySelector(".record-summary").addEventListener("click", () => {
    const detail = div.querySelector(".record-detail");
    const icon   = div.querySelector(".record-expand-icon");
    detail.classList.toggle("hidden");
    div.classList.toggle("record-card-open");
    icon.textContent = detail.classList.contains("hidden") ? "▶" : "▼";
  });
  div.querySelector(".btn-delete-record").addEventListener("click", (e) => {
    e.stopPropagation();
    const records = getQuizRecords();
    records.splice(origIdx, 1);
    localStorage.setItem(storageKey("quiz_records"), JSON.stringify(records));
    renderRecordsPage();
  });
  return div;
}

// ===== 測驗 Modal =====
async function openCardQuiz(card) {
  if (!checkApiKey()) return;

  resetQuizModal();
  quizModalTitle.textContent = `📋 測驗：${card.name}`;
  quizLoading.classList.remove("hidden");
  quizModal.classList.remove("hidden");

  const plainContent = stripHtml(card.content);

  try {
    const starred  = isStarred(card.id);
    const question = await generateCardQuestion(
      { ...card, content: plainContent },
      { starred }
    );
    quizContext = { type: "card", card, question, refContent: plainContent };
    quizQuestionText.textContent = question;
  } catch (e) {
    quizQuestionText.textContent = `❌ 出題失敗：${e.message}`;
  } finally {
    quizLoading.classList.add("hidden");
  }
}

async function openChapterQuiz(chapterData) {
  if (!checkApiKey()) return;

  resetQuizModal();
  quizModalTitle.textContent = `📋 本章測驗：${chapterData.chapter} ${chapterData.title}`;
  quizLoading.classList.remove("hidden");
  quizModal.classList.remove("hidden");

  const allCards = chapterData.sections
    ? chapterData.sections.flatMap(s => s.cards)
    : chapterData.cards;

  const refContent = allCards.map(c => `【${c.name}】${stripHtml(c.content)}`).join("\n");
  const starredIds = getStarredIdsInChapter(chapterData);

  try {
    const question = await generateChapterQuestion(
      { ...chapterData, cards: allCards },
      { starredIds }
    );
    quizContext = {
      type: "chapter",
      chapterData,
      question,
      cardId:   `chapter-${chapterData.chapter}`,
      cardName: `本章測驗-${chapterData.chapter}`,
      refContent
    };
    quizQuestionText.textContent = question;
  } catch (e) {
    quizQuestionText.textContent = `❌ 出題失敗：${e.message}`;
  } finally {
    quizLoading.classList.add("hidden");
  }
}

function resetQuizModal() {
  quizContext = null;
  quizQuestionText.textContent = "";
  quizAnswerInput.value = "";
  quizResult.classList.add("hidden");
  quizResultContent.innerHTML = "";
  quizGradingLoading.classList.add("hidden");
  btnSubmitQuiz.disabled = false;
}

function bindQuizModalEvents() {
  document.getElementById("quiz-modal-close").addEventListener("click", () =>
    quizModal.classList.add("hidden"));

  btnSubmitQuiz.addEventListener("click", async () => {
    if (!quizContext) return;
    const studentAnswer = quizAnswerInput.value.trim();
    if (!studentAnswer) { alert("請輸入你的答案！"); return; }

    btnSubmitQuiz.disabled = true;
    quizResult.classList.remove("hidden");
    quizGradingLoading.classList.remove("hidden");
    quizResultContent.textContent = "";

    try {
      const feedback = await gradeAnswer({
        question: quizContext.question,
        content:  quizContext.refContent,
        studentAnswer
      });

      quizResultContent.innerHTML = parseGradingMarkup(feedback);

      const scoreMatch = feedback.match(/評分[：:]\s*([\d＿／\/\s\-]+)/);
      const score = scoreMatch ? scoreMatch[1].trim() : "—";

      const cardId   = quizContext.type === "card" ? quizContext.card.id   : quizContext.cardId;
      const cardName = quizContext.type === "card" ? quizContext.card.name : quizContext.cardName;

      saveQuizRecord({
        date: formatDate(new Date()),
        cardId,
        cardName,
        question: quizContext.question,
        studentAnswer,
        score,
        feedback
      });
    } catch (e) {
      quizResultContent.textContent = `❌ 批改失敗：${e.message}`;
    } finally {
      quizGradingLoading.classList.add("hidden");
      btnSubmitQuiz.disabled = false;
    }
  });
}

// ===== 設定 Modal =====
function bindSettingsModalEvents() {
  document.getElementById("settings-modal-close").addEventListener("click", () =>
    settingsModal.classList.add("hidden"));

  document.getElementById("btn-save-settings").addEventListener("click", () => {
    const endpoint = settingEndpoint.value.trim() || "https://cc.zhihuiapi.top";
    const apiKey   = settingApiKey.value.trim();
    localStorage.setItem("api_endpoint", endpoint);
    localStorage.setItem("api_key", apiKey);
    settingsSavedMsg.classList.remove("hidden");
    setTimeout(() => settingsSavedMsg.classList.add("hidden"), 2000);
  });
}

// ===== localStorage（帶科目前綴）=====
function getQuizRecords() {
  try { return JSON.parse(localStorage.getItem(storageKey("quiz_records")) || "[]"); }
  catch { return []; }
}

function saveQuizRecord(record) {
  const records = getQuizRecords();
  records.push({ quizType: "essay", ...record });
  localStorage.setItem(storageKey("quiz_records"), JSON.stringify(records));
}

function getReviewResult(cardId) {
  try { return JSON.parse(localStorage.getItem(storageKey(`card_review_result_${cardId}`)) || "null"); }
  catch { return null; }
}

function saveReviewResult(cardId, result) {
  localStorage.setItem(storageKey(`card_review_result_${cardId}`), JSON.stringify(result));
}

// ===== 工具函式 =====
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function parseGradingMarkup(text) {
  const sections = text.split(/(?=【完整詳解】|【詳解】)/);
  return sections.map(section => {
    const wrapClass = (!section.startsWith("【完整詳解】") && !section.startsWith("【詳解】"))
      ? "quiz-annotation" : "quiz-explanation";
    let html = escapeHtml(section);
    html = html.replace(/\[\[DEL\]\]([\s\S]*?)\[\[\/DEL\]\]/g, '<del>$1</del>');
    html = html.replace(/\[\[INS\]\]([\s\S]*?)\[\[\/INS\]\]/g, '<ins>$1</ins>');
    html = html.replace(/\n/g, "<br>");
    return `<div class="${wrapClass}">${html}</div>`;
  }).join("");
}

// ===== 啟動 =====
init();
