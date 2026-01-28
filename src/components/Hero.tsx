"use client";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6 font-medium">
             2025 Computer Science Graduate
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{portfolioData.personal.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-8">{portfolioData.personal.role}</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">{portfolioData.personal.description}</p>
          <div className="flex gap-4 justify-center">
             <Link href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2">
               View My Work <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
