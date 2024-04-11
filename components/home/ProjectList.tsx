"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { projectData } from "../../app/_data/project";
export default function ProjectList() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      loop: true, // Add infinite loop functionality
    },
    [
      // add plugins here
    ]
  );

  // Use instanceRef.current to access the slider instance
  const prevSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextSlide = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <section className="bg-gray-50 w-full" id="Projects">
      <div className="mx-auto px-4 py-8 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project List
            </h2>

            <p className="mt-4 text-gray-700">
              Here are some of the projects I have worked on. I always try to
              make side projects to learn new things. I hope you like them.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4 justify-end">
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
              >
                <FaAngleLeft />
              </button>

              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>

          <div className=" lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {projectData.map((project, index) => (
                <div
                  className="keen-slider__slide md:px-8 lg:pr-8 lg:pl-0"
                  key={project.title}
                >
                  <article className="flex bg-white transition hover:shadow-xl">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                      <time
                        dateTime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                      >
                        <span>{project.year}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>{project.date}</span>
                      </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56 ">
                      <img
                        alt={project.title}
                        src={project.image}
                        className="aspect-square h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <>
                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                          <a href={project.link}>
                            <h3 className="font-bold uppercase text-gray-900 line-clamp-1">
                              {project.title}
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {project.description}
                          </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={project.link}
                            className="block bg-teal-500 text-white px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-teal-400"
                          >
                            GO TO PROJECT
                          </a>
                        </div>
                      </>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={prevSlide}
            className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
          >
            <FaAngleLeft />
          </button>

          <button
            aria-label="Next slide"
            onClick={nextSlide}
            className="rounded-full border border-teal-600 p-3 text-teal-600 transition hover:bg-teal-600 hover:text-white"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}
