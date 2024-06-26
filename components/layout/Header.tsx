"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  const pathname = usePathname();
  const ref = useOutsideClick<HTMLDivElement>(handleClose);
  return (
    <header className="bg-white sticky top-0 z-[999]">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-8 hidden md:flex justify-between w-full">
          <div className="flex items-center gap-8">
            <a className="text-teal-600 flex items-center" href="/#">
              <span className="sr-only">Home</span>
              <img src="/Cy.png" className="w-12 h-12 rounded-sm" alt="logo" />
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
                    className={cn(
                      "text-gray-500 transition hover:text-teal-500",
                      pathname.includes("/Blog") && "text-teal-500"
                    )}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <ul className=" flex justify-center items-center gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/%E6%89%BF%E7%A5%90-%E6%B1%9F-8a0832234/"
                rel="noreferrer noopener"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <FaLinkedinIn fontSize="24px" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Charonyuu"
                rel="noreferrer noopener"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub fontSize="24px" />
              </a>
            </li>
            <li>
              <a
                href="mailto:bensona1219@gmail.com"
                rel="noreferrer noopener"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Gmail</span>
                <MdEmail fontSize="28px" />
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <HiOutlineMenu className="w-6 h-6" />
        </button>
        {isOpen && (
          <div
            ref={ref}
            className="fixed border-r border-gray-300 shadow-lg border-solid top-0 left-0 flex h-screen md:hidden flex-col justify-between border-e bg-white w-[150px] items-center py-8"
          >
            <div className="px-4 ">
              <img
                src="/Cy.png"
                className="w-12 h-12 rounded-sm  mx-auto"
                alt="logo"
              />
              <div className="ml-2 text-black font-semibold text-center my-2">
                <p className="leading-5">Charonyu's</p>
                <p className="leading-5">Portfolio</p>
              </div>
              <ul className=" text-sm">
                <li className="my-4 text-center">
                  <Link
                    className="text-gray-500 transition hover:text-teal-500"
                    onClick={handleClose}
                    href="/#AboutMe"
                  >
                    About Me
                  </Link>
                </li>

                <li className="my-4 text-center">
                  <Link
                    className="text-gray-500 transition hover:text-teal-500"
                    onClick={handleClose}
                    href="/#Career"
                  >
                    Career
                  </Link>
                </li>

                <li className="my-4 text-center">
                  <Link
                    className="text-gray-500 transition hover:text-teal-500"
                    onClick={handleClose}
                    href="/#Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="my-4 text-center">
                  <Link
                    onClick={handleClose}
                    href={`/Blog`}
                    className={cn(
                      "text-gray-500 transition hover:text-teal-500",
                      pathname.includes("/Blog") && "text-teal-500"
                    )}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/%E6%89%BF%E7%A5%90-%E6%B1%9F-8a0832234/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaLinkedinIn fontSize="24px" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Charonyuu"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub fontSize="24px" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bensona1219@gmail.com"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                  >
                    <span className="sr-only">Gmail</span>
                    <MdEmail fontSize="28px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
