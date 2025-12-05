import React from "react";

// --- RAW DATA SOURCE ---
const allSkillsData = [
  // Languages
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages", needsBackground: false },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages", needsBackground: false },
  { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Languages", needsBackground: false },
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Languages", needsBackground: false },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Languages", needsBackground: false },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Languages", needsBackground: false },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases", needsBackground: true },

  // Frameworks
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frameworks", needsBackground: false },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Frameworks", needsBackground: true },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Frameworks", needsBackground: true },
  { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Frameworks", needsBackground: true },
  { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Frameworks", needsBackground: false },
  { name: "TailwindCSS", img: "https://www.techuz.com/static/e33ed070a6f3885cfe9444f6baf97500/6172c/Tailwind-logo.webp", category: "Frameworks", needsBackground: false },
  { name: "Gradio", img: "https://avatars.githubusercontent.com/u/57314777?s=200&v=4", category: "Frameworks", needsBackground: true },

  // Libraries
  { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "Libraries", needsBackground: true },
  { name: "Numpy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", category: "Libraries", needsBackground: false },
  { name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", category: "Libraries", needsBackground: true },
  { name: "Scikit-Learn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", category: "Libraries", needsBackground: true },
  { name: "BeautifulSoup", img: "https://python-charts.com/images/beautiful-soup.png", category: "Libraries", needsBackground: false },
  { name: "Uvicorn", img: "https://raw.githubusercontent.com/encode/uvicorn/master/docs/uvicorn.png", category: "Libraries", needsBackground: true },

  // AI/ML
  { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "AI/ML Tools", needsBackground: false },
  { name: "Keras", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", category: "AI/ML Tools", needsBackground: true },
  { name: "Hugging Face", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", category: "AI/ML Tools", needsBackground: false },
  { name: "NVIDIA NIM", img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", category: "AI/ML Tools", needsBackground: false },
  { name: "Vertex AI", img: "https://www.gstatic.com/devrel-devsite/prod/v238534c0602052f5d723793e24de79427b0eb2309d43f07a049d568df538466e/cloud/images/cloud-logo.svg", category: "AI/ML Tools", needsBackground: false },

  // GenAI
  { name: "OpenAI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg", category: "AI/ML Tools", needsBackground: true },
  { name: "Gemini", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", category: "AI/ML Tools", needsBackground: false },
  { name: "LangChain", img: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", category: "AI/ML Tools", needsBackground: false },
  { name: "LangSmith", img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langsmith.png", category: "AI/ML Tools", needsBackground: true },
  { name: "Ollama", img: "https://ollama.com/public/ollama.png", category: "AI/ML Tools", needsBackground: true },
  { name: "GROQ", img: "https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg", category: "AI/ML Tools", needsBackground: true },
  { name: "Crew AI", img: "https://avatars.githubusercontent.com/u/152350564?s=200&v=4", category: "AI/ML Tools", needsBackground: true },

  // Databases
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Databases", needsBackground: false },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Databases", needsBackground: false },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases", needsBackground: true },
  { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Databases", needsBackground: false },
  { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Databases", needsBackground: false },
  { name: "ChromaDB", img: "https://www.trychroma.com/img/chroma.svg", category: "Databases", needsBackground: false },
  { name: "Neo4j", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", category: "Databases", needsBackground: true },
  { name: "Pinecone", img: "https://cdn.worldvectorlogo.com/logos/pinecone.svg", category: "Databases", needsBackground: false },
  { name: "AstraDB", img: "https://avatars.githubusercontent.com/u/17933745?s=200&v=4", category: "Databases", needsBackground: false },
  { name: "Cassandra", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", category: "Databases", needsBackground: false },

  // Tools
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools", needsBackground: false },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Tools", needsBackground: true },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools", needsBackground: false },
  { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "Tools", needsBackground: false },
  { name: "VSCode", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "IDEs", needsBackground: true },
  { name: "Jupyter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", category: "IDEs", needsBackground: true },
  { name: "Colab", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg", category: "IDEs", needsBackground: false },
  { name: "Anaconda", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg", category: "IDEs", needsBackground: true },
  { name: "PowerBI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", category: "Tools", needsBackground: false },
  { name: "Streamlit", img: "https://streamlit.io/images/brand/streamlit-mark-color.svg", category: "Tools", needsBackground: false },
];

export default function Skills() {
  
  const getSkillData = (name) => {
    const found = allSkillsData.find(s => s.name.toLowerCase() === name.toLowerCase());
    return found || { name: name, img: "", needsBackground: false }; 
  };

  const categories = [
    {
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "SQL", "Java", "JavaScript", "C", "HTML", "CSS"],
    },
    {
      title: "Web Frameworks",
      color: "sky",
      skills: ["React", "Node.js", "Express", "Django", "FastAPI", "TailwindCSS"],
    },
    {
      title: "Data Libraries",
      color: "orange",
      skills: ["Pandas", "Numpy", "Matplotlib", "Scikit-Learn",  "Uvicorn"],
    },
    {
      title: "AI & Deep Learning",
      color: "purple",
      skills: ["TensorFlow", "Keras", "Hugging Face", "NVIDIA NIM", "Gradio"],
    },
    {
      title: "Generative AI",
      color: "indigo",
      skills: ["LangChain", "OpenAI", "Gemini", "LangSmith", "Ollama", "GROQ", "Crew AI"],
    },
    {
      title: "Databases",
      color: "emerald",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "ChromaDB",  "Neo4j", "AstraDB", "Cassandra"],
    },
    {
      title: "Tools & DevOps",
      color: "zinc",
      skills: ["Git", "GitHub", "VSCode", "Jupyter", "Colab", "Anaconda", "PowerBI", "Streamlit"],
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-black overflow-hidden relative">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Arsenal</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Scalable systems toolkit. Bridging <span className="text-slate-900 dark:text-white font-medium">Research</span> and <span className="text-slate-900 dark:text-white font-medium">Deployment</span>.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <TechRowCard 
              key={idx} 
              {...cat} 
              getSkillData={getSkillData} 
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ---------------- The Horizontal Carousel Card ---------------- */

function TechRowCard({ title, skills, color, getSkillData, index }) {
  
  const colorMap = {
    blue: "group-hover:border-blue-500/50 from-blue-500/5 to-blue-500/0",
    purple: "group-hover:border-purple-500/50 from-purple-500/5 to-purple-500/0",
    indigo: "group-hover:border-indigo-500/50 from-indigo-500/5 to-indigo-500/0",
    emerald: "group-hover:border-emerald-500/50 from-emerald-500/5 to-emerald-500/0",
    sky: "group-hover:border-sky-500/50 from-sky-500/5 to-sky-500/0",
    orange: "group-hover:border-orange-500/50 from-orange-500/5 to-orange-500/0",
    zinc: "group-hover:border-zinc-500/50 from-zinc-500/5 to-zinc-500/0",
  };

  const textColors = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    sky: "text-sky-600 dark:text-sky-400",
    orange: "text-orange-600 dark:text-orange-400",
    zinc: "text-zinc-600 dark:text-zinc-400",
  };

  // Duplicate skills to create seamless loop
  const loopSkills = [...skills, ...skills, ...skills];

  return (
    <div 
      className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colorMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

      {/* --- CONTENT --- */}
      <div className="relative p-5 flex flex-col justify-center h-full">
        
        {/* Title */}
        <h3 className={`text-base font-bold uppercase tracking-widest mb-4 ${textColors[color]}`}>
          {title}
        </h3>

        {/* --- CAROUSEL WINDOW --- */}
        <div className="relative w-full overflow-hidden mask-linear-fade">
          
          {/* Left/Right Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>

          {/* The Scrolling Track */}
          <div className="flex w-max gap-4 animate-scroll group-hover:[animation-play-state:paused]">
            {loopSkills.map((skillName, idx) => {
              const skillData = getSkillData(skillName);
              return (
                <div 
                  key={`${skillName}-${idx}`} 
                  className="flex flex-col items-center justify-center gap-2 w-20 shrink-0 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  {skillData.img ? (
                    <img 
                      src={skillData.img} 
                      alt={skillData.name} 
                      className={`w-8 h-8 object-contain ${skillData.needsBackground ? "bg-white rounded-full p-1" : ""}`} 
                    />
                  ) : (
                    <span className="text-2xl">⚡</span>
                  )}
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 text-center leading-none truncate w-full">
                    {skillData.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}