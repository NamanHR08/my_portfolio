"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm bg-black border-t border-white/10">
      <p> {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
      <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
    </footer>
  );
}
