import React from "react";
import { FaPhone, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">Charonyu</div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Thank for visiting my resume website. I hope you enjoy it. If you have
          any questions, please feel free to contact me. I am always happy to
          help you.
        </p>

        <ul className="mt-8 flex justify-center items-center gap-6 md:gap-8">
          <li>
            <a
              href="mailto:bensona1219@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Gmail</span>
              <MdEmail fontSize="24px" />
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
              <FaGithub fontSize="20px" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
