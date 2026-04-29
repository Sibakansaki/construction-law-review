export default {
  "chapter": "CH4",
  "title": "工程地質圖",
  "sections": [
    {
      "id": "4.1",
      "title": "4.1–4.2 地質圖基本概念與位態三要素",
      "cards": [
        {
          "id": "ch4-4.1",
          "name": "4.1–4.2 工程地質圖與不連續面位態",
          "content": "<strong>工程地質圖：</strong>工程設計、施工之依據圖，應記載岩層及不連續面之分布、風化層厚度、地下水文狀況及基岩抗剪性質等。<br><br><strong>地質圖上的線條意義：</strong><ul><li><strong>實線曲線：</strong>表示地層的界線（即弱面），位置確定</li><li><strong>虛線曲線：</strong>表示該地層界線位置不確定，僅為近似位置</li></ul><strong>不連續面位態三要素：</strong><br><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>要素</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>定義</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>重要關係</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>走向（Strike）</strong></td><td style='border:1px solid #93c5fd;padding:5px'>傾斜地層的不連續面曝露於地表（露頭，Outcrop），與水平面相交成一直線，該直線所指之方向</td><td style='border:1px solid #93c5fd;padding:5px'>走向必與傾向垂直</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>傾向（Dip Direction）</strong></td><td style='border:1px solid #93c5fd;padding:5px'>不連續面傾斜的方向；在走向所在的水平面上，劃一條與走向垂直之線，該線所指方向</td><td style='border:1px solid #93c5fd;padding:5px'>走向與傾向必為垂直</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>傾角（Dip Angle）</strong></td><td style='border:1px solid #93c5fd;padding:5px'>傾向與不連續面之夾角，又稱俯角，且必為銳角。β = tan⁻¹(Δh/Δs)</td><td style='border:1px solid #93c5fd;padding:5px'>傾角必為銳角（0°~90°）</td></tr></table><br><strong>真傾角α vs 視傾角β的關係：</strong><ul><li><strong>真傾角α：</strong>觀察者的視線沿著坡面延伸正好垂直走向時，EB與水平線EC的夾角</li><li><strong>視傾角β：</strong>觀察者的視線與走向交角為θ（非垂直走向）時，FB與水平線FC的夾角</li><li><strong>換算公式：tanβ = tanα × sinθ</strong>（θ為視線與走向的夾角；真傾角α ≥ 視傾角β）</li></ul><strong>位態求傾角步驟：</strong>在地質圖上找同一地層界線上兩條不同高程（相差Δh）的走向（兩走向必平行），量測兩平行走向之水平距離Δs，則傾角β = tan⁻¹(Δh/Δs)。",
          "isExamFocus": false,
          "examYears": [
            "考古"
          ],
          "examHint": "位態三要素定義、走向與傾向必垂直、真傾角vs視傾角換算公式（tanβ = tanα × sinθ）",
          "quiz": [
            {
              "question": "不連續面位態三要素，下列何者正確？",
              "options": [
                "A. 走向（Strike）：不連續面與水平面相交成一直線所指的方向",
                "B. 傾向（Dip Direction）：不連續面傾斜的方向，必與走向垂直",
                "C. 傾角（Dip Angle）：傾向與不連續面之夾角，必為銳角",
                "D. 走向與傾向可以平行"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "走向（面與水平面交線方向）、傾向（傾斜方向，與走向垂直）、傾角（傾向與面之夾角，必為銳角）均正確。D錯誤：走向與傾向必為垂直（非平行）。"
            },
            {
              "question": "真傾角與視傾角的關係，下列何者正確？",
              "options": [
                "A. 真傾角α ≥ 視傾角β",
                "B. 換算公式為 tanβ = tanα × sinθ",
                "C. θ為視線與走向的夾角",
                "D. 當θ=90°時（視線垂直走向），視傾角等於真傾角"
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "真傾角≥視傾角；公式tanβ=tanα×sinθ；θ為視線與走向夾角；當θ=90°時sinθ=1，視傾角=真傾角。四項全對。"
            },
            {
              "question": "在地質圖上利用等高線求傾角的步驟，下列何者正確？",
              "options": [
                "A. 在地層界線上找兩個高程相同的點連線，即為走向",
                "B. 再找另一高程的走向，兩走向必平行",
                "C. 量測兩平行走向之水平距離Δs和高程差Δh，則β = tan⁻¹(Δh/Δs)",
                "D. 地層走向必與等高線平行"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "求走向：找同高程兩點連線；兩走向平行；β = tan⁻¹(Δh/Δs)均正確。D錯誤：地層走向未必與等高線平行，只有水平地層的走向才平行等高線。"
            },
            {
              "question": "地質圖上虛線曲線的意義，下列何者正確？",
              "options": [
                "A. 表示該地層界線位置不確定",
                "B. 虛線代表近似位置，非精確位置",
                "C. 實線代表地層界線位置確定（即弱面）",
                "D. 虛線代表已確認的地層界線"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "實線=確定的地層界線（弱面）；虛線=位置不確定，僅為近似位置。D錯誤：虛線正是「位置不確定」的標示（確認的才用實線）。"
            },
            {
              "question": "若視傾角β=30°，視線與走向夾角θ=90°，則真傾角α為何？",
              "options": [
                "A. α = 30°",
                "B. α > 30°",
                "C. α < 30°",
                "D. tanα = tanβ × sinθ = tan30° × sin90° = tan30°"
              ],
              "answer": [
                "A",
                "D"
              ],
              "explanation": "θ=90°時，sinθ=1，tanβ=tanα×1，所以α=β=30°。選項A和D均正確（D的計算過程正確但要注意D的等式結果就是α=30°）。B和C均錯誤。"
            },
            {
              "question": "關於不連續面位態，下列敘述何者有誤？",
              "options": [
                "A. 走向與傾向可以相互平行",
                "B. 傾角可以為鈍角（大於90°）",
                "C. 真傾角可能小於視傾角",
                "D. 走向與等高線永遠平行"
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "四項全錯：走向與傾向必垂直（非平行）；傾角必為銳角（0°~90°，不可為鈍角）；真傾角恆大於或等於視傾角（不可能小於）；只有水平地層走向才平行等高線（非永遠平行）。"
            }
          ],
          "neverTested": true
        },
        {
          "id": "ch4-4.2",
          "name": "4.2 位態表示方式與地質圖符號",
          "content": "<strong>位態兩種表示方式：</strong><br><br><strong>A. 用傾向/傾角表示：</strong><br>例如「傾向120°、傾角40°SE」或「120°/40°SE」：<ul><li>傾向120°：由北向右數120°（測量學方位角概念）</li><li>走向 = 傾向 ± 90°，故此時走向為30°或210°（即N30°E）</li><li>傾向120°代表傾斜方向在南與東之間（SE方向），故用SE標示</li><li>完整表示：傾向120°、傾角40°，完整寫法40°SE；改以走向/傾角表示：N30°E/40°SE</li></ul><strong>B. 用走向/傾角表示：</strong><br>例如「N30°E/40°SE」：<ul><li>走向N30°E（北偏東30°）</li><li>傾向垂直走向方向：120°（方位角）或300°</li><li>題目給「40°SE」，代表傾向在SE方向（南與東之間），傾角自水平面下傾40°</li><li>改以傾向/傾角表示：正確應為120°/40°SE</li></ul><strong>地質圖常見符號：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>符號</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>代表意義</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>層面位態（短線+數字）</td><td style='border:1px solid #93c5fd;padding:5px'>長線為走向，傾向符號與數字標示傾角</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>節理（短線+點）</td><td style='border:1px solid #93c5fd;padding:5px'>節理位態</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>劈理（斜短線）</td><td style='border:1px solid #93c5fd;padding:5px'>劈理位態</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>正斷層</td><td style='border:1px solid #93c5fd;padding:5px'>短線所在位置=上盤所在位置；上盤向下陷落</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>逆斷層</td><td style='border:1px solid #93c5fd;padding:5px'>鋸齒所在位置=逆斷層上盤所在位置；上盤向上推擠</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>向斜褶皺</td><td style='border:1px solid #93c5fd;padding:5px'>箭頭向中間相向（倒八字）</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>背斜褶皺</td><td style='border:1px solid #93c5fd;padding:5px'>箭頭向兩側相背（正八字）</td></tr></table>",
          "isExamFocus": false,
          "examYears": [
            "考古"
          ],
          "examHint": "傾向/傾角與走向/傾角兩種表示方式的換算、地質圖符號（正斷層短線=上盤位置、逆斷層鋸齒=上盤位置）",
          "quiz": [
            {
              "question": "地層位態「120°/40°SE」的解讀，下列何者正確？",
              "options": [
                "A. 傾向為120°（由北向右數120°）",
                "B. 走向為N30°E（30°或210°）",
                "C. 傾角為40°，傾向在南與東之間（SE方向）",
                "D. 走向為120°，傾向為30°"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "傾向120°（方位角），走向=120°-90°=30°即N30°E，傾角40°SE（向東南方向傾斜40°）。D錯誤：走向30°（N30°E），不是120°（120°是傾向）。"
            },
            {
              "question": "地層位態「N30°E/40°SE」的解讀，下列何者正確？",
              "options": [
                "A. 走向為北偏東30°",
                "B. 傾向垂直於走向，在SE方向（即120°方位角）",
                "C. 傾角為40°，向SE方向下傾",
                "D. 此表示法改以傾向/傾角表示應為120°/40°SE"
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "N30°E走向（北偏東30°），傾向垂直走向在SE方向（120°），傾角40°。改以傾向/傾角表示：120°/40°SE。四項全對。"
            },
            {
              "question": "地質圖中正斷層符號的意義，下列何者正確？",
              "options": [
                "A. 短線所在位置代表正斷層的上盤所在位置",
                "B. 上盤位於走向的左側，且上盤向下陷落",
                "C. 正斷層符號的短線代表上盤的方位",
                "D. 逆斷層的短線代表上盤向上推擠"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "正斷層符號：短線所在位置=上盤位置，上盤向下陷落。D錯誤：D描述的是逆斷層，但逆斷層用的是「鋸齒」符號（非短線），且鋸齒所在位置=上盤，上盤向上推擠。"
            },
            {
              "question": "地質圖中逆斷層符號的意義，下列何者正確？",
              "options": [
                "A. 鋸齒所在位置代表逆斷層的上盤所在位置",
                "B. 上盤向上推擠（受壓力）",
                "C. 鋸齒標示在走向的某一側，代表上盤在哪一側",
                "D. 逆斷層符號也使用短線表示上盤"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "逆斷層符號：鋸齒所在位置=上盤，上盤向上推擠。D錯誤：逆斷層用「鋸齒」符號（正斷層才用短線），兩者符號不同。"
            },
            {
              "question": "向斜褶皺與背斜褶皺的地質圖符號差異，下列何者正確？",
              "options": [
                "A. 向斜：箭頭向中間相向（倒八字形）",
                "B. 背斜：箭頭向兩側相背（正八字形）",
                "C. 長線均為軸面走向",
                "D. 向斜箭頭向外，背斜箭頭向內"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "向斜符號為箭頭相向（倒八字），背斜符號為箭頭相背（正八字），長線均為軸面走向。D錯誤：D的描述正好顛倒了（向斜是相向=倒八字，不是向外；背斜是相背=正八字，不是向內）。"
            },
            {
              "question": "關於地層位態的表示，下列敘述何者有誤？",
              "options": [
                "A. 「N30°E」代表走向為北偏西30°",
                "B. 傾向120°的走向為210°",
                "C. 走向表示方法中，「N30°E/40°SE」的傾向為30°",
                "D. 傾向與走向的夾角為45°"
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "四項全錯：N30°E代表北偏「東」30°（非偏西）；傾向120°的走向為30°或210°（B說「走向為210°」只說一半，但30°也是走向，嚴格說走向有兩個方向）；N30°E的傾向為120°（非30°）；走向與傾向夾角固定為90°（非45°）。"
            }
          ],
          "neverTested": true
        }
      ]
    },
    {
      "id": "4.3",
      "title": "4.3 V字法則（V' Rule）",
      "cards": [
        {
          "id": "ch4-4.3",
          "name": "4.3 V字法則與地層傾向判斷",
          "content": "<strong>V字法則（V' Rule）：</strong>當地層經過河谷或山谷時，露頭線（outcrop line）會在地質圖上呈現V字形。利用V字形所指方向與形狀作為研判地層傾向與坡度等之依據。<br><br><strong>六種情況總結表：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>情況</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>V字尖端</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>V字開口 vs 等高線</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>地層傾向</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(a)水平地層</td><td style='border:1px solid #93c5fd;padding:5px'>指向上游（倒V）</td><td style='border:1px solid #93c5fd;padding:5px'>V字平行等高線（開口相等）</td><td style='border:1px solid #93c5fd;padding:5px'>水平（無傾斜）</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(b)逆向坡（傾角較大）</td><td style='border:1px solid #93c5fd;padding:5px'>指向上游（倒V）</td><td style='border:1px solid #93c5fd;padding:5px'>V字開口＞等高線開口（較寬）</td><td style='border:1px solid #93c5fd;padding:5px'>向上游傾斜（逆向坡）</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(c)直立地層</td><td style='border:1px solid #93c5fd;padding:5px'>不出現V字形</td><td style='border:1px solid #93c5fd;padding:5px'>露頭軌跡呈直線狀，不受地形影響</td><td style='border:1px solid #93c5fd;padding:5px'>垂直（傾角90°）</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(d)順向陡坡（傾角＞河谷坡度）</td><td style='border:1px solid #93c5fd;padding:5px'>指向下游（正V）</td><td style='border:1px solid #93c5fd;padding:5px'>—</td><td style='border:1px solid #93c5fd;padding:5px'>與河谷一致，傾角大於河谷坡度</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(e)等坡度地層（傾角=河谷坡度）</td><td style='border:1px solid #93c5fd;padding:5px'>不出現V字形</td><td style='border:1px solid #93c5fd;padding:5px'>兩個露頭帶不相交（各自獨立帶狀）</td><td style='border:1px solid #93c5fd;padding:5px'>與河谷一致，傾角等於河谷坡度</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>(f)順向緩坡（傾角＜河谷坡度）</td><td style='border:1px solid #93c5fd;padding:5px'>指向上游（倒V）</td><td style='border:1px solid #93c5fd;padding:5px'>V字開口＜等高線開口（較窄）</td><td style='border:1px solid #93c5fd;padding:5px'>與河谷一致，傾角小於河谷坡度</td></tr></table><br><strong>V字法則判斷邏輯：</strong><ol><li>V字尖端指向<strong>下游</strong>（正V）→ 地層傾向與河谷一致，且傾角大於河谷坡度（順向陡坡）</li><li>V字尖端指向<strong>上游</strong>（倒V）→ 進一步比較V字開口與等高線開口的大小：<ul><li>開口相等 → 水平地層</li><li>開口較寬（V＞等高線）→ 逆向坡（向上游傾斜）</li><li>開口較窄（V＜等高線）→ 順向緩坡（向下游傾斜，傾角小於河谷坡度）</li></ul></li><li>不出現V字形（直線狀）→ 直立地層（傾角90°）或等坡度地層</li></ol>",
          "isExamFocus": false,
          "examYears": [
            "考古"
          ],
          "examHint": "V字法則六種情況：V字尖端方向（指上游/下游）與V字開口大小的判斷邏輯",
          "quiz": [
            {
              "question": "V字法則中，V字尖端指向下游（正V字形）代表什麼？",
              "options": [
                "A. 地層傾向與河谷流向一致",
                "B. 地層傾角大於河谷坡度（順向陡坡）",
                "C. 地層傾向為順向坡方向",
                "D. 地層傾角小於河谷坡度（順向緩坡）"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "V字尖端指向下游（正V）：地層傾向與河谷一致（順向坡），且傾角大於河谷坡度（順向陡坡）。D錯誤：順向緩坡時V字尖端指向上游（倒V，且開口較等高線窄），非指向下游。"
            },
            {
              "question": "V字法則中，V字尖端指向上游且V字開口等於等高線開口，代表什麼？",
              "options": [
                "A. 水平地層",
                "B. V字軌跡幾乎平行等高線延伸",
                "C. 地層無傾斜",
                "D. 逆向坡（地層向上游傾斜）"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "V字尖端指上游且開口等於等高線→水平地層（無傾斜），露頭線幾乎平行等高線延伸。D錯誤：逆向坡時V字開口大於等高線開口（非相等）。"
            },
            {
              "question": "V字法則中，V字尖端指向上游且V字開口大於等高線開口，代表什麼？",
              "options": [
                "A. 逆向坡（地層向上游傾斜）",
                "B. 傾角越大，V字開口越大",
                "C. 地層傾向與河谷流向相反",
                "D. 順向緩坡"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "V字開口大於等高線→逆向坡（地層向上游傾斜），傾角越大開口越大。D錯誤：順向緩坡時V字開口小於等高線（非大於）。"
            },
            {
              "question": "直立地層（傾角90°）在地質圖上的特徵，下列何者正確？",
              "options": [
                "A. 露頭軌跡呈直線狀帶狀分布",
                "B. 不受地形影響",
                "C. 不會出現V字形",
                "D. V字尖端指向下游"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "直立地層（90°）：露頭呈直線狀、不受地形影響、不出現V字形。D錯誤：直立地層根本不出現V字形（非指向下游）。"
            },
            {
              "question": "V字法則中，等坡度地層的特徵，下列何者正確？",
              "options": [
                "A. 地層傾角與河谷坡度相同",
                "B. 地層的露頭軌跡不會跨過河谷",
                "C. 形成兩個各自獨立的帶狀露頭",
                "D. V字尖端指向下游（正V字形）"
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "等坡度地層：傾角=河谷坡度，露頭不跨過河谷（各自獨立），形成兩個帶狀，不出現V字形。D錯誤：等坡度地層不出現V字形（非正V字）。"
            },
            {
              "question": "關於V字法則，下列敘述何者有誤？",
              "options": [
                "A. 水平地層的V字尖端指向下游",
                "B. 逆向坡的V字開口小於等高線開口",
                "C. 直立地層的V字尖端指向上游",
                "D. 順向緩坡的V字尖端指向下游"
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "四項全錯：水平地層V字尖端指上游（非下游）；逆向坡V字開口大於等高線（非小於）；直立地層不出現V字形（非尖端指上游）；順向緩坡V字尖端指上游且開口小於等高線（非指下游）。"
            }
          ],
          "neverTested": true
        }
      ]
    }
  ]
};
