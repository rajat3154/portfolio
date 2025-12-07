import React from "react";

export default function Achievements() {
  const items = [
    {
      title: "Runner-up – Codeathon 2024",
      desc: "Awarded by IEEE & MGM University for building an innovative technical solution under pressure.",
      // Using SVG paths instead of emojis for a professional look
      iconPath: "M16.5 18.75h-9v-1.5h9v1.5ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM3 8.25a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3ZM21 8.25a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3Z M12 3a.75.75 0 0 1 .75.75V5.5a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z",
      accentColor: "yellow", // Gold for trophy
    },
    {
      title: "GATE 2024 Qualified (CSE)",
      desc: "Demonstrated strong fundamentals in algorithms, programming, and computer science theory.",
      iconPath: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347C15.028 11.465 9.633 11.465 4.26 10.147ZM12 3.75c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5ZM4.5 8.25a7.5 7.5 0 0 1 15 0v1.5a7.5 7.5 0 0 1-15 0v-1.5Z",
      accentColor: "blue", // Blue for academic/professional
    },
    {
      title: "Best Performer Intern",
      desc: "Recognized at Elevate Labs for exceptional contribution to ML models & dashboards deployment.",
      iconPath: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
      accentColor: "purple", // Purple for star performance
    },
  ];

  return (
    <section id="achievements" className="relative w-full py-24 bg-slate-50 dark:bg-black overflow-hidden">
      
      {/* Subtle Background Celebration Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcmaWxsPSIjOTk5Ij48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjIiLz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500">Recognition</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Moments of success earned through dedication, consistent performance, and creative problem-solving.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((ach, idx) => (
            <AchievementCard key={idx} ach={ach} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- Elegant Achievement Card ---------------- */

function AchievementCard({ ach, index }) {
  
  // Color maps for the glowing accents
  const colors = {
    yellow: "from-yellow-400 to-orange-500 text-yellow-600 dark:text-yellow-400 shadow-yellow-500/20",
    blue: "from-blue-400 to-indigo-500 text-blue-600 dark:text-blue-400 shadow-blue-500/20",
    purple: "from-purple-400 to-pink-500 text-purple-600 dark:text-purple-400 shadow-purple-500/20",
  };
  
  const accent = colors[ach.accentColor];

  return (
    <div
      className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      
      {/* THE CELEBRATION SHIMMER EFFECT */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 pointer-events-none z-20 skew-x-[-20deg]"></div>
      
      {/* Ambient Glow behind the card on hover */}
      <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accent.split(' ')[0]} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>


      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Icon Emblem */}
        <div className={`mb-6 relative`}>
          {/* Glowing ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent.split(' ')[0]} blur-md opacity-40 group-hover:opacity-70 transition-opacity`}></div>
          
          {/* Icon Container */}
          <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${accent.split(' ')[0]} p-[2px]`}>
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-9 h-9 ${accent.split(' ')[2]}`}>
                <path d={ach.iconPath} />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all">
          {ach.title}
        </h3>

        {/* Divider */}
        <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${accent.split(' ')[0]} mb-4 opacity-50 group-hover:opacity-100 transition-opacity`}></div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
          {ach.desc}
        </p>
      </div>
    </div>
  );
}