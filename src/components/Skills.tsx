"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 size={24} className="text-blue-400" />,
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "group-hover:border-blue-500/50",
    bgHover: "group-hover:bg-blue-500/10",
    glow: "shadow-blue-500/20"
  },
  {
    category: "Backend & Database",
    icon: <Database size={24} className="text-green-400" />,
    techs: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
    color: "group-hover:border-green-500/50",
    bgHover: "group-hover:bg-green-500/10",
    glow: "shadow-green-500/20"
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal size={24} className="text-orange-400" />,
    techs: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Linux"],
    color: "group-hover:border-orange-500/50",
    bgHover: "group-hover:bg-orange-500/10",
    glow: "shadow-orange-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 z-10">
      <div className="container mx-auto px-6">
        
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            My core stack for building scalable and efficient web applications.
          </p>
        </motion.div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 bg-[#0A0A0A] border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${skill.color} ${skill.bgHover}`}
            >
              
              {/* Row 1: Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 ${skill.glow}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                  {skill.category}
                </h3>
              </div>

              {/* Row 2: Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded border border-white/5 group-hover:text-gray-300 group-hover:border-white/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}