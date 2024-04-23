import React from "react";
import { skills } from "../../app/_data/about";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";

export default function Skills() {
  const icons: Record<string, React.ReactNode> = {
    Frontend: <FaReact color="white" size="20px" />,
    Backend: <FaNodeJs color="white" size="20px" />,
    DatabaseOrTool: <FaDatabase color="white" size="20px" />,
  };

  return (
    <section className="bg-gray-100 text-black ">
      <div className="max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-left text-center">
            Skills
          </h2>
          <p className="mt-4 text-black md:text-left text-center text-sm md:text-base">
            I have experience in the following technologies.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {skills.map((skillItem) => (
            <div key={skillItem.icon} className="">
              <div className="flex items-center mb-2 md:flex-row flex-col">
                <span className="shrink-0 rounded-lg bg-gray-800 p-2">
                  {icons[skillItem.icon]}
                </span>
                <h2 className="text-lg font-bold ml-2">{skillItem.title}</h2>
              </div>
              <div className="flex items-start gap-4 md:text-left text-center">
                <p className="mt-1 text-sm text-black">
                  {skillItem.skills.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
