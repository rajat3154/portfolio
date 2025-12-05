import React, { useState } from "react";

export default function Connect() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const socials = [
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "in/rajat-ranvir",
      link: "https://www.linkedin.com/in/rajat-ranvir",
      type: "link",
      accent: "blue", // Used for tailwind color classes
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.4 8h3.2v13H1.4V8zM8.3 8h3.1v1.8h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.6 4.6 6v7h-3.2v-6.2c0-1.5 0-3.5-2.1-3.5s-2.5 1.6-2.5 3.4V21H8.3V8z"/></svg>
    },
    {
      id: "github",
      label: "GitHub",
      value: "@rajat3154",
      link: "https://github.com/rajat3154",
      type: "link",
      accent: "slate",
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0.5C5.4 0.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6V20c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17 5.3 18 5.6 18 5.6c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.8-2.8 5.8-5.5 6.1.4.4.8 1.2.8 2.4v3.6c0 .3.2.7.8.6A12 12 0 0024 12.5C24 5.9 18.6.5 12 .5z"/></svg>
    },
     {
      id: "twitter",
      label: "X (Twitter)",
      value: "@rajat_x",
      link: "https://x.com/yourusername", // Replace with actual link
      type: "link",
      accent: "zinc",
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@rajat.dev",
      link: "https://instagram.com/yourusername", // Replace with actual link
      type: "link",
      accent: "pink", // Using pink to represent the Insta gradient blend
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.771-4.919 4.919-1.265.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    {
      id: "email",
      label: "Email",
      value: "rajaturanvir31@gmail.com",
      copyValue: "rajaturanvir31@gmail.com",
      type: "copy",
      accent: "emerald",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 75594 93154",
      copyValue: "+917559493154",
      type: "copy",
      accent: "violet",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden relative transition-colors duration-500">
      
      {/* Background Circuit Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Connection</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Select a frequency to establish contact.
          </p>
        </div>

        {/* --- HOLOGRAPHIC DATA ARRAY --- */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((item) => (
            <HoloNode 
              key={item.id}
              item={item}
              copied={copied === item.label}
              onCopy={handleCopy}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- The Holographic Node Component ---------------- */

function HoloNode({ item, copied, onCopy }) {
  const isLink = item.type === "link";
  const Wrapper = isLink ? 'a' : 'button';
  const props = isLink 
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } 
    : { onClick: () => onCopy(item.copyValue, item.label) };

  // Color Mapping for Tailwind classes
  const accentStyles = {
    blue: { border: "group-hover:border-blue-500", bg: "group-hover:bg-blue-500/10", text: "group-hover:text-blue-500", glow: "group-hover:shadow-blue-500/50", iconBg: "bg-blue-500" },
    slate: { border: "group-hover:border-slate-500", bg: "group-hover:bg-slate-500/10", text: "group-hover:text-slate-500", glow: "group-hover:shadow-slate-500/50", iconBg: "bg-[#333]" },
    zinc: { border: "group-hover:border-zinc-500", bg: "group-hover:bg-zinc-500/10", text: "group-hover:text-zinc-500", glow: "group-hover:shadow-zinc-500/50", iconBg: "bg-black" },
    // Instagram needs a gradient background for the icon
    pink: { border: "group-hover:border-pink-500", bg: "group-hover:bg-pink-500/10", text: "group-hover:text-pink-500", glow: "group-hover:shadow-pink-500/50", iconBg: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
    emerald: { border: "group-hover:border-emerald-500", bg: "group-hover:bg-emerald-500/10", text: "group-hover:text-emerald-500", glow: "group-hover:shadow-emerald-500/50", iconBg: "bg-emerald-500" },
    violet: { border: "group-hover:border-violet-500", bg: "group-hover:bg-violet-500/10", text: "group-hover:text-violet-500", glow: "group-hover:shadow-violet-500/50", iconBg: "bg-violet-500" },
  };

  const style = accentStyles[item.accent];

  return (
    <Wrapper
      {...props}
      className={`group relative flex items-center p-2 rounded-2xl transition-all duration-500 ease-out cursor-pointer
        bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md
        hover:w-auto hover:pr-8 w-[80px] h-[80px] overflow-hidden ${style.border} hover:border-opacity-100 ${style.bg}
      `}
    >
      
      {/* Ambient Light Burst on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${style.bg}`}></div>
      
      {/* 1. The Icon Container (Always visible) */}
      <div className={`relative z-20 flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 ${style.iconBg} ${style.glow}`}>
        {item.icon}
        
        {/* Subtle internal glow */}
        <div className="absolute inset-0 rounded-xl bg-white/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* 2. The Details Panel (Revealed smoothly on hover) */}
      <div className="relative z-10 flex flex-col justify-center pl-6 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-x-4 group-hover:translate-x-0">
        <span className={`text-sm font-bold ${style.text} uppercase tracking-wider mb-1`}>
          {item.label}
        </span>
        <span className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300 font-mono flex items-center gap-2">
          {item.value}
          
          {/* Action Indicator */}
          <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 ${style.text}`}>
            {copied ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            ) : isLink ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform rotate-45" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>
            )}
          </span>
        </span>
      </div>
    </Wrapper>
  );
}