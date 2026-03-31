import React from "react";
import { skills } from "../../app/_data/about";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";

export default function Skills() {
  const icons: Record<string, React.ReactNode> = {
    Frontend: <FaReact className="text-teal-400" size={18} />,
    Backend: <FaNodeJs className="text-teal-400" size={18} />,
    DatabaseOrTool: <FaDatabase className="text-teal-400" size={18} />,
  };

  return (
    <section id="Skills" className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Skills</h2>
        <div className="w-10 h-0.5 bg-teal-500 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillItem) => (
            <div
              key={skillItem.icon}
              className="rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-5 hover:border-teal-500/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  {icons[skillItem.icon]}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {skillItem.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillItem.skills.map((item) => (
                  <span
                    key={item}
                    className="inline-block bg-white/5 text-gray-300 rounded-md px-2.5 py-1 text-xs font-medium border border-white/5 hover:border-teal-500/20 hover:text-teal-300 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
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
