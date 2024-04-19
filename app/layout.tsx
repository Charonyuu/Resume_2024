import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charonyu's Profile",
  description:
    "Charonyu resume and portfolio website using Next.js and Notion API.",
  keywords: ["Charonyu", "Charonyuu", "Profile", "Resume", "Portfolio"],
  openGraph: {
    title: "Charonyu's Profile",
    description: "Charonyu resume and portfolio website.",
    type: "website",
    url: "https://charonyu.vercel.app",
  },
  twitter: {
    title: "Charonyu's Profile",
    description: "Charonyu resume and portfolio website.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
