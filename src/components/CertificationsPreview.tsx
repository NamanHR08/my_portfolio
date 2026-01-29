"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

// Selected TOP 3 Certifications for Preview
const topCerts = [
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways (Forage)",
    date: "Aug 2024",
    // File name exactly as uploaded
    link: "/certificates/british airways ds.pdf",
    color: "from-blue-400 to-sky-300"
  },
  {
    title: "Data Structures & Algorithms Specialization",
    issuer: "UC San Diego (Coursera)",
    date: "Apr 2024",
    // Full Specialization Certificate
    link: "/certificates/ADS full module.pdf",
    color: "from-purple-400 to-fuchsia-500"
  },
  {
    title: "Software Engineering Specialization",
    issuer: "HKUST (Coursera)",
    date: "Mar 2024",
    // Full Specialization Certificate
    link: "/certificates/oose full module.pdf",
    color: "from-pink-400 to-rose-500"
  }
];

export default function CertificationsPreview() {
  return (
    <section id="certificationpreview" className="relative py-10 z-10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              Validated skills through industry-recognized certifications and virtual internships.
            </p>
          </div>

          {/* View All Button (Desktop) */}
          <Link 
            href="/certifications" 
            className="hidden md:flex items-center gap-2 text-blue-400 hover:text-white transition-colors group"
          >
            View All Certifications
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full"
            >
              {/* Gradient Line Top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`}></div>

              <div>
                {/* Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Award size={28} />
                  </div>
                  <span className="text-xs font-medium text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm flex items-center gap-2 mb-6">
                  <BadgeCheck size={14} className="text-green-500" />
                  {cert.issuer}
                </p>
              </div>

              {/* Verify Link */}
              <a 
                // encodeURIComponent ensures filenames with spaces work perfectly
                href={`/certificates/${encodeURIComponent(cert.link.split('/').pop()!)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mt-auto"
              >
                View Credential <ExternalLink size={14} />
              </a>

            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/certifications" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
          >
            View All Certifications
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}