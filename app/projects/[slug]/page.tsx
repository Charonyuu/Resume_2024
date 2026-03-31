import { notFound } from "next/navigation";
import { projectData } from "../../_data/project";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCog,
} from "react-icons/fa";
import ScreenshotCarousel from "@/components/project/ScreenshotCarousel";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectData
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug! }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projectData.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Charonyu`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectData.find((p) => p.slug === params.slug);

  if (!project || !project.detailContent) {
    notFound();
  }

  const { detailContent } = project;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link
            href="/#Projects"
            className="inline-flex items-center gap-2 text-teal-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <FaArrowLeft />
            返回作品集
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                {project.title}
              </h1>
              <p className="text-teal-100 leading-relaxed mb-5">
                {detailContent.subtitle}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors"
              >
                前往使用
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm max-w-[220px] mx-auto lg:mx-0">
              <Image
                src={project.image}
                alt={project.title}
                width={280}
                height={210}
                className={`w-full h-auto ${
                  project.contain ? "object-contain p-4 rounded-3xl" : "object-cover"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Features */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaCheckCircle className="text-teal-500" />
              功能特色
            </h2>
            <ul className="space-y-3">
              {detailContent.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaCog className="text-teal-500" />
              技術架構
            </h2>
            <div className="flex flex-wrap gap-2">
              {detailContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 font-medium text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                關於此專案
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots Carousel */}
        {detailContent.screenshots && detailContent.screenshots.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              畫面截圖
            </h2>
            <ScreenshotCarousel
              screenshots={detailContent.screenshots}
              title={project.title}
            />
          </div>
        )}

      </div>
    </main>
  );
}
