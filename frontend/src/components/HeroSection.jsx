import React, { useState, useEffect } from "react";
// --- ASSET IMPORTS ---
import profileImg from './assets/rajat.jpg';
import coverImg from './assets/cover.jpg'; 
import resumeDS from './assets/Rajat_Resume (1).pdf';
import resumeWeb from './assets/resume.pdf'; 

// --- DUAL RESUME MODAL (Kept for the main Hero Button) ---
const ResumeModal = ({ isOpen, onClose, resumes }) => {
  const [activeResume, setActiveResume] = useState('ds'); 

  useEffect(() => {
    if (isOpen) setActiveResume('ds');
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPdf = activeResume === 'ds' ? resumes.ds : resumes.web;
  const currentFilename = activeResume === 'ds' ? "Rajat_Ranvir_DataScience_Resume.pdf" : "Rajat_Ranvir_WebDev_Resume.pdf";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 gap-4">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white hidden md:block">Resume Preview</h3>
          <div className="flex p-1 bg-slate-200 dark:bg-slate-700 rounded-xl">
            <button onClick={() => setActiveResume('ds')} className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${activeResume === 'ds' ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}>Data Science & AI</button>
            <button onClick={() => setActiveResume('web')} className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${activeResume === 'web' ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}>Full Stack Web</button>
          </div>
          <div className="flex items-center gap-3">
            <a href={currentPdf} download={currentFilename} className={`px-4 py-2 text-xs font-semibold text-white rounded-lg transition-colors shadow-lg ${activeResume === 'ds' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20'}`}>Download PDF</a>
            <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white transition-colors bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-1 relative">
            <iframe key={activeResume} src={`${currentPdf}#toolbar=0&view=FitH`} className="w-full h-full rounded-lg" title="Resume PDF" />
        </div>
      </div>
    </div>
  );
};

// --- MINI HOLO NODE (Scaled down for Card) ---
const MiniHoloNode = ({ item, copied, onCopy }) => {
  const isLink = item.type === "link";
  const Wrapper = isLink ? 'a' : 'button';
  const props = isLink 
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } 
    : { onClick: () => onCopy(item.copyValue, item.label) };

  // Color Mapping
  const accentStyles = {
    blue: { border: "group-hover:border-blue-500", bg: "group-hover:bg-blue-500/10", text: "group-hover:text-blue-500", glow: "group-hover:shadow-blue-500/50", iconBg: "bg-blue-500" },
    slate: { border: "group-hover:border-slate-500", bg: "group-hover:bg-slate-500/10", text: "group-hover:text-slate-500", glow: "group-hover:shadow-slate-500/50", iconBg: "bg-[#333]" },
    emerald: { border: "group-hover:border-emerald-500", bg: "group-hover:bg-emerald-500/10", text: "group-hover:text-emerald-500", glow: "group-hover:shadow-emerald-500/50", iconBg: "bg-emerald-500" },
    violet: { border: "group-hover:border-violet-500", bg: "group-hover:bg-violet-500/10", text: "group-hover:text-violet-500", glow: "group-hover:shadow-violet-500/50", iconBg: "bg-violet-500" },
  };

  const style = accentStyles[item.accent] || accentStyles.slate;

  return (
    <Wrapper
      {...props}
      className={`group relative flex items-center p-1.5 rounded-xl transition-all duration-500 ease-out cursor-pointer
        bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md
        w-[40px] h-[40px] hover:w-auto hover:pr-4 overflow-hidden ${style.border} hover:border-opacity-100 ${style.bg}
      `}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md ${style.bg}`}></div>
      
      <div className={`relative z-20 flex-shrink-0 w-[28px] h-[28px] rounded-lg flex items-center justify-center text-white shadow-md transition-all duration-500 group-hover:scale-105 ${style.iconBg} ${style.glow}`}>
        {item.icon}
      </div>

      <div className="relative z-10 flex flex-col justify-center pl-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-x-4 group-hover:translate-x-0">
        <span className={`text-[10px] font-bold ${style.text} uppercase tracking-wider`}>
          {item.label}
        </span>
        {copied && (
             <span className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-500 text-[9px] font-bold bg-white dark:bg-slate-800 px-1 rounded animate-pulse">
                 Copied!
             </span>
        )}
      </div>
    </Wrapper>
  );
}

// --- ENHANCED POCKET ROBOT ---
const PocketRobot = ({ side, stage }) => {
  const isLeft = side === "left";
  const isCenterStage = ['initial', 'handshake'].includes(stage);
  
  let transformClass = "";
  let scaleClass = "scale-100";

  if (isCenterStage) {
    transformClass = isLeft ? "-translate-x-[35px]" : "translate-x-[35px]";
  } else {
    // --- OPEN CARD POSITIONING ---
    scaleClass = "scale-[0.55]"; 
    transformClass = isLeft 
      ? "-translate-x-[135px] -translate-y-[10px]" 
      : "translate-x-[135px] -translate-y-[10px]";
  }

  let armRotation = "rotate-0"; 
  if (stage === 'handshake') {
    armRotation = isLeft ? "-rotate-[100deg]" : "rotate-[100deg]"; 
  } else if (stage === 'pop') {
    armRotation = isLeft ? "-rotate-[45deg]" : "rotate-[45deg]";
  } else if (stage === 'greet') {
    armRotation = isLeft ? "-rotate-[140deg]" : "rotate-[140deg]";
  }

  const isWinking = stage === 'greet' && isLeft; 
  const isHappy = ['handshake', 'greet', 'pop'].includes(stage);

  return (
    <div className={`relative w-32 h-40 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) z-30 ${transformClass} ${scaleClass}`}>
      <div className={`absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-4 bg-white dark:bg-gray-950 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl transition-all duration-500 transform origin-bottom ${stage === 'greet' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
         <p className="text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
            {isLeft ? "Hey👋" : "Welcome Back!😇"}
         </p>
         <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 transform rotate-45"></div>
      </div>

      <svg viewBox="0 0 140 160" className="w-full h-full drop-shadow-2xl animate-float" style={{ animationDelay: isLeft ? '0s' : '1.5s' }}>
        <defs>
            <linearGradient id={`gradBody-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isLeft ? "#e0f2fe" : "#fff7ed"} /> 
                <stop offset="100%" stopColor={isLeft ? "#bae6fd" : "#ffedd5"} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
        </defs>

        <path d="M 70 30 Q 70 10 70 5" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="5" r="5" className={`${isLeft ? 'fill-blue-400' : 'fill-orange-400'} animate-ping`} />
        <circle cx="70" cy="5" r="3" className="fill-white" />

        <rect x="25" y="30" width="90" height="65" rx="25" fill={`url(#gradBody-${side})`} className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <rect x="35" y="45" width="70" height="35" rx="14" className="fill-slate-800 dark:fill-black" />
        
        <g className="animate-blink">
            {isWinking ? (
                <path d="M 45 62 Q 52 56 60 62" stroke={isLeft ? "#22d3ee" : "#facc15"} strokeWidth="3" strokeLinecap="round" fill="none" />
            ) : (
                <g>
                    <circle cx="52" cy="62" r="7" className={isLeft ? "fill-cyan-400" : "fill-yellow-400"} filter="url(#glow)" />
                    <circle cx="54" cy="60" r="2.5" className="fill-white opacity-90" />
                </g>
            )}
            <g>
                <circle cx="88" cy="62" r="7" className={isLeft ? "fill-cyan-400" : "fill-yellow-400"} filter="url(#glow)" />
                <circle cx="90" cy="60" r="2.5" className="fill-white opacity-90" />
            </g>
        </g>

        <path d={isHappy ? "M 65 72 Q 70 76 75 72" : "M 65 74 L 75 74"} fill="none" stroke={isLeft ? "#22d3ee" : "#facc15"} strokeWidth="2" strokeLinecap="round" className="transition-all duration-300"/>
        <path d="M 40 90 Q 70 95 100 90 L 105 125 Q 70 145 35 125 Z" fill={`url(#gradBody-${side})`} className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        <circle cx="70" cy="110" r="8" className="fill-white/50 stroke-slate-300" />
        <path d="M 66 110 L 70 114 L 74 106" fill="none" stroke={isLeft ? "#3b82f6" : "#f97316"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isLeft ? "opacity-100" : "opacity-0"} />
        <circle cx="70" cy="110" r="3" className={`${isLeft ? 'fill-blue-400 opacity-0' : 'fill-orange-400'} ${isLeft ? '' : 'animate-pulse'}`} />

        <g className={`transition-transform duration-700 ease-in-out ${armRotation}`} style={{ transformOrigin: isLeft ? '95px 100px' : '45px 100px' }}>
            <circle cx={isLeft ? 95 : 45} cy="100" r="6" className="fill-slate-300 dark:fill-slate-600" />
            <path d={isLeft ? "M 95 100 Q 115 105 120 95" : "M 45 100 Q 25 105 20 95"} fill="none" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="6" strokeLinecap="round" />
            <circle cx={isLeft ? 120 : 20} cy="95" r="7" className={isLeft ? "fill-blue-400" : "fill-orange-400"} />
        </g>

        <path d="M 55 125 L 60 130 L 80 130 L 85 125" className="fill-slate-400" />
        <path d="M 60 130 Q 70 145 80 130" className={`${isLeft ? 'fill-cyan-400' : 'fill-yellow-400'} opacity-60 animate-pulse`} />
      </svg>
    </div>
  );
};

// --- ROBO REVEAL CONTAINER ---
const RoboProfileReveal = () => {
  const [stage, setStage] = useState('initial');
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('handshake'), 800);
    const timer2 = setTimeout(() => setStage('pop'), 3800);
    const timer3 = setTimeout(() => setStage('greet'), 5500);
    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const domainCards = [
    { name: 'Full Stack Web', color: 'bg-blue-500', icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
    { name: 'AIML', color: 'bg-purple-500', icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { name: 'Data Science', color: 'bg-cyan-500', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
    { name: 'GenerativeAI', color: 'bg-amber-500', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> },
    { name: 'AgenticAI', color: 'bg-emerald-500', icon: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
    { name: 'Python Dev', color: 'bg-indigo-500', icon: <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /> }
  ];

  const socials = [
    {
      id: "linkedin",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rajat-ranvir",
      type: "link",
      accent: "blue",
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.4 8h3.2v13H1.4V8zM8.3 8h3.1v1.8h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.6 4.6 6v7h-3.2v-6.2c0-1.5 0-3.5-2.1-3.5s-2.5 1.6-2.5 3.4V21H8.3V8z"/></svg>
    },
    {
      id: "github",
      label: "GitHub",
      link: "https://github.com/rajat3154",
      type: "link",
      accent: "slate",
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0.5C5.4 0.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6V20c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17 5.3 18 5.6 18 5.6c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.8-2.8 5.8-5.5 6.1.4.4.8 1.2.8 2.4v3.6c0 .3.2.7.8.6A12 12 0 0024 12.5C24 5.9 18.6.5 12 .5z"/></svg>
    },
    {
      id: "email",
      label: "rajaturanvir31@gmail.com",
      copyValue: "rajaturanvir31@gmail.com",
      type: "copy",
      accent: "emerald",
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    },
    {
      id: "phone",
      label: "7559493154",
      copyValue: "+917559493154",
      type: "copy",
      accent: "violet",
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
    },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center [perspective:1000px]">
      
      {/* --- THE ENHANCED CARD --- */}
      <div 
        className={`absolute z-20 w-[380px] h-[480px] bg-white/95 dark:bg-gray-950  border border-white/50 dark:border-white/10 rounded-[2rem] shadow-2xl flex flex-col items-center overflow-hidden 
            ${['initial', 'handshake'].includes(stage) ? 'scale-0 opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}
        `}
      >
        {/* --- REPLACED HEADER: COVER IMAGE --- */}
        <div className="absolute top-0 w-full h-32 overflow-hidden">
            <img 
                src={coverImg} 
                alt="Cover Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/95 dark:from-slate-900/95 to-transparent"></div>
        </div>

        {/* --- PROFILE PIC --- */}
        <div className="relative mt-24 mb-2 group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
            <div className="relative w-28 h-28 rounded-full p-1 bg-white dark:bg-slate-900 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    <img src={profileImg} alt="Rajat Ranvir" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center z-10">
                 <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
        </div>

        <div className="flex flex-col items-center px-6 text-center w-full h-full">
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">Rajat Ranvir</h2>
            <p className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-widest mb-6">
                Full Stack & AI Developer
            </p>
            
            <div className="w-full grid grid-cols-3 gap-2.5 mb-4 px-1">
                {domainCards.map((domain, i) => (
                    <div key={i} className="group flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-gray-950 border border-slate-100 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-sm hover:shadow-md">
                        <div className={`w-6 h-6 mb-1.5 flex items-center justify-center rounded-full ${domain.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {domain.icon}
                            </svg>
                        </div>
                        <span className="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight leading-tight">
                            {domain.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* --- REPLACED RESUME BUTTON WITH SOCIAL NODES --- */}
            <div className="mt-auto mb-4 w-full px-2">
              
                <div className="flex justify-center gap-2">
                    {socials.map((item) => (
                        <MiniHoloNode 
                            key={item.id}
                            item={item}
                            copied={copied === item.label}
                            onCopy={handleCopy}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute">
              <PocketRobot side="left" stage={stage} />
          </div>
          <div className="absolute">
              <PocketRobot side="right" stage={stage} />
          </div>
      </div>

      <div className={`absolute z-40 transition-opacity duration-300 ${stage === 'handshake' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
          <svg className="w-12 h-12 text-yellow-400 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [showResume, setShowResume] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 dark:bg-black overflow-hidden pt-20 lg:pt-0">
      
      {/* RENDER MODAL - Passing both resumes */}
      <ResumeModal 
        isOpen={showResume} 
        onClose={() => setShowResume(false)} 
        resumes={{
            ds: resumeDS, 
            web: resumeWeb
        }}
      />




      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

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
                AIML Enthusiast
              </span>
            </h1>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
            Synthesizing <strong className="text-slate-900 dark:text-white">Data Science</strong>, <strong className="text-slate-900 dark:text-white">LLMs</strong>, and <strong className="text-slate-900 dark:text-white">Agentic AI</strong> with modern <strong className="text-slate-900 dark:text-white">Full Stack</strong> development. 
            From predictive <span className="text-blue-600 dark:text-blue-400 font-medium">Deep Learning</span> models to autonomous systems, I build end-to-end solutions that turn complex data into decisive action.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* BUTTON 1 (Left Side) - Trigger Modal */}
            <button 
                onClick={() => setShowResume(true)}
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Resume
            </button>
            <a href="https://github.com/rajat3154" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-white dark:bg-gray-950 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.48 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          </div>
        </div>

        <div className={`flex justify-center lg:justify-end relative h-[500px] w-full transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
           <RoboProfileReveal />
        </div>

      </div>
    </section>
  );
}