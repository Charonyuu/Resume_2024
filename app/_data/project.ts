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
  featured?: boolean; // show larger in grid
  tags?: string[];
  detailContent?: {
    subtitle: string;
    features: string[];
    techStack: string[];
    screenshots?: string[];
  };
}

export const projectData: ProjectData[] = [
  {
    slug: "tripi",
    year: "2025",
    date: "Mar",
    title: "Tripi - 旅行行程規劃平台",
    image: "/project/tripi.png",
    description:
      "Tripi 是一個旅行行程規劃平台，支援多人協作、AI 行程建議、打包清單、行程匯出與分享等功能。使用 Next.js、TypeScript、Tailwind CSS 打造，支援 PWA 跨裝置同步。",
    link: "https://tripi.app.charonyu.cc/",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "AI"],
    detailContent: {
      subtitle: "AI 驅動的協作旅行行程規劃工具",
      features: [
        "建立與管理旅行行程，自訂目的地與天數",
        "多人協作即時編輯行程",
        "AI 智能行程建議與匯入",
        "打包清單功能，出發前不遺漏",
        "行程匯出與分享給朋友",
        "跨裝置同步（PWA 支援）",
        "登入後資料雲端保存",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PWA (Progressive Web App)",
        "Analytics Integration",
      ],
      screenshots: [
        "/project/tripi.png",
        "/project/tripi-packing.png",
        "/project/tripi-share.png",
      ],
    },
  },
  {
    slug: "analysis-service",
    year: "2025",
    date: "Mar",
    title: "Analysis Service - 網站分析追蹤系統",
    image: "/project/analysis-service.png",
    description:
      "自建的網站分析追蹤系統，追蹤用戶點擊、頁面瀏覽、停留時間等行為數據，提供 Dashboard 即時查看各網站流量與互動數據。",
    link: "https://analysis-service.app.charonyu.cc/",
    tags: ["Node.js", "MongoDB", "Chart.js", "Express"],
    detailContent: {
      subtitle: "自建網站流量分析與用戶行為追蹤平台",
      features: [
        "追蹤多個網站的用戶行為數據（瀏覽、點擊、停留時間）",
        "即時統計頁面瀏覽量、用戶數與平均停留時間",
        "Daily Enter Trend 每日流量趨勢圖表",
        "Top Click Events 排行統計",
        "輕量 SDK，一行 script 即可嵌入追蹤",
        "Heartbeat 機制精準計算停留時間",
        "深色主題 Dashboard 即時查看數據",
        "多站點管理與 Feedback 回饋系統",
        "Rate Limiting 與 CORS 安全防護",
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB (Mongoose)",
        "Chart.js",
        "Vanilla JS SDK",
        "Docker",
        "Cookie Auth",
      ],
      screenshots: ["/project/analysis-service.png"],
    },
  },
  {
    slug: "pixel-frame",
    year: "2025",
    date: "Mar",
    title: "PixelFrame - iOS 桌面小工具 App",
    image: "/project/pixelframe.png",
    contain: true,
    imageBg: "bg-gradient-to-br from-purple-500 to-cyan-400",
    description:
      "iOS 桌面小工具客製化 App，結合像素風格相框與個人照片，打造獨特的 iPhone 主畫面 Widget。支援 50+ 像素相框、拖曳縮放照片、多語系、天氣 Widget 等功能。",
    link: "https://github.com/charonyu",
    tags: ["Swift", "SwiftUI", "WidgetKit", "iOS"],
    detailContent: {
      subtitle: "像素風格 iOS 桌面小工具客製化應用",
      features: [
        "50+ 像素風格相框，分為 Clean / Love / Bros / Pets 四大分類",
        "互動式照片編輯：拖曳定位、捏合縮放（0.5x ~ 4x）",
        "WidgetKit 主畫面小工具，即時顯示在 iPhone 桌面",
        "多 Widget 管理：新增、重新命名、刪除、排序",
        "天氣 Widget（WeatherKit 整合）",
        "寵物貼紙系統（柴犬、柯基、貴賓等）",
        "多語系支援（繁體中文 / English）",
        "App Groups 跨 App 與 Widget 資料同步",
      ],
      techStack: [
        "Swift / SwiftUI",
        "WidgetKit",
        "PhotosUI",
        "WeatherKit",
        "CoreLocation",
        "AppIntents",
        "Python (圖片處理腳本)",
      ],
      screenshots: [
        "/project/pixelframe-homescreen.png",
        "/project/pixelframe-home.png",
        "/project/pixelframe-love.png",
        "/project/pixelframe-pets.png",
        "/project/pixelframe-bros.png",
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
