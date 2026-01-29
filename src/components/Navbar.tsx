"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowRight, Code2 } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certificationpreview" }, // Changed to ID for scrolling
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-black/70 backdrop-blur-xl border-white/10 py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-600/30 group-hover:bg-blue-600/30 transition-all">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
              Naman.dev
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 pr-4 border-r border-white/10">
              <Link href="https://github.com/NamanHR08" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/naman-rohilla" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <Linkedin size={20} />
              </Link>
            </div>
            
            <Link 
              href="#contact" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-blue-50 transition-all"
            >
              Hire Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-3xl font-bold text-gray-400 hover:text-white block border-b border-white/10 pb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="flex justify-center gap-8 mt-auto mb-10">
                 <Link href="https://github.com/NamanHR08" target="_blank" className="text-gray-400 hover:text-white"><Github size={32} /></Link>
                 <Link href="https://www.linkedin.com/in/naman-rohilla" target="_blank" className="text-gray-400 hover:text-white"><Linkedin size={32} /></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}