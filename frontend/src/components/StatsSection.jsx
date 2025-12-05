import React, { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const stats = [
    { label: "AI & ML Projects", value: 12, suffix: "+", color: "from-blue-400 to-indigo-600" },
    { label: "Internships", value: 3, suffix: "", color: "from-purple-400 to-fuchsia-600" },
    { label: "Learning Hours", value: 700, suffix: "+", color: "from-emerald-400 to-teal-600" },
    { label: "Hackathons", value: 4, suffix: "", color: "from-orange-400 to-red-600" },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-black relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Decorative Top Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((item, index) => (
            <React.Fragment key={index}>
              <TelemetryCounter item={item} />
              
              {/* Vertical Divider (Desktop Only, except last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-slate-200 dark:via-white/10 to-transparent" style={{ left: `calc(${(index + 1) * 25}% - 1px)` }}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mt-12"></div>

      </div>
    </section>
  );
}

/* ---------------- The Telemetry Counter Component ---------------- */

function TelemetryCounter({ item }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(0, item.value, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [item.value]);

  // Custom Ease-Out Animation
  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out quart formula: 1 - pow(1 - x, 4)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div ref={ref} className="relative group flex flex-col items-center justify-center text-center">
      
      {/* 1. The Glowing Number */}
      <div className="relative mb-2">
        <span className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b ${item.color} drop-shadow-sm`}>
          {count}
        </span>
        <span className={`text-2xl md:text-3xl font-light text-slate-400 dark:text-slate-600 align-top ml-1`}>
          {item.suffix}
        </span>
        
        {/* Blur Reflection behind text */}
        <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
      </div>

      {/* 2. The Label & Pulse */}
      <div className="flex items-center gap-2">
        <div className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-gradient-to-r ${item.color}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${item.color}`}></span>
        </div>
        
        <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
          {item.label}
        </p>
      </div>

    </div>
  );
}