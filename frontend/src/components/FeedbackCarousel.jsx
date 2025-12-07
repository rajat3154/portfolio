import React, { useState, useEffect } from "react";

// Helper to access environment variables safely
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export default function FeedbackCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Feedbacks from Backend on Mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/feedback`);
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
            setFeedbacks(data);
        } else {
            setFeedbacks(INITIAL_DATA);
        }
      }
    } catch (error) {
      console.error("Failed to fetch feedbacks:", error);
      setFeedbacks(INITIAL_DATA);
    } finally {
      setLoading(false);
    }
  };

  const handleNewFeedback = (newFeedback) => {
    setFeedbacks(prev => [newFeedback, ...prev]); 
    setIsModalOpen(false);
  };

  const loopFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <section id="testimonials" className="w-full py-24 bg-slate-50 dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Innovators</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          5-star feedback from engineers, researchers, and product leaders.
        </p>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-blue-500/10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Share Your Experience
        </button>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-20 pointer-events-none"></div>

        {loading ? (
            <div className="text-center py-10 text-slate-500">Loading reviews...</div>
        ) : (
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-8 pl-8 py-4">
            {loopFeedbacks.map((fb, idx) => (
                <FeedbackCard key={idx} fb={fb} />
            ))}
            </div>
        )}
      </div>

      {isModalOpen && (
        <FeedbackModal onClose={() => setIsModalOpen(false)} onSuccess={handleNewFeedback} />
      )}

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

// --- SUB-COMPONENT: CARD ---
function FeedbackCard({ fb }) {
    const renderStars = (rating) => (
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300 dark:text-slate-600 fill-current'}`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
    );

    return (
        <div className="w-[380px] md:w-[420px] shrink-0 perspective-1000">
            <div className="group relative h-full p-8 rounded-3xl bg-white/90 dark:bg-gray-950 backdrop-blur-md border border-slate-200/50 dark:border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50">
                <div className={`absolute top-0 left-4 right-4 h-[3px] bg-gradient-to-r ${fb.color || 'from-blue-500 to-purple-500'} opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-[5px] ring-slate-50 dark:ring-black overflow-hidden bg-gradient-to-br ${fb.color || 'from-gray-500 to-slate-500'}`}>
                            {fb.image ? (
                                <img src={fb.image} alt={fb.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-white text-base font-bold">{fb.initials}</span>
                            )}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${fb.color} transition-all">
                                {fb.name}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold mb-1.5">
                                {fb.role} <span className="opacity-50">@</span> {fb.company}
                            </p>
                            {renderStars(fb.rating)}
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 mb-6 opacity-50"></div>

                <div className="relative z-10">
                    <svg className="absolute -top-4 -left-3 w-10 h-10 text-slate-200/50 dark:text-slate-700/50 -z-10 transform scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px] font-medium italic">
                        "{fb.review}"
                    </p>
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-r ${fb.color} rounded-[2.5rem] opacity-0 group-hover:opacity-1 blur-2xl transition-opacity duration-500 -z-10`}></div>
            </div>
        </div>
    );
}

// --- SUB-COMPONENT: FORM MODAL ---
function FeedbackModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "", role: "", company: "", review: "", rating: 5, imageFile: null
  });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error("Cloudinary upload failed", error);
        throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- VALIDATION: IMAGE IS COMPULSORY ---
    if (!formData.imageFile) {
        alert("Please upload a profile photo to continue.");
        return;
    }

    setUploading(true);

    try {
        // 1. Upload Image (Now guaranteed to run)
        const imageUrl = await uploadToCloudinary(formData.imageFile);

        // 2. Prepare Payload
        const initials = formData.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
        
        const payload = {
            name: formData.name,
            role: formData.role,
            company: formData.company,
            review: formData.review,
            initials: initials || "U",
            color: "from-blue-500 to-purple-500", 
            rating: formData.rating,
            image: imageUrl 
        };

        // 3. Send to Backend
        const response = await fetch(`${BACKEND_URL}/api/feedback`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            onSuccess(result.data || payload); 
        } else {
            alert("Failed to save feedback");
        }

    } catch (error) {
        console.error("Submission failed:", error);
        alert("Something went wrong.");
    } finally {
        setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white dark:bg-black rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="px-6 py-4 border-b border-slate-100 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-black">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Submit Feedback</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 overflow-hidden relative group cursor-pointer`}>
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Profile Photo 
                    </label>
                    <p className="text-xs text-slate-500">Click circle to upload (Required)</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input 
                        required 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="John Doe" 
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Role</label>
                    <input 
                        required 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Product Manager" 
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Company</label>
                <input 
                    required 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="w-full bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Acme Corp" 
                />
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Rating</label>
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" onClick={() => setFormData(prev => ({...prev, rating: star}))} className="focus:outline-none">
                            <svg className={`w-6 h-6 ${star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-slate-300 dark:text-slate-700'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Review</label>
                <textarea 
                    required 
                    name="review" 
                    value={formData.review} 
                    onChange={handleChange} 
                    rows="3" 
                    className="w-full bg-slate-50 dark:bg-gray-950 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Write your experience..."
                ></textarea>
            </div>

            <button disabled={uploading} type="submit" className="w-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold py-3 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {uploading ? "Processing..." : "Submit Feedback"}
            </button>
        </form>
      </div>
    </div>
  );
}

// Initial Placeholder Data
const INITIAL_DATA = [
    {
      name: "Amit Sharma",
      role: "Software Engineer",
      company: "TechCorp",
      review: "Rajat builds scalable, clean data architectures that drive real business value.",
      initials: "AS",
      color: "from-blue-500 to-cyan-400",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Priya Nair",
      role: "Data Analyst",
      company: "FinData",
      review: "Blown away by his EDA skills. He transformed raw datasets into clear dashboards.",
      initials: "PN",
      color: "from-purple-500 to-pink-400",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Rahul Verma",
      role: "Product Manager",
      company: "InnovateX",
      review: "A true professional. His ability to integrate AI models seamlessly is impressive.",
      initials: "RV",
      color: "from-emerald-500 to-teal-400",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Sneha Gupta",
      role: "CTO",
      company: "StartUp Inc.",
      review: "Rajat's full-stack skills are top-notch. He delivered our MVP ahead of schedule.",
      initials: "SG",
      color: "from-orange-500 to-amber-400",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];