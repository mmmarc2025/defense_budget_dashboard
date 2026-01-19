export const budgetData = {
  total: 1250000000000, // 1.25兆 TWD
  period: "2026-2033",
  items: [
    { name: "精準火炮", value: 150000000000, description: "M109A7自走砲60門、精準彈藥4,080發" },
    { name: "遠程精準打擊飛彈", value: 250000000000, description: "HIMARS 82套、戰術區域飛彈420枚" },
    { name: "無人載具及反制系統", value: 200000000000, description: "約20萬架無人機、1,000餘艘無人艇" },
    { name: "防空反彈道及反裝甲飛彈", value: 180000000000, description: "標槍70套、拖式2B 24套" },
    { name: "AI輔助與C5ISR", value: 120000000000, description: "AI決策支援、戰術網路、情資分享套件" },
    { name: "強化作戰持續量能相關裝備", value: 200000000000, description: "彈藥產線、甲車組裝線、夜視鏡產線等" },
    { name: "台美共同研發及採購合作", value: 150000000000, description: "新興科技系統（機密）" }
  ]
};

export const armsSales2025 = [
  {
    id: 0,
    name: "無人載具大軍：20萬架無人機、1,000餘艘無人艇",
    image: "/images/uav-fleet.jpg",
    amountUSD: 3000000000,
    amountTWD: 94500000000,
    details: "濱海監偵型、濱海攻擊型（沉浸、投彈、自殺）等各類無人機約20萬架、無人艇1,000餘艘",
    status: "Planned",
    deliveryDate: "2026-2033",
    fullDescription: "國防部首次公開的無人載具採購規模達約20萬架無人機、1,000餘艘無人艇，涵蓋濱海監偵型、濱海攻擊型（沉浸、投彈、自殺）等多種用途。這是台灣史上最大規模的無人載具採購計畫，旨在建立不對稱戰力與蜂群作戰能力。",
    specifications: [
      { label: "總數量", value: "約20萬架無人機 + 1,000餘艘無人艇" },
      { label: "類型", value: "濱海監偵型、攻擊型（沉浸、投彈、自殺）" },
      { label: "作戰模式", value: "蜂群作戰、精準打擊、持續監控" },
      { label: "部署範圍", value: "海岸線、海域、灣區" },
      { label: "特點", value: "低成本、高效能、難以拐截" }
    ],
    tacticalValue: "大量部署無人載具可形成「蜂群戰術」，以數量優勢壓倒敵方防空系統。無人艇可在海岸線形成多層次防禦，有效阻止敵方登陸艦隊接近。烏克蘭戰爭證明無人載具在現代戰爭中具有極高戰術價值。"
  },
  {
    id: 1,
    name: "HIMARS與ATACMS系統",
    image: "/images/himars.jpg",
    amountUSD: 4050000000,
    amountTWD: 127575000000,
    details: "82套HIMARS發射器, 420枚ATACMS飛彈, 756枚精準導引火箭彈(GMLRS-U)",
    status: "Approved",
    deliveryDate: "2027",
    fullDescription: "高機動性多管火箭系統(HIMARS)是美軍最先進的遠程精準打擊武器系統，能在6分鐘內完成發射後迅速轉移，有效避免敵方反擊。ATACMS戰術飛彈射程達300公里，可精準打擊敵方指揮中心、機場與港口等高價值目標。",
    specifications: [
      { label: "射程", value: "ATACMS: 300km / GMLRS: 70km" },
      { label: "精準度", value: "圓周公算誤差(CEP) < 10m" },
      { label: "發射器", value: "82套M142 HIMARS" },
      { label: "彈藥", value: "420枚ATACMS + 756枚GMLRS-U" },
      { label: "機動性", value: "輪式底盤，公路時速85km/h" }
    ],
    tacticalValue: "提供台灣遠程精準打擊能力，可在敵方登陸前摧毀集結點與運輸船隻，形成有效嚇阻。快速機動特性使其能在山區與城鎮間靈活部署，大幅提升生存率。"
  },
  {
    id: 2,
    name: "M109A7自走榴彈砲",
    image: "/images/m109a7.jpg",
    amountUSD: 4030000000,
    amountTWD: 126945000000,
    details: "60門榴彈砲, 4,080套精準導引套件",
    status: "Approved",
    deliveryDate: "2027",
    fullDescription: "M109A7是美軍最新一代155mm自走榴彈砲，採用履帶式底盤與全自動裝填系統，可在各種地形快速機動並持續提供火力支援。搭配精準導引套件(PGK)後，傳統砲彈即可轉換為精準彈藥。",
    specifications: [
      { label: "口徑", value: "155mm" },
      { label: "射程", value: "一般彈藥30km / 火箭增程彈40km" },
      { label: "射速", value: "最高4發/分鐘，持續2發/分鐘" },
      { label: "數量", value: "60門榴彈砲 + 4,080套PGK" },
      { label: "防護", value: "裝甲防護，可抵禦小口徑武器" }
    ],
    tacticalValue: "提供台灣陸軍強大的間接火力支援能力，可在敵方火力範圍外精準打擊目標。全履帶設計適合台灣多山地形，能快速支援各防區作戰需求。"
  },
  {
    id: 3,
    name: "Altius遊蕩彈藥無人機",
    image: "/images/altius.jpg",
    amountUSD: 1100000000,
    amountTWD: 34650000000,
    details: "Altius-700M與Altius-600型號",
    status: "Approved",
    deliveryDate: "2026",
    fullDescription: "Altius是新一代遊蕩彈藥(Loitering Munition)，結合偵察與打擊功能，可在目標區域上空盤旋數小時，發現目標後立即俯衝攻擊。採用管式發射，可由車輛、艦艇或固定陣地快速部署。",
    specifications: [
      { label: "型號", value: "Altius-700M (反裝甲) / Altius-600 (多用途)" },
      { label: "續航時間", value: "700M: 4小時 / 600: 4.5小時" },
      { label: "作戰半徑", value: "440公里" },
      { label: "彈頭", value: "反裝甲/高爆破片彈頭" },
      { label: "發射方式", value: "管式發射器，可快速部署" }
    ],
    tacticalValue: "提供台灣低成本、高效能的精準打擊能力，特別適合對付敵方裝甲車輛與登陸艦艇。長時間滯空能力使其能持續監控戰場，發現目標立即攻擊，大幅提升作戰靈活性。"
  },
  {
    id: 4,
    name: "台灣戰術網路(TTN)暨部隊覺知應用套件(TAK)",
    amountUSD: 1010000000,
    amountTWD: 31815000000,
    details: "去中心化戰場狀況知覺網絡",
    status: "Approved",
    deliveryDate: "2026",
    fullDescription: "台灣戰術網路(Taiwan Tactical Network)是去中心化的戰場通訊與情資共享系統，整合部隊覺知應用套件(Team Awareness Kit)，讓各層級部隊能即時共享敵情、友軍位置與目標資訊。即使指揮中心被摧毀，各單位仍可自主作戰。",
    specifications: [
      { label: "架構", value: "去中心化網狀網路(Mesh Network)" },
      { label: "覆蓋範圍", value: "全台戰術通訊網絡" },
      { label: "功能", value: "即時態勢感知、目標標定、火力協調" },
      { label: "設備", value: "手持終端、車載系統、指揮中心" },
      { label: "抗干擾", value: "多頻段跳頻，抗電子戰能力" }
    ],
    tacticalValue: "大幅提升台灣國軍的C4ISR(指管通情監偵)能力，實現『看得到就打得到』的精準作戰。去中心化設計確保即使部分節點被摧毀，整體網路仍可運作，大幅提升戰場生存性。"
  },
  {
    id: 5,
    name: "標槍(Javelin)飛彈",
    image: "/images/javelin.jpg",
    amountUSD: 350000000,
    amountTWD: 11025000000,
    details: "1,050枚標槍飛彈",
    status: "Approved",
    deliveryDate: "2026",
    fullDescription: "標槍飛彈是美軍最先進的肩射式反坦克飛彈，採用『射後不理』(Fire-and-Forget)技術，發射後可立即轉移陣地。頂部攻擊模式專門攻擊裝甲車輛防護最薄弱的頂部，一發即可摧毀主戰坦克。",
    specifications: [
      { label: "射程", value: "2,500公尺" },
      { label: "穿甲能力", value: "可擊穿750mm均質裝甲" },
      { label: "攻擊模式", value: "頂部攻擊 / 直接攻擊" },
      { label: "導引方式", value: "紅外線成像導引" },
      { label: "重量", value: "發射器+飛彈共22.3公斤" }
    ],
    tacticalValue: "提供台灣步兵強大的反裝甲能力，特別適合城鎮與山區作戰。烏克蘭戰爭證明標槍飛彈對俄軍坦克具有極高殺傷力，是守勢作戰的理想武器。"
  },
  {
    id: 6,
    name: "TOW反坦克飛彈",
    image: "/images/tow.jpg",
    amountUSD: 300000000,
    amountTWD: 9450000000,
    details: "1,545枚TOW 2B型飛彈",
    status: "Approved",
    deliveryDate: "2026",
    fullDescription: "TOW(Tube-launched, Optically-tracked, Wire-guided)是經過實戰驗證的反坦克飛彈系統，TOW 2B型採用頂部攻擊模式，飛彈會在目標上方引爆，以雙彈頭向下攻擊裝甲最薄弱的頂部。",
    specifications: [
      { label: "射程", value: "3,750公尺" },
      { label: "穿甲能力", value: "可擊穿900mm均質裝甲" },
      { label: "彈頭", value: "雙串聯彈頭，頂部攻擊" },
      { label: "導引方式", value: "線導 + 光學追蹤" },
      { label: "平台", value: "車載、直升機、固定陣地" }
    ],
    tacticalValue: "提供台灣陸軍與陸戰隊中程反裝甲能力，可部署於悍馬車、CM-32裝甲車與AH-1W攻擊直升機。射程優勢使其能在敵方火力範圍外發動攻擊。"
  },
  {
    id: 7,
    name: "AH-1W攻擊直升機備件",
    image: "/images/ah1w.jpg",
    amountUSD: 96000000,
    amountTWD: 3024000000,
    details: "維護現有機隊",
    status: "Approved",
    deliveryDate: "2025",
    fullDescription: "AH-1W超級眼鏡蛇攻擊直升機是台灣陸軍航空特戰指揮部的主力反裝甲武器。本次採購包含發動機、旋翼系統、航電設備等關鍵備件，確保現有機隊維持高妥善率。",
    specifications: [
      { label: "機隊規模", value: "台灣現役約60架AH-1W" },
      { label: "武裝", value: "TOW飛彈、火箭彈、機砲" },
      { label: "作戰半徑", value: "約370公里" },
      { label: "備件類型", value: "發動機、旋翼、航電、武器系統" },
      { label: "維護目標", value: "提升妥善率至80%以上" }
    ],
    tacticalValue: "確保台灣陸軍航空部隊維持戰備，AH-1W在反登陸作戰中可快速支援灘岸防禦，以TOW飛彈與火箭彈摧毀敵方裝甲車輛與登陸艦艇。"
  },
  {
    id: 8,
    name: "魚叉(Harpoon)飛彈翻新套件",
    image: "/images/harpoon.jpg",
    amountUSD: 164000000,
    amountTWD: 5166000000,
    details: "強化海軍反艦能力",
    status: "Approved",
    deliveryDate: "2026",
    fullDescription: "魚叉反艦飛彈是台灣海軍主力反艦武器，本次採購翻新套件將延長現役飛彈壽命並提升性能，包括更新導引系統、推進系統與彈頭。翻新後的魚叉飛彈可持續服役至2030年代。",
    specifications: [
      { label: "射程", value: "130公里以上" },
      { label: "彈頭", value: "227公斤高爆彈頭" },
      { label: "導引方式", value: "慣性+主動雷達尋標" },
      { label: "平台", value: "艦射、岸射、空射" },
      { label: "翻新內容", value: "導引系統、推進系統、彈頭升級" }
    ],
    tacticalValue: "維持台灣海軍反艦作戰能力，魚叉飛彈可部署於紀德級驅逐艦、成功級巡防艦與岸置飛彈陣地，形成多層次海上拒止能力，有效阻止敵方艦隊接近台灣海域。"
  }
];

