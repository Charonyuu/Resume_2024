"use client";
import React from "react";
import { projectData } from "../../app/_data/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function ProjectList() {
  return (
    <section className="bg-gray-50 w-full" id="Projects">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            以下是我開發的專案與作品，涵蓋 Web 應用、開發工具、開源套件等，持續學習與實作中。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => {
            const hasDetailPage = !!project.slug;

            return (
              <div
                key={project.title}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex flex-col ${
                  project.featured
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${project.imageBg || "bg-gray-100"} ${
                    project.featured ? "h-56 sm:h-64" : "h-48"
                  } ${project.contain ? "flex items-center justify-center" : ""}`}
                >
                  {project.contain ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={200}
                      className="h-32 w-32 object-contain rounded-[22%] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Latest
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-teal-50 text-teal-700 text-xs font-medium px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                    {hasDetailPage && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        查看介紹
                        <FaArrowRight className="text-xs" />
                      </Link>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                        hasDetailPage
                          ? "text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                          : "bg-teal-500 hover:bg-teal-600 text-white"
                      }`}
                    >
                      {hasDetailPage ? "前往專案" : "查看專案"}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
