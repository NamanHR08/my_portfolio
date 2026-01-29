"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import ThreeBackground from "@/components/ThreeBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* Content Layer - Added a slight gradient fade at the bottom */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
            Naman <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Rohilla</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-8 tracking-wide">
            Architecting <span className="text-blue-400 font-semibold">Digital Reality</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
            {portfolioData.personal.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
             <Link href="#projects" className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                 View Projects <ArrowRight size={20} />
               </span>
             </Link>
             {/* <a 
            href="/resume.pdf"             // File path (public folder mein honi chahiye)
            download="Naman_Rohilla_CV.pdf" // Download hone par ye naam aayega
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Download size={20} />
            Download CV
          </a> */}
             <a href="/resume.pdf" download="Naman_Rohilla_CV.pdf" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-2">
               <Download size={20} /> Download CV
             </a>
          </div>

          <div className="flex justify-center gap-8 text-gray-500">
            <a href="https://github.com/NamanHR08" target="_blank" className="hover:text-white transition-colors hover:scale-125 duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/naman-rohilla" target="_blank" className="hover:text-blue-400 transition-colors hover:scale-125 duration-300">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}