import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: "ID: 9821-44",
      role: "AI/ML Intern",
      company: "Elevate Labs",
      period: "July 2025 - Aug 2025",
      tasks: [
        "Performed data cleaning, preprocessing, and EDA with Pandas, NumPy, Matplotlib.",
        "Built ML models (Regression, Trees, RF, KNN, SVM, K-Means) using Scikit-learn.",
        "Evaluated models with accuracy, precision, recall, AUC, and F1-score."
      ],
      skills: ["Scikit-learn", "Pandas", "ML Models"],
      color: "purple",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: "ID: 5521-88",
      role: "Data Analyst Intern",
      company: "Elevate Labs",
      period: "May 2025 - June 2025",
      tasks: [
        "Performed data cleaning, preprocessing, and EDA using Pandas, NumPy, and Seaborn.",
        "Developed SQL queries and interactive dashboards with Python, SQLite, and Power BI.",
        "Created visualizations and reports with Matplotlib, Seaborn, and Power BI."
      ],
      skills: ["SQL", "Power BI", "Python"],
      color: "blue",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: "ID: 3321-12",
      role: "AI and Cloud Intern",
      company: "Edunet Foundations",
      period: "Dec 2023 - Jan 2024",
      tasks: [
        "Completed 4-week internship in AI, Data Science, and Cloud with IBM SkillsBuild.",
        "Applied Python, SQL, and ML for EDA, predictive modeling, and deployment.",
        "Earned IBM badges in Enterprise Data Science and AI; gained exposure to GenAI."
      ],
      skills: ["IBM Cloud", "GenAI", "Data Science"],
      color: "emerald",
      gradient: "from-emerald-600 to-teal-500"
    },
  ];

  return (
    <section id="experience" className="w-full py-24 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Logs</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Hover over the access cards to reveal project details.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {experiences.map((exp, idx) => (
            <FlipCard key={idx} exp={exp} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- The 3D Flip Card Component ---------------- */

function FlipCard({ exp, index }) {
  // Color configuration
  const themes = {
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-400",
      border: "border-blue-500/30",
      shadow: "shadow-blue-500/20",
      chip: "bg-blue-500/20 border-blue-400/30 text-blue-300"
    },
    purple: {
      bg: "bg-purple-600",
      text: "text-purple-400",
      border: "border-purple-500/30",
      shadow: "shadow-purple-500/20",
      chip: "bg-purple-500/20 border-purple-400/30 text-purple-300"
    },
    emerald: {
      bg: "bg-emerald-600",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      shadow: "shadow-emerald-500/20",
      chip: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
    }
  };
  
  const theme = themes[exp.color] || themes.blue;

  return (
    <div 
      className="group relative h-[420px] w-full [perspective:1000px] cursor-pointer"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      
      {/* --- THE FLIPPING CONTAINER --- */}
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* ==============================================
            FRONT FACE (The ID Card)
        =============================================== */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-[20px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden flex flex-col">
           
           {/* Top Gradient Header */}
           <div className={`h-32 w-full bg-gradient-to-br ${exp.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              
              {/* Company Logo/Initial */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800">
                 <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${exp.gradient}`}>
                   {exp.company.charAt(0)}
                 </span>
              </div>
           </div>

           {/* Front Content */}
           <div className="pt-12 pb-8 px-6 text-center flex-1 flex flex-col items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                {exp.company}
              </p>

              {/* Decorative ID Chip */}
              <div className="w-12 h-9 rounded bg-yellow-200/50 border border-yellow-400/50 relative mb-auto flex items-center justify-center overflow-hidden">
                 <div className="absolute top-1/2 left-0 w-full h-px bg-yellow-500/40"></div>
                 <div className="absolute left-1/2 top-0 w-px h-full bg-yellow-500/40"></div>
                 <div className="w-8 h-5 border border-yellow-600/30 rounded-sm"></div>
              </div>

              {/* Footer info */}
              <div className="w-full border-t border-slate-100 dark:border-white/5 pt-4 flex justify-between items-center text-xs font-mono text-slate-400">
                 <span>{exp.period}</span>
                 <span className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                    Flip for details 
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                 </span>
              </div>
           </div>
        </div>


        {/* ==============================================
            BACK FACE (The Data File)
        =============================================== */}
        <div className={`absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[20px] bg-slate-900 dark:bg-black border ${theme.border} shadow-2xl overflow-hidden p-8 flex flex-col`}>
           
           {/* Background Glow */}
           <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} blur-[80px] opacity-20 pointer-events-none`}></div>

           {/* Header */}
           <div className="flex justify-between items-start mb-6">
              <div className="text-left">
                 <h4 className="text-lg font-bold text-white mb-1">Task Log</h4>
                 <p className={`text-xs font-mono uppercase tracking-wider ${theme.text}`}>{exp.id}</p>
              </div>
              <div className={`w-8 h-8 rounded-full ${theme.bg} flex items-center justify-center shadow-lg shadow-white/10`}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                 </svg>
              </div>
           </div>

           {/* Tasks List */}
           <ul className="text-slate-300 text-sm leading-relaxed mb-8 space-y-3 list-disc list-outside ml-4">
             {exp.tasks.map((task, i) => (
               <li key={i} className="pl-1 marker:text-slate-500">
                 {task}
               </li>
             ))}
           </ul>

           {/* Tech Stack */}
           <div className="mt-auto">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                 {exp.skills.map((skill, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-[10px] font-semibold tracking-wide ${theme.chip}`}>
                       {skill}
                    </span>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}