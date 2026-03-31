import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-teal-400 font-medium text-sm mb-2">Charonyu</p>
        <p className="text-gray-500 text-xs leading-relaxed max-w-md mx-auto">
          Thank you for visiting. Feel free to reach out via email, LinkedIn, or
          GitHub. Looking forward to connecting with you!
        </p>
      </div>
    </footer>
  );
}
