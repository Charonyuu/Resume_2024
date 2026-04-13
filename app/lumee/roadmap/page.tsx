import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  lumeeRoadmap,
  statusConfig,
  categoryConfig,
} from "../../_data/lumee-roadmap";

export const metadata: Metadata = {
  title: "Lumee Roadmap — 功能路線圖",
  description:
    "查看 Lumee App 的功能更新紀錄與未來開發計畫，包含 Widget、Hub、主題包等最新動態。",
};

const stickerRow = [
  { src: "/lumee/pet_shiba.png", alt: "Shiba" },
  { src: "/lumee/pet_cat_orange.png", alt: "Cat" },
  { src: "/lumee/pet_hamster.png", alt: "Hamster" },
  { src: "/lumee/pet_corgi.png", alt: "Corgi" },
  { src: "/lumee/pet_poodle.png", alt: "Poodle" },
];

export default function RoadmapPage() {
  const shipped = lumeeRoadmap.filter((item) => item.status === "shipped");
  const inProgress = lumeeRoadmap.filter(
    (item) => item.status === "in-progress"
  );
  const planned = lumeeRoadmap.filter((item) => item.status === "planned");

  return (
    <main className="max-w-2xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-block mb-4 rounded-[22px] overflow-hidden shadow-lg">
          <Image src="/lumee/appicon.png" alt="Lumee" width={72} height={72} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3D2C1E] mb-2">
          Lumee Roadmap
        </h1>
        <p className="text-sm text-[#8B7355]">
          功能更新紀錄與未來開發計畫
        </p>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {(["shipped", "in-progress", "planned"] as const).map((status) => {
          const config = statusConfig[status];
          const count =
            status === "shipped"
              ? shipped.length
              : status === "in-progress"
                ? inProgress.length
                : planned.length;
          return (
            <div
              key={status}
              className="rounded-xl p-3 text-center border"
              style={{
                backgroundColor: config.bg,
                borderColor: config.border,
              }}
            >
              <div
                className="text-xl sm:text-2xl font-bold"
                style={{ color: config.color }}
              >
                {count}
              </div>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: config.color }}
              >
                {config.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-[#E8D5B5]" />

        {/* Planned Section */}
        {planned.length > 0 && (
          <TimelineSection title="計畫中" items={planned} />
        )}

        {/* In Progress Section */}
        {inProgress.length > 0 && (
          <TimelineSection title="開發中" items={inProgress} />
        )}

        {/* Shipped Section */}
        {shipped.length > 0 && (
          <TimelineSection title="已上線" items={shipped} />
        )}
      </div>

      {/* Sticker row */}
      <div className="flex justify-center gap-2 sm:gap-3 my-8 sm:my-10">
        {stickerRow.map((s) => (
          <Image
            key={s.alt}
            src={s.src}
            alt={s.alt}
            width={36}
            height={36}
            className="opacity-60 drop-shadow-sm"
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-[#8B7355]/60">
        <div className="flex items-center justify-center gap-4 mb-3">
          <Link href="/lumee/privacy" className="text-[#8B6914] hover:underline">
            隱私權政策
          </Link>
          <span>·</span>
          <Link href="/lumee/terms" className="text-[#8B6914] hover:underline">
            使用條款
          </Link>
          <span>·</span>
          <Link href="/lumee/roadmap" className="text-[#8B6914] hover:underline font-medium">
            Roadmap
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Lumee. All rights reserved.</p>
      </footer>
    </main>
  );
}

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: typeof lumeeRoadmap;
}) {
  return (
    <div className="mb-8">
      <div className="relative flex items-center gap-3 mb-4 pl-10 sm:pl-12">
        <h2 className="text-base font-bold text-[#5C4A32]">{title}</h2>
        <div className="flex-1 h-px bg-[#E8D5B5]" />
      </div>

      <div className="space-y-4">
        {items.map((item, i) => {
          const status = statusConfig[item.status];
          const cat = categoryConfig[item.category];

          return (
            <div key={`${item.title}-${i}`} className="relative flex gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-8 sm:w-10 flex justify-center pt-4">
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: status.color }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#E8D5B5] shadow-sm">
                {/* Top row: date/version + badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-[#8B7355]">
                    {item.version && `${item.version} · `}
                    {item.date}
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{
                      color: status.color,
                      backgroundColor: status.bg,
                      borderColor: status.border,
                    }}
                  >
                    {status.label}
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F5E6C8] text-[#5C4A32] border border-[#E8D5B5]">
                    {cat.emoji} {cat.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#3D2C1E] mb-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#5C4A32]/80">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
