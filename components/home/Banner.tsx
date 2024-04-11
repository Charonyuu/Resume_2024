import Image from "next/image";
import React from "react";
export default function Banner() {
  return (
    <section>
      {/* Photo by <a href="https://unsplash.com/@cgower?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Gower</a> on <a href="https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       */}
      <div className="relative w-full h-[400px]">
        <img
          className="w-full h-full object-cover"
          src="banner.jpg"
          alt="Banner"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-55 " />
        <div className="absolute insert-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-xl text-white text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              CHARON YU RESUME
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              React Developer / Full Stack Engineer
            </p>

            <a
              href="/#AboutMe"
              className="block mt-4 w-25 rounded bg-white  md:px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Know More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
