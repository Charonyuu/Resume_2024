"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const navItems = [
  { label: "About Me", href: "/#AboutMe" },
  { label: "Skills", href: "/#Skills" },
  { label: "Career", href: "/#Career" },
  { label: "Projects", href: "/#Projects" },
  { label: "Blog", href: "/Blog" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/%E6%89%BF%E7%A5%90-%E6%B1%9F-8a0832234/",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Charonyuu",
    icon: <FaGithub size={18} />,
    label: "GitHub",
  },
  {
    href: "mailto:bensona1219@gmail.com",
    icon: <MdEmail size={20} />,
    label: "Email",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const ref = useOutsideClick<HTMLElement>(() => setIsOpen(false));

  const isActive = (href: string) => {
    if (href === "/Blog") return pathname.includes("/Blog");
    return false;
  };

  const sidebarContent = (
    <>
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-teal-500/30 mb-4">
          <Image
            src="/project/me.JPG"
            alt="Charonyu"
            fill
            className="object-cover object-top"
          />
        </div>
        <h1 className="text-lg font-bold text-white tracking-wide">
          Charonyu
        </h1>
        <p className="text-xs text-teal-400 font-medium mt-1 tracking-wider uppercase">
          Full Stack Engineer
        </p>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6" />

      {/* Navigation */}
      <nav className="w-full px-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-teal-500/15 text-teal-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Social Links */}
      <div className="flex items-center gap-4 pb-2">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            rel="noreferrer noopener"
            target="_blank"
            className="text-gray-500 hover:text-teal-400 transition-colors duration-200"
          >
            <span className="sr-only">{link.label}</span>
            {link.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[10px] text-gray-600 mt-2">
        &copy; 2024 Charonyu
      </p>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[240px] flex-col items-center py-10 z-50 border-r bg-[hsl(var(--sidebar))] border-[hsl(var(--sidebar-border))]">
        {sidebarContent}
      </aside>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 border-b bg-[hsl(var(--sidebar))] border-[hsl(var(--sidebar-border))]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/project/me.JPG"
            alt="Charonyu"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white font-semibold text-sm">Charonyu</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isOpen ? <HiX className="w-5 h-5" /> : <HiOutlineMenu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <aside
            ref={ref}
            className="fixed left-0 top-0 h-screen w-[240px] flex flex-col items-center py-10 bg-[hsl(var(--sidebar))] border-r border-[hsl(var(--sidebar-border))] shadow-2xl animate-in slide-in-from-left duration-200"
          >
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
