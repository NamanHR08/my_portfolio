"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-blue-500">Hire Me?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I am currently looking for full-time opportunities as a Full Stack Developer. 
            If you have a project or a job opening, let's connect!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            {/* Direct Email Button */}
            <a 
              href={"mailto:" + portfolioData.personal.email}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105"
            >
              <Mail size={20} /> Send Me an Email
            </a>
            
            {/* Copy Phone Number (Optional) */}
            <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-6 py-4 rounded-full border border-white/10">
              <Phone size={20} className="text-blue-400" />
              <span>{portfolioData.personal.phone}</span>
            </div>
          </div>

          <div className="flex justify-center gap-8 border-t border-white/10 pt-8">
            <a href={portfolioData.personal.github} target="_blank" className="text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-2">
              <Github size={24} /> <span className="text-xs">GitHub</span>
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
              <Linkedin size={24} /> <span className="text-xs">LinkedIn</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
