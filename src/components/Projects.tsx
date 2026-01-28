"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             A selection of my full-stack applications and freelance work.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Image Placeholder - You can replace this with Next/Image later */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden relative">
                 {/* If you have images, uncomment the line below and add images to /public/images */}
                 {/* <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" /> */}
                 <Folder size={48} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-400 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" className="text-gray-400 hover:text-white"><Github size={20} /></a>
                    <a href={project.demo} target="_blank" className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
