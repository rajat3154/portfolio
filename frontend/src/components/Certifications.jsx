import React, { useState, useEffect } from "react";

// --- IMAGE IMPORTS ---
// Ensure these paths match your project structure
import aspireImg from "./certificates/aspireforher.jpg";
import aws1Img from "./certificates/aws1.jpg";
import aws2Img from "./certificates/aws2.jpg";
import cohortImg from "./certificates/cohort.jpg";
import dataScienceImg from "./certificates/datascience.jpg";
import deloitteImg from "./certificates/delloitte.jpg";
import edunetImg from "./certificates/edunet.jpg";
import elevateImg from "./certificates/elevatelabs.jpg";
import hackToSkillImg from "./certificates/hacktoskill.png";
import ibm1Img from "./certificates/ibm1.jpg";
import ibm2Img from "./certificates/ibm2.jpg";
import javaDsaImg from "./certificates/javadsa.jpg";
import linkedinImg from "./certificates/linkedin.jpg";
import microCertImg from "./certificates/microcertification.jpg"; 
import mlUdemyImg from "./certificates/mludemy.jpg";
import nxtWaveImg from "./certificates/nxtwave.png";
import tataImg from "./certificates/tata.jpg";

export default function Certifications() {
  const [showAllPage, setShowAllPage] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // --- FULL DATASET ---
  const certs = [
    // --- TOP 6 (High Priority) ---
    {
      title: "Data Analyst Intern",
      company: "Elevate Labs",
      type: "Internship",
      desc: "Data cleaning, preprocessing, and dashboard creation.",
      date: "2024",
      id: "ELV-INT-01",
      color: "from-teal-500 to-cyan-500",
      accent: "emerald",
      image: elevateImg
    },
    {
      title: "IBM AI Engineering",
      company: "IBM",
      type: "Professional Cert",
      desc: "Deep Learning & AI deployment with IBM Watson.",
      date: "2024",
      id: "IBM-AI-01",
      color: "from-blue-600 to-indigo-600",
      accent: "blue",
      image: ibm1Img
    },
    {
      title: "AWS Cloud Fundamentals",
      company: "AWS",
      type: "Certification",
      desc: "Core AWS services, security, and architecture.",
      date: "2024",
      id: "AWS-101",
      color: "from-orange-500 to-amber-500",
      accent: "orange",
      image: aws1Img
    },
    {
      title: "GenAI & Cloud Computing",
      company: "Hack2Skill",
      type: "Workshop",
      desc: "Generative AI models on Google Cloud Vertex AI.",
      date: "2024",
      id: "H2S-GENAI",
      color: "from-purple-600 to-pink-600",
      accent: "purple",
      image: hackToSkillImg
    },
    {
      title: "Deloitte Tech Simulation",
      company: "Deloitte",
      type: "Job Sim",
      desc: "Coding & data analysis practical tasks.",
      date: "2024",
      id: "DEL-8821",
      color: "from-green-600 to-emerald-600",
      accent: "emerald",
      image: deloitteImg
    },
    {
      title: "AI & Cloud Internship",
      company: "Edunet",
      type: "Internship",
      desc: "Predictive modeling and cloud deployment.",
      date: "2024",
      id: "EDU-INT-02",
      color: "from-indigo-500 to-violet-500",
      accent: "purple",
      image: edunetImg
    },
    // --- REMAINING CERTIFICATES ---
    {
      title: "AWS Solutions Architect",
      company: "AWS",
      type: "Course",
      desc: "Advanced architecture strategies.",
      date: "2024",
      id: "AWS-202",
      color: "from-orange-600 to-red-600",
      accent: "orange",
      image: aws2Img
    },
    {
      title: "IBM Data Science",
      company: "IBM",
      type: "Specialization",
      desc: "Python, SQL, and ML models.",
      date: "2024",
      id: "IBM-DS-02",
      color: "from-blue-500 to-cyan-500",
      accent: "blue",
      image: ibm2Img
    },
    {
      title: "Machine Learning Bootcamp",
      company: "Udemy",
      type: "Course",
      desc: "Python for ML, Pandas, NumPy.",
      date: "2023",
      id: "UDMY-ML",
      color: "from-red-500 to-rose-500",
      accent: "orange",
      image: mlUdemyImg
    },
    {
      title: "Java DSA Masterclass",
      company: "Udemy",
      type: "Course",
      desc: "Data Structures & Algorithms in Java.",
      date: "2023",
      id: "DSA-JAVA",
      color: "from-yellow-500 to-orange-500",
      accent: "orange",
      image: javaDsaImg
    },
    {
      title: "Tata Strive Skills",
      company: "Tata",
      type: "Soft Skills",
      desc: "Corporate readiness training.",
      date: "2023",
      id: "TATA-SS",
      color: "from-blue-700 to-blue-900",
      accent: "blue",
      image: tataImg
    },
    {
      title: "Aspire For Her",
      company: "Aspire",
      type: "Community",
      desc: "Women in tech leadership.",
      date: "2023",
      id: "AFH-2023",
      color: "from-pink-500 to-fuchsia-500",
      accent: "purple",
      image: aspireImg
    },
    {
      title: "NxtWave CCBP",
      company: "NxtWave",
      type: "Bootcamp",
      desc: "Industry 4.0 tech training.",
      date: "2022",
      id: "NXT-CCBP",
      color: "from-orange-400 to-red-400",
      accent: "orange",
      image: nxtWaveImg
    },
    {
      title: "Data Science Fundamentals",
      company: "Provider",
      type: "Course",
      desc: "Statistical analysis basics.",
      date: "2023",
      id: "DS-FUND",
      color: "from-cyan-500 to-blue-500",
      accent: "blue",
      image: dataScienceImg
    },
    {
      title: "Cohort Program",
      company: "Cohort",
      type: "Program",
      desc: "Collaborative learning.",
      date: "2023",
      id: "COHORT-23",
      color: "from-emerald-500 to-green-500",
      accent: "emerald",
      image: cohortImg
    },
    {
      title: "LinkedIn Skill Badge",
      company: "LinkedIn",
      type: "Assessment",
      desc: "Verified technical proficiency.",
      date: "2024",
      id: "LI-SKILL",
      color: "from-blue-600 to-sky-600",
      accent: "blue",
      image: linkedinImg
    },
    {
      title: "Micro-Certification",
      company: "Provider",
      type: "Certificate",
      desc: "Domain specific micro-credential.",
      date: "2024",
      id: "MICRO-01",
      color: "from-slate-500 to-gray-500",
      accent: "blue",
      image: microCertImg
    }
  ];

  // --- CONDITIONAL RENDER: "ALL CERTIFICATES" PAGE ---
  if (showAllPage) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-black overflow-y-auto animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-6 py-4 flex justify-between items-center">
           <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
             <span className="text-blue-600">///</span> Credential Archive
           </h2>
           <button 
             onClick={() => setShowAllPage(false)}
             className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition text-sm font-medium text-slate-900 dark:text-white"
           >
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             Close Archive
           </button>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certs.map((cert, idx) => (
                <VaultCard key={idx} cert={cert} index={idx} onView={() => setSelectedCert(cert)} />
              ))}
           </div>
        </div>

        {/* Modal Logic Reuse */}
        {selectedCert && (
          <CertDialog cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </div>
    );
  }

  // --- DEFAULT RENDER: SECTION VIEW (TOP 6) ---
  return (
    <section id="certifications" className="w-full py-24 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              Licences & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Certifications</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              Verified technical credentials from top providers.
            </p>
          </div>
          
          {/* View All Button */}
          <button 
            onClick={() => setShowAllPage(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            View All Certificates
            <span className="bg-white/20 dark:bg-black/10 px-2 py-0.5 rounded text-xs">
              {certs.length}
            </span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* The Top 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.slice(0, 6).map((cert, idx) => (
            <VaultCard 
              key={idx} 
              cert={cert} 
              index={idx} 
              onView={() => setSelectedCert(cert)} 
            />
          ))}
        </div>

      </div>

      {/* --- DIALOG MODAL (For Top 6) --- */}
      {selectedCert && (
        <CertDialog cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

/* ---------------- The "Vault" Reveal Card ---------------- */

function VaultCard({ cert, index, onView }) {
  const accentStyles = {
    blue: "border-blue-500/50 text-blue-400",
    emerald: "border-emerald-500/50 text-emerald-400",
    orange: "border-orange-500/50 text-orange-400",
    purple: "border-purple-500/50 text-purple-400",
  };

  const currentAccent = accentStyles[cert.accent] || accentStyles.blue;

  return (
    <div 
      className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{ animationDelay: `${(index % 6) * 100}ms` }}
    >
      
      {/* LAYER 1: CERTIFICATE IMAGE PREVIEW (Bottom) */}
      <div className="absolute inset-0 z-0 bg-slate-200 dark:bg-slate-800">
         <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
            
            {/* Background Image - Clear, No Blur */}
            {cert.image ? (
                <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-100" 
                />
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`}></div>
            )}

            {/* Overlay Action */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 transition-all duration-300 group-hover:bg-black/30">
               <button 
                 onClick={(e) => { e.stopPropagation(); onView(); }}
                 className="px-6 py-2 rounded-full text-xs font-bold bg-white text-black shadow-lg hover:scale-105 transition-transform z-20 flex items-center gap-2"
               >
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 View Credential
               </button>
            </div>
         </div>
      </div>

      {/* LAYER 2: THE "BLACK CARD" INFO (Top) */}
      <div 
        onClick={onView}
        className="absolute inset-0 z-10 bg-[#0a0a0a] border border-white/10 p-6 flex flex-col justify-between transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) group-hover:translate-y-[110%]"
      >
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
             </div>
             <div className="overflow-hidden">
               <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Issuer</p>
               <p className="text-sm font-semibold text-slate-200 truncate w-24">{cert.company}</p>
             </div>
          </div>
          <span className={`px-2 py-1 rounded text-[10px] font-bold border bg-white/5 ${currentAccent}`}>
            {cert.type ? cert.type.split(" ")[0].toUpperCase() : "CERT"}
          </span>
        </div>

        <div className="mt-4">
           <h3 className="text-xl font-bold text-white mb-2 leading-snug line-clamp-2">
             {cert.title}
           </h3>
           <p className="text-sm text-slate-400 line-clamp-2">
             {cert.desc}
           </p>
        </div>

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
           <div className="flex flex-col">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">Credential ID</span>
              <span className="font-mono text-xs text-slate-300 tracking-wider">{cert.id}</span>
           </div>
           <div className="flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-white transition-colors">
             <span>Reveal</span>
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
           </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- The Glass Dialog Component ---------------- */

function CertDialog({ cert, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const badgeColors = {
    blue: "text-blue-500",
    emerald: "text-emerald-500",
    orange: "text-orange-500",
    purple: "text-purple-500"
  };
  const badgeColor = badgeColors[cert.accent] || "text-blue-500";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all scale-100 opacity-100 animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* --- LEFT: IMAGE CONTAINER --- */}
        <div className="w-full md:w-3/5 bg-black/5 dark:bg-black flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
           
           <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10`}></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

           {/* THE CERTIFICATE IMAGE */}
           <div className="relative w-full h-auto shadow-2xl rounded-lg overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-auto object-contain"
                  />
              ) : (
                  <div className="w-full h-64 bg-slate-800 flex items-center justify-center text-white">Image not available</div>
              )}
           </div>
        </div>

        {/* --- RIGHT: DETAILS --- */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-between bg-white dark:bg-[#0a0a0a] overflow-y-auto">
           <div>
              <div className="flex items-center gap-2 mb-4">
                 <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border bg-transparent border-slate-200 dark:border-white/10 ${badgeColor}`}>
                   {cert.type}
                 </span>
                 <span className="text-xs text-slate-400 font-mono border px-2 py-1 rounded-full border-slate-200 dark:border-white/10">
                   {cert.date}
                 </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-6">
                 <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{cert.company}</span>
                 <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                 <span className="text-sm text-slate-400 dark:text-slate-500">Verified</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {cert.desc}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Credential ID</p>
                 <p className="font-mono text-sm text-slate-700 dark:text-slate-200 select-all">{cert.id}</p>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex gap-3">
              <a 
                href={cert.image} 
                download 
                className="flex-1 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download
              </a>
              <button 
                onClick={onClose}
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                 Close
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}