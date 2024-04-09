import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img src="Cy.png" className="w-12 h-12 rounded-sm" />
        </a>

        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-12 text-sm">
            <li>
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
    </header>
  );
}