export const backlogData = {
  totalUSD: 21540000000,
  totalTWD: 682500000000, // Approx
  items: [
    {
      name: "F-16 Block 70/72戰機",
      originalDate: "2025-03",
      expectedDate: "2028-01",
      delayYears: 3,
      amountUSD: 8000000000,
      amountTWD: 252000000000,
      reason: "生產線延遲與技術整合問題"
    },
    {
      name: "AGM-154C JSOM",
      originalDate: "2026-01",
      expectedDate: "2028-06",
      delayYears: 2.5,
      amountUSD: 200000000,
      amountTWD: 6300000000,
      reason: "供應鏈短缺"
    },
    {
      name: "MK 48魚雷",
      originalDate: "2026-01",
      expectedDate: "2028-01",
      delayYears: 2,
      amountUSD: 180000000,
      amountTWD: 5670000000,
      reason: "產能不足"
    },
    {
      name: "其他延遲項目",
      originalDate: "2025-01",
      expectedDate: "2027-01",
      delayYears: 2,
      amountUSD: 13160000000,
      amountTWD: 418530000000,
      reason: "多種因素綜合"
    }
  ]
};

export const timelineEvents = [
  { date: "2025-11-25", title: "賴清德投書華盛頓郵報", description: "宣布1.25兆預算計畫" },
  { date: "2025-11-26", title: "公開宣布1.25兆國防特別預算", description: "正式對外說明預算結構" },
  { date: "2025-11-30", title: "軍售積壓達21.54億美元", description: "喬治梅森大學發布最新追蹤報告" },
  { date: "2025-12-17", title: "美國宣布111億美元軍售案", description: "創歷史新高，包含HIMARS與M109A7" },
  { date: "2025-12-26", title: "日經報導215億美元積壓", description: "國際媒體關注台灣軍購延遲問題" },
  { date: "2026-01-06", title: "藍白第6度擋下預算", description: "立法院預算審查陷入僵局" }
];

