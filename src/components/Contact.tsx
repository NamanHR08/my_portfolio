"use client";

import { motion } from "framer-motion";
import { MapPin, Send, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 z-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-4"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">together.</span>
              </h2>
              <p className="text-gray-400 text-base max-w-sm">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-colors group">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Email</p>
                   <a href="mailto:namanrohilla2914@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
                     namanrohilla2914@gmail.com
                     <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                   </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-purple-500/30 transition-colors group">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Based in</p>
                   <p className="text-white font-medium">Haryana, India</p>
                </div>
              </div>

              {/* Socials Row */}
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/naman-rohilla" target="_blank" className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/NamanHR08" target="_blank" className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all">
                  <Github size={22} />
                </a>
                <a href="https://aratt.ai/user/@namanrohilla" target="_blank" className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-green-500/30 hover:bg-green-500/10 transition-all flex items-center justify-center">
                  <Image 
                    src="/arattai.png" 
                    alt="Arattai" 
                    width={22} 
                    height={22} 
                    className="brightness-0 invert opacity-60 hover:opacity-100 transition-all"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dashboard Style Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-3xl bg-[#0A0A0A] border border-white/10"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-medium ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all placeholder:text-gray-600" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all placeholder:text-gray-600" 
                    placeholder="abc@gmail.com" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 font-medium ml-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all resize-none placeholder:text-gray-600" 
                  placeholder="Tell me about your project..." 
                />
              </div>

              <button type="button" className="w-full py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-blue-50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2">
                Send Message
                <Send size={16} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}