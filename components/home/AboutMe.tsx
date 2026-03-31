import React from "react";
import { description } from "../../app/_data/about";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">About Me</h2>
        <div className="w-10 h-0.5 bg-teal-500 mb-6" />
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Bottom divider */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </section>
  );
}
