export const budgetData = {
  total: 1250000000000, // 1.25兆 TWD
  period: "2026-2033",
  items: [
    { name: "精準火炮", value: 150000000000, description: "M109A7自走榴彈砲等" },
    { name: "遠程精準打擊飛彈", value: 250000000000, description: "HIMARS、ATACMS等" },
    { name: "防空反彈道及反裝甲飛彈", value: 200000000000, description: "標槍、TOW等" },
    { name: "無人載具及其反制系統", value: 120000000000, description: "Altius無人機等" },
    { name: "強化作戰持續量能相關裝備", value: 180000000000, description: "彈藥補給等" },
    { name: "AI輔助C4ISR系統", value: 150000000000, description: "台灣戰術網路(TTN)、部隊覺知應用套件(TAK)" },
    { name: "台美共同研發採購裝備系統", value: 100000000000, description: "未詳細說明" },
    { name: "未詳細說明項目", value: 100000000000, description: "其他機密或未公開項目", isUnspecified: true }
  ]
};

export const armsSales2025 = [
  {
    id: 1,
    name: "HIMARS與ATACMS系統",
    amountUSD: 4050000000,
    amountTWD: 127575000000,
    details: "82套HIMARS發射器, 420枚ATACMS飛彈, 756枚精準導引火箭彈(GMLRS-U)",
    status: "Approved",
    deliveryDate: "2027"
  },
  {
    id: 2,
    name: "M109A7自走榴彈砲",
    amountUSD: 4030000000,
    amountTWD: 126945000000,
    details: "60門榴彈砲, 4,080套精準導引套件",
    status: "Approved",
    deliveryDate: "2027"
  },
  {
    id: 3,
    name: "Altius遊蕩彈藥無人機",
    amountUSD: 1100000000,
    amountTWD: 34650000000,
    details: "Altius-700M與Altius-600型號",
    status: "Approved",
    deliveryDate: "2026"
  },
  {
    id: 4,
    name: "台灣戰術網路(TTN)暨部隊覺知應用套件(TAK)",
    amountUSD: 1010000000,
    amountTWD: 31815000000,
    details: "去中心化戰場狀況知覺網絡",
    status: "Approved",
    deliveryDate: "2026"
  },
  {
    id: 5,
    name: "標槍(Javelin)飛彈",
    amountUSD: 350000000, // Estimated portion
    amountTWD: 11025000000,
    details: "1,050枚標槍飛彈",
    status: "Approved",
    deliveryDate: "2026"
  },
  {
    id: 6,
    name: "TOW反坦克飛彈",
    amountUSD: 300000000, // Estimated portion
    amountTWD: 9450000000,
    details: "1,545枚TOW 2B型飛彈",
    status: "Approved",
    deliveryDate: "2026"
  },
  {
    id: 7,
    name: "AH-1W攻擊直升機備件",
    amountUSD: 96000000,
    amountTWD: 3024000000,
    details: "維護現有機隊",
    status: "Approved",
    deliveryDate: "2025"
  },
  {
    id: 8,
    name: "魚叉(Harpoon)飛彈翻新套件",
    amountUSD: 164000000, // Estimated portion
    amountTWD: 5166000000,
    details: "強化海軍反艦能力",
    status: "Approved",
    deliveryDate: "2026"
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
