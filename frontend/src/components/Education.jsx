import React from "react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institute: "Deogiri Institute of Engineering",
      university: "DBATU Lonere",
      score: "CGPA: 7.71",
      year: "2022 - Present",
      status: "current",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      degree: "Higher Secondary (HSC)",
      institute: "Maharashtra State Board",
      university: "Vidhyadham College Chh Sambhajinagar",
      score: "81.50%",
      year: "2021 - 2022",
      status: "completed",
      color: "purple",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      degree: "Secondary School (SSC)",
      institute: "Maharashtra State Board",
      university: "New English High School Chh Sambhajinagar",
      score: "94.20%",
      year: "2019 - 2020",
      status: "completed",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400"
    },
  ];

  return (
    <section id="education" className="w-full py-24 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-50 dark:bg-black  pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Milestones</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            The educational foundation powering my technical career.
          </p>
        </div>

        {/* --- HORIZONTAL TIMELINE CONTAINER --- */}
        <div className="relative w-full">
          
          {/* The Horizontal Track Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent z-0"></div>

          {/* Scrollable Wrapper for Mobile */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-0 overflow-x-auto pb-12 md:overflow-visible snap-x snap-mandatory">
            
            {education.map((edu, idx) => (
              <TimelineItem key={idx} edu={edu} index={idx} total={education.length} />
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Timeline Item Component ---------------- */

function TimelineItem({ edu, index, total }) {
  // Styles for the specific accent color
  const colors = {
    blue: "bg-blue-500 shadow-blue-500/50 border-blue-500/20 text-blue-400",
    purple: "bg-purple-500 shadow-purple-500/50 border-purple-500/20 text-purple-400",
    emerald: "bg-emerald-500 shadow-emerald-500/50 border-emerald-500/20 text-emerald-400",
  };

  return (
    <div className="relative flex-1 min-w-[300px] md:min-w-0 flex flex-col items-center group snap-center">
      
      {/* 1. THE TIMELINE NODE (Top Section) */}
      <div className="relative z-10 flex flex-col items-center mb-6 md:mb-8">
        
        {/* Year Chip (Floating) */}
        <div className={`mb-4 text-black dark:text-white px-3 py-1 rounded-full border bg-white dark:bg-slate-900 shadow-sm text-xs font-bold tracking-wider uppercase transition-transform duration-300 group-hover:-translate-y-1 ${colors[edu.color].split(" ")[2]}`}>
          {edu.year}
        </div>

        {/* The Dot/Circuit Node */}
        <div className="relative">
          {/* Pulse effect for current education */}
          {edu.status === 'current' && (
             <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${edu.gradient} opacity-40 animate-ping`}></div>
          )}
          
          <div className={`w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 shadow-lg ${colors[edu.color].split(" ")[0]} group-hover:scale-125 transition-transform duration-300`}></div>
        </div>

        {/* Vertical Connector Line (Beam) */}
        <div className={`w-px h-8 md:h-12 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700 dark:to-white/5 group-hover:h-full group-hover:bg-gradient-to-b group-hover:${edu.gradient} transition-all duration-500`}></div>
      </div>


      {/* 2. THE CARD (Bottom Section) */}
      <div className="w-full px-4">
        <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-transparent">
          
          {/* Gradient Border Reveal on Hover */}
          <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
             <div className="absolute inset-[1px] rounded-[15px] bg-white dark:bg-slate-900"></div>
          </div>

          {/* Icon/Badge Area */}
          <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-lg shadow-inner group-hover:scale-110 transition-transform duration-300`}>
               {/* Contextual Icon based on level */}
               {index === 0 ? '🎓' : index === 1 ? '🏫' : '🎒'}
            </div>
            
            {/* Score Badge */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Score</span>
              <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${edu.gradient}`}>
                {edu.score}
              </span>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {edu.degree}
          </h3>
          
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
            {edu.institute}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            {edu.university}
          </p>

          {/* Decorative Corner Glow */}
          <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500`}></div>
        </div>
      </div>

    </div>
  );
}