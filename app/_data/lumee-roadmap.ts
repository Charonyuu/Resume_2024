export type RoadmapStatus = "shipped" | "in-progress" | "planned";
export type RoadmapCategory =
  | "widget"
  | "hub"
  | "ui"
  | "system"
  | "theme"
  | "pro";

export interface RoadmapItem {
  version?: string;
  date: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  category: RoadmapCategory;
}

export const statusConfig: Record<
  RoadmapStatus,
  { label: string; color: string; bg: string; border: string }
> = {
  shipped: {
    label: "已上線",
    color: "#166534",
    bg: "#DCFCE7",
    border: "#BBF7D0",
  },
  "in-progress": {
    label: "開發中",
    color: "#92400E",
    bg: "#FEF3C7",
    border: "#FDE68A",
  },
  planned: {
    label: "計畫中",
    color: "#334155",
    bg: "#E2E8F0",
    border: "#CBD5E1",
  },
};

export const categoryConfig: Record<
  RoadmapCategory,
  { label: string; emoji: string }
> = {
  widget: { label: "Widget", emoji: "🧩" },
  hub: { label: "Hub", emoji: "📱" },
  ui: { label: "UI", emoji: "🎨" },
  system: { label: "系統", emoji: "⚙️" },
  theme: { label: "主題", emoji: "🎭" },
  pro: { label: "Pro", emoji: "⭐" },
};

export const lumeeRoadmap: RoadmapItem[] = [
  // --- Planned ---
  {
    date: "2026 Q3",
    title: "好友 / 情侶 Widget",
    description:
      "與好友或伴侶共享 Widget，即時同步照片、心情狀態與互動訊息。",
    status: "planned",
    category: "widget",
  },
  {
    date: "2026 Q2",
    title: "鎖定畫面 Widget",
    description:
      "支援 iOS 鎖定畫面 Widget，在不解鎖的情況下即可檢視照片、倒數日等資訊。",
    status: "planned",
    category: "widget",
  },
  // --- In Progress ---
  // --- Shipped ---
  {
    version: "v1.9",
    date: "2026-04",
    title: "熱門話題 Widget",
    description: "即時顯示 Google Trends 熱門搜尋話題，掌握當下最夯議題。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.8",
    date: "2026-03",
    title: "股市行情 Widget",
    description:
      "追蹤自選股票即時報價與漲跌幅，支援台股與美股。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.7",
    date: "2026-03",
    title: "星座運勢 Widget",
    description: "每日星座運勢與幸運指數，搭配可愛星座插圖。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.7",
    date: "2026-03",
    title: "組間計時器 Widget",
    description:
      "健身組間休息計時器，支援自訂秒數與即時倒數圓環動畫。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.6",
    date: "2026-02",
    title: "世界時鐘 Widget",
    description: "同時顯示多個時區的即時時間，方便跨時區溝通。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.6",
    date: "2026-02",
    title: "匯率 Widget",
    description: "即時匯率換算，支援多種常用貨幣對。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.5",
    date: "2026-02",
    title: "Widget Hub 系統",
    description:
      "整合 12 種工具 Widget 的入口頁面與各 Hub 詳情頁，一站式瀏覽所有實用工具。",
    status: "shipped",
    category: "hub",
  },
  {
    version: "v1.4",
    date: "2026-01",
    title: "步數 Widget",
    description: "連接 Apple HealthKit，在桌面即時顯示今日步數與目標達成率。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.4",
    date: "2026-01",
    title: "待辦事項 Widget",
    description: "整合 EventKit，在桌面顯示待辦清單與行事曆事件。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.3",
    date: "2025-12",
    title: "心情語錄 Widget",
    description: "每日一句心情語錄或勵志名言，為你的桌面注入正能量。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.3",
    date: "2025-12",
    title: "每日日曆 Widget",
    description: "簡潔日曆 Widget，顯示今日日期、星期與農曆資訊。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.2",
    date: "2025-11",
    title: "倒數日 Widget",
    description:
      "設定重要日期倒數，支援生日、紀念日、考試等多種場景。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.2",
    date: "2025-11",
    title: "天氣 Widget",
    description:
      "整合 WeatherKit 與 Open-Meteo，顯示即時天氣、溫度與未來預報。",
    status: "shipped",
    category: "widget",
  },
  {
    version: "v1.1",
    date: "2025-10",
    title: "質感黑主題",
    description: "全新深色主題風格，為 Widget 帶來高質感暗色調視覺體驗。",
    status: "shipped",
    category: "theme",
  },
  {
    version: "v1.1",
    date: "2025-10",
    title: "教學引導流程",
    description: "全新使用者教學引導，幫助新用戶快速上手 Widget 設定流程。",
    status: "shipped",
    category: "ui",
  },
  {
    version: "v1.1",
    date: "2025-10",
    title: "Pro 訂閱與代幣系統",
    description:
      "Lumee Pro 訂閱解鎖全部內容；代幣系統支援單獨購買主題包，彈性消費。",
    status: "shipped",
    category: "pro",
  },
  {
    version: "v1.0",
    date: "2025-09",
    title: "照片 Widget 與主題包系統",
    description:
      "Lumee 首發版本！支援自選照片 Widget、可愛寵物貼圖、多款主題包，打造獨一無二的 iPhone 桌面。",
    status: "shipped",
    category: "widget",
  },
];
