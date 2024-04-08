import React from "react";
import { career } from "../(data)/career";
export default function Career() {
  return (
    <div className="relative w-full px-10" id="Career">
      <div className="max-w-5xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Career</h2>
        <div className="">
          {career.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center">
                <img src={item.icon} className="w-16 h-16 rounded-full" />
                <h3 className="text-lg font-bold text-gray-900 ml-4">
                  {item.company}-{item.title}
                </h3>
              </div>
              <div className="ml-1 text-lg">{item.date}</div>
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
