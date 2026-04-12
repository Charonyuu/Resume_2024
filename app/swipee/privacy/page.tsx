"use client";

import { useState } from "react";
import Image from "next/image";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 13, 2026",
    sections: [
      {
        title: "1. Introduction",
        body: `Welcome to Swipee ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Swipee app.`,
      },
      {
        title: "2. Information We Collect",
        body: `**2.1 Information You Provide**
- Photos you browse and organize within the app (all processing is done locally on your device)
- Album names and categorization preferences
- Swipe history and organizational decisions

**2.2 Automatically Collected Information**
- Anonymous usage analytics (feature usage, session duration)
- Device type and operating system version
- App crash logs and performance data

**2.3 Photo Library Access**
Swipee requires access to your photo library to display, organize, and manage your photos. All photo data remains on your device and is never uploaded to external servers.

**2.4 Location Data**
Swipee reads GPS metadata embedded in your photos solely to display the capture location. We do not track your current location or store location data on our servers.

**2.5 On-Device AI Processing**
Swipee uses Apple's Vision framework to classify photo content (e.g., food, animals, landscapes) and detect faces for grouping. All AI processing is performed entirely on your device. No photo data is sent to any external server for analysis.`,
      },
      {
        title: "3. How We Use Your Information",
        body: `- To provide photo browsing, swiping, and organization features
- To generate smart category suggestions using on-device AI
- To group photos by detected faces
- To display photo metadata (date, location)
- To improve our app and develop new features
- To diagnose technical issues and improve performance`,
      },
      {
        title: "4. Data Storage & Security",
        body: `Your photos, swipe history, album preferences, and organizational data are stored locally on your device using UserDefaults. We do not operate any server that stores your personal data. No account creation is required to use Swipee.`,
      },
      {
        title: "5. Third-Party Services",
        body: `We use the following Apple frameworks:
- **Photos Framework** — for accessing and managing your photo library
- **Vision Framework** — for on-device image classification and face detection
- **CoreLocation** — for reverse geocoding photo GPS metadata
- **AVKit** — for video playback`,
      },
      {
        title: "6. Children's Privacy",
        body: `Swipee does not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.`,
      },
      {
        title: "7. Data Retention",
        body: `All app data is stored locally on your device. You can reset your swipe history and preferences at any time from the Settings page within the app. Uninstalling the app removes all associated data.`,
      },
      {
        title: "8. Your Rights",
        body: `You have the right to:
- Access all data the app stores (viewable within Settings)
- Reset or delete your swipe history and preferences
- Revoke photo library access via device Settings
- Opt out of analytics tracking`,
      },
      {
        title: "9. Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy within the app. Your continued use of Swipee after changes are posted constitutes acceptance of the updated policy.`,
      },
      {
        title: "10. Contact Us",
        body: `If you have any questions about this Privacy Policy, please contact us at:\ncharonyuwork@gmail.com`,
      },
    ],
  },
  zh: {
    title: "隱私權政策",
    updated: "最後更新：2026 年 4 月 13 日",
    sections: [
      {
        title: "1. 前言",
        body: `歡迎使用 Swipee（以下稱「我們」）。我們重視您的隱私，並致力於保護您分享給我們的個人資訊。本隱私權政策說明我們在您使用 Swipee App 時如何收集、使用及保護您的資訊。`,
      },
      {
        title: "2. 我們收集的資訊",
        body: `**2.1 您提供的資訊**
- 您在 App 中瀏覽和整理的照片（所有處理均在您的裝置上本地完成）
- 相簿名稱與分類偏好
- 滑動記錄與整理決策

**2.2 自動收集的資訊**
- 匿名使用分析（功能使用情況、使用時長）
- 裝置類型與作業系統版本
- App 當機日誌與效能數據

**2.3 照片圖庫存取**
Swipee 需要存取您的照片圖庫以顯示、整理和管理您的照片。所有照片資料均保留在您的裝置上，絕不會上傳至外部伺服器。

**2.4 位置資料**
Swipee 讀取照片中嵌入的 GPS 後設資料，僅用於顯示拍攝地點。我們不會追蹤您的即時位置，也不會在伺服器上儲存位置資料。

**2.5 裝置端 AI 處理**
Swipee 使用 Apple Vision 框架來分類照片內容（如食物、動物、風景）及偵測人臉進行分群。所有 AI 處理完全在您的裝置上執行，不會將任何照片資料傳送至外部伺服器進行分析。`,
      },
      {
        title: "3. 我們如何使用您的資訊",
        body: `- 提供照片瀏覽、滑動與整理功能
- 使用裝置端 AI 產生智慧分類建議
- 依偵測到的人臉將照片分群
- 顯示照片後設資料（日期、地點）
- 改善我們的 App 並開發新功能
- 診斷技術問題並改善效能`,
      },
      {
        title: "4. 資料儲存與安全",
        body: `您的照片、滑動記錄、相簿偏好和整理資料均使用 UserDefaults 儲存在您的裝置本地。我們不營運任何儲存您個人資料的伺服器。使用 Swipee 不需要建立帳號。`,
      },
      {
        title: "5. 第三方服務",
        body: `我們使用以下 Apple 框架：
- **Photos Framework** — 存取和管理您的照片圖庫
- **Vision Framework** — 裝置端圖片分類與人臉偵測
- **CoreLocation** — 照片 GPS 後設資料的反向地理編碼
- **AVKit** — 影片播放`,
      },
      {
        title: "6. 兒童隱私",
        body: `Swipee 不會故意收集 13 歲以下兒童的個人資訊。如果您認為我們已收集了 13 歲以下兒童的資訊，請立即與我們聯繫。`,
      },
      {
        title: "7. 資料保留",
        body: `所有 App 資料均儲存在您的裝置本地。您可以隨時在 App 內的設定頁面重置您的滑動記錄和偏好設定。解除安裝 App 將移除所有相關資料。`,
      },
      {
        title: "8. 您的權利",
        body: `您有權：
- 存取 App 儲存的所有資料（可在設定中查看）
- 重置或刪除您的滑動記錄和偏好設定
- 透過裝置設定撤回照片圖庫存取權限
- 選擇退出分析追蹤`,
      },
      {
        title: "9. 政策變更",
        body: `我們可能會不時更新本隱私權政策。我們會在 App 內發布新政策來通知您任何重大變更。在變更發布後繼續使用 Swipee 即表示接受更新的政策。`,
      },
      {
        title: "10. 聯絡我們",
        body: `如果您對本隱私權政策有任何問題，請透過以下方式聯繫我們：\ncharonyuwork@gmail.com`,
      },
    ],
  },
};

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "zh">("zh");
  const t = content[lang];

  return (
    <main className="max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-block mb-4 rounded-[22px] overflow-hidden shadow-lg">
          <Image src="/project/swipee-icon.png" alt="Swipee" width={72} height={72} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2D1E3D] mb-2">{t.title}</h1>
        <p className="text-sm text-[#5C4A72]">{t.updated}</p>

        {/* Language toggle */}
        <div className="mt-4 inline-flex items-center bg-white/70 rounded-full p-1 border border-[#D5C0E8] shadow-sm">
          <button
            onClick={() => setLang("zh")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === "zh"
                ? "bg-gradient-to-r from-[#A07DC8] to-[#8A64B8] text-white shadow-sm"
                : "text-[#5C4A72] hover:text-[#2D1E3D]"
            }`}
          >
            中文
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === "en"
                ? "bg-gradient-to-r from-[#A07DC8] to-[#8A64B8] text-white shadow-sm"
                : "text-[#5C4A72] hover:text-[#2D1E3D]"
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-5 sm:space-y-6">
        {t.sections.map((section, i) => (
          <section
            key={i}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#D5C0E8] shadow-sm"
          >
            <h2 className="text-base sm:text-lg font-bold text-[#3D2C5C] mb-3">{section.title}</h2>
            <div className="text-sm leading-relaxed text-[#3D2C5C]/80 whitespace-pre-line">
              <FormattedText text={section.body} />
            </div>
          </section>
        ))}
      </div>

      <div className="my-8 sm:my-10" />

      <Footer lang={lang} />
    </main>
  );
}

function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        if (line.startsWith("- ")) {
          const content = formatBold(line.slice(2));
          return (
            <div key={i} className="flex gap-2 ml-1 my-0.5">
              <span className="text-[#8A64B8] mt-0.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={i} className="font-medium text-[#3D2C5C] mt-3 mb-1">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.includes("@")) {
          return (
            <a key={i} href={`mailto:${line.trim()}`} className="text-[#8A64B8] underline hover:text-[#A07DC8] transition-colors">
              {line.trim()}
            </a>
          );
        }
        if (line === "") return <div key={i} className="h-2" />;
        return <p key={i} dangerouslySetInnerHTML={{ __html: formatBold(line) }} />;
      })}
    </>
  );
}

function formatBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#3D2C5C]">$1</strong>');
}

function Footer({ lang }: { lang: string }) {
  return (
    <footer className="text-center text-xs text-[#5C4A72]/60">
      <div className="flex items-center justify-center gap-4 mb-3">
        <a href="/swipee/privacy" className="text-[#8A64B8] hover:underline">
          {lang === "zh" ? "隱私權政策" : "Privacy Policy"}
        </a>
        <span>·</span>
        <a href="/swipee/terms" className="text-[#8A64B8] hover:underline">
          {lang === "zh" ? "使用條款" : "Terms of Use"}
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Swipee. All rights reserved.</p>
    </footer>
  );
}
