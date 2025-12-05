import React, { useState, useEffect } from "react";

// --- ENHANCED POCKET ROBOT (CUTE EDITION) ---
const PocketRobot = ({ side, stage }) => {
  const isLeft = side === "left";

  // --- POSITION LOGIC ---
  // MODIFIED: Removed 'pop' from here. 
  // Now, when stage is 'pop', isCenter is false, so they move to corners.
  const isCenter = ['initial', 'handshake'].includes(stage);
  
  let transformClass = "";
  if (isCenter) {
    transformClass = isLeft ? "-translate-x-[35px]" : "translate-x-[35px]";
  } else {
    transformClass = isLeft 
      ? "-translate-x-[170px] translate-y-[150px]" 
      : "translate-x-[170px] -translate-y-[150px]";
  }

  // --- ARM LOGIC ---
  let armRotation = "rotate-0"; 
  if (stage === 'handshake') {
    armRotation = isLeft ? "-rotate-[100deg]" : "rotate-[100deg]"; 
  } else if (stage === 'pop') {
    // Arms open wide while moving to corners
    armRotation = isLeft ? "-rotate-[45deg]" : "rotate-[45deg]";
  } else if (stage === 'greet') {
    armRotation = isLeft ? "-rotate-[140deg]" : "rotate-[140deg]";
  }

  // --- FACE LOGIC ---
  const isWinking = stage === 'greet' && isLeft; 
  const isHappy = ['handshake', 'greet', 'pop'].includes(stage);

  return (
    <div className={`relative w-32 h-40 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) z-30 ${transformClass}`}>
      
      {/* Greeting Bubble */}
      <div className={`absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl transition-all duration-500 transform origin-bottom ${stage === 'greet' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
         <p className="text-xs font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">
            {isLeft ? "Teamwork! 🤝" : "Hi there! 👋"}
         </p>
         <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 transform rotate-45"></div>
      </div>

      {/* SVG BODY */}
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

        {/* Antenna */}
        <path d="M 70 30 Q 70 10 70 5" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="5" r="5" className={`${isLeft ? 'fill-blue-400' : 'fill-orange-400'} animate-ping`} />
        <circle cx="70" cy="5" r="3" className="fill-white" />

        {/* Head */}
        <rect x="25" y="30" width="90" height="65" rx="25" fill={`url(#gradBody-${side})`} className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        
        {/* Visor */}
        <rect x="35" y="45" width="70" height="35" rx="14" className="fill-slate-800 dark:fill-black" />
        
        {/* Eyes */}
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

        {/* Mouth */}
        <path 
            d={isHappy ? "M 65 72 Q 70 76 75 72" : "M 65 74 L 75 74"} 
            fill="none" 
            stroke={isLeft ? "#22d3ee" : "#facc15"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            className="transition-all duration-300"
        />

        {/* Body */}
        <path d="M 40 90 Q 70 95 100 90 L 105 125 Q 70 145 35 125 Z" fill={`url(#gradBody-${side})`} className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="2" />
        
        {/* Core */}
        <circle cx="70" cy="110" r="8" className="fill-white/50 stroke-slate-300" />
        <path d="M 66 110 L 70 114 L 74 106" fill="none" stroke={isLeft ? "#3b82f6" : "#f97316"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isLeft ? "opacity-100" : "opacity-0"} />
        <circle cx="70" cy="110" r="3" className={`${isLeft ? 'fill-blue-400 opacity-0' : 'fill-orange-400'} ${isLeft ? '' : 'animate-pulse'}`} />

        {/* Arm */}
        <g className={`transition-transform duration-700 ease-in-out ${armRotation}`} style={{ transformOrigin: isLeft ? '95px 100px' : '45px 100px' }}>
            <circle cx={isLeft ? 95 : 45} cy="100" r="6" className="fill-slate-300 dark:fill-slate-600" />
            <path d={isLeft ? "M 95 100 Q 115 105 120 95" : "M 45 100 Q 25 105 20 95"} fill="none" stroke="currentColor" className="text-slate-400 dark:text-slate-500" strokeWidth="6" strokeLinecap="round" />
            <circle cx={isLeft ? 120 : 20} cy="95" r="7" className={isLeft ? "fill-blue-400" : "fill-orange-400"} />
        </g>

        {/* Thrusters */}
        <path d="M 55 125 L 60 130 L 80 130 L 85 125" className="fill-slate-400" />
        <path d="M 60 130 Q 70 145 80 130" className={`${isLeft ? 'fill-cyan-400' : 'fill-yellow-400'} opacity-60 animate-pulse`} />
      </svg>
    </div>
  );
};

// --- ROBO REVEAL CONTAINER ---

// --- ROBO REVEAL CONTAINER ---
// --- ROBO REVEAL CONTAINER ---
// --- ROBO REVEAL CONTAINER ---
const RoboProfileReveal = () => {
  // Stages: 'initial' -> 'handshake' -> 'pop' -> 'greet'
  const [stage, setStage] = useState('initial');

  useEffect(() => {
    // 1. Handshake (0.8s)
    const timer1 = setTimeout(() => setStage('handshake'), 800);

    // 2. Card Opens & Robots Slide Out (3.8s)
    const timer2 = setTimeout(() => setStage('pop'), 3800);

    // 3. Greet (5.5s)
    const timer3 = setTimeout(() => setStage('greet'), 5500);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center [perspective:1000px]">
      
      {/* --- THE ENHANCED CARD --- */}
      <div 
        className={`absolute z-20 w-[340px] h-[450px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] shadow-2xl flex flex-col items-center overflow-hidden transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)
            ${['initial', 'handshake'].includes(stage) ? 'scale-0 opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}
        `}
      >
        {/* Card Header Background */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500">
            {/* Abstract Header Pattern */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/95 dark:from-slate-900/95 to-transparent"></div>
        </div>

        {/* --- PROFILE SECTION --- */}
        <div className="relative mt-16 mb-2 group cursor-pointer">
            
            {/* THE "BEHIND CIRCLE" GLOW (Rotating Gradient) */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
            
            {/* Thumbnail Image Container */}
            <div className="relative w-28 h-28 rounded-full p-1 bg-white dark:bg-slate-900 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    {/* Placeholder Image (Replace src with your actual photo URL) */}
                    <img 
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rajat&backgroundColor=b6e3f4" 
                        alt="Profile" 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Online Status Dot */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center z-10">
                 <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
        </div>

        {/* --- DETAILS SECTION --- */}
        <div className="flex flex-col items-center px-6 text-center w-full h-full">
            {/* Name & Title */}
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">Rajat Ranvir</h2>
            <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 uppercase tracking-widest mb-3">
                Full Stack & AI Engineer
            </p>

            {/* Short Bio */}
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 mb-5 px-4">
                Bridging the gap between <strong className="text-slate-700 dark:text-slate-300">Complex Data</strong> and <strong className="text-slate-700 dark:text-slate-300">User Experience</strong>. Building autonomous agents and scalable web apps.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 w-full mb-5">
                {[
                    { label: "Experience", val: "3+ Yrs" },
                    { label: "Projects", val: "20+" },
                    { label: "Clients", val: "10+" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="text-sm font-black text-slate-700 dark:text-slate-200">{stat.val}</span>
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wide">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Current Focus / Stack */}
            <div className="w-full text-left mb-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">Core Arsenal</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                    {['Python', 'React', 'FastAPI', 'PyTorch', 'LLMs', 'SQL'].map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto mb-6 w-full px-2">
                <button className="group relative w-full py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shadow-lg overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    <span className="relative flex items-center justify-center gap-2">
                        Download Resume 
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </span>
                </button>
            </div>
        </div>
      </div>

      {/* --- ROBOTS (Logic preserved) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute">
              <PocketRobot side="left" stage={stage} />
          </div>
          <div className="absolute">
              <PocketRobot side="right" stage={stage} />
          </div>
      </div>

      {/* Handshake Sparkle Effect */}
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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 dark:bg-black overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 dark:opacity-20 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

        {/* --- LEFT SIDE (Text Content) --- */}
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
            <a href="#projects" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              View Resume
            </a>
            <a href="https://github.com/rajat3154" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.48 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE (Robo Profile Reveal) --- */}
        <div className={`flex justify-center lg:justify-end relative h-[500px] w-full transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
           <RoboProfileReveal />
        </div>

      </div>
    </section>
  );
}