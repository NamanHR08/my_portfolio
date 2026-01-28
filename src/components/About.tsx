"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional milestones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500" size={32} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pl-6 border-l-2 border-white/10 relative"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-500" size={32} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="pl-6 border-l-2 border-white/10 relative"
                >
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                  <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
