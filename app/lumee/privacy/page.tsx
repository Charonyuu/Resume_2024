"use client";

import { useState } from "react";
import Image from "next/image";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 12, 2026",
    sections: [
      {
        title: "1. Introduction",
        body: `Welcome to Lumee ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Lumee app.`,
      },
      {
        title: "2. Information We Collect",
        body: `**2.1 Information You Provide**
- Photos you select for widget display (stored locally on your device only)
- Widget configuration and preferences
- In-app purchase transaction records

**2.2 Automatically Collected Information**
- Anonymous usage analytics (page views, feature usage)
- Device type and operating system version
- App crash logs and performance data

**2.3 Location Data**
If you enable the weather widget, we request your approximate location solely to display local weather information. Location data is not stored on our servers.

**2.4 Health Data**
If you enable the step count widget, we request read-only access to your step count from Apple HealthKit. This data is used only for display purposes and is never uploaded to our servers.`,
      },
      {
        title: "3. How We Use Your Information",
        body: `- To provide and maintain the app's functionality
- To process in-app purchases and manage your coin balance
- To improve our app and develop new features
- To diagnose technical issues and improve performance`,
      },
      {
        title: "4. Data Storage & Security",
        body: `Your photos and widget configurations are stored locally on your device and synced via iCloud if enabled. We use anonymous user identifiers (UUID) to manage coin balances on our server. We do not store your name, email, or any personally identifiable information on our servers.`,
      },
      {
        title: "5. Third-Party Services",
        body: `We use the following third-party services:
- **Apple StoreKit** — for processing in-app purchases
- **Apple HealthKit** — for step count data (if enabled by user)
- **Apple WeatherKit** — for weather data
- **Cloudflare R2** — for hosting theme assets and sticker packs`,
      },
      {
        title: "6. Children's Privacy",
        body: `Lumee does not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.`,
      },
      {
        title: "7. Data Retention",
        body: `We retain your anonymous usage data and coin balance for as long as your account is active. You may request deletion of your data at any time by contacting us.`,
      },
      {
        title: "8. Your Rights",
        body: `You have the right to:
- Access the personal data we hold about you
- Request correction or deletion of your data
- Opt out of analytics tracking
- Withdraw consent for location or health data access via device settings`,
      },
      {
        title: "9. Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy within the app. Your continued use of Lumee after changes are posted constitutes acceptance of the updated policy.`,
      },
      {
        title: "10. Contact Us",
        body: `If you have any questions about this Privacy Policy, please contact us at:\ncharonyuwork@gmail.com`,
      },
    ],
  },
  zh: {
    title: "隱私權政策",
    updated: "最後更新：2026 年 4 月 12 日",
    sections: [
      {
        title: "1. 前言",
        body: `歡迎使用 Lumee（以下稱「我們」）。我們重視您的隱私，並致力於保護您分享給我們的個人資訊。本隱私權政策說明我們在您使用 Lumee App 時如何收集、使用及保護您的資訊。`,
      },
      {
        title: "2. 我們收集的資訊",
        body: `**2.1 您提供的資訊**
- 您選擇用於 Widget 顯示的照片（僅儲存於您的裝置上）
- Widget 設定與偏好
- App 內購買交易紀錄

**2.2 自動收集的資訊**
- 匿名使用分析（頁面瀏覽、功能使用）
- 裝置類型與作業系統版本
- App 當機日誌與效能數據

**2.3 位置資料**
如果您啟用天氣 Widget，我們會請求您的概略位置，僅用於顯示當地天氣資訊。位置資料不會儲存在我們的伺服器上。

**2.4 健康資料**
如果您啟用步數 Widget，我們會請求唯讀存取您 Apple HealthKit 中的步數資料。此資料僅供顯示用途，絕不會上傳至我們的伺服器。`,
      },
      {
        title: "3. 我們如何使用您的資訊",
        body: `- 提供並維護 App 的功能
- 處理 App 內購買並管理您的代幣餘額
- 改善我們的 App 並開發新功能
- 診斷技術問題並改善效能`,
      },
      {
        title: "4. 資料儲存與安全",
        body: `您的照片和 Widget 設定儲存於您的裝置本地，若啟用 iCloud 則會透過 iCloud 同步。我們使用匿名使用者識別碼（UUID）在伺服器上管理代幣餘額。我們不會在伺服器上儲存您的姓名、電子郵件或任何個人可識別資訊。`,
      },
      {
        title: "5. 第三方服務",
        body: `我們使用以下第三方服務：
- **Apple StoreKit** — 處理 App 內購買
- **Apple HealthKit** — 步數資料（使用者啟用時）
- **Apple WeatherKit** — 天氣資料
- **Cloudflare R2** — 託管主題素材與貼圖包`,
      },
      {
        title: "6. 兒童隱私",
        body: `Lumee 不會故意收集 13 歲以下兒童的個人資訊。如果您認為我們已收集了 13 歲以下兒童的資訊，請立即與我們聯繫。`,
      },
      {
        title: "7. 資料保留",
        body: `只要您的帳戶仍然有效，我們將保留您的匿名使用數據和代幣餘額。您可以隨時聯繫我們要求刪除您的資料。`,
      },
      {
        title: "8. 您的權利",
        body: `您有權：
- 存取我們持有的您的個人資料
- 要求更正或刪除您的資料
- 選擇退出分析追蹤
- 透過裝置設定撤回位置或健康資料的存取授權`,
      },
      {
        title: "9. 政策變更",
        body: `我們可能會不時更新本隱私權政策。我們會在 App 內發布新政策來通知您任何重大變更。在變更發布後繼續使用 Lumee 即表示接受更新的政策。`,
      },
      {
        title: "10. 聯絡我們",
        body: `如果您對本隱私權政策有任何問題，請透過以下方式聯繫我們：\ncharonyuwork@gmail.com`,
      },
    ],
  },
};

const stickerRow = [
  { src: "/lumee/pet_shiba.png", alt: "Shiba" },
  { src: "/lumee/pet_cat_orange.png", alt: "Cat" },
  { src: "/lumee/pet_hamster.png", alt: "Hamster" },
  { src: "/lumee/pet_corgi.png", alt: "Corgi" },
  { src: "/lumee/pet_poodle.png", alt: "Poodle" },
];

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "zh">("zh");
  const t = content[lang];

  return (
    <main className="max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-block mb-4 rounded-[22px] overflow-hidden shadow-lg">
          <Image src="/lumee/appicon.png" alt="Lumee" width={72} height={72} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3D2C1E] mb-2">{t.title}</h1>
        <p className="text-sm text-[#8B7355]">{t.updated}</p>

        {/* Language toggle */}
        <div className="mt-4 inline-flex items-center bg-white/70 rounded-full p-1 border border-[#E8D5B5] shadow-sm">
          <button
            onClick={() => setLang("zh")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === "zh"
                ? "bg-gradient-to-r from-[#A68B5B] to-[#8B6914] text-white shadow-sm"
                : "text-[#8B7355] hover:text-[#5C4A32]"
            }`}
          >
            中文
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              lang === "en"
                ? "bg-gradient-to-r from-[#A68B5B] to-[#8B6914] text-white shadow-sm"
                : "text-[#8B7355] hover:text-[#5C4A32]"
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
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#E8D5B5] shadow-sm"
          >
            <h2 className="text-base sm:text-lg font-bold text-[#5C4A32] mb-3">{section.title}</h2>
            <div className="text-sm leading-relaxed text-[#5C4A32]/80 whitespace-pre-line">
              <FormattedText text={section.body} />
            </div>
          </section>
        ))}
      </div>

      {/* Sticker row */}
      <div className="flex justify-center gap-2 sm:gap-3 my-8 sm:my-10">
        {stickerRow.map((s) => (
          <Image key={s.alt} src={s.src} alt={s.alt} width={36} height={36} className="opacity-60 drop-shadow-sm" />
        ))}
      </div>

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
              <span className="text-[#8B6914] mt-0.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={i} className="font-medium text-[#5C4A32] mt-3 mb-1">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.includes("@")) {
          return (
            <a key={i} href={`mailto:${line.trim()}`} className="text-[#8B6914] underline hover:text-[#A68B5B] transition-colors">
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
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#5C4A32]">$1</strong>');
}

function Footer({ lang }: { lang: string }) {
  return (
    <footer className="text-center text-xs text-[#8B7355]/60">
      <div className="flex items-center justify-center gap-4 mb-3">
        <a href="/lumee/privacy" className="text-[#8B6914] hover:underline">
          {lang === "zh" ? "隱私權政策" : "Privacy Policy"}
        </a>
        <span>·</span>
        <a href="/lumee/terms" className="text-[#8B6914] hover:underline">
          {lang === "zh" ? "使用條款" : "Terms of Use"}
        </a>
        <span>·</span>
        <a href="/lumee/roadmap" className="text-[#8B6914] hover:underline">
          Roadmap
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Lumee. All rights reserved.</p>
    </footer>
  );
}
