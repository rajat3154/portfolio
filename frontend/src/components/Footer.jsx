import React, { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  // Live Clock for the "Status" widget
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ];

  const socials = [
    { name: "GH", url: "https://github.com/rajat3154", label: "GitHub" },
    { name: "LI", url: "https://www.linkedin.com/in/rajat-ranvir", label: "LinkedIn" },
    { name: "TW", url: "https://x.com", label: "Twitter" },
    { name: "@", url: "mailto:rajaturanvir31@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full bg-slate-50 dark:bg-black pt-20 pb-12 relative overflow-hidden">
      
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. BRAND & BIO (Span 2 cols on Large) */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex flex-col justify-between h-full">
             <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Rajat Ranvir</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                  Architecting intelligent systems through Machine Learning, NLP, and Generative AI.
                </p>
             </div>
             
             <div className="mt-12">
               <form className="relative max-w-xs">
                 <input 
                   type="email" 
                   placeholder="Drop a message..." 
                   className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-400"
                 />
                 <button className="absolute right-1.5 top-1.5 p-1.5 bg-slate-900 dark:bg-white rounded-full text-white dark:text-black hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                 </button>
               </form>
             </div>
          </div>

          {/* 2. NAVIGATION MODULE */}
          <div className="p-8 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex flex-col justify-between">
             <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">Explore</h4>
             <ul className="space-y-3">
               {navLinks.map((link) => (
                 <li key={link.label}>
                   <a href={link.href} className="group flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                     {link.label}
                     <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </a>
                 </li>
               ))}
             </ul>
          </div>

          {/* 3. STATUS WIDGET (Time & Location) */}
          <div className="p-8 rounded-3xl bg-slate-900 dark:bg-black border border-slate-800 dark:border-white/10 text-white flex flex-col justify-between relative overflow-hidden group">
             
             {/* Animated Pulse background */}
             <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-1000"></div>

             <div className="relative z-10">
                <h4 className="font-bold uppercase tracking-wider text-xs text-white/50 mb-6">Status</h4>
                <div className="flex items-center gap-2 mb-1">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                   </span>
                   <span className="text-sm font-medium text-emerald-400">Available for hire</span>
                </div>
                <p className="text-3xl font-mono tracking-tighter font-light">
                  {time}
                </p>
             </div>

             <div className="relative z-10 mt-8">
                <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Base</p>
                <p className="text-sm font-medium">Chhatrapati Sambhajinagar, <br/>Maharashtra, India</p>
             </div>
          </div>

        </div>


        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-white/10">
           
           <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
             © {new Date().getFullYear()} Rajat Ranvir.
           </p>

           {/* Floating Social Dock */}
           <div className="flex items-center gap-1 p-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
              {socials.map((s) => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
                  aria-label={s.label}
                >
                  {s.name}
                </a>
              ))}
           </div>

        </div>

      </div>
    </footer>
  );
}