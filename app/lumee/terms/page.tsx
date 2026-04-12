"use client";

import { useState } from "react";
import Image from "next/image";

const content = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: April 12, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: `By downloading, installing, or using Lumee ("the App"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the App.`,
      },
      {
        title: "2. Description of Service",
        body: `Lumee is a widget customization app that allows you to create personalized home screen widgets with photos, stickers, themes, and useful tools such as weather, countdowns, and calendars.`,
      },
      {
        title: "3. Subscriptions",
        body: `**3.1 Lumee Pro**
Lumee offers an auto-renewable subscription called **Lumee Pro** that unlocks all themes, sticker packs, and future premium content.

- **Subscription Period:** Monthly
- **Free Trial:** New subscribers receive a 7-day free trial. You will not be charged during the trial period. If you do not cancel before the trial ends, your subscription will automatically convert to a paid monthly subscription.
- **Pricing:** The subscription price is displayed in the App at the time of purchase and may vary by region. The current price can be viewed on the subscription page within the App.
- **Billing:** Payment will be charged to your Apple ID account at confirmation of purchase (or at the end of the free trial period). The subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.
- **Renewal:** Your account will be charged for renewal within 24 hours prior to the end of the current subscription period at the same price.
- **Cancellation:** You can manage or cancel your subscription at any time through your device's Settings > Apple ID > Subscriptions. Cancellation takes effect at the end of the current billing period. No refunds will be provided for the unused portion of a subscription term.

**3.2 Coin Packs (Consumable Purchases)**
Lumee offers coin packs as one-time, consumable in-app purchases. Coins can be used to unlock individual theme packs. Coin purchases are non-refundable and non-transferable. Coin balances are managed on our server and synced to your device.

**3.3 Collaboration Theme Packs**
Lumee may offer limited-time collaboration theme packs created with artists. These packs require coins to unlock. Pro subscribers enjoy a discounted price during the exclusive period. After the exclusive period ends (as displayed in the App), these packs will be included in the Pro subscription at no additional cost.`,
      },
      {
        title: "4. User Content",
        body: `You retain ownership of all photos and content you use within the App. By using the App, you grant us a limited license to process your photos solely for the purpose of displaying them in your widgets. We do not upload, store, or share your photos on our servers.`,
      },
      {
        title: "5. Intellectual Property",
        body: `All themes, sticker packs, illustrations, and other creative assets within Lumee are the intellectual property of Lumee or its licensors. You may not reproduce, distribute, or create derivative works from these assets outside of the App.`,
      },
      {
        title: "6. Prohibited Uses",
        body: `You agree not to:
- Reverse engineer, decompile, or disassemble the App
- Use the App for any unlawful purpose
- Attempt to manipulate coin balances or circumvent purchase mechanisms
- Redistribute or resell any content from the App`,
      },
      {
        title: "7. Disclaimer of Warranties",
        body: `The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the App will be uninterrupted, error-free, or free of harmful components.`,
      },
      {
        title: "8. Limitation of Liability",
        body: `To the maximum extent permitted by applicable law, Lumee shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of data or profits.`,
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
    updated: "最後更新：2026 年 4 月 12 日",
    sections: [
      {
        title: "1. 條款接受",
        body: `下載、安裝或使用 Lumee（以下稱「本 App」）即表示您同意受本使用條款約束。如果您不同意，請勿使用本 App。`,
      },
      {
        title: "2. 服務說明",
        body: `Lumee 是一款 Widget 自訂 App，讓您可以使用照片、貼圖、主題和實用工具（如天氣、倒數計時和行事曆）打造個人化的主畫面 Widget。`,
      },
      {
        title: "3. 訂閱服務",
        body: `**3.1 Lumee Pro**
Lumee 提供名為 **Lumee Pro** 的自動續訂訂閱服務，可解鎖所有主題、貼圖包及未來的付費內容。

- **訂閱期間：** 每月訂閱
- **免費試用：** 新訂閱者享有 7 天免費試用。試用期間不會收取任何費用。如果您在試用結束前未取消，訂閱將自動轉為付費月訂閱。
- **價格：** 訂閱價格會在購買時顯示於 App 中，並可能因地區而異。目前價格可在 App 內的訂閱頁面查看。
- **計費：** 確認購買時（或免費試用期結束時），費用將從您的 Apple ID 帳號扣款。除非在當前期間結束前至少 24 小時關閉自動續訂，否則訂閱將自動續訂。
- **續訂：** 在當前訂閱期間結束前 24 小時內，系統將以相同價格向您的帳號收取續訂費用。
- **取消：** 您可以隨時透過裝置的「設定」>「Apple ID」>「訂閱項目」管理或取消訂閱。取消將在當前計費期結束時生效。已使用的訂閱期間不予退款。

**3.2 代幣包（消耗性購買）**
Lumee 提供代幣包作為一次性消耗性 App 內購買。代幣可用於解鎖個別主題包。代幣購買不可退款、不可轉讓。代幣餘額由我們的伺服器管理，並同步至您的裝置。

**3.3 聯名主題包**
Lumee 可能會推出與插畫家合作的限定聯名主題包。這些主題包需要使用代幣解鎖。Pro 訂閱者在獨佔期間享有折扣價格。獨佔期結束後（以 App 內顯示的日期為準），這些主題包將自動併入 Pro 訂閱，無需額外付費。`,
      },
      {
        title: "4. 使用者內容",
        body: `您保留在 App 中使用的所有照片和內容的所有權。使用本 App 即表示您授予我們有限的授權，僅用於在 Widget 中顯示您的照片。我們不會在伺服器上上傳、儲存或分享您的照片。`,
      },
      {
        title: "5. 智慧財產權",
        body: `Lumee 中的所有主題、貼圖包、插圖和其他創意素材均為 Lumee 或其授權方的智慧財產。您不得在 App 外複製、散布或創作這些素材的衍生作品。`,
      },
      {
        title: "6. 禁止行為",
        body: `您同意不會：
- 對 App 進行逆向工程、反編譯或反組譯
- 將 App 用於任何非法目的
- 企圖操控代幣餘額或規避購買機制
- 重新散布或轉售 App 中的任何內容`,
      },
      {
        title: "7. 免責聲明",
        body: `本 App 以「現況」和「可用」的狀態提供，不提供任何明示或暗示的保證。我們不保證 App 將不中斷、無錯誤或不含有害元件。`,
      },
      {
        title: "8. 責任限制",
        body: `在適用法律允許的最大範圍內，Lumee 不對因您使用 App 而產生的任何間接、附帶、特殊、後果性或懲罰性損害負責，包括但不限於資料或利潤的損失。`,
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

const stickerRow = [
  { src: "/lumee/pet_shiba.png", alt: "Shiba" },
  { src: "/lumee/pet_cat_orange.png", alt: "Cat" },
  { src: "/lumee/pet_hamster.png", alt: "Hamster" },
  { src: "/lumee/pet_corgi.png", alt: "Corgi" },
  { src: "/lumee/pet_poodle.png", alt: "Poodle" },
];

export default function TermsOfUse() {
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
      </div>
      <p>&copy; {new Date().getFullYear()} Lumee. All rights reserved.</p>
    </footer>
  );
}
