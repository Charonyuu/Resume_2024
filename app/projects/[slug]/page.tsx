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
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-600/20 via-[hsl(var(--background))] to-purple-600/10 border-b border-[hsl(var(--border))]">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
          <Link
            href="/#Projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-400 text-sm mb-6 transition-colors"
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
                    className="bg-teal-500/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                {project.title}
              </h1>
              <p className="text-gray-400 leading-relaxed mb-5">
                {detailContent.subtitle}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Visit Project
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm max-w-[220px] mx-auto lg:mx-0 border border-[hsl(var(--border))]">
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
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Features */}
          <div>
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <FaCheckCircle className="text-teal-400" />
              Features
            </h2>
            <ul className="space-y-3">
              {detailContent.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Description */}
          <div>
            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <FaCog className="text-teal-400" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {detailContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 text-gray-300 font-medium text-sm px-3 py-1.5 rounded-lg border border-[hsl(var(--border))] hover:border-teal-500/30 hover:text-teal-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold text-white mb-3">
                About This Project
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Screenshots Carousel */}
        {detailContent.screenshots && detailContent.screenshots.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-white mb-5">
              Screenshots
            </h2>
            <ScreenshotCarousel
              screenshots={detailContent.screenshots}
              title={project.title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
