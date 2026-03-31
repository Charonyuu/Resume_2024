import React from "react";
import { career } from "../../app/_data/career";

export default function Career() {
  return (
    <section id="Career" className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Career</h2>
        <div className="w-10 h-0.5 bg-teal-500 mb-8" />

        <div className="relative pl-6 border-l border-gray-700">
          {career.map((item, idx) => (
            <div key={item.company} className={idx < career.length - 1 ? "mb-10" : ""}>
              {/* Timeline dot */}
              <div className="absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-[hsl(var(--background))]" />

              {/* Date */}
              <p className="text-xs text-teal-400 font-medium tracking-wider uppercase mb-2">
                {item.date}
              </p>

              {/* Company & Title */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.icon}
                  className="w-10 h-10 rounded-full border border-gray-700"
                  alt={item.company}
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-full bg-teal-500/10 text-teal-300 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Descriptions */}
              <ul className="space-y-1.5">
                {item.description.map((desc) => (
                  <li key={desc} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
    </section>
  );
}
