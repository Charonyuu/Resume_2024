import type React from "react";

export interface DetailTheme {
  bgColor: string;
  heroBg: string;
  textColor: string;
  subtextColor: string;
  accentColor: string;
  accentHoverColor: string;
  cardBg: string;
  cardBorder: string;
  tagBg: string;
  patternStyle?: React.CSSProperties;
  stickers?: { src: string; alt: string }[];
  legalLinks?: { label: string; href: string }[];
  copyright?: string;
}

export interface ProjectData {
  slug?: string; // for projects with their own detail page
  year: string;
  date: string;
  title: string;
  image: string;
  description: string;
  link: string;
  contain?: boolean;
  imageBg?: string; // custom bg color for image area
  imageStyle?: React.CSSProperties; // custom inline style for image area background
  featured?: boolean; // show "Latest" badge
  wide?: boolean; // span 2 columns in grid
  tags?: string[];
  detailTheme?: DetailTheme;
  detailContent?: {
    subtitle: string;
    features: string[];
    techStack: string[];
    screenshots?: string[];
  };
}

export const projectData: ProjectData[] = [
  {
    slug: "job-pocket",
    year: "2026",
    date: "Sep",
    featured: true,
    title: "Job Pocket - 求職管理工具",
    image: "/project/job-pocket/icon.png",
    contain: true,
    imageStyle: {
      background:
        "radial-gradient(circle at 22% 18%, rgba(86, 177, 255, 0.55), transparent 34%), linear-gradient(135deg, #07152f 0%, #0a3c91 52%, #071534 100%)",
      backgroundImage:
        "radial-gradient(circle at 78% 76%, rgba(78, 107, 255, 0.35), transparent 30%), radial-gradient(circle at 22% 18%, rgba(86, 177, 255, 0.55), transparent 34%), linear-gradient(135deg, #07152f 0%, #0a3c91 52%, #071534 100%)",
    },
    description:
      "把分散的職缺、申請進度與面試準備整理進同一個 iOS 工作空間，並透過 AI 協助分析職缺重點與準備方向。",
    link: "",
    tags: ["Swift", "SwiftUI", "iOS", "AI"],
    detailContent: {
      subtitle: "從收藏職缺到準備面試，一個地方完成",
      features: [
        "從求職網站分享連結，快速收藏職缺",
        "追蹤已收藏、已投遞與面試中的機會",
        "集中整理公司、職稱、工作內容與原始連結",
        "以 AI 協助分析職缺重點與準備方向",
        "原生 iOS 分享流程，減少手動輸入",
      ],
      techStack: ["Swift", "SwiftUI", "iOS Share Extension", "AI Integration"],
      screenshots: [
        "/project/job-pocket/01-saved-jobs.png",
        "/project/job-pocket/02-share-sheet.png",
        "/project/job-pocket/03-add-job.png",
        "/project/job-pocket/04-job-analysis.png",
      ],
    },
  },
  {
    slug: "cooking-party",
    year: "2026",
    date: "In progress",
    title: "Cooking Party - 多人料理派對遊戲",
    image: "/project/cooking-party/icon.png",
    contain: true,
    imageStyle: {
      background:
        "radial-gradient(circle at 22% 18%, rgba(255, 241, 166, 0.9), transparent 34%), linear-gradient(135deg, #9a3918 0%, #e58524 54%, #6f2416 100%)",
      backgroundImage:
        "radial-gradient(circle at 78% 74%, rgba(118, 39, 21, 0.38), transparent 32%), radial-gradient(circle at 22% 18%, rgba(255, 241, 166, 0.9), transparent 34%), linear-gradient(135deg, #9a3918 0%, #e58524 54%, #6f2416 100%)",
    },
    description:
      "正在製作的多人料理派對遊戲，包含合作闖關與 2v2 對戰，針對手機操作打造快速、有趣的廚房混戰。",
    link: "",
    tags: ["Game", "Multiplayer", "iOS", "In progress"],
    detailContent: {
      subtitle: "Cook together, compete together, survive the kitchen",
      features: [
        "支援合作與 2v2 對戰的多人料理玩法",
        "不同食材、訂單與時間壓力組成快速回合",
        "可替換造型的角色與多個主題關卡",
        "針對手機設計的移動、互動與道具操作",
        "目前持續進行玩法原型、視覺與連線系統開發",
      ],
      techStack: ["Game Design", "Multiplayer", "Mobile", "Realtime"],
      screenshots: [
        "/project/cooking-party/cover-wide.png",
        "/project/cooking-party/02-chef-talents.png",
        "/project/cooking-party/03-customer-race.png",
      ],
    },
  },
  {
    slug: "claude-prewarm",
    year: "2026",
    date: "Sep",
    title: "Claude Prewarm - macOS 選單列工具",
    image: "/project/claude-prewarm/cover-wide.png",
    description:
      "在工作前自動送出極小的 Claude request，提前啟動 5 小時 usage window，並即時查看 5 小時與每週用量。",
    link: "https://github.com/Charonyuu/Claude-prewarm",
    wide: true,
    tags: ["Swift", "SwiftUI", "macOS", "Open Source"],
    detailContent: {
      subtitle: "Start Claude before you start coding",
      features: [
        "依工作日、開始時間與提前量自動安排 Prewarm",
        "一鍵 Warm Now，並防止短時間內重複執行",
        "顯示真實的 5 小時與每週 usage window",
        "支援 Launch at Login、睡眠喚醒補跑與失敗通知",
        "全程在本機使用已登入的 Claude CLI，不需要 API key",
      ],
      techStack: ["Swift", "SwiftUI", "MenuBarExtra", "SMAppService", "Claude CLI"],
      screenshots: [
        "/project/claude-prewarm/cover-wide.png",
        "/project/claude-prewarm/panel-dark.png",
        "/project/claude-prewarm/settings-dark.png",
      ],
    },
  },
  {
    slug: "swipee",
    year: "2026",
    date: "Apr",
    featured: true,
    title: "Swipee - 滑動整理你的相簿",
    image: "/project/swipee-icon.png",
    contain: true,
    imageBg: "bg-gradient-to-br from-[#C4A5E2] to-[#E8A0BE]",
    imageStyle: {
      background: "linear-gradient(135deg, #E0CFF0 0%, #ECCDE2 50%, #CCDDF0 100%)",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cg fill='none' stroke='%238A64B8' opacity='0.25' stroke-width='2'%3E%3Crect x='12' y='15' width='18' height='23' rx='2.5' transform='rotate(-10 21 26)'/%3E%3Crect x='35' y='13' width='18' height='23' rx='2.5' transform='rotate(8 44 24)'/%3E%3Cpath d='M30 52 l7-5.5 l-1.5 3.5 l5.5-0.5 l-7 5.5 l1.5-3.5z' fill='%238A64B8' stroke='none' opacity='1'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: "70px 70px",
    },
    description:
      "iOS 照片整理 App，用直覺的滑動手勢快速分類、清理相簿。支援智慧分類建議（AI 辨識場景）、人臉辨識分群、相簿管理、iCloud 快取優化，讓整理照片像刷卡片一樣輕鬆。",
    link: "https://apps.apple.com/app/swipee",
    tags: ["Swift", "SwiftUI", "Vision", "iOS"],
    detailTheme: {
      bgColor: "#F3EDF8",
      heroBg: "linear-gradient(135deg, #E0CFF0 0%, #F3EDF8 50%, #ECCDE2 100%)",
      textColor: "#2D1E3D",
      subtextColor: "#5C4A72",
      accentColor: "#8A64B8",
      accentHoverColor: "#7350A0",
      cardBg: "rgba(255,255,255,0.6)",
      cardBorder: "#D5C0E8",
      tagBg: "#E8D5F5",
      patternStyle: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cg fill='none' stroke='%238A64B8' opacity='0.25' stroke-width='2'%3E%3Crect x='12' y='15' width='18' height='23' rx='2.5' transform='rotate(-10 21 26)'/%3E%3Crect x='35' y='13' width='18' height='23' rx='2.5' transform='rotate(8 44 24)'/%3E%3Cpath d='M30 52 l7-5.5 l-1.5 3.5 l5.5-0.5 l-7 5.5 l1.5-3.5z' fill='%238A64B8' stroke='none' opacity='1'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "70px 70px",
      },
      legalLinks: [
        { label: "Privacy Policy", href: "/swipee/privacy" },
        { label: "Terms of Use", href: "/swipee/terms" },
      ],
      copyright: "Swipee",
    },
    detailContent: {
      subtitle: "Swipe to Organize — 讓整理照片變得有趣",
      features: [
        "卡片式滑動介面：左滑刪除、右滑保留、下滑分類、上滑收藏",
        "時間軸瀏覽模式：按月份格狀瀏覽所有照片",
        "AI 智慧分類建議：自動辨識食物、動物、人物、風景等 15+ 場景",
        "人臉辨識與分群：自動依人物分組，快速整理人像照片",
        "相簿管理：建立、排序、隱藏相簿，拖曳排列順序",
        "iCloud 快取優化：預載 50 張照片，滑動零卡頓",
        "4 秒復原機制：誤刪可立即撤銷",
        "雙語支援（繁體中文 / English）",
      ],
      techStack: [
        "Swift / SwiftUI",
        "Photos Framework",
        "Vision Framework",
        "CoreLocation",
        "AVKit",
        "UserDefaults",
      ],
      screenshots: [
        "/project/swipee/zh_1.png",
        "/project/swipee/zh_2.png",
        "/project/swipee/zh_3.png",
        "/project/swipee/zh_4.png",
        "/project/swipee/zh_5.png",
      ],
    },
  },
  {
    slug: "lumee",
    year: "2026",
    date: "Mar",
    featured: true,
    title: "Lumee - 可愛桌面 Widget 自訂 App",
    image: "/project/lumee-icon.png",
    contain: true,
    imageBg: "bg-gradient-to-br from-[#F5E6C8] to-[#E8C88A]",
    imageStyle: {
      background: "#FDF6EC",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 80 80'%3E%3Cg fill='%235C4A32' opacity='0.06'%3E%3Cellipse cx='40' cy='45' rx='8' ry='10'/%3E%3Ccircle cx='30' cy='34' r='4.5'/%3E%3Ccircle cx='50' cy='34' r='4.5'/%3E%3Ccircle cx='25' cy='42' r='3.5'/%3E%3Ccircle cx='55' cy='42' r='3.5'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: "60px 60px",
    },
    description:
      "iOS 桌面 Widget 自訂 App，結合照片、可愛貼圖、主題包與實用工具（天氣、倒數日、行事曆等），打造獨特的 iPhone 主畫面。支援 Lumee Pro 訂閱、代幣系統、多語系、iCloud 同步。",
    link: "https://apps.apple.com/app/lumee",
    tags: ["Swift", "SwiftUI", "WidgetKit", "iOS", "StoreKit 2"],
    detailTheme: {
      bgColor: "#FDF6EC",
      heroBg: "linear-gradient(135deg, #F5E6C8 0%, #FDF6EC 50%, #E8D5B5 100%)",
      textColor: "#3D2C1E",
      subtextColor: "#5C4A32",
      accentColor: "#8B6914",
      accentHoverColor: "#705510",
      cardBg: "rgba(255,255,255,0.6)",
      cardBorder: "#E8D5B5",
      tagBg: "#F5E6C8",
      patternStyle: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%235C4A32'%3E%3Cellipse cx='40' cy='45' rx='8' ry='10'/%3E%3Ccircle cx='30' cy='34' r='4.5'/%3E%3Ccircle cx='50' cy='34' r='4.5'/%3E%3Ccircle cx='25' cy='42' r='3.5'/%3E%3Ccircle cx='55' cy='42' r='3.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
      },
      stickers: [
        { src: "/lumee/pet_shiba.png", alt: "Shiba" },
        { src: "/lumee/pet_cat_orange.png", alt: "Cat" },
        { src: "/lumee/pet_hamster.png", alt: "Hamster" },
        { src: "/lumee/pet_corgi.png", alt: "Corgi" },
        { src: "/lumee/pet_poodle.png", alt: "Poodle" },
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "/lumee/privacy" },
        { label: "Terms of Use", href: "/lumee/terms" },
        { label: "Roadmap", href: "/lumee/roadmap" },
      ],
      copyright: "Lumee",
    },
    detailContent: {
      subtitle: "Photos, Stickers & Widgets — All in One",
      features: [
        "多款可愛主題包：柴犬日常、貓咪、倉鼠、兄弟等風格",
        "DIY 自組模式：選照片 + 拖曳貼圖，自由打造 Widget",
        "實用工具 Widget：天氣、倒數日、生日、行事曆、股市、星座、匯率",
        "WidgetKit 主畫面小工具，即時顯示在 iPhone 桌面",
        "Lumee Pro 訂閱：解鎖全部主題、貼圖包及搶先內容",
        "代幣系統：App 內購買代幣解鎖個別主題包",
        "寵物貼紙系統（柴犬、柯基、貴賓、倉鼠等）",
        "多語系支援（繁體中文 / English）、iCloud 同步",
      ],
      techStack: [
        "Swift / SwiftUI",
        "WidgetKit",
        "StoreKit 2",
        "WeatherKit",
        "HealthKit",
        "CoreLocation",
        "Cloudflare R2",
        "Node.js / MongoDB (Backend)",
      ],
      screenshots: [
        "/project/lumee-1.png",
        "/project/lumee-2.png",
        "/project/lumee-3.png",
        "/project/lumee-4.png",
        "/project/lumee-5.png",
      ],
    },
  },
  {
    slug: "pixel-icons",
    year: "2025",
    date: "Mar",
    title: "Pixel Icons - 像素圖示庫",
    image: "/project/icon-web.png",
    description:
      "像素風格圖示庫網站，提供多種分類的可愛像素圖示，支援搜尋、分類瀏覽、單張或批次下載，供開發者與設計師使用。",
    link: "https://pixel-icons.app.charonyu.cc/",
    tags: ["React", "Vite", "Framer Motion", "Docker"],
    detailContent: {
      subtitle: "可愛像素風格圖示免費下載平台",
      features: [
        "244+ 像素圖示，18 種分類（旅遊、3C、衣物、動物等）",
        "即時關鍵字搜尋與分類篩選",
        "單張 PNG 下載或整批 ZIP 下載",
        "分類 ZIP 批次下載",
        "Framer Motion 動畫效果",
        "響應式設計（桌面 / 手機）",
        "Nginx 靜態部署，效能最佳化",
      ],
      techStack: [
        "React 18",
        "Vite",
        "Framer Motion",
        "CSS (Pixel Art Style)",
        "Nginx",
        "Docker",
      ],
      screenshots: ["/project/icon-web.png"],
    },
  },
  {
    slug: "ithome-github-action",
    year: "2024",
    date: "Apr 14",
    title: "Ithome Blog Upload Readme Github Action",
    image: "/project/githubAction.png",
    description:
      "GitHub Action 自動將 Ithome 最新文章上傳到 GitHub README.md，使用 Node.js 和 Puppeteer 爬蟲抓取最新文章。",
    link: "https://github.com/marketplace/actions/ithome-article-post-action",
    tags: ["GitHub Actions", "Node.js", "Puppeteer"],
    detailContent: {
      subtitle: "自動同步 iThome 文章到 GitHub README 的 CI/CD 工具",
      features: [
        "自動爬取 iThome 個人最新發布文章",
        "將文章標題與連結更新到 GitHub README.md",
        "透過 GitHub Workflow 定時觸發（Cron Job）",
        "使用 Puppeteer 無頭瀏覽器進行網頁爬蟲",
        "支援自訂 README 模板與格式",
        "已發布至 GitHub Marketplace 供所有人使用",
      ],
      techStack: [
        "GitHub Actions",
        "Node.js",
        "Puppeteer",
        "YAML Workflow",
        "GitHub Marketplace",
      ],
      screenshots: [],
    },
  },
  {
    slug: "react-intl-extension",
    year: "2024",
    date: "Apr 5",
    title: "React-Intl AutoComplete VSCode Extension",
    image: "/project/react-intl.webp",
    description:
      "VSCode 擴充套件，快速插入 react-intl 程式碼片段，自動補全翻譯並新增到 en.json，提升國際化開發效率。",
    link: "https://marketplace.visualstudio.com/items?itemName=charonyuu.intl-snippets",
    tags: ["VSCode Extension", "React-Intl", "i18n"],
    detailContent: {
      subtitle: "加速 React 國際化開發的 VSCode 擴充套件",
      features: [
        "輸入關鍵字自動補全 react-intl 的 FormattedMessage 片段",
        "自動將新翻譯 key 寫入 en.json 語系檔",
        "支援 intl.formatMessage 與 <FormattedMessage> 兩種語法",
        "Snippet 模板快速產生 i18n 程式碼",
        "減少手動複製貼上翻譯 key 的時間",
        "已發布至 VSCode Marketplace",
      ],
      techStack: [
        "VSCode Extension API",
        "TypeScript",
        "React-Intl",
        "JSON AST",
        "VSCode Marketplace",
      ],
      screenshots: [],
    },
  },
  {
    slug: "link-preview-details",
    year: "2023",
    date: "Oct 18",
    title: "link-preview-details",
    image: "/project/npm.png",
    description:
      "npm 套件，使用 Node.js 和 Puppeteer 爬蟲抓取網站連結預覽資訊，包含標題、描述和圖片。",
    link: "https://www.npmjs.com/package/link-preview-details",
    tags: ["npm", "Node.js", "Puppeteer"],
    detailContent: {
      subtitle: "輕鬆取得任意網址的 Open Graph 預覽資訊",
      features: [
        "輸入任意 URL 即可取得標題、描述、圖片等預覽資訊",
        "使用 Puppeteer 無頭瀏覽器渲染 JavaScript 動態頁面",
        "支援 Open Graph、Twitter Card 等 meta 標籤解析",
        "提供簡潔 API，一行程式碼即可使用",
        "處理各種邊界情況（重定向、SPA、SSR 頁面）",
        "已發布至 npm，開源可自由使用",
      ],
      techStack: [
        "Node.js",
        "Puppeteer",
        "npm Package",
        "Open Graph Protocol",
        "Web Scraping",
      ],
      screenshots: [],
    },
  },
  {
    slug: "ithome-ironman",
    year: "2023",
    date: "Sep 10",
    title: "React Custom Hooks & TypeScript & Unit Test 系列文",
    image: "/project/ithome.png",
    description:
      "30 篇系列文章，介紹如何建立 React Custom Hooks，搭配 TypeScript 型別定義與單元測試撰寫。",
    link: "https://ithelp.ithome.com.tw/articles/10316393",
    tags: ["React", "TypeScript", "Unit Test", "Blog"],
    detailContent: {
      subtitle: "iThome 鐵人賽 30 天系列 — 從零打造 React Custom Hooks",
      features: [
        "30 篇完整系列文章，每日一篇",
        "從基礎 Hook 概念到進階自訂 Hook 實作",
        "每個 Hook 搭配 TypeScript 完整型別定義",
        "使用 Jest + React Testing Library 撰寫單元測試",
        "涵蓋 useDebounce、useLocalStorage、useFetch 等實用 Hook",
        "實戰導向，可直接應用於專案開發",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Jest",
        "React Testing Library",
        "Custom Hooks",
        "iThome 鐵人賽",
      ],
      screenshots: [],
    },
  },
  {
    slug: "etf-net-worth",
    year: "2022",
    date: "Dec 21",
    title: "ETF Net Worth PWA",
    image: "/project/etf.png",
    contain: true,
    description:
      "PWA 應用程式，快速查詢台灣 ETF 淨值，整合 API 搜尋並支援 localStorage 收藏，部署於 Netlify。",
    link: "https://charonyu-etf-net-worth-pwa.netlify.app/",
    tags: ["PWA", "React", "API"],
    detailContent: {
      subtitle: "快速查詢台灣 ETF 即時淨值的 PWA 應用",
      features: [
        "即時查詢台灣上市 ETF 淨值資訊",
        "關鍵字搜尋 ETF 名稱或代號",
        "收藏常用 ETF，localStorage 持久化儲存",
        "PWA 支援，可安裝至手機桌面",
        "響應式設計，手機與桌面皆適用",
        "部署於 Netlify，快速穩定",
      ],
      techStack: [
        "React",
        "PWA (Service Worker)",
        "REST API",
        "localStorage",
        "Netlify",
        "CSS",
      ],
      screenshots: ["/project/etf.png"],
    },
  },
];
