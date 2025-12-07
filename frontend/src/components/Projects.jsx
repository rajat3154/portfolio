import React, { useState, useEffect } from "react";

// --- IMPORT YOUR IMAGES HERE ---
// Ensure this path matches your folder structure
import dsaImg from "./projects/dsa.png"; 

export default function Projects() {
  const [activeId, setActiveId] = useState("01");
  const [selectedProject, setSelectedProject] = useState(null);

  // --- DATA ---
  const domains = [
    {
      id: "01",
      title: "Generative AI & RAG",
      subtitle: "Agents & Vector Search",
      color: "blue",
      gradient: "from-blue-600/20 to-cyan-500/20",
      projects: [
        {
          title: "Multi-Agent DSA Tutor",
          desc: "Personalized DSA tutor with code feedback.",
          fullDesc: "A personalized AI tutor using specialized agents to explain Data Structure concepts, generate adaptive problems, and provide line-by-line code reviews. It combines the power of multiple AI agents acting as teacher, examiner, and mentor.",
          tech: ["React", "FastAPI", "PostgreSQL", "OpenAI"],
          link: "#",
          github: "#",
          image: dsaImg // <--- Displaying your imported image here
        },
        {
          title: "AI Search Engine Agent",
          desc: "Context-aware search combining LLMs with custom data sources via LangChain.",
          fullDesc: "GenAI Search with LangChain enables intelligent, context-aware search by combining large language models with custom data sources. It delivers accurate, conversational responses using LangChain’s retrieval-augmented generation (RAG).",
          tech: ["Python", "Langchain", "Groq API", "Streamlit"],
          link: "https://llmsearchengine1.streamlit.app/",
          github: "https://github.com/rajat3154/Search_Engine",
          image: "https://builtin.com/sites/www.builtin.com/files/2024-06/AI%20search%20engine.jpg"
        },
        {
          title: "NIM Chain RAG",
          desc: "High-performance RAG using NVIDIA NIM and LangChain.",
          fullDesc: "NIM Chain RAG blends NVIDIA NIM and LangChain to deliver fast, accurate answers from custom data. It powers high-performance, AI-driven search and assistants.",
          tech: ["NVIDIA NIM", "Langchain", "OpenAI", "FAISS"],
          link: "https://ragusingnvidianimandlangchain.streamlit.app/",
          github: "https://github.com/rajat3154/RAG_using_NVIDIA_NIM_and_Langchain",
          image: "https://developer-blogs.nvidia.com/wp-content/uploads/2024/08/laika-rag-pipeline-featured.png"
        },
        {
          title: "Groq AI Chatbot",
          desc: "Ultra-fast chatbot using Groq LPU inference engine.",
          fullDesc: "Groq AI Chatbot delivers ultra-fast, context-aware responses by integrating Groq’s high-speed LPU inference engine with LangChain’s RAG pipeline for document retrieval and natural language interaction.",
          tech: ["Groq API", "Langchain", "Streamlit", "FAISS"],
          link: "https://groqqueanschatbot.streamlit.app/",
          github: "https://github.com/rajat3154/Q_and_A_chatbot_using_GROQ",
          image: "https://cdn.sanity.io/images/chol0sk5/production/63b36729cceb851e73c0eca073baca8462d3cec6-1200x627.png"
        },
      ]
    },
    {
      id: "02",
      title: "Predictive Intelligence",
      subtitle: "Machine Learning Models",
      color: "violet",
      gradient: "from-violet-600/20 to-purple-500/20",
      projects: [
        {
          title: "Forest Fires Prediction",
          desc: "Forecasting wildfire risks using environmental data and ML.",
          fullDesc: "Forest Fires Prediction leverages machine learning to forecast wildfire risks using environmental data. It aids in early detection and prevention efforts.",
          tech: ["Python", "Flask", "Scikit-Learn", "Pandas"],
          link: "https://test-forest-fires.onrender.com/",
          github: "https://github.com/rajat3154/Test_Forest_Fires",
          image: "https://forumias.com/blog/wp-content/uploads/2024/06/Causes-of-forest-fires-in-Himachal-Pradesh.png"
        },
        {
          title: "Churn Prediction App",
          desc: "Identify customers likely to leave using classification models.",
          fullDesc: "Churn Prediction App uses machine learning to identify customers likely to leave a service. It helps businesses take proactive steps to retain users and reduce churn.",
          tech: ["TensorFlow", "Keras", "Scikit-Learn", "Streamlit"],
          link: "https://annclassificationchurnprediction.streamlit.app/",
          github: "https://github.com/rajat3154/ANN_Classification_Churn_Prediction",
          image: "https://softwareequity.com/wp-content/uploads/2023/07/SEG_BlogHeader_CustomerChurnAnalysis.png"
        },
        {
          title: "Insurance Prediction",
          desc: "Estimate insurance premiums based on user data.",
          fullDesc: "Insurance Prediction App leverages machine learning to estimate insurance claims or premium costs based on user data. It supports smarter underwriting and risk assessment decisions.",
          tech: ["Streamlit", "Scikit-Learn", "Numpy", "Matplotlib"],
          link: "https://insurancepredictiontool.streamlit.app/",
          github: "https://github.com/rajat3154/Insurance_Prediction",
          image: "https://miro.medium.com/v2/resize:fit:900/1*t4V0iRSmh2cAmTwxWy2wHQ.png"
        },
        {
          title: "Movie Sentiment Analysis",
          desc: "Classify reviews as positive or negative using NLP.",
          fullDesc: "Movie Review Sentiment Analysis uses NLP to classify reviews as positive, negative, or neutral. It helps gauge audience reactions and trends from textual feedback.",
          tech: ["TensorFlow", "RNN", "Keras", "NLP"],
          link: "https://moviereviewsentimentanalysisrnn.streamlit.app/",
          github: "https://github.com/rajat3154/Movie_Review_Sentiment_Analyis_Using-RNN",
          image: "https://miro.medium.com/v2/resize:fit:926/1*J2sHkIQ1zVkl1_XlmGV3bA.png"
        },
      ]
    },
    {
      id: "03",
      title: "Deep Learning & NLP",
      subtitle: "Neural Networks & Text",
      color: "emerald",
      gradient: "from-emerald-600/20 to-teal-500/20",
      projects: [
        {
          title: "LSTM Next Word",
          desc: "Predicting text sequences using Long Short-Term Memory networks.",
          fullDesc: "LSTM RNN Next Word Prediction uses a recurrent neural network with LSTM layers to predict the next word in a sentence. It learns language patterns for smart text generation.",
          tech: ["Tensorflow", "Keras", "LSTM", "NLTK"],
          link: "https://lstmrnnnextwordprediction.streamlit.app/",
          github: "https://github.com/rajat3154/Next_Word_Prediction_LSTM_RNN",
          image: "https://i.ytimg.com/vi/Zn22qt7j2dM/maxresdefault.jpg"
        },
        {
          title: "GRU Next Word",
          desc: "Efficient text prediction using Gated Recurrent Units.",
          fullDesc: "GRU RNN Next Word Prediction utilizes a GRU-based recurrent neural network to predict the next word in a sequence. It efficiently captures context for accurate language modeling.",
          tech: ["Tensorflow", "Keras", "GRU", "NLTK"],
          link: "https://grurnnnextwordprediction.streamlit.app/",
          github: "https://github.com/rajat3154/Next_Word_Prediction_GRU_RNN",
          image: "https://i.ytimg.com/vi/Zn22qt7j2dM/maxresdefault.jpg"
        },
        {
          title: "Gemini AI Chatbot",
          desc: "Conversational agent powered by Google's Gemini models.",
          fullDesc: "Gemini AI Chatbot is a conversational agent powered by Google’s Gemini models, delivering smart, context-aware responses. It enables dynamic and human-like interactions.",
          tech: ["Gemini API", "Langchain", "Langsmith", "Streamlit"],
          link: "https://geminiqueanschatbot.streamlit.app/",
          github: "https://github.com/rajat3154/Q_and_A_chatbot_using_Google_Gemini",
          image: "https://www.tubefilter.com/wp-content/uploads/2024/06/google-ai-gemini-1400x825.jpg"
        },
        {
          title: "AI Text Summarization",
          desc: "Summarize PDFs and YouTube videos via LangChain.",
          fullDesc: "Text Summarizer from PDF & YouTube using LangChain extracts content from PDFs and YouTube transcripts, then generates concise summaries using LLMs.",
          tech: ["Langchain", "PyTube", "Groq API", "Streamlit"],
          link: "https://langchaintextsummarization.streamlit.app/",
          github: "https://github.com/rajat3154/Langchain_Text_Summarization",
          image: "https://cdn.prod.website-files.com/673728fe79d73c09073776cb/676c51a7873a7667009f5e40_Summarizer-short-long.webp"
        },
      ]
    },
    {
      id: "04",
      title: "Apps & Tools",
      subtitle: "Full Stack & Utilities",
      color: "orange",
      gradient: "from-orange-600/20 to-red-500/20",
      projects: [
        {
          title: "JobInternHub",
          desc: "Aggregator curating job listings from top platforms.",
          fullDesc: "JobInternHub is a job and internship aggregator that curates listings from top platforms using targeted keywords. It features a clean, responsive UI with direct application links.",
          tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
          link: "https://jobinternhub.vercel.app/",
          github: "https://github.com/rajat3154/Jobs-Interns-Hub",
          image: "https://www.shutterstock.com/image-vector/vector-group-people-lifting-financial-260nw-2079685996.jpg"
        },
        {
          title: "GenAI Resume Crafter",
          desc: "AI tool to enhance and tailor resumes for jobs.",
          fullDesc: "GenAI Resume Rewriter uses AI to enhance and tailor resumes based on job descriptions. It optimizes content, tone, and keywords to improve hiring chances.",
          tech: ["Gemini API", "Reportlab", "PyPDF2", "Streamlit"],
          link: "#",
          github: "#",
          image: "https://www.cvdesigner.in/uploads/blogs/uvLGNa1zsPQeXtX34paPBhnziyKadPVHP0pPDGfC241109040343.jpg"
        },
        {
          title: "Chat with SQL DB",
          desc: "Natural language interaction with SQL databases.",
          fullDesc: "Chat with SQL Database enables natural language interaction with your SQL data using AI. It translates user queries into SQL, making data access intuitive and code-free.",
          tech: ["Langchain", "SQLAlchemy", "Groq API", "SQLite"],
          link: "https://langchainchatsqldb.streamlit.app/",
          github: "https://github.com/rajat3154/Chat_SQL",
          image: "https://cdn.prod.website-files.com/6168d128e202c48765e7942e/6455925cd43e25153f7409da_ChatGPT%20OpenAI%20SQL.webp"
        },
        {
          title: "AI Math Solver",
          desc: "Step-by-step math problem solver using AI.",
          fullDesc: "AI Math Problem Solver uses advanced AI models to solve math problems step-by-step. It supports a wide range of topics, from basic arithmetic to complex algebra.",
          tech: ["Langchain", "Groq API", "Wikipedia", "Streamlit"],
          link: "https://mathproblemsolver.streamlit.app/",
          github: "https://github.com/rajat3154/Math_Problem_Solver",
          image: "https://cfcdn.decopy.ai/features/ai-math-solver/what-is.png"
        },
      ]
    }
  ];

  return (
    <section id="projects" className="w-full py-20 bg-slate-50 dark:bg-black overflow-hidden relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Hover over a domain to expand. Click a project to explore.
            </p>
          </div>
        </div>

        {/* --- MAIN INTERACTIVE CONTAINER --- */}
        <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[500px]">
          {domains.map((domain) => (
            <DomainPanel 
              key={domain.id} 
              domain={domain} 
              isActive={activeId === domain.id} 
              onActivate={() => setActiveId(domain.id)}
              onProjectClick={(project) => setSelectedProject({ ...project, themeColor: domain.color })}
            />
          ))}
        </div>

      </div>

      {/* --- MODAL OVERLAY --- */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

/* ---------------- Domain Accordion Panel ---------------- */

function DomainPanel({ domain, isActive, onActivate, onProjectClick }) {
  const accentMap = {
    blue: "text-blue-600 dark:text-blue-400 border-blue-500/30",
    violet: "text-violet-600 dark:text-violet-400 border-violet-500/30",
    emerald: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    orange: "text-orange-600 dark:text-orange-400 border-orange-500/30",
  };
  
  const activeColor = accentMap[domain.color];

  return (
    <div
      onMouseEnter={onActivate}
      className={`
        relative overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-gray-950 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
        ${isActive ? 'lg:flex-[3.5]' : 'lg:flex-[0.6]'}
        ${isActive ? 'h-[550px] lg:h-auto' : 'h-20 lg:h-auto'} 
        flex flex-col
      `}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 ${isActive ? 'opacity-100' : ''} transition-opacity duration-700 pointer-events-none`}></div>

      {/* Collapsed Label */}
      <div className={`absolute inset-0 flex items-center justify-center ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'} transition-opacity duration-300 hidden lg:flex`}>
         <div className="transform -rotate-90 whitespace-nowrap">
            <span className="text-lg font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
              {domain.title}
            </span>
         </div>
      </div>

      {/* Expanded Content */}
      <div className={`relative w-full h-full p-6 flex flex-col ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-100`}>
        <div className="flex items-center gap-3 mb-6 shrink-0">
           <span className={`h-8 w-1 rounded-full bg-current ${activeColor}`}></span>
           <div>
              <h3 className={`text-2xl font-bold text-slate-900 dark:text-white leading-none`}>{domain.title}</h3>
              <p className={`text-xs font-bold uppercase tracking-wider opacity-70 ${activeColor} mt-1`}>{domain.subtitle}</p>
           </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 h-full overflow-y-auto pr-2 custom-scrollbar ${isActive ? 'block' : 'hidden lg:block'}`}>
           {domain.projects.map((proj, i) => (
             <ProjectSubCard key={i} project={proj} color={domain.color} index={i} onClick={() => onProjectClick(proj)} />
           ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Clickable Sub-Card ---------------- */

function ProjectSubCard({ project, color, index, onClick }) {
  const hoverColors = {
    blue: "hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-blue-500/10",
    violet: "hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-violet-500/10",
    emerald: "hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-emerald-500/10",
    orange: "hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-orange-500/10",
  };

  return (
    <div 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`group relative p-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hoverColors[color]} flex flex-col justify-center cursor-pointer overflow-hidden`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start mb-2 relative z-10">
        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">{project.title}</h4>
        <div className="p-1 rounded-full bg-slate-100 dark:bg-white/10 group-hover:bg-white dark:group-hover:bg-white/20 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
        </div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 relative z-10">{project.desc}</p>
      
      {/* Background Image Preview on Hover */}
      {project.image && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
           <img src={project.image} alt="" className="w-full h-full object-cover grayscale opacity-20" />
        </div>
      )}
    </div>
  );
}

/* ---------------- UPDATED PROJECT MODAL (Matches Certifications Style) ---------------- */

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const themeStyles = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-600",
    violet: "text-violet-600 dark:text-violet-400 bg-violet-600",
    emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-600",
    orange: "text-orange-600 dark:text-orange-400 bg-orange-600",
  };

  const themeColor = themeStyles[project.themeColor || 'blue'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[80vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* --- LEFT PANEL: IMAGE (Certificate Style) --- */}
        <div className="w-full md:w-3/5 bg-slate-100 dark:bg-slate-900 relative min-h-[250px] md:min-h-full flex items-center justify-center p-8 overflow-hidden">
           
           {/* Abstract Background */}
           <div className={`absolute inset-0 bg-gradient-to-br ${themeColor.split(" ")[2]} opacity-10`}></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

           {/* The Image "Card" */}
           <div className="relative w-full h-auto shadow-2xl rounded-xl border border-white/20 dark:border-white/10 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 bg-white dark:bg-black">
             {project.image ? (
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover"
               />
             ) : (
               <div className="flex flex-col items-center justify-center p-20 text-slate-400">
                  <span className="text-4xl mb-2">🖼️</span>
                  <span>No Preview Available</span>
               </div>
             )}
           </div>
        </div>

        {/* --- RIGHT PANEL: DETAILS --- */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-between bg-white dark:bg-[#0a0a0a] overflow-y-auto">
          
          <div>
             <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border bg-transparent border-slate-200 dark:border-white/10 ${themeColor.split(" ")[0]} mb-2`}>
                  Project Details
                </span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4 leading-tight">
                  {project.title}
                </h3>
                {/* Accent Line */}
                <div className={`h-1 w-24 rounded-full ${themeColor.split(" ")[2]} opacity-80`}></div>
             </div>

             <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  {project.fullDesc || project.desc}
                </p>
             </div>

             <div className="mt-8">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</h4>
               <div className="flex flex-wrap gap-2">
                 {project.tech && project.tech.map((t, i) => (
                   <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                     {t}
                   </span>
                 ))}
               </div>
             </div>
          </div>

          {/* Fixed Footer Buttons */}
          <div className="mt-auto flex gap-3 pt-6 border-t border-slate-100 dark:border-white/5">
             {project.github && project.github !== "#" && (
                <a 
                  href={project.github} 
                  target="_blank" rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all active:scale-95 ${themeColor.split(" ")[2]} hover:opacity-90 shadow-lg`}
                >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                   Code
                </a>
             )}
             {project.link && project.link !== "#" && (
                <a 
                  href={project.link}
                  target="_blank" rel="noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Demo
                </a>
             )}
          </div>

        </div>

      </div>
    </div>
  );
}