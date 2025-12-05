import React, { useEffect, useState } from "react";

export default function Navbar() {
  // Initialize state with SSR check to prevent hydration mismatches
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      root.style.setProperty("--bg-dark", "#000000");
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
        scrolled
          ? "bg-white/80 dark:bg-[var(--bg-dark)]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-white">
                Rajat Ranvir
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              {['Product', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white transition-all duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* PROPER TOGGLE SWITCH */}
            <button
              onClick={() => setDark(!dark)}
              className="relative group inline-flex items-center h-8 w-14 px-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
              role="switch"
              aria-checked={dark}
              aria-label="Toggle dark mode"
            >
              <span className="sr-only">Toggle Dark Mode</span>
              
              {/* Sliding Thumb */}
              <span
                className={`${
                  dark ? "translate-x-6 bg-slate-800" : "translate-x-0 bg-white"
                } inline-block w-6 h-6 transform rounded-full shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center`}
              >
                {/* Icons inside the thumb for extra clarity */}
                {dark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Sign in
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold text-white rounded-full bg-slate-900 dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200 shadow-lg shadow-slate-500/20 dark:shadow-none"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 dark:bg-[var(--bg-dark)]/95 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 shadow-xl">
          {['Product', 'Solutions', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex flex-col gap-3">
            <a href="#" className="block w-full text-center px-4 py-3 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10">
              Sign in
            </a>
            <a href="#" className="block w-full text-center px-4 py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}