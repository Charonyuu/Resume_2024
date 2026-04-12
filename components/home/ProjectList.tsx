"use client";
import React from "react";
import { projectData } from "../../app/_data/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function ProjectList() {
  return (
    <section id="Projects" className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Projects</h2>
        <div className="w-10 h-0.5 bg-teal-500 mb-2" />
        <p className="text-gray-500 text-sm mb-8">
          Web apps, developer tools, open-source packages, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.map((project) => {
            const hasDetailPage = !!project.slug;

            const Wrapper = hasDetailPage ? Link : "div";
            const wrapperProps = hasDetailPage
              ? { href: `/projects/${project.slug}` }
              : {};

            return (
              <Wrapper
                key={project.title}
                {...(wrapperProps as any)}
                className={`group rounded-xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-teal-500/30 transition-all duration-300 flex flex-col cursor-pointer ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${project.featured ? "h-48 sm:h-56" : "h-40"} ${
                    project.contain ? "flex items-center justify-center bg-gray-800/50" : "bg-gray-800/50"
                  }`}
                  style={project.slug === "lumee" ? {
                    background: "#FDF6EC",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 80 80'%3E%3Cg fill='%235C4A32' opacity='0.06'%3E%3Cellipse cx='40' cy='45' rx='8' ry='10'/%3E%3Ccircle cx='30' cy='34' r='4.5'/%3E%3Ccircle cx='50' cy='34' r='4.5'/%3E%3Ccircle cx='25' cy='42' r='3.5'/%3E%3Ccircle cx='55' cy='42' r='3.5'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  } : undefined}
                >
                  {project.contain ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={200}
                      className={`h-28 w-28 object-contain rounded-[22%] transition-transform duration-500 group-hover:scale-105${project.slug === "lumee" ? " drop-shadow-lg" : ""}`}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  )}
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 bg-teal-500/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {project.year}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      Latest
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  {project.tags && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="font-semibold text-white text-base mb-1.5 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[hsl(var(--border))]">
                    {hasDetailPage && (
                      <span
                        className="inline-flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Details
                        <FaArrowRight className="text-[10px]" />
                      </span>
                    )}
                    {hasDetailPage ? (
                      <span
                        role="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.link, "_blank", "noopener,noreferrer");
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 cursor-pointer"
                      >
                        Visit
                        <FaExternalLinkAlt className="text-[10px]" />
                      </span>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold"
                      >
                        View Project
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
