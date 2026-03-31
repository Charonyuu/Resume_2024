import React from "react";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-purple-600/5" />

      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-5">
          <p className="text-teal-400 font-medium text-sm tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Charonyu
            <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-400 font-normal mt-2">
              Full Stack Engineer
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            React Developer passionate about building high-quality web & mobile applications with excellent user experience.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="/#AboutMe"
              className="inline-flex items-center px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-gray-900 font-semibold text-sm rounded-lg transition-colors duration-200"
            >
              About Me
            </a>
            <a
              href="/#Projects"
              className="inline-flex items-center px-5 py-2.5 border border-gray-600 hover:border-teal-500 text-gray-300 hover:text-teal-400 font-medium text-sm rounded-lg transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
}