export const newsFeed = [
  {
    id: 1,
    title: "美對台軍售111億美元 創歷史新高",
    source: "BBC中文",
    date: "2025-12-18",
    summary: "美國國防安全合作署宣布最新一波對台軍售，總額達111億美元，包括HIMARS系統與M109A7自走砲。",
    link: "#"
  },
  {
    id: 2,
    title: "F-16V交機延宕 國防部：爭取2026年底前全數交機",
    source: "風傳媒",
    date: "2026-01-05",
    summary: "針對F-16 Block 70戰機交付延遲，國防部表示正與美方緊密協調，力拼縮短延遲時間。",
    link: "#"
  },
  {
    id: 3,
    title: "1.25兆特別預算遭擋 藍白要求總統報告",
    source: "聯合新聞網",
    date: "2026-01-07",
    summary: "國民黨與民眾黨立委聯手第六度擋下國防特別預算案，要求賴清德總統親赴立法院進行國情報告。",
    link: "#"
  },
  {
    id: 4,
    title: "喬治梅森大學：台灣軍購積壓仍高達215億美元",
    source: "中央社",
    date: "2025-12-30",
    summary: "最新報告顯示，儘管有新軍售案，但過往累積的未交付訂單金額仍居高不下，主要集中在戰機與飛彈。",
    link: "#"
  }
];
