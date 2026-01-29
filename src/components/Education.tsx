"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering (BE)",
      field: "Computer Science Engineering",
      university: "Chitkara University",
      location: "Rajpura, Punjab",
      year: "2021 - 2025",
      score: "8.39 CGPA",
      description: "Focused on Full Stack Development, Data Structures, and Algorithms.",
      color: "group-hover:border-blue-500/50",
      bgHover: "group-hover:bg-blue-500/10",
      glow: "shadow-blue-500/20"
    },
    // Future mein 12th add kar sakte ho yahan
  ];

  return (
    <section id="education" className="relative py-12 z-10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Education</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Academic background and qualifications.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 bg-[#0A0A0A] border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${edu.color} ${edu.bgHover}`}
            >
              
              {/* Row 1: Icon & Degree */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 ${edu.glow}`}>
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-gray-400">
                  <Calendar size={12} />
                  {edu.year}
                </div>
              </div>

              {/* Row 2: University & Location */}
              <div className="flex flex-col gap-1 mb-6 pl-1 border-l-2 border-white/10 ml-2">
                 <p className="text-gray-300 font-medium pl-3">{edu.university}</p>
                 <div className="flex items-center gap-1.5 text-xs text-gray-500 pl-3">
                    <MapPin size={12} />
                    {edu.location}
                 </div>
              </div>

              {/* Row 3: Footer (Score & Description) */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                 <p className="text-sm text-gray-400 leading-relaxed">
                   {edu.description}
                 </p>
                 
                 <div className="flex items-center gap-2 mt-1">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                     <Award size={16} />
                     {edu.score}
                   </div>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}