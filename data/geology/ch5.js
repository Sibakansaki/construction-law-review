export default {
  "chapter": "CH5",
  "title": "岩體分類",
  "sections": [
    {
      "id": "5.1",
      "title": "5.1 ISRM建議弱面描述十大項目",
      "cards": [
        {
          "id": "ch5-5.1",
          "name": "5.1 ISRM弱面描述十大項目與RQD",
          "content": "<strong>ISRM（國際岩石力學學會）建議描述弱面的十大項目：</strong><ol><li><strong>位置與方位（Orientation）：</strong>走向、傾向、傾角（位態三要素）</li><li><strong>間距（Spacing）：</strong>相鄰兩弱面的垂直距離；間距愈小代表岩塊愈小愈破碎。節理密度（節理頻率）J<sub>d</sub> = 1/s（條/m）</li><li><strong>延續性（Persistence）：</strong>弱面延伸的範圍及長度；延續性愈好代表弱面縱向延伸愈長，橫向節理較少</li><li><strong>粗糙度（Roughness）：</strong>弱面原有的粗糙度及波狀起伏程度。Patton(1966)：τf = σtan(φr + i)，i愈大剪力強度愈大（φr：殘餘摩擦角；i：弱面粗糙角）</li><li><strong>內壁材料強度（Wall Strength）：</strong>弱面兩側岩石的抗壓強度，使用施密特垂（回彈儀）量測</li><li><strong>張開度（Aperture）：</strong>弱面兩壁間的垂直距離，一般張開度小於1mm。受張力者多為開裂；受剪力者為閉合</li><li><strong>填充物（Fillings）：</strong>弱面內填充粉末、風化產物或外來物質。黏土質→軟夾心（Soft Filling）→降低抗剪強度；石英或方解石→提高摩擦阻抗</li><li><strong>滲水（Seepage）狀況：</strong>弱面是地下水在岩體內滲流的重要通道，加速風化並降低抗剪強度</li><li><strong>組數（Number of Sets）：</strong>同一位態弱面成群出現稱為一組（Set）；組數愈多代表岩體愈破碎、強度愈低、滲透性愈高</li><li><strong>岩塊尺度（Block Size）：</strong>ISRM(1981)建議以岩塊規模指數I<sub>B</sub>、單位體積節理數J<sub>v</sub>及RQD表示</li></ol><strong>RQD（Rock Quality Designation，岩石品質指標）：</strong>由Deere(1967)提出，指每次鑽探所取得岩心中，<strong>完整岩心長度超過10公分之各段合計長度佔鑽探岩心總長度之百分比</strong>。<br><br><strong>與RQD常一起出現的名詞：</strong><ul><li><strong>破裂指數（Fracture Index, FI）：</strong>鑽探岩心每公尺的裂面數；存在破碎帶時應分開計算</li><li><strong>岩心回收率（Core Recovery）：</strong>鑽探取得岩心的總長度與鑽進長度之百分比</li></ul>",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "ISRM十大項目名稱、RQD定義（完整岩心>10cm佔總長百分比）、Patton粗糙度剪力強度公式",
          "quiz": [
            {
              "question": "ISRM建議描述弱面的十大項目，下列何者正確？",
              "options": ["A. 位置與方位（走向、傾向、傾角）", "B. 間距（相鄰兩弱面的垂直距離）", "C. 粗糙度與填充物", "D. 岩石的抗壓強度（完整岩石，非弱面）"],
              "answer": ["A", "B", "C"],
              "explanation": "ISRM十大項目包含：位置方位、間距、延續性、粗糙度、內壁材料強度、張開度、填充物、滲水、組數、岩塊尺度。D錯誤：第5項是「內壁材料強度」（弱面兩側岩石的強度），不是泛指完整岩石強度。"
            },
            {
              "question": "RQD（岩石品質指標）的定義，下列何者正確？",
              "options": ["A. 由Deere(1967)提出", "B. 指完整岩心長度超過10公分之各段合計長度佔鑽探岩心總長度之百分比", "C. RQD值愈高代表岩體品質愈好", "D. RQD指每公尺的裂面數"],
              "answer": ["A", "B", "C"],
              "explanation": "RQD由Deere(1967)提出，為完整岩心>10cm各段之合計長度比例，值愈高岩體愈完整。D錯誤：D描述的是破裂指數（Fracture Index, FI），不是RQD。"
            },
            {
              "question": "弱面粗糙度（Roughness）的工程意義，Patton(1966)公式τf = σtan(φr + i)，下列何者正確？",
              "options": ["A. i為弱面粗糙角，i愈大剪力強度愈大", "B. φr為弱面殘餘摩擦角", "C. 此公式適用於弱面不含凝聚性土壤的情況", "D. i愈大代表弱面愈平滑"],
              "answer": ["A", "B", "C"],
              "explanation": "Patton公式：τf=σtan(φr+i)，i為粗糙角（越大強度越大），φr為殘餘摩擦角，適用於無凝聚性土壤弱面。D錯誤：i愈大代表弱面愈粗糙（非平滑）。"
            },
            {
              "question": "弱面填充物（Fillings）對工程性質的影響，下列何者正確？",
              "options": ["A. 黏土質填充（軟夾心，Soft Filling）會降低抗剪強度", "B. 石英或方解石填充可提高摩擦阻抗，提高抗剪強度", "C. 高溫高壓使弱面產生癒合，使抗剪強度更高", "D. 填充物對抗剪強度沒有影響"],
              "answer": ["A", "B", "C"],
              "explanation": "黏土質填充→降低抗剪；石英方解石填充→提高摩擦；高溫高壓癒合→強度更高。D錯誤：填充物對抗剪強度有顯著影響（黏土質降低、礦物填充可提高）。"
            },
            {
              "question": "弱面間距（Spacing）的工程意義，下列何者正確？",
              "options": ["A. 指相鄰兩弱面的垂直距離", "B. 間距愈小代表完整岩塊愈小、岩體愈破碎", "C. 節理密度Jd = 1/s（條/m）", "D. 間距愈大代表岩體強度愈低"],
              "answer": ["A", "B", "C"],
              "explanation": "間距=相鄰弱面垂直距離；間距愈小→岩塊愈小破碎；Jd=1/s。D錯誤：間距愈大代表岩體破碎程度較低、強度較高（非愈低）。"
            },
            {
              "question": "關於ISRM弱面描述項目，下列敘述何者有誤？",
              "options": ["A. 延續性愈好代表弱面縱向延伸愈短", "B. 張開度小於1mm的弱面受張力作用而閉合", "C. 弱面組數愈少代表岩體愈破碎", "D. RQD為鑽探岩心每公尺的裂面數"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "四項全錯：延續性愈好代表弱面縱向延伸愈「長」（非短）；張開度小於1mm的弱面受張力→開裂（非閉合，閉合是受剪力）；弱面組數愈「多」代表岩體愈破碎（非少）；D描述的是破裂指數FI，RQD是完整岩心>10cm的百分比。"
            }
          ]
        }
      ]
    },
    {
      "id": "5.2",
      "title": "5.2 三種岩體評分分類法",
      "cards": [
        {
          "id": "ch5-5.2.1",
          "name": "5.2.1 Q法（Rock Mass Quality Index）",
          "content": "<strong>Q法（Q System / NGI分類法）：</strong>由Barton、Lien、Lunde(1974)於挪威NGI（Norwegian Geotechnical Institute）發展，為隧道開挖支撐設計而生。Q值範圍：<strong>0.001~1000</strong>。<br><br><strong>Q值公式：</strong><br>Q = (RQD/J<sub>n</sub>) × (J<sub>r</sub>/J<sub>a</sub>) × (J<sub>w</sub>/SRF)<br><ul><li><strong>J<sub>n</sub>：</strong>節理（不連續面/弱面）組數的評分</li><li><strong>J<sub>r</sub>：</strong>最不利的節理（弱面）組之粗糙度評分</li><li><strong>J<sub>a</sub>：</strong>最弱的節理（弱面）組之填充物蝕變程度評分</li><li><strong>J<sub>w</sub>：</strong>不連續面滲水的折減因子（或稱評分）</li><li><strong>SRF：</strong>岩體應力狀況的折減因子（或稱評分）</li></ul><strong>三個比值的意義：</strong><ul><li><strong>RQD/J<sub>n</sub>：</strong>代表岩體整體結構狀況（衡量岩塊的尺寸大小）</li><li><strong>J<sub>r</sub>/J<sub>a</sub>：</strong>代表塊體之間的最小剪力強度</li><li><strong>J<sub>w</sub>/SRF：</strong>代表岩石的作用應力</li></ul><strong>Q值與岩體分類：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>Q值</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>&lt;0.01</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>0.01~0.1</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>0.1~1.0</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>1~4</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>4~10</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>10~40</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>40~100</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>&gt;400</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>岩體分類</td><td style='border:1px solid #93c5fd;padding:5px'>異常差</td><td style='border:1px solid #93c5fd;padding:5px'>極差</td><td style='border:1px solid #93c5fd;padding:5px'>很差</td><td style='border:1px solid #93c5fd;padding:5px'>差</td><td style='border:1px solid #93c5fd;padding:5px'>一般</td><td style='border:1px solid #93c5fd;padding:5px'>好</td><td style='border:1px solid #93c5fd;padding:5px'>很好</td><td style='border:1px solid #93c5fd;padding:5px'>異常好</td></tr></table><br><strong>Q法的應用：</strong>決定臨時性或永久性隧道支撐種類及數量、岩體分類及強度評估、岩體變形量（變形模數）推估、支撐壓力推估、無支撐之最大跨距推估、推估受擠壓變形之隧道臨界深度。特別適用於<strong>挪威隧道工法（NTM）</strong>與<strong>新奧工法（NATM）</strong>。",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "Q法公式六個參數意義、三個比值的代表意義、Q值範圍（0.001~1000）與岩體分類",
          "quiz": [
            {
              "question": "Q法公式 Q = (RQD/Jn) × (Jr/Ja) × (Jw/SRF)，各參數的意義，下列何者正確？",
              "options": ["A. Jn為節理組數的評分", "B. Jr為最不利的節理組之粗糙度評分", "C. Ja為最弱的節理組之填充物蝕變程度評分", "D. SRF為不連續面滲水的折減因子"],
              "answer": ["A", "B", "C"],
              "explanation": "Jn（節理組數）、Jr（粗糙度）、Ja（填充物蝕變）均正確。D錯誤：SRF是「岩體應力狀況的折減因子」（不連續面滲水的折減因子是Jw，非SRF）。"
            },
            {
              "question": "Q法中三個比值所代表的工程意義，下列何者正確？",
              "options": ["A. RQD/Jn：代表岩體整體結構狀況（衡量岩塊尺寸大小）", "B. Jr/Ja：代表塊體之間的最小剪力強度", "C. Jw/SRF：代表岩石的作用應力", "D. RQD/Jn：代表節理的粗糙度"],
              "answer": ["A", "B", "C"],
              "explanation": "RQD/Jn（岩體結構/岩塊尺寸）、Jr/Ja（最小剪力強度）、Jw/SRF（作用應力）均正確。D錯誤：粗糙度是Jr/Ja（非RQD/Jn）。"
            },
            {
              "question": "Q法的適用範圍與特性，下列何者正確？",
              "options": ["A. Q值範圍為0.001~1000", "B. 由Barton、Lien、Lunde(1974)於挪威NGI發展", "C. 特別適用於挪威隧道工法（NTM）與新奧工法（NATM）", "D. Q值愈小代表岩體品質愈好"],
              "answer": ["A", "B", "C"],
              "explanation": "Q法：值域0.001~1000、1974年NGI發展、適用NTM/NATM。D錯誤：Q值愈小代表岩體品質愈差（非愈好）；Q>400為異常好，Q<0.01為異常差。"
            },
            {
              "question": "Q法的工程應用，下列何者正確？",
              "options": ["A. 決定臨時性或永久性隧道支撐種類及數量", "B. 推估岩體變形量（變形模數）", "C. 推估無支撐之最大跨距", "D. 適用於岩栓及噴漿支撐的選擇（Q法最主要用途）"],
              "answer": ["A", "B", "C"],
              "explanation": "Q法應用：支撐種類數量、強度評估、變形量推估、支撐壓力、無支撐跨距、擠壓臨界深度。D錯誤：適用於岩栓及噴漿支撐選擇的是RSR法，Q法較廣泛用於NTM/NATM隧道分析（不限於鋼支保，RSR才不適用岩栓噴漿）。"
            },
            {
              "question": "Q值與岩體品質分類，下列何者正確？",
              "options": ["A. Q值 < 0.01 → 異常差", "B. Q值 4~10 → 一般", "C. Q值 > 400 → 異常好", "D. Q值 1~4 → 好"],
              "answer": ["A", "B", "C"],
              "explanation": "Q<0.01→異常差；4~10→一般；>400→異常好，均正確。D錯誤：Q值1~4對應「差」（非好；好是10~40）。"
            },
            {
              "question": "關於Q法，下列敘述何者有誤？",
              "options": ["A. Q法由南非CSIR機構在1976年提出", "B. Q值愈大代表岩體品質愈差", "C. Jr/Ja代表岩體整體結構狀況", "D. SRF代表不連續面的滲水折減因子"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "四項全錯：Q法由挪威NGI的Barton等人在1974年提出（南非CSIR是RMR法）；Q值愈大代表岩體品質愈好（非愈差）；Jr/Ja代表塊體間的最小剪力強度（岩體整體結構是RQD/Jn）；SRF是岩體應力狀況的折減因子（滲水折減是Jw）。"
            }
          ]
        },
        {
          "id": "ch5-5.2.2",
          "name": "5.2.2 RMR法（Rock Mass Rating System）",
          "content": "<strong>RMR法：</strong>Bieniawski(1976)於南非CSIR建立，滿分100分，歷經4次修正（最近1989年修正）。<br><br><strong>RMR法六項考量因子：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>考量因子</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>類別</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>評分範圍</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>小計</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>岩石單壓強度</td><td style='border:1px solid #93c5fd;padding:5px'>地質材料</td><td style='border:1px solid #93c5fd;padding:5px'>0~15分</td><td style='border:1px solid #93c5fd;padding:5px'>15分</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>岩心品質指標（RQD）</td><td style='border:1px solid #93c5fd;padding:5px'>地質構造</td><td style='border:1px solid #93c5fd;padding:5px'>3~20分</td><td style='border:1px solid #93c5fd;padding:5px' rowspan='3'>70分</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>不連續面的間距</td><td style='border:1px solid #93c5fd;padding:5px'>地質構造</td><td style='border:1px solid #93c5fd;padding:5px'>5~20分</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>不連續面的狀況</td><td style='border:1px solid #93c5fd;padding:5px'>地質構造</td><td style='border:1px solid #93c5fd;padding:5px'>0~30分</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>地下水狀況</td><td style='border:1px solid #93c5fd;padding:5px'>環境因素</td><td style='border:1px solid #93c5fd;padding:5px'>0~15分</td><td style='border:1px solid #93c5fd;padding:5px'>15分</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>不連續面的位態</td><td style='border:1px solid #93c5fd;padding:5px'>工程因素</td><td style='border:1px solid #93c5fd;padding:5px'>-12~0分</td><td style='border:1px solid #93c5fd;padding:5px'>（扣分項）</td></tr></table><br><strong>RMR法岩體分類等級（Bieniawski, 2004）：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:4px;color:#1e40af'>評分</th><th style='border:1px solid #93c5fd;padding:4px;color:#1e40af'>等級</th><th style='border:1px solid #93c5fd;padding:4px;color:#1e40af'>岩體優劣</th><th style='border:1px solid #93c5fd;padding:4px;color:#1e40af'>免支撐跨距</th><th style='border:1px solid #93c5fd;padding:4px;color:#1e40af'>免支撐時間</th></tr><tr><td style='border:1px solid #93c5fd;padding:4px'>81~100</td><td style='border:1px solid #93c5fd;padding:4px'>I</td><td style='border:1px solid #93c5fd;padding:4px'>極優</td><td style='border:1px solid #93c5fd;padding:4px'>15m</td><td style='border:1px solid #93c5fd;padding:4px'>20年</td></tr><tr><td style='border:1px solid #93c5fd;padding:4px'>61~80</td><td style='border:1px solid #93c5fd;padding:4px'>II</td><td style='border:1px solid #93c5fd;padding:4px'>優良</td><td style='border:1px solid #93c5fd;padding:4px'>10m</td><td style='border:1px solid #93c5fd;padding:4px'>1年</td></tr><tr><td style='border:1px solid #93c5fd;padding:4px'>41~60</td><td style='border:1px solid #93c5fd;padding:4px'>III</td><td style='border:1px solid #93c5fd;padding:4px'>尚可</td><td style='border:1px solid #93c5fd;padding:4px'>5m</td><td style='border:1px solid #93c5fd;padding:4px'>1週</td></tr><tr><td style='border:1px solid #93c5fd;padding:4px'>21~40</td><td style='border:1px solid #93c5fd;padding:4px'>IV</td><td style='border:1px solid #93c5fd;padding:4px'>劣</td><td style='border:1px solid #93c5fd;padding:4px'>2.5m</td><td style='border:1px solid #93c5fd;padding:4px'>10小時</td></tr><tr><td style='border:1px solid #93c5fd;padding:4px'>0~20</td><td style='border:1px solid #93c5fd;padding:4px'>V</td><td style='border:1px solid #93c5fd;padding:4px'>極劣</td><td style='border:1px solid #93c5fd;padding:4px'>1m</td><td style='border:1px solid #93c5fd;padding:4px'>30分鐘</td></tr></table><br><strong>RMR重要公式：</strong><ul><li>岩體變形模數（RMR&gt;50）：E<sub>m</sub> = 2×RMR − 100（GPa）</li><li>岩體變形模數（RMR&lt;50）：E<sub>m</sub> = 10<sup>(RMR-10)/40</sup>（GPa）</li><li>隧道支撐載重：P(kN) = [(100-RMR)/100] × γ × B（隧道寬度m）</li><li>Q與RMR換算：RMR = 9 log<sub>e</sub>Q + 44</li></ul>",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "RMR六項因子及各項最高分、五個等級對應的評分/岩體優劣/免支撐跨距與時間、變形模數公式",
          "quiz": [
            {
              "question": "RMR法六項考量因子，下列何者正確？",
              "options": ["A. 岩石單壓強度（0~15分）", "B. 岩心品質指標RQD（3~20分）", "C. 不連續面的狀況（0~30分）為地質構造類別中最高分的項目", "D. 不連續面的位態為加分項目（+12~0分）"],
              "answer": ["A", "B", "C"],
              "explanation": "岩石單壓強度0~15分、RQD 3~20分、不連續面狀況0~30分（地質構造最高分）均正確。D錯誤：不連續面的位態是「扣分項目」（-12~0分），不是加分。"
            },
            {
              "question": "RMR法岩體分類等級，下列何者正確？",
              "options": ["A. 評分81~100 → 等級I（極優），免支撐跨距15m，免支撐時間20年", "B. 評分41~60 → 等級III（尚可），免支撐跨距5m，免支撐時間1週", "C. 評分0~20 → 等級V（極劣），免支撐跨距1m，免支撐時間30分鐘", "D. 評分61~80 → 等級II（優良），免支撐時間10年"],
              "answer": ["A", "B", "C"],
              "explanation": "I級（81~100，極優，15m，20年）、III級（41~60，尚可，5m，1週）、V級（0~20，極劣，1m，30分鐘）均正確。D錯誤：II級（61~80，優良）的免支撐時間是1年（非10年）。"
            },
            {
              "question": "RMR法的重要公式，下列何者正確？",
              "options": ["A. 當RMR>50時，岩體變形模數Em = 2×RMR − 100（GPa）", "B. 當RMR<50時，Em = 10^(RMR-10)/40（GPa）", "C. Q與RMR換算：RMR = 9 loge Q + 44", "D. 支撐載重P = [(100+RMR)/100] × γ × B"],
              "answer": ["A", "B", "C"],
              "explanation": "RMR>50→Em=2×RMR−100；RMR<50→Em=10^(RMR-10)/40；Q轉RMR=9logeQ+44，均正確。D錯誤：支撐載重公式分子為(100-RMR)（非100+RMR，RMR愈大支撐載重愈小）。"
            },
            {
              "question": "RMR法的考量因子分類，下列何者正確？",
              "options": ["A. 地質材料類別：岩石單壓強度（最高15分）", "B. 地質構造類別：RQD、不連續面的間距、不連續面的狀況（合計最高70分）", "C. 環境因素：地下水狀況（最高15分）", "D. 工程因素：不連續面的位態（最高30分）"],
              "answer": ["A", "B", "C"],
              "explanation": "地質材料（岩石強度，15分）、地質構造（RQD+間距+狀況，70分）、環境因素（地下水，15分）均正確。D錯誤：不連續面的位態是工程因素，評分為-12~0分（扣分），最高0分（不扣分），非加30分。"
            },
            {
              "question": "RMR法的歷史與開發背景，下列何者正確？",
              "options": ["A. 由Bieniawski(1976)在南非CSIR建立", "B. 滿分100分", "C. 自1976年後歷經4次修正，最近一次在1989年", "D. RMR法是由挪威NGI機構開發的"],
              "answer": ["A", "B", "C"],
              "explanation": "RMR由Bieniawski 1976年在南非CSIR建立，滿分100分，共歷經4次修正（最近1989年）。D錯誤：挪威NGI開發的是Q法（非RMR法）。"
            },
            {
              "question": "關於RMR法，下列敘述何者有誤？",
              "options": ["A. RMR法六項因子中，不連續面的狀況最高分為20分", "B. RMR評分為50時，Em = 2×50−100 = 0 GPa（合理）", "C. RMR=0~20（等級V）的免支撐跨距為5m", "D. RMR法滿分為150分"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "四項全錯：不連續面狀況最高30分（非20分，間距才是最高20分）；RMR=50時Em=0（邊界值，此時應改用RMR<50的公式）；等級V（0~20）免支撐跨距為1m（非5m，5m是等級III）；RMR法滿分100分（非150分）。"
            }
          ]
        },
        {
          "id": "ch5-5.2.3",
          "name": "5.2.3 RSR法與三種分類法比較",
          "content": "<strong>RSR法（Rock Structure Rating）：</strong>由美國Wickham(1972)提出，滿分100分。主要應用在<strong>隧道工程鋼支保支撐方式的選擇</strong>，但<strong>不適用於岩栓及噴漿支撐的選擇</strong>。<br><br><strong>RSR法四個考量因子：</strong><ol><li>地質參數：岩石種類、軟硬度、斷層、剪裂帶、褶皺等</li><li>不連續面參數：不連續面之間距、位態、開口程度及風化程度</li><li>地下水參數：滲流量</li><li>施工參數：隧道挖掘前進方向</li></ol><strong>RSR法評分方式（簡化）：</strong>RSR = A + B + C = 30 + 45 + 25 = 100<br><ul><li>A：與岩石種類及地質構造有關（最高30分）</li><li>B：弱面方位（最高45分）</li><li>C：(A+B)弱面品質（最高25分）</li></ul><strong>岩體分類定性vs定量比較：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>分類</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>類型</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>代表方法</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>定性分類</td><td style='border:1px solid #93c5fd;padding:5px'>Terzaghi岩盤荷重分類法、奧地利岩體分類法</td><td style='border:1px solid #93c5fd;padding:5px'>描述為主</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'>定量分類</td><td style='border:1px solid #93c5fd;padding:5px'>RMR法、RSR法、Q法</td><td style='border:1px solid #93c5fd;padding:5px'>評分為主</td></tr></table><br><strong>台灣使用Q法與RMR法的限制：</strong><ul><li>台灣地質年代較年輕，位處板塊衝撞帶，岩石種類、強度及地質構造特性均異於這些分類系統起源地區</li><li>台灣西部麓山帶卵礫石層及砂泥岩等，強度偏低、遇水容易軟化，Q法與RMR明顯無法一體適用</li><li>目前台灣針對這些地區，較常採用定性岩體分類系統；岩盤隧道則普遍採用Q法與RMR</li><li>RSR法因不適用於岩栓及噴漿支撐，現今工程較少採用；目前主要常用岩體分類法為Q法與RMR法</li></ul>",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "RSR法提出者/用途/限制（不適用岩栓噴漿）、三種分類法比較、定性vs定量分類",
          "quiz": [
            {
              "question": "RSR法（Rock Structure Rating）的特性，下列何者正確？",
              "options": ["A. 由美國Wickham(1972)提出", "B. 滿分100分，評分方式RSR = A + B + C", "C. 主要用於隧道工程鋼支保支撐方式的選擇", "D. 適用於岩栓及噴漿支撐的選擇"],
              "answer": ["A", "B", "C"],
              "explanation": "RSR由Wickham 1972年提出，滿分100分（A+B+C），主要用於鋼支保選擇。D錯誤：RSR「不適用」於岩栓及噴漿支撐的選擇（這是RSR法最主要的使用限制）。"
            },
            {
              "question": "RSR法的評分組成 A+B+C，下列何者正確？",
              "options": ["A. A：與岩石種類及地質構造有關（最高30分）", "B. B：弱面方位（最高45分）", "C. C：(A+B)弱面品質（最高25分）", "D. B為地下水參數（最高45分）"],
              "answer": ["A", "B", "C"],
              "explanation": "RSR=A（岩石種類/地質構造，30分）+B（弱面方位，45分）+C（弱面品質，25分）。D錯誤：B是弱面方位（非地下水參數；地下水是RSR的四個考量因子之一，但評分組成中C是弱面品質，不是地下水）。"
            },
            {
              "question": "定性分類vs定量分類的岩體分類法，下列何者正確？",
              "options": ["A. 定性分類：Terzaghi岩盤荷重分類法、奧地利岩體分類法", "B. 定量分類：RMR法、RSR法、Q法", "C. 目前台灣岩盤隧道普遍採用定量分類的Q法與RMR法", "D. Q法屬於定性分類"],
              "answer": ["A", "B", "C"],
              "explanation": "定性：Terzaghi/奧地利分類法；定量：RMR/RSR/Q法；台灣岩盤隧道普遍用Q法與RMR法（定量）。D錯誤：Q法屬於定量分類（非定性）。"
            },
            {
              "question": "台灣使用Q法與RMR法的限制，下列何者正確？",
              "options": ["A. 台灣地質年代較年輕，位處板塊衝撞帶，地質條件異於分類系統起源地區", "B. 台灣西部麓山帶卵礫石層及砂泥岩強度偏低、遇水軟化，Q法與RMR難以一體適用", "C. 台灣針對特殊地盤（卵礫石層等），較常採用定性岩體分類系統", "D. Q法與RMR法在台灣完全適用，無任何限制"],
              "answer": ["A", "B", "C"],
              "explanation": "台灣地質條件的限制：年代輕、板塊衝撞帶、西部麓山帶材料特殊（遇水軟化），Q/RMR難一體適用，特殊地盤改用定性分類。D錯誤：Q法與RMR法在台灣「有限制」，並非完全適用。"
            },
            {
              "question": "三種常用岩體評分分類法的比較，下列何者正確？",
              "options": ["A. Q法由挪威NGI在1974年開發，特別適用於NTM/NATM", "B. RMR法由南非CSIR的Bieniawski在1976年建立，滿分100分", "C. RSR法由美國Wickham在1972年提出，不適用岩栓噴漿", "D. 三種方法中，目前最廣泛使用的是RSR法"],
              "answer": ["A", "B", "C"],
              "explanation": "Q法（1974，挪威NGI，NTM/NATM）、RMR法（1976，南非CSIR，100分）、RSR法（1972，美國Wickham，不適用岩栓噴漿）均正確。D錯誤：RSR法因不適用岩栓噴漿已較少採用，目前主要常用Q法與RMR法。"
            },
            {
              "question": "關於RSR法，下列敘述何者有誤？",
              "options": ["A. RSR法適用於岩栓及噴漿支撐的選擇", "B. RSR法滿分為150分", "C. A項（地質構造）在RSR評分中最高分為45分", "D. RSR法由英國學者在1980年提出"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "四項全錯：RSR法「不適用」岩栓噴漿；RSR滿分100分（非150）；A項最高30分（B弱面方位才是最高45分）；RSR由美國Wickham在1972年提出（非英國1980年）。"
            }
          ]
        }
      ]
    },
    {
      "id": "5.4",
      "title": "5.4 GSI系統與PCCR台灣岩體分類",
      "cards": [
        {
          "id": "ch5-5.4",
          "name": "5.4 GSI系統（Geological Strength Index）",
          "content": "<strong>GSI（Geological Strength Index）系統：</strong>由Hoek & Brown(1980)持續發展，是目前唯一同時可描述完整岩石及具裂隙岩體強度能力的破壞準則（Hoek-Brown破壞準則）。<br><br><strong>Hoek-Brown廣義破壞準則（2002，General Hoek-Brown Criterion）：</strong><br>σ'₁ = σ'₃ + σci(mb σ'₃/σci + s)<sup>a</sup><br><ul><li>σci：完整岩石的單壓強度</li><li>m<sub>b</sub>：受擾動岩體的岩性參數（0.007~25，破碎~完整）</li><li>s：岩性參數（0~1，破碎~完整）</li><li>a：岩體參數</li><li><strong>D：岩體擾動因子（0~1，D=0無擾動，D=1嚴重擾動）</strong></li><li>m<sub>b</sub> = m<sub>i</sub> × exp[(GSI-100)/(28-14D)]</li><li>s = exp[(GSI-100)/(9-3D)]</li><li>a = 1/2 + (1/6)(e<sup>-GSI/15</sup> - e<sup>-20/3</sup>)</li></ul><strong>GSI評分表的兩個軸：</strong><ul><li><strong>橫軸：</strong>不連續面之表面狀況（風化程度、粗糙度與填充物），由Very Good → Very Poor</li><li><strong>縱軸：</strong>岩體構造（Structure）之完整性或破碎程度，由Intact/Massive → Laminated/Sheared</li></ul><strong>GSI值範圍0~100</strong>，為一界定範圍（如GSI = 33~37）而非單一精確值。<br><br><strong>GSI的主要特點：</strong><ul><li>經由現地觀察判別岩體構造及弱面情況即可進行分類</li><li>GSI = 100時，a = 1/2</li><li>因具有規模效應，造成難以評估其力學參數</li><li>RMR與GSI換算：RMR = 9 log<sub>e</sub>Q + 44（RMR可間接轉換為GSI）</li></ul>",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "Hoek-Brown破壞準則公式、GSI擾動因子D（0~1意義）、GSI評分表兩軸意義",
          "quiz": [
            {
              "question": "Hoek-Brown廣義破壞準則的參數，下列何者正確？",
              "options": ["A. σci為完整岩石的單壓強度", "B. 擾動因子D介於0~1，D=0為無擾動，D=1為嚴重擾動", "C. GSI=100時，a = 1/2", "D. mb值愈大代表岩體愈破碎"],
              "answer": ["A", "B", "C"],
              "explanation": "σci（完整岩石單壓強度）、D（0=無擾動，1=嚴重擾動）、GSI=100時a=1/2，均正確。D錯誤：mb值愈大代表岩體愈完整（非愈破碎）；m值範圍0.007~25，破碎~完整。"
            },
            {
              "question": "GSI評分表的兩個軸的意義，下列何者正確？",
              "options": ["A. 橫軸：不連續面之表面狀況（風化程度、粗糙度與填充物）", "B. 縱軸：岩體構造之完整性或破碎程度", "C. 橫軸由Very Good到Very Poor代表表面品質遞減", "D. 縱軸由Intact到Laminated/Sheared代表完整性增加"],
              "answer": ["A", "B", "C"],
              "explanation": "橫軸（表面狀況：Very Good→Very Poor，品質遞減）、縱軸（構造完整性：Intact→Laminated/Sheared，完整性遞減）均正確。D錯誤：縱軸由Intact→Laminated/Sheared代表完整性「遞減」（非增加）。"
            },
            {
              "question": "GSI系統的特性，下列何者正確？",
              "options": ["A. 由Hoek & Brown(1980)持續發展", "B. GSI值範圍0~100，為一界定範圍而非單一精確值", "C. 是目前唯一同時可描述完整岩石及具裂隙岩體強度的破壞準則", "D. GSI法無需現地觀察，完全依靠室內試驗"],
              "answer": ["A", "B", "C"],
              "explanation": "GSI由Hoek&Brown 1980年發展、範圍0~100（非精確單一值）、是唯一可同時描述完整與裂隙岩體的準則。D錯誤：GSI強調「經由現地觀察判別岩體構造及弱面情況」即可分類（現地觀察是GSI的重要優點）。"
            },
            {
              "question": "Hoek-Brown破壞準則的歷史演進，下列何者正確？",
              "options": ["A. 1980年提出原始破壞準則（不適用於軟弱岩體）", "B. 1988年引進RMR修正m與s參數", "C. 1992年加入岩體參數a，修正破壞包絡線曲率", "D. 2002年廣義Hoek-Brown提出擾動因子D"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "Hoek-Brown四個主要發展階段：1980（原始準則）→1988（引入RMR）→1992（加入a參數）→2002（廣義，引入擾動因子D）。四項全對。"
            },
            {
              "question": "GSI值的應用限制，下列何者正確？",
              "options": ["A. GSI值因具有規模效應，造成難以評估力學參數", "B. GSI評分為一範圍（如33~37），非精確單一數值", "C. 在弱面控制破壞（平面破壞）時，不宜使用GSI", "D. GSI=0代表岩體品質最佳"],
              "answer": ["A", "B", "C"],
              "explanation": "GSI具規模效應造成力學參數評估困難、評分為範圍非精確值、弱面控制破壞時不適用GSI（此時弱面強度控制），均正確。D錯誤：GSI=0代表岩體最破碎（品質最差），GSI=100才是最完整。"
            },
            {
              "question": "關於GSI與Hoek-Brown準則，下列敘述何者有誤？",
              "options": ["A. D=1代表岩體完全未受擾動", "B. GSI=100時，a = 1", "C. s參數值愈大代表岩體愈破碎", "D. Hoek-Brown破壞準則最初不適用於較破碎的軟弱岩體"],
              "answer": ["A", "B", "C"],
              "explanation": "A錯：D=1代表「嚴重擾動」（D=0才是無擾動）；B錯：GSI=100時a=1/2（非1）；C錯：s值愈大（0~1）代表岩體愈完整（s=1為完整岩石，s=0最破碎）。D正確：1980年原始準則確實不適用於軟弱岩體。"
            }
          ]
        },
        {
          "id": "ch5-5.5",
          "name": "5.5 PCCR台灣岩體分類與隧道支撐系統",
          "content": "<strong>PCCR系統（台灣岩體分類與隧道支撐系統）：</strong>行政院公共工程委員會於2000年建立，利用主成分分析與條件機率法，針對台灣地質特性重新評估分類因子，提出適合台灣的分類標準。<br><br><strong>六種台灣隧道主要影響因子：</strong>擠壓性岩盤、湧水性岩盤、第三紀晚期膠結較差之泥岩、第四紀卵礫石、大斷面隧道、高岩覆隧道。<br><br><strong>PCCR將岩盤分為A、B、C、D四種岩類：</strong><table style='width:100%;border-collapse:collapse;font-size:0.85em'><tr style='background:#dbeafe'><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>岩盤類別</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>說明</th><th style='border:1px solid #93c5fd;padding:5px;color:#1e40af'>單壓強度基準</th></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>A岩類</strong></td><td style='border:1px solid #93c5fd;padding:5px'>台灣所有變質岩類及亞變質岩類、火成岩類中除火山角礫岩的岩層、沉積岩類中高強度者</td><td style='border:1px solid #93c5fd;padding:5px'>&gt;25 MPa</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>B岩類</strong></td><td style='border:1px solid #93c5fd;padding:5px'>西部麓山帶西緣丘陵區沉積岩中，強度較低之已固結岩層</td><td style='border:1px solid #93c5fd;padding:5px'>5~25 MPa</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>C岩類</strong></td><td style='border:1px solid #93c5fd;padding:5px'>中南部西部麓山帶晚上新統至更新統沉積岩或混同層；粗顆粒含量少於50%的複合材料地層</td><td style='border:1px solid #93c5fd;padding:5px'>&lt;5 MPa</td></tr><tr><td style='border:1px solid #93c5fd;padding:5px'><strong>D岩類</strong></td><td style='border:1px solid #93c5fd;padding:5px'>粗顆粒含量超過50%，膠結程度不拘之複合地質材料；礫石層岩體、火山角礫岩、火山集塊岩等</td><td style='border:1px solid #93c5fd;padding:5px'>—（以膠結程度分級）</td></tr></table><br><strong>A、B岩類岩體分級：</strong>依RMR值分為A<sub>I</sub>~A<sub>VI</sub>（A岩類）及B<sub>II</sub>~B<sub>VI</sub>（B岩類），共六個等級（A<sub>I</sub>對應RMR≥81，最優）。<br><strong>C岩類分級：</strong>依膠結程度（良好/不佳）和地質材料組成（沉泥黏土>50%、砂>50%、砂沉泥黏土礫石交雜）分為C<sub>I</sub>和C<sub>II</sub>各三亞類。<br><strong>D岩類分級：</strong>依膠結程度（極佳/良好/不佳）和粗顆粒含量（>75%或50~75%）分為D<sub>I</sub>~D<sub>III</sub>各兩亞類。",
          "isExamFocus": true,
          "examYears": [],
          "examHint": "PCCR四種岩類（A/B/C/D）定義與單壓強度界線（25MPa/5MPa）、台灣六種主要影響因子",
          "quiz": [
            {
              "question": "PCCR系統的背景與特性，下列何者正確？",
              "options": ["A. 由行政院公共工程委員會於2000年建立", "B. 針對台灣地質特性（如卵礫石、泥岩等）重新評估分類因子", "C. 利用主成分分析與條件機率法建立", "D. 完全採用Q法與RMR法，無任何修改"],
              "answer": ["A", "B", "C"],
              "explanation": "PCCR由公工委員會2000年建立，針對台灣地質重新評估，使用主成分分析和條件機率法。D錯誤：PCCR正是因為Q法與RMR法在台灣有限制，才另行建立的台灣專用系統（非直接採用Q/RMR）。"
            },
            {
              "question": "PCCR四種岩類的定義，下列何者正確？",
              "options": ["A. A岩類：台灣所有變質岩類及火成岩類（除火山角礫岩）中高強度者，單壓強度>25MPa", "B. B岩類：西部麓山帶西緣丘陵區沉積岩，強度較低之已固結岩層，單壓強度5~25MPa", "C. C岩類：單壓強度<5MPa之沉積岩或混同層", "D. D岩類：粗顆粒含量少於50%的複合地質材料"],
              "answer": ["A", "B", "C"],
              "explanation": "A（>25MPa變質火成岩）、B（5~25MPa西部麓山帶固結沉積岩）、C（<5MPa沉積岩/混同層）均正確。D錯誤：D岩類是粗顆粒含量「超過50%」（非少於50%；少於50%的是C岩類）。"
            },
            {
              "question": "台灣隧道六種主要影響因子，下列何者正確？",
              "options": ["A. 擠壓性岩盤", "B. 湧水性岩盤", "C. 第三紀晚期膠結較差之泥岩", "D. 花崗岩隧道"],
              "answer": ["A", "B", "C"],
              "explanation": "台灣隧道六種主要影響因子：擠壓性岩盤、湧水性岩盤、第三紀晚期膠結較差泥岩、第四紀卵礫石、大斷面隧道、高岩覆隧道。D錯誤：花崗岩隧道不是台灣的特殊影響因子（花崗岩主要在金門，不是台灣主要隧道地質問題）。"
            },
            {
              "question": "PCCR系統中A岩類的岩體分級，下列何者正確？",
              "options": ["A. 依RMR值分為A_I~A_VI共六個等級", "B. A_I對應RMR≥81，為最優等級", "C. A_VI對應RMR≤10，為最差等級", "D. A岩類分級使用膠結程度作為主要指標"],
              "answer": ["A", "B", "C"],
              "explanation": "A岩類依RMR分六級（A_I~A_VI），A_I（RMR≥81，最優）、A_VI（RMR≤10，最差）。D錯誤：A、B岩類使用RMR分級（非膠結程度），膠結程度是C、D岩類的分級指標。"
            },
            {
              "question": "PCCR系統的C岩類與D岩類的分級基準，下列何者正確？",
              "options": ["A. C岩類依膠結程度（良好/不佳）和地質材料組成分為C_I和C_II各三亞類", "B. D岩類依膠結程度（極佳/良好/不佳）和粗顆粒含量分為D_I~D_III各兩亞類", "C. C岩類的分級組成包括沉泥黏土>50%、砂>50%、砂沉泥黏土礫石交雜等材料類型", "D. D岩類使用RMR值作為主要分級基準"],
              "answer": ["A", "B", "C"],
              "explanation": "C岩類（膠結+材料組成，C_I/C_II各3亞類）和D岩類（膠結+粗顆粒含量，D_I~D_III各2亞類）分類方式均正確。D錯誤：D岩類使用膠結程度和粗顆粒含量分級（非RMR值；A、B岩類才使用RMR）。"
            },
            {
              "question": "關於PCCR系統，下列敘述何者有誤？",
              "options": ["A. PCCR系統適用於所有特殊地質環境的台灣岩盤", "B. D岩類的定義是粗顆粒含量少於50%的材料", "C. A岩類的單壓強度基準為大於50MPa", "D. PCCR由美國機構建立，專門針對美國地質設計"],
              "answer": ["A", "B", "C", "D"],
              "explanation": "四項全錯：PCCR適用於「非屬特殊地質之一般岩盤」（特殊地質需另案處理）；D岩類粗顆粒含量超過50%（非少於）；A岩類單壓強度>25MPa（非50MPa）；PCCR由台灣公工委員會建立，針對台灣地質（非美國機構或美國地質）。"
            }
          ]
        }
      ]
    }
  ]
}
