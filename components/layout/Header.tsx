"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-8 hidden md:flex">
          <a className="text-teal-600 flex items-center" href="/#">
            <span className="sr-only">Home</span>
            <img src="/Cy.png" className="w-12 h-12 rounded-sm" />
            <div className="ml-2 text-black font-semibold">
              <p className="leading-5">Charonyu's</p>
              <p className="leading-5">Portfolio</p>
            </div>
          </a>

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-12 text-sm">
              <li className="my-4 text-center">
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/#AboutMe"
                >
                  About Me
                </Link>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/#Career"
                >
                  Career
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/#Projects"
                >
                  Projects
                </a>
              </li>
              {/* 
            <li>
              <a
                className="text-gray-500 transition hover:text-teal-500"
                href="#"
              >
                Services
              </a>
            </li> */}

              <li>
                <Link
                  href={`/Blog`}
                  className="text-gray-500 transition hover:text-teal-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            ref={ref}
            className="fixed border-r border-gray-300 shadow-lg border-solid top-0 left-0 flex h-screen md:hidden flex-col justify-between border-e bg-white w-[150px] items-center"
          >
            <div className="px-4 py-6">
              <img src="/Cy.png" className="w-12 h-12 rounded-sm  mx-auto" />
              <div className="ml-2 text-black font-semibold text-center my-2">
                <p className="leading-5">Charonyu's</p>
                <p className="leading-5">Portfolio</p>
              </div>
              <ul className=" text-sm">
                <li className="my-4 text-center">
                  <Link
                    className="text-gray-500 transition hover:text-teal-500"
                    href="/#AboutMe"
                  >
                    About Me
                  </Link>
                </li>

                <li className="my-4 text-center">
                  <a
                    className="text-gray-500 transition hover:text-teal-500"
                    href="/#Career"
                  >
                    Career
                  </a>
                </li>

                <li className="my-4 text-center">
                  <a
                    className="text-gray-500 transition hover:text-teal-500"
                    href="/#Projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="my-4 text-center">
                  <Link
                    href={`/Blog`}
                    className="text-gray-500 transition hover:text-teal-500"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
