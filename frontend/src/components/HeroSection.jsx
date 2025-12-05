import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Domain data with icons
  const domains = [
    { name: "Agentic AI", full: "Artificial Intelligence", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { name: "Machine Learning", full: "Machine Learning", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
    { name: "Data Science", full: "Data Science", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
    { name: "Generative AI", full: "Generative AI", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
    { name: "Artificial Intelligence", full: "Artificial Intelligence", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /> },
    { name: "Natural Language Processing", full: "NLP", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /> },
    { name: "Full Stack Web Developer", full: "Web Development", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
    { name: "Deep Learning", full: "Deep Learning", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> },
    { name: "Data Analysis", full: "Data Analysis", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 dark:bg-black overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 dark:opacity-20 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

        {/* --- LEFT SIDE --- */}
        <div className={`flex flex-col justify-center space-y-8 py-12 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wide border border-blue-200 dark:border-blue-800 shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Hire
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              Data Science & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 animate-gradient-x">
                AI Enthusiast
              </span>
            </h1>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
            Building intelligent solutions with <strong className="text-slate-900 dark:text-white">Python, Machine Learning, and GenAI</strong>. 
            I bridge the gap between complex data and actionable insights.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              View Projects
            </a>
            <a href="https://github.com/rajat3154" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
             <a href="mailto:rajaturanvir31@gmail.com" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <a href="tel:+917559493154" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/rajat-ranvir" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE — 3D Flip Card --- */}
        <div className={`flex justify-center lg:justify-end relative h-[520px] w-full [perspective:1000px] transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-3xl opacity-20 transform rotate-6 scale-90 animate-pulse"></div>

           <div 
             className={`relative w-full max-w-md h-full transition-all duration-700 [transform-style:preserve-3d] cursor-pointer ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
             onClick={handleFlip}
           >
              {/* ---- FRONT SIDE (Bento Grid) ---- */}
              <div className="absolute inset-0 h-full w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl p-6 shadow-2xl [backface-visibility:hidden] flex flex-col group/card">
                 
                 {/* Header */}
                 <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-600/20 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white uppercase tracking-wider">Tech Matrix</h3>
                    </div>
                    <span className="text-[10px] text-slate-400 border border-slate-200 dark:border-white/10 px-2 py-1 rounded-full">
                      CLICK TO FLIP
                    </span>
                 </div>

                {/* --- 3x3 BENTO GRID --- */}
                <div className="flex-grow grid grid-cols-3 gap-3 content-center">
                  {domains.map((domain, index) => (
                    <div 
                      key={domain.name} 
                      className="group/item relative flex flex-col items-center justify-center aspect-square rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-300 hover:scale-[1.08] hover:shadow-lg hover:z-10 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 overflow-hidden"
                    >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon */}
                      <div className="relative z-10 w-8 h-8 mb-2 text-slate-400 group-hover/item:text-blue-600 dark:text-slate-500 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                          {domain.icon}
                        </svg>
                      </div>

                      {/* Text */}
                      <span className="relative z-10 text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white text-center px-1 leading-tight">
                        {domain.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                   <div className="h-1 w-12 rounded-full bg-slate-200 dark:bg-white/10"></div>
                </div>
              </div>

              {/* ---- BACK SIDE (Profile) ---- */}
              <div 
                className="absolute inset-0 h-full w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <div className="absolute top-4 right-4 text-slate-400 dark:text-slate-500 animate-bounce cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                 </div>

                <div className="relative w-36 h-36 mb-6 group">
                   <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                   <div className="relative w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 p-1">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center">
                         {/* Replace this SVG with your <img src="..." /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-slate-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                   </div>
                </div>

                <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 mb-2">
                  Rajat Ranvir
                </h2>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
                  Data Science & AI Enthusiast
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                  Solving complex problems with <span className="text-blue-500">intelligent agents</span> and data-driven insights.
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}