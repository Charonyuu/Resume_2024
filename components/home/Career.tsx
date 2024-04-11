import React from "react";
import { career } from "../../app/_data/career";
export default function Career() {
  return (
    <div
      className="relative w-full px-4 md:px-10 text-sm md:text-base"
      id="Career"
    >
      <div className="max-w-5xl mx-auto md:py-16 py-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Career
        </h2>
        <div className="border-l-2 border-gray-500 border-solid pl-8 relative">
          {career.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="bg-gray-600 w-4 h-4 absolute left-0 -translate-x-1/2 rounded-full" />
              <div className="ml-1 text-lg">{item.date}</div>
              <div className="flex items-center">
                <img
                  src={item.icon}
                  className="w-16 h-16 rounded-full"
                  alt={item.title + "icon"}
                />
                <h3 className="text-base md:text-lg font-bold text-gray-900 ml-4">
                  {item.company}-{item.title}
                </h3>
              </div>
              <div className="ml-1">
                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index} className="mt-2 text-gray-700">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
