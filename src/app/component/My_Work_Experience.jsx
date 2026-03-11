"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Server, Globe, Code2, Cpu, 
  Workflow, Zap, Layers, Briefcase, Calendar, MapPin
} from "lucide-react";

const capabilities = [
  {
    title: "DevOps & Infrastructure",
    icon: <Server className="text-emerald-400" />,
    description: "End-to-end environment management and secure deployments.",
    skills: ["SSH & FTP/SFTP", "CI/CD Pipelines", "DNS Management", "Domain Migrations"],
    color: "from-emerald-500/20"
  },
  {
    title: "Fullstack Engineering",
    icon: <Code2 className="text-blue-400" />,
    description: "High-performance web applications and API logic.",
    skills: ["Next.js (App Router)", "React & Redux", "PHP Core", "API Architectures"],
    color: "from-blue-500/20"
  },
  {
    title: "CMS & Low-Code Mastery",
    icon: <Layers className="text-violet-400" />,
    description: "Custom themes and complex visual logic.",
    skills: ["WordPress Themes", "Webflow (Dark/Light)", "Elementor Pro", "Plugin Dev"],
    color: "from-violet-500/20"
  },
  {
    title: "Automation & Growth",
    icon: <Workflow className="text-pink-400" />,
    description: "Business logic automation and lead pipelines.",
    skills: ["n8n Workflows", "HubSpot & Brevo API", "Email Templates", "Webhooks"],
    color: "from-pink-500/20"
  }
];

function WorkExperience() {
  return (
    <section className="w-full py-24 bg-black text-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16" data-aos="fade-right">
          <h2 className="text-sm font-mono text-violet-500 tracking-widest uppercase mb-2">
            Professional Journey & Skills
          </h2>
          <h3 className="text-4xl md:text-6xl font-black">
            Engineering <br />
            <span className="text-gray-500">Professional Impact.</span>
          </h3>
        </div>

        {/* Current Role Glass Card */}
        <motion.div 
          data-aos="fade-up"
          className="mb-12 w-full rounded-[2.5rem] border border-violet-500/30 bg-violet-500/5 backdrop-blur-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
             <Briefcase size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">Junior Frontend Developer</h4>
                <div className="flex flex-wrap gap-4 text-sm text-violet-400 font-medium">
                  <span className="flex items-center gap-2"><Globe size={16} /> growth.cx</span>
                  <span className="flex items-center gap-2"><MapPin size={16} /> Mumbai, Remote</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> May 22, 2024 — Present</span>
                </div>
              </div>
              <div className="px-6 py-2 rounded-full bg-violet-600/20 border border-violet-500/50 text-violet-400 text-xs font-bold uppercase tracking-widest">
                Current Role
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-4xl text-lg mb-8">
              At <span className="text-white font-semibold">growth.cx</span>, I bridge the gap between creative design and robust technical infrastructure. I am responsible for 
              developing high-conversion sites using <span className="text-white">React and Next.js</span>, while managing the entire deployment lifecycle—from 
              <span className="text-white"> DNS record optimization </span> to custom <span className="text-white"> n8n automation </span> for marketing pipelines like HubSpot and Brevo.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "WordPress", "Webflow", "n8n", "DNS Mgmt"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Competencies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, borderBorder: "rgba(139, 92, 246, 0.5)" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} to-transparent p-8 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />

              <div className="mb-6 p-3 w-fit rounded-2xl bg-black/40 border border-white/5 text-2xl">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-3">
                {item.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                    <Zap size={12} className="text-violet-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;