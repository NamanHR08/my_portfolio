"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 overflow-hidden z-10">
      
      {/* Background Glow (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand & Quote */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Naman.dev</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences with code and creativity. Let's create something amazing together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link 
              href="https://github.com/NamanHR08" 
              target="_blank" 
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
            >
              <Github size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/naman-rohilla" 
              target="_blank" 
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
            >
              <Linkedin size={20} />
            </Link>
            <Link 
              href="mailto:namanrohilla2914@gmail.com" 
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Naman Rohilla. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}