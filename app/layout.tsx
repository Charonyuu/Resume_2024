import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import Sidebar from "@/components/layout/Sidebar";

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
        <Sidebar />
        {/* Main content area: offset by sidebar on desktop, offset by topbar on mobile */}
        <main className="lg:ml-[240px] pt-14 lg:pt-0 min-h-screen">
          {children}
        </main>
        <Script
          src="https://analysis-service.app.charonyu.cc/sdk/tracker.js"
          data-site="resume"
          data-page="home"
          data-api="https://analysis-service.app.charonyu.cc"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
