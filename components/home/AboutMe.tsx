import React from "react";
import { description, skills } from "../../app/(data)/about";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";
import Image from "next/image";

export default function AboutMe() {
  const icons: Record<string, React.ReactNode> = {
    Frontend: <FaReact color="white" size="20px" />,
    Backend: <FaNodeJs color="white" size="20px" />,
    DatabaseOrTool: <FaDatabase color="white" size="20px" />,
  };

  return (
    <>
      <div id="AboutMe">
        <div className="max-w-5xl mx-auto py-16 flex flex-col items-center">
          <Image
            width={160}
            height={160}
            src="/charonyu.jpg"
            className="rounded-full object-cover"
            alt="Charonyu"
          />
          <h2 className="text-3xl my-4 font-bold text-gray-900 text-center flex items-center justify-center">
            About Me
          </h2>
          <div className="text-justify">{description}</div>
        </div>
      </div>
      <section className="bg-gray-100 text-black">
        <div className="max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Skill</h2>
            <p className="mt-4 text-black">
              I have experience in the following technologies.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div className="flex items-start gap-4" key={skill.icon}>
                <span className="shrink-0 rounded-lg bg-gray-800 p-2">
                  {icons[skill.icon]}
                </span>
                <div>
                  <h2 className="text-lg font-bold">{skill.title}</h2>

                  <p className="mt-1 text-sm text-black">
                    {skill.skills.map((item, index) => (
                      <span
                        key={index}
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
    </>
  );
}
