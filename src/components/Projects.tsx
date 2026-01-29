"use client";

import { motion } from "framer-motion";
import { Newspaper, ShoppingBag, ShieldCheck, MonitorPlay, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Headlines 24x7",
    type: "Freelance",
    description: "Full-stack news portal with real-time updates & secure admin panel.",
    techs: ["React", "Node.js", "MongoDB"],
    github: "#", 
    live: "#",   
    icon: <Newspaper size={24} className="text-blue-400" />,
    color: "group-hover:border-blue-500/50",
    bgHover: "group-hover:bg-blue-500/10"
  },
  {
    title: "Quick Bite",
    type: "Personal",
    description: "Food ordering platform with Stripe payments & seamless cart system.",
    techs: ["Next.js", "Stripe", "MongoDB"],
    github: "#",
    live: "#",
    icon: <ShoppingBag size={24} className="text-green-400" />,
    color: "group-hover:border-green-500/50",
    bgHover: "group-hover:bg-green-500/10"
  },
  {
    title: "Online Voting System",
    type: "Personal",
    description: "Secure e-voting platform with encrypted data & tamper-proof records.",
    techs: ["React", "Node.js", "Encryption"],
    github: "#",
    live: "#",
    icon: <ShieldCheck size={24} className="text-purple-400" />,
    color: "group-hover:border-purple-500/50",
    bgHover: "group-hover:bg-purple-500/10"
  },
  {
    title: "iWave Digital",
    type: "Freelance",
    description: "Modern website redesign for a brand with improved UI/UX & performance.",
    techs: ["React", "Tailwind", "UI/UX"],
    github: "#",
    live: "#",
    icon: <MonitorPlay size={24} className="text-orange-400" />,
    color: "group-hover:border-orange-500/50",
    bgHover: "group-hover:bg-orange-500/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 z-10">
      <div className="container mx-auto px-6">
        
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10" // Reduced margin to save space
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Works</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Selected freelance commissions and personal technical explorations.
          </p>
        </motion.div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-5 bg-[#0A0A0A] border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${project.color} ${project.bgHover}`}
            >
              
              {/* Row 1: Header (Title + Icon) */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">
                      {project.title}
                    </h3>
                    <span className={`text-[10px] uppercase font-bold tracking-wider mt-1 inline-block ${project.type === 'Freelance' ? 'text-amber-400' : 'text-gray-500'}`}>
                      {project.type} Project
                    </span>
                  </div>
                </div>
                
                {/* Live Link Button (Top Right for quick access) */}
                <Link href={project.live} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                   <ArrowUpRight size={20} />
                </Link>
              </div>

              {/* Row 2: Description (Compact) */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Row 3: Footer (Techs + GitHub) */}
              <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-auto">
                
                {/* Techs */}
                <div className="flex gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <Link 
                  href={project.github} 
                  target="_blank" 
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <Github size={18} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}