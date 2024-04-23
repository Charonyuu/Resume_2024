import React from "react";
import { description } from "../../app/_data/about";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="AboutMe">
      <div className="max-w-5xl px-6 mx-auto py-4 md:py-16 flex flex-col items-center text-sm md:text-base">
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
        <div className="md:text-justify text-left">{description}</div>
      </div>
    </div>
  );
}
