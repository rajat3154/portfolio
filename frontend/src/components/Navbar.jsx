import React, { useEffect, useState } from "react";

export default function Navbar() {
  // Initialize state
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Single source of truth for navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Check local storage or system preference on mount
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.style.setProperty("--bg-dark", "#0a0a0a");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.style.removeProperty("--bg-dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- LEFT SIDE: Logo & Desktop Nav --- */}
          <div className="flex items-center gap-8">
            
            {/* --- MODIFIED LOGO SECTION --- */}
            <a href="#" className="flex items-center gap-3 group">
              {/* Icon Container */}
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 transform group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Rajat Ranvir
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors tracking-wide mt-0.5">
                  Full Stack & AI Developer
                </span>
              </div>
            </a>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="hidden xl:flex items-center space-x-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-white transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Toggle & Mobile Menu Button --- */}
          <div className="flex items-center gap-4">
            
            {/* THEME TOGGLE SWITCH */}
            <button
              onClick={() => setDark(!dark)}
              className={`
                relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                ${dark ? "bg-slate-800 border-slate-700" : "bg-slate-200 border-slate-300"} 
                border shadow-inner
              `}
              aria-label="Toggle dark mode"
            >
              <span
                className={`${
                  dark ? "translate-x-7 bg-slate-700" : "translate-x-1 bg-white"
                } 
                inline-flex items-center justify-center 
                w-6 h-6 transform rounded-full shadow-md transition-transform duration-300 ease-in-out`}
              >
                {dark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            {/* MOBILE HAMBURGER BUTTON (Visible only on mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                 {/* Icon transition logic */}
                 <span className={`absolute inset-0 transform transition-all duration-300 ${menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                 </span>
                 <span className={`absolute inset-0 transform transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div 
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/90 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 shadow-xl h-screen overflow-y-auto">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between p-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 
                         hover:bg-blue-50 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white 
                         active:scale-[0.98] active:bg-blue-100 dark:active:bg-white/20 transition-all duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
              {/* Little arrow indicator for interaction hint */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          
          {/* Mobile Call to Action */}
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-20">
            <a href="#" className="flex items-center justify-center w-full px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] shadow-lg shadow-blue-500/20 transition-all">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}