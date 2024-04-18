import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-2 py-8 md:py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">Charonyu</div>

        <div className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-600 text-sm">
          <p>Thank you for visiting my website.</p>
          <p>I hope you found it enjoyable and informative.</p>
          <p>
            If you have any questions or suggestions, please feel free to reach
            out to me.
          </p>
          <p>
            I am always eager to hear from you. You can contact me via email, or
            connect with me linkedin or github.
          </p>
          <p>Looking forward to connecting with you! 😁</p>
        </div>
      </div>
    </footer>
  );
}
