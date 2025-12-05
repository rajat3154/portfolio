import React from "react";

export default function FeedbackCarousel() {
  const feedbacks = [
    {
      name: "Amit Sharma",
      role: "Software Engineer",
      company: "TechCorp",
      review: "Rajat builds scalable, clean data architectures that drive real business value. His ML modeling logic is exceptional.",
      initials: "AS",
      color: "from-blue-500 to-cyan-400",
      rating: 5
    },
    {
      name: "Priya Nair",
      role: "Data Analyst",
      company: "FinData",
      review: "Blown away by his EDA skills. He transformed raw, chaotic datasets into crystal-clear visualization dashboards.",
      initials: "PN",
      color: "from-purple-500 to-pink-400",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "AI Researcher",
      company: "DeepMind Ops",
      review: "His grasp of RAG pipelines is top-tier. He built a multi-agent system that reduced our query response time by 40%.",
      initials: "RV",
      color: "from-emerald-500 to-teal-400",
      rating: 4
    },
    {
      name: "Sneha Kulkarni",
      role: "Product Manager",
      company: "InnovateX",
      review: "The perfect blend of technical expertise and product sense. Rajat delivers features that are robust and user-centric.",
      initials: "SK",
      color: "from-orange-500 to-red-400",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Tech Lead",
      company: "StartupInc",
      review: "One of the most promising GenAI developers I've worked with. The Agentic Chatbot integration was flawless.",
      initials: "DC",
      color: "from-indigo-500 to-blue-400",
      rating: 5
    }
  ];

  // Duplicate for seamless looping
  const loopFeedbacks = [...feedbacks, ...feedbacks];

  // Helper to render star SVGs
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300 dark:text-slate-600 fill-current'}`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Innovators</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          5-star feedback from engineers, researchers, and product leaders.
        </p>
      </div>

      {/* --- INFINITE TRACK --- */}
      <div className="relative w-full">
        
        {/* Sleek Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-8 pl-8 py-4">
          {loopFeedbacks.map((fb, idx) => (
            <div 
              key={idx} 
              className="w-[380px] md:w-[420px] shrink-0 perspective-1000"
            >
              {/* ENHANCED GLASS CARD */}
              <div className="group relative h-full p-8 rounded-3xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50">
                
                {/* Top Gradient Accent Bar */}
                <div className={`absolute top-0 left-4 right-4 h-[3px] bg-gradient-to-r ${fb.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>

                {/* HEADER: Profile & Stars */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        {/* Initials Avatar with thick ring */}
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-base font-bold shadow-lg bg-gradient-to-br ${fb.color} ring-[5px] ring-slate-50 dark:ring-black`}>
                        {fb.initials}
                        </div>
                        
                        <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${fb.color} transition-all">
                            {fb.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-1.5">
                            {fb.role} <span className="opacity-50">@</span> {fb.company}
                        </p>
                        {/* Render Stars */}
                        {renderStars(fb.rating)}
                        </div>
                    </div>
                </div>

                {/* Sleek Divider */}
                <div className="w-full h-px bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 mb-6 opacity-50"></div>

                {/* BODY: Review Text */}
                <div className="relative z-10">
                   {/* Watermark Quote Icon */}
                   <svg className="absolute -top-4 -left-3 w-10 h-10 text-slate-200/50 dark:text-slate-700/50 -z-10 transform scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                   </svg>
                   <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] font-medium italic">
                    "{fb.review}"
                  </p>
                </div>

                {/* Hover Ambient Glow behind the card */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${fb.color} rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}