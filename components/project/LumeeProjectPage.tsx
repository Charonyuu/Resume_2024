"use client";

import Image from "next/image";
import Link from "next/link";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { FaArrowLeft, FaCheckCircle, FaCog, FaAppStoreIos } from "react-icons/fa";

interface LumeeProjectPageProps {
  project: {
    title: string;
    image: string;
    description: string;
    link: string;
    tags?: string[];
    detailContent: {
      subtitle: string;
      features: string[];
      techStack: string[];
      screenshots?: string[];
    };
  };
}

const stickers = [
  { src: "/lumee/pet_shiba.png", alt: "Shiba" },
  { src: "/lumee/pet_cat_orange.png", alt: "Cat" },
  { src: "/lumee/pet_hamster.png", alt: "Hamster" },
  { src: "/lumee/pet_corgi.png", alt: "Corgi" },
  { src: "/lumee/pet_poodle.png", alt: "Poodle" },
];

export default function LumeeProjectPage({ project }: LumeeProjectPageProps) {
  const { detailContent } = project;

  return (
    <div className="min-h-screen bg-[#FDF6EC] text-[#3D2C1E]">
      {/* Paw print background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%235C4A32'%3E%3Cellipse cx='40' cy='45' rx='8' ry='10'/%3E%3Ccircle cx='30' cy='34' r='4.5'/%3E%3Ccircle cx='50' cy='34' r='4.5'/%3E%3Ccircle cx='25' cy='42' r='3.5'/%3E%3Ccircle cx='55' cy='42' r='3.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero */}
      <div className="relative z-10 bg-gradient-to-br from-[#F5E6C8] via-[#FDF6EC] to-[#E8D5B5] border-b border-[#E8D5B5]">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <Link
            href="/#Projects"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#8B6914] text-sm mb-6 transition-colors"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#8B6914]/10 text-[#8B6914] text-xs font-medium px-3 py-1 rounded-full border border-[#8B6914]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2C1E] leading-tight mb-3">
                {project.title}
              </h1>
              <p className="text-[#5C4A32]/70 leading-relaxed mb-5">
                {detailContent.subtitle}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A68B5B] to-[#8B6914] hover:from-[#8B6914] hover:to-[#705510] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
              >
                <FaAppStoreIos />
                App Store
              </a>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-[28px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#A68B5B] to-[#8B6914]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={144}
                  height={144}
                  className="w-full h-full object-contain p-1 rounded-[28px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticker row */}
      <div className="relative z-10 flex justify-center gap-3 py-6 bg-[#FDF6EC]">
        {stickers.map((s) => (
          <Image key={s.alt} src={s.src} alt={s.alt} width={36} height={36} className="opacity-50 drop-shadow-sm" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8D5B5] shadow-sm">
            <h2 className="text-lg font-bold text-[#3D2C1E] mb-5 flex items-center gap-2">
              <FaCheckCircle className="text-[#8B6914]" />
              Features
            </h2>
            <ul className="space-y-3">
              {detailContent.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#8B6914] shrink-0" />
                  <span className="text-[#5C4A32]/80 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Description */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8D5B5] shadow-sm">
              <h2 className="text-lg font-bold text-[#3D2C1E] mb-5 flex items-center gap-2">
                <FaCog className="text-[#8B6914]" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {detailContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#F5E6C8] text-[#5C4A32] font-medium text-sm px-3 py-1.5 rounded-lg border border-[#E8D5B5] hover:border-[#8B6914]/40 hover:text-[#8B6914] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8D5B5] shadow-sm">
              <h2 className="text-lg font-bold text-[#3D2C1E] mb-3">
                About This Project
              </h2>
              <p className="text-[#5C4A32]/80 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        {detailContent.screenshots && detailContent.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-[#3D2C1E] mb-5">
              Screenshots
            </h2>
            <ScreenshotCarousel
              screenshots={detailContent.screenshots}
              title={project.title}
            />
          </div>
        )}

        {/* Legal links */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/lumee/privacy"
              className="inline-flex items-center gap-1.5 text-sm text-[#8B6914] font-medium px-4 py-2 rounded-full border border-[#E8D5B5] bg-white/60 hover:bg-white/80 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/lumee/terms"
              className="inline-flex items-center gap-1.5 text-sm text-[#8B6914] font-medium px-4 py-2 rounded-full border border-[#E8D5B5] bg-white/60 hover:bg-white/80 transition-colors"
            >
              Terms of Use
            </a>
          </div>
          <p className="text-xs text-[#8B7355]/40">&copy; {new Date().getFullYear()} Lumee. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
