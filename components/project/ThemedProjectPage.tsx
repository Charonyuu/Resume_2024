"use client";

import Image from "next/image";
import Link from "next/link";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { FaArrowLeft, FaCheckCircle, FaCog, FaAppStoreIos } from "react-icons/fa";
import type { DetailTheme } from "../../app/_data/project";

interface ThemedProjectPageProps {
  project: {
    title: string;
    image: string;
    description: string;
    link: string;
    contain?: boolean;
    tags?: string[];
    detailTheme: DetailTheme;
    detailContent: {
      subtitle: string;
      features: string[];
      techStack: string[];
      screenshots?: string[];
    };
  };
}

export default function ThemedProjectPage({ project }: ThemedProjectPageProps) {
  const { detailContent, detailTheme: t } = project;

  return (
    <div className="min-h-screen" style={{ backgroundColor: t.bgColor, color: t.textColor }}>
      {/* Pattern background */}
      {t.patternStyle && (
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
          style={t.patternStyle}
        />
      )}

      {/* Hero */}
      <div
        className="relative z-10 border-b"
        style={{ background: t.heroBg, borderColor: t.cardBorder }}
      >
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <Link
            href="/#Projects"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: `${t.subtextColor}aa` }}
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
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${t.accentColor}15`,
                      color: t.accentColor,
                      borderColor: `${t.accentColor}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3"
                style={{ color: t.textColor }}
              >
                {project.title}
              </h1>
              <p className="leading-relaxed mb-5" style={{ color: `${t.subtextColor}b3` }}>
                {detailContent.subtitle}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
                style={{ background: `linear-gradient(to right, ${t.accentColor}, ${t.accentHoverColor})` }}
              >
                <FaAppStoreIos />
                App Store
              </a>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div
                className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-[28px] overflow-hidden shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentHoverColor})` }}
              >
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

      {/* Stickers */}
      {t.stickers && t.stickers.length > 0 && (
        <div className="relative z-10 flex justify-center gap-3 py-6" style={{ backgroundColor: t.bgColor }}>
          {t.stickers.map((s) => (
            <Image key={s.alt} src={s.src} alt={s.alt} width={36} height={36} className="opacity-50 drop-shadow-sm" />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Features */}
          <div
            className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm"
            style={{ backgroundColor: t.cardBg, borderColor: t.cardBorder }}
          >
            <h2 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: t.textColor }}>
              <FaCheckCircle style={{ color: t.accentColor }} />
              Features
            </h2>
            <ul className="space-y-3">
              {detailContent.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: t.accentColor }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: `${t.subtextColor}cc` }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Description */}
          <div className="space-y-6">
            <div
              className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm"
              style={{ backgroundColor: t.cardBg, borderColor: t.cardBorder }}
            >
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: t.textColor }}>
                <FaCog style={{ color: t.accentColor }} />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {detailContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-medium text-sm px-3 py-1.5 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: t.tagBg,
                      color: t.subtextColor,
                      borderColor: t.cardBorder,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm"
              style={{ backgroundColor: t.cardBg, borderColor: t.cardBorder }}
            >
              <h2 className="text-lg font-bold mb-3" style={{ color: t.textColor }}>
                About This Project
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: `${t.subtextColor}cc` }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        {detailContent.screenshots && detailContent.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-5" style={{ color: t.textColor }}>
              Screenshots
            </h2>
            <ScreenshotCarousel
              screenshots={detailContent.screenshots}
              title={project.title}
            />
          </div>
        )}

        {/* Legal links */}
        {(t.legalLinks || t.copyright) && (
          <div className="mt-12 flex flex-col items-center gap-4">
            {t.legalLinks && (
              <div className="flex items-center gap-3">
                {t.legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors"
                    style={{
                      color: t.accentColor,
                      borderColor: t.cardBorder,
                      backgroundColor: t.cardBg,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {t.copyright && (
              <p className="text-xs" style={{ color: `${t.subtextColor}66` }}>
                &copy; {new Date().getFullYear()} {t.copyright}. All rights reserved.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
