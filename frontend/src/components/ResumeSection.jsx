import React from "react";

export default function ResumeSection() {
  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-black overflow-hidden relative">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="relative rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
          
          {/* Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>

          <div className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-12 md:gap-20">
            
            {/* --- LEFT: TEXT & CTA --- */}
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Ready to Deploy
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Grab a copy of my <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CV / Resume</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                A concise overview of my technical stack, professional experience, and academic milestones in a portable format.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/resume.pdf"
                  download="Rajat_Ranvir_Resume.pdf"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="mr-2">Download PDF</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>


            {/* --- RIGHT: THE 3D DOCUMENT VISUAL --- */}
            <div className="relative flex-1 w-full flex justify-center items-center perspective-1000 group">
               
               {/* The Floating Paper */}
               <div className="relative w-64 aspect-[1/1.414] bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-white/10 transform transition-transform duration-700 ease-out rotate-y-12 rotate-x-6 group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:scale-105 group-hover:translate-z-10">
                  
                  {/* Internal "Resume" Structure (Skeleton) */}
                  <div className="p-6 space-y-4 opacity-80">
                     {/* Header */}
                     <div className="flex gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="space-y-2">
                           <div className="w-24 h-3 bg-slate-300 dark:bg-slate-600 rounded"></div>
                           <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        </div>
                     </div>
                     {/* Lines */}
                     <div className="space-y-2">
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                        <div className="w-5/6 h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                        <div className="w-4/6 h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                     </div>
                     <div className="pt-4 space-y-2">
                        <div className="w-1/3 h-3 bg-blue-100 dark:bg-blue-900/30 rounded mb-2"></div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                     </div>
                     <div className="pt-4 space-y-2">
                        <div className="w-1/3 h-3 bg-blue-100 dark:bg-blue-900/30 rounded mb-2"></div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                     </div>
                  </div>

                  {/* The Scanning Laser Effect */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
                     <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 absolute top-0 animate-scan"></div>
                     <div className="w-full h-20 bg-gradient-to-b from-blue-500/10 to-transparent absolute top-0 animate-scan-g"></div>
                  </div>

                  {/* Reflection Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
               </div>

               {/* Shadow on the "floor" */}
               <div className="absolute -bottom-12 w-48 h-12 bg-black/20 dark:bg-black/50 blur-xl rounded-[100%] transform transition-all duration-700 group-hover:scale-75 group-hover:opacity-50"></div>

            </div>

          </div>
        </div>

      </div>

      {/* Inline Styles for the Scan Animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes scan-g {
          0% { top: -20px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-scan-g {
          animation: scan-g 3s linear infinite;
        }
      `}</style>
    </section>
  );
}