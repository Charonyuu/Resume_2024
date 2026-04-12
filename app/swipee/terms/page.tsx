"use client";

import { useState } from "react";
import Image from "next/image";

const content = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: April 13, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: `By downloading, installing, or using Swipee ("the App"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the App.`,
      },
      {
        title: "2. Description of Service",
        body: `Swipee is a photo organization app that helps you quickly sort, categorize, and clean up your photo library using intuitive swipe gestures. Features include smart AI-powered category suggestions, face recognition grouping, album management, and timeline browsing.`,
      },
      {
        title: "3. Photo Library Access",
        body: `Swipee requires access to your photo library to function. By granting access, you authorize the App to:
- Display your photos and videos for browsing and organization
- Create, modify, and manage albums on your behalf
- Mark photos for deletion (requires your confirmation before permanent removal)
- Read photo metadata such as capture date and GPS location

All operations are performed locally on your device. Swipee does not upload your photos to any external server.`,
      },
      {
        title: "4. On-Device AI Features",
        body: `Swipee uses Apple's Vision framework for smart category suggestions and face recognition. All AI processing is performed entirely on your device. By using these features, you acknowledge that:
- Classification results are approximate and may not always be accurate
- Face grouping is based on visual similarity and may contain errors
- No photo data is transmitted to external servers for AI processing`,
      },
      {
        title: "5. User Data & Content",
        body: `You retain full ownership of all photos and content in your photo library. Swipee stores your swipe history, album preferences, and organizational decisions locally on your device using UserDefaults. No account creation is required. Uninstalling the App removes all app-related data.`,
      },
      {
        title: "6. Prohibited Uses",
        body: `You agree not to:
- Reverse engineer, decompile, or disassemble the App
- Use the App for any unlawful purpose
- Attempt to circumvent any security features of the App
- Redistribute or resell the App or any of its components`,
      },
      {
        title: "7. Disclaimer of Warranties",
        body: `The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the App will be uninterrupted, error-free, or free of harmful components. Photo deletion actions are irreversible once confirmed — please review carefully before confirming.`,
      },
      {
        title: "8. Limitation of Liability",
        body: `To the maximum extent permitted by applicable law, Swipee shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of photos or data.`,
      },
      {
        title: "9. Changes to Terms",
        body: `We reserve the right to modify these Terms of Use at any time. We will notify you of material changes by posting the updated terms within the App. Your continued use of the App after changes are posted constitutes acceptance of the revised terms.`,
      },
      {
        title: "10. Governing Law",
        body: `These Terms of Use are governed by and construed in accordance with the laws of Taiwan (R.O.C.), without regard to conflict of law provisions.`,
      },
      {
        title: "11. Contact Us",
        body: `If you have any questions about these Terms of Use, please contact us at:\ncharonyuwork@gmail.com`,
      },
    ],
  },
  zh: {
    title: "使用條款",
    updated: "最後更新：2026 年 4 月 13 日",
    sections: [
      {
        title: "1. 條款接受",
        body: `下載、安裝或使用 Swipee（以下稱「本 App」）即表示您同意受本使用條款約束。如果您不同意，請勿使用本 App。`,
      },
      {
        title: "2. 服務說明",
        body: `Swipee 是一款照片整理 App，透過直覺的滑動手勢幫助您快速分類、歸類與清理照片圖庫。功能包括 AI 智慧分類建議、人臉辨識分群、相簿管理與時間軸瀏覽。`,
      },
      {
        title: "3. 照片圖庫存取",
        body: `Swipee 需要存取您的照片圖庫才能正常運作。授予存取權限即表示您授權本 App：
- 顯示您的照片和影片以供瀏覽與整理
- 代您建立、修改和管理相簿
- 標記照片以供刪除（永久移除前需要您的確認）
- 讀取照片後設資料，如拍攝日期和 GPS 位置

所有操作均在您的裝置本地執行。Swipee 不會將您的照片上傳至任何外部伺服器。`,
      },
      {
        title: "4. 裝置端 AI 功能",
        body: `Swipee 使用 Apple Vision 框架進行智慧分類建議和人臉辨識。所有 AI 處理完全在您的裝置上執行。使用這些功能即表示您瞭解：
- 分類結果為近似值，不一定總是準確
- 人臉分群基於視覺相似度，可能包含錯誤
- 不會將任何照片資料傳送至外部伺服器進行 AI 處理`,
      },
      {
        title: "5. 使用者資料與內容",
        body: `您保留照片圖庫中所有照片和內容的完整所有權。Swipee 使用 UserDefaults 將您的滑動記錄、相簿偏好和整理決策儲存在您的裝置本地。不需要建立帳號。解除安裝 App 將移除所有 App 相關資料。`,
      },
      {
        title: "6. 禁止行為",
        body: `您同意不會：
- 對 App 進行逆向工程、反編譯或反組譯
- 將 App 用於任何非法目的
- 企圖規避 App 的任何安全功能
- 重新散布或轉售 App 或其任何元件`,
      },
      {
        title: "7. 免責聲明",
        body: `本 App 以「現況」和「可用」的狀態提供，不提供任何明示或暗示的保證。我們不保證 App 將不中斷、無錯誤或不含有害元件。照片刪除操作一旦確認即不可逆 — 請在確認前仔細檢查。`,
      },
      {
        title: "8. 責任限制",
        body: `在適用法律允許的最大範圍內，Swipee 不對因您使用 App 而產生的任何間接、附帶、特殊、後果性或懲罰性損害負責，包括但不限於照片或資料的損失。`,
      },
      {
        title: "9. 條款變更",
        body: `我們保留隨時修改本使用條款的權利。我們將在 App 內發布更新的條款來通知您重大變更。在變更發布後繼續使用 App 即表示接受修訂後的條款。`,
      },
      {
        title: "10. 準據法",
        body: `本使用條款受中華民國（臺灣）法律管轄並據此解釋，不考慮法律衝突條款。`,
      },
      {
        title: "11. 聯絡我們",
        body: `如果您對本使用條款有任何問題，請透過以下方式聯繫我們：\ncharonyuwork@gmail.com`,
      },
    ],
  },
};

export default function TermsOfUse() {
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
