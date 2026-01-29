"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowLeft, BadgeCheck, FileText, Cloud, Code, Terminal, Mic, Briefcase } from "lucide-react";
import Link from "next/link";

// NOTE: Filenames are exactly as provided in your uploads.
// Spaces in filenames are handled automatically by encodeURIComponent in the link.
const categories = [
  {
    title: "Full Stack & Cloud Computing",
    issuer: "IBM (Coursera)",
    icon: <Cloud className="text-blue-400" size={24} />,
    color: "blue",
    certs: [
      { name: "Developing Front-End Apps with React", file: "module 3.pdf" },
      { name: "Developing Back-End Apps with Node.js & Express", file: "module 4.pdf" },
      { name: "Introduction to Cloud Computing", file: "Coursera 68RZY2RURKHU.pdf" },
      { name: "Introduction to Web Development (HTML/CSS/JS)", file: "module 1.pdf" },
      { name: "Getting Started with Git and GitHub", file: "module 2.pdf" },
      { name: "Python for Data Science, AI & Development", file: "module 5.pdf" },
    ]
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "UC San Diego & HSE (Coursera)",
    icon: <Code className="text-purple-400" size={24} />,
    color: "purple",
    certs: [
      { name: "Data Structures and Algorithms Specialization (Full)", file: "ADS full module.pdf", featured: true },
      { name: "Algorithmic Toolbox", file: "ADS module 1.pdf" },
      { name: "Data Structures", file: "ADS module 2.pdf" },
      { name: "Algorithms on Graphs", file: "ADS module 3.pdf" },
      { name: "Algorithms on Strings", file: "ADS module 4.pdf" },
      { name: "Advanced Algorithms and Complexity", file: "ADS module 5.pdf" },
      { name: "Genome Assembly Programming Challenge", file: "ADS module 6.pdf" },
    ]
  },
  {
    title: "Software Engineering",
    issuer: "HKUST (Coursera)",
    icon: <Terminal className="text-pink-400" size={24} />,
    color: "pink",
    certs: [
      { name: "Software Engineering Specialization (Full)", file: "oose full module.pdf", featured: true },
      { name: "Modeling Software Systems using UML", file: "OOSE module 1.pdf" },
      { name: "Software Design and Project Management", file: "OOSE module 2.pdf" },
      { name: "Implementation and Testing", file: "OOSE module 3.pdf" },
    ]
  },
  {
    title: "Communication & Leadership",
    issuer: "University of Washington",
    icon: <Mic className="text-yellow-400" size={24} />,
    color: "yellow",
    certs: [
      { name: "Introduction to Public Speaking", file: "Naman Rohilla c1.pdf" },
      { name: "Speaking to Inform: Discussing Complex Ideas", file: "Naman Rohilla c2.pdf" },
      { name: "Speaking to Persuade: Motivating Audiences", file: "Naman Rohilla c3.pdf" },
      { name: "Speaking to Inspire: Ceremonial Speeches", file: "Naman Rohilla c4.pdf" },
    ]
  },
  {
    title: "Professional & Technical Skills",
    issuer: "Meta, Cisco, Forage & Others",
    icon: <Briefcase className="text-green-400" size={24} />,
    color: "green",
    certs: [
      { name: "Coding Interview Preparation (Meta)", file: "ETIC.pdf" },
      { name: "Introduction to Cybersecurity (Cisco)", file: "NamanRohilla-Introduction to -certificate.pdf" },
      { name: "Virtual Internship in Full Stack (Bharat Intern)", file: "bharatintern completion certificate.pdf" },
      { name: "Data Science Job Simulation (British Airways)", file: "british airways ds.pdf" },
      { name: "The Art of the Job Interview", file: "the art of the job interview.pdf" },
    ]
  }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* ADJUSTED PADDING: Changed pt-32 to pt-24 to reduce gap */}
      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A comprehensive collection of 25+ certifications validating expertise in Full Stack Development, Algorithms, Software Engineering, and Communication.
            </p>
          </motion.div>
        </div>

        {/* Categories Loop */}
        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mt-1">{category.issuer}</p>
                </div>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.certs.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`group relative flex flex-col justify-between p-5 rounded-xl border transition-all duration-300 backdrop-blur-sm
                      ${cert.featured 
                        ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/40' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                      }`}
                  >
                    
                    {/* Content */}
                    <div>
                      {/* Featured Badge */}
                      {cert.featured && (
                         <span className="inline-block px-2 py-0.5 mb-3 text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 rounded-full border border-blue-500/20">
                           Specialization
                         </span>
                      )}

                      <h3 className={`font-semibold text-white mb-2 leading-snug ${cert.featured ? 'text-lg' : 'text-base'}`}>
                        {cert.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <BadgeCheck size={14} className={cert.featured ? "text-green-500" : "text-green-500"} />
                        <span>Verified Credential</span>
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <a 
                        // IMPORTANT: encodeURIComponent ensures filenames with spaces work correctly
                        href={`/certificates/${encodeURIComponent(cert.file)}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm font-medium text-gray-300 group-hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FileText size={16} />
                          View Certificate
                        </span>
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300" />
                      </a>
                    </div>

                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            Proven track record of continuous learning and professional development.
          </p>
        </div>

      </div>
    </main>
  );
}