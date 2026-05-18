"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, Users, Trophy, Award, Target, 
    ChevronRight, X, Heart, ShieldCheck, Sparkles, 
    Camera, ArrowRight, PlayCircle, Eye
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

type EventKey = "spark" | "outreach" | "medicon" | "independence";

interface DetailedEvent {
    title: string;
    date: string;
    category: "Cultural" | "Outreach" | "Conference" | "National";
    desc: string;
    image: string;
    stats: { label: string; value: string }[];
    bullets: string[];
}

const detailedEvents: Record<EventKey, DetailedEvent> = {
    spark: {
        title: "Annual Cultural &amp; Sports Festival — Spark 2026",
        date: "March 10-12, 2026",
        category: "Cultural",
        desc: "A massive three-day celebration of student creativity, talent, and sportsmanship. MBBS scholars and senior faculty competed in football, volleyball, classical dance, mock rock, and inter-batch medical quizzes.",
        image: "/carousel-1.png",
        stats: [
            { label: "ATTENDEES", value: "1,500+" },
            { label: "COMPETITIONS", value: "24 Events" },
            { label: "BATCH PRIZES", value: "₹ 50,000" }
        ],
        bullets: [
            "Inter-batch athletics final with live spectator gallery",
            "Symphonic evening featuring classical sitar and modern fusion band",
            "Medical quiz and clinical case simulation championship",
            "Annual trophy distribution by the Chief Guest"
        ]
    },
    outreach: {
        title: "World Health Day Mega Rural Camp",
        date: "April 07, 2025",
        category: "Outreach",
        desc: "BHRI organized a highly specialized clinical camp in rural Gaya, delivering free multi-specialty consultations, pediatric nutrition audits, diagnostic lipid indices, and essential medicines.",
        image: "/carousel-2.png",
        stats: [
            { label: "PATIENTS HEALED", value: "850+" },
            { label: "OUTREACH DOCS", value: "35+" },
            { label: "FREE DRUGS ISSUED", value: "100%" }
        ],
        bullets: [
            "Free cardiovascular and sugar screening diagnostic points",
            "Pediatric malnutrition mapping and supplement distribution",
            "Hygiene awareness lectures for maternal health scholars",
            "Immediate referral codes generated for critical hospital care"
        ]
    },
    medicon: {
        title: "MediCon 2025: Clinical Oncology Innovations",
        date: "November 15, 2025",
        category: "Conference",
        desc: "A prestigious Continuing Medical Education (CME) conference on molecular diagnostics and keyhole surgical oncology. Guest faculty delegates from premier AIIMS and national hospitals shared research papers.",
        image: "/carousel-3.png",
        stats: [
            { label: "DELEGATES", value: "400+" },
            { label: "PAPERS SUBMITTED", value: "45+" },
            { label: "CME CREDIT HOURS", value: "4 Hours" }
        ],
        bullets: [
            "Keynote lecture on robotic surgical interventions in oncology",
            "Interactive PG scholar poster presentation tracks",
            "Panel discussions on antibiotic stewardship mandates",
            "NMC-accredited certification distribution loops"
        ]
    },
    independence: {
        title: "79th Independence Day Celebration",
        date: "August 15, 2025",
        category: "National",
        desc: "Lively patriotic flag hoisting ceremony on the central lawns, marked by guard of honor parades by security squads and patriotic musicals staged by the Nursing College scholars.",
        image: "/carousel-1.png",
        stats: [
            { label: "CAMPUS TURNOUT", value: "100%" },
            { label: "TREE SAPLINGS PLANTED", value: "50" },
            { label: "NURSING PERFORMANCES", value: "3" }
        ],
        bullets: [
            "Flag hoisting by the Chairman followed by a national address",
            "Patriotic play highlighting clinical sacrifices in rural outposts",
            "Green campus drive: 50 medicinal saplings planted around hostels",
            "Sweets and fellowship lunch distribution for all staff members"
        ]
    }
};

interface GridPhoto {
    src: string;
    title: string;
    category: "Cultural" | "Outreach" | "Conference";
    date: string;
}

const photoGalleryGrid: GridPhoto[] = [
    { src: "/carousel-1.png", title: "Spark 2026 Athletic Finals", category: "Cultural", date: "March 2026" },
    { src: "/carousel-2.png", title: "Free Diagnostic Rural Screening", category: "Outreach", date: "April 2025" },
    { src: "/carousel-3.png", title: "MediCon Oncology Panel Discussion", category: "Conference", date: "Nov 2025" },
    { src: "/carousel-2.png", title: "Student CPR Simulation Workshop", category: "Conference", date: "Jan 2026" },
    { src: "/carousel-1.png", title: "OPD outreach patient consultation", category: "Outreach", date: "Feb 2026" },
    { src: "/carousel-3.png", title: "Championship Sitar Night Recital", category: "Cultural", date: "March 2026" }
];

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<EventKey>("spark");
    const [activeCategory, setActiveCategory] = useState<"All" | "Cultural" | "Outreach" | "Conference">("All");
    const [lightboxImage, setLightboxImage] = useState<GridPhoto | null>(null);

    const activeEvent = detailedEvents[selectedEvent];

    const filteredGrid = photoGalleryGrid.filter((photo) => {
        return activeCategory === "All" || photo.category === activeCategory;
    });

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* HERO */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#18081c] to-[#041a16] mix-blend-multiply opacity-90 z-10" />
                    <Image src="/carousel-1.png" alt="Events Calendar" fill className="object-cover opacity-60" priority />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-6">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-fuchsia-500/10 backdrop-blur-md rounded-full font-bold tracking-widest text-[10px] uppercase border border-fuchsia-500/30 text-fuchsia-300 mb-6">
                        <Camera size={12} /> Milestone Celebrations
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-montserrat leading-tight" style={{ fontFamily: serifFont }}>
                        Institutional Events
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-100 font-medium mb-10 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Relive key cultural festivals, academic medical seminars, free healthcare outposts, and green campus drives at BHRI Bodhgaya.
                    </p>
                    <button 
                        onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 to-rose-600 text-white font-bold rounded-full shadow-lg shadow-fuchsia-600/30 transition-all text-xs uppercase tracking-wider"
                    >
                        Explore Events Calendar
                    </button>
                </div>
            </section>

            {/* INTERACTIVE FEATURED EVENT TIMELINE */}
            <section id="featured" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-fuchsia-600 font-bold text-sm uppercase tracking-widest mb-3 block">Chronicle Registry</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Featured Campus Highlights</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Click on any of the milestone events below to explore detailed outcomes, participation metrics, and key highlights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Event Selector List */}
                        <div className="lg:col-span-4 space-y-4">
                            {(Object.keys(detailedEvents) as EventKey[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedEvent(key)}
                                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-center justify-between group ${
                                        selectedEvent === key 
                                        ? "bg-slate-900 border-slate-900 text-white shadow-xl translate-x-2" 
                                        : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100 hover:border-slate-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            selectedEvent === key ? "bg-fuchsia-500 text-white" : "bg-white text-slate-500 group-hover:text-fuchsia-600"
                                        } transition-colors shadow-sm shrink-0`}>
                                            {key === "spark" && <Trophy size={20} />}
                                            {key === "outreach" && <Heart size={20} />}
                                            {key === "medicon" && <Award size={20} />}
                                            {key === "independence" && <ShieldCheck size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs font-montserrat truncate max-w-[180px]">{key === "spark" ? "Spark Festival" : key === "outreach" ? "World Health Camp" : key === "medicon" ? "MediCon Conference" : "79th Independence Day"}</h4>
                                            <p className={`text-[9px] ${selectedEvent === key ? "text-slate-400" : "text-slate-500"}`}>{detailedEvents[key].date}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform ${selectedEvent === key ? "rotate-90 text-fuchsia-500" : "text-slate-400 group-hover:translate-x-1"}`} />
                                </button>
                            ))}
                        </div>

                        {/* Event Showcase Card */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 shadow-sm relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-2xl pointer-events-none" />
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedEvent}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold text-fuchsia-600 uppercase tracking-widest block mb-2">{activeEvent.category} Milestone</span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight font-montserrat" style={{ fontFamily: serifFont }} dangerouslySetInnerHTML={{ __html: activeEvent.title }} />
                                        <p className="text-slate-600 text-xs leading-relaxed mb-6">{activeEvent.desc}</p>
                                        
                                        <div className="space-y-2 mb-6">
                                            {activeEvent.bullets.map((bullet, i) => (
                                                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-slate-800">
                                                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full shrink-0" />
                                                    <span>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-slate-200 pt-6 grid grid-cols-3 gap-2 text-center">
                                            {activeEvent.stats.map((st, i) => (
                                                <div key={i}>
                                                    <span className="text-sm font-extrabold text-slate-900 block">{st.value}</span>
                                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">{st.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                                        <Image src={activeEvent.image} alt={activeEvent.title} fill className="object-cover" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* EVENT GALLERY PHOTOS WITH LIGHTBOX */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <span className="text-fuchsia-600 font-bold text-sm uppercase tracking-widest mb-3 block">Media Catalog</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Event Snapshot Gallery</h2>
                        <p className="text-slate-500 max-w-xl mx-auto mt-4 text-sm">
                            Browse authentic high-fidelity photos cataloged from different institutional campaigns. Click any image to view details in standard modal zoom panels.
                        </p>
                    </div>

                    {/* Filter Navigation */}
                    <div className="flex justify-center gap-4 mb-12">
                        {(["All", "Cultural", "Outreach", "Conference"] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
                                    activeCategory === cat 
                                    ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                            >
                                {cat} Gallery
                            </button>
                        ))}
                    </div>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredGrid.map((photo, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setLightboxImage(photo)}
                                    className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-fuchsia-200 cursor-pointer transition-all flex flex-col justify-between"
                                >
                                    <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                                        <Image 
                                            src={photo.src} 
                                            alt={photo.title} 
                                            fill 
                                            className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                                <Eye size={18} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[8px] bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-700 font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">{photo.category}</span>
                                            <span className="text-[9px] font-bold text-slate-400">{photo.date}</span>
                                        </div>
                                        <h4 className="text-sm font-extrabold text-slate-800 font-montserrat leading-snug group-hover:text-fuchsia-700 transition-colors">
                                            {photo.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
                    >
                        <button 
                            onClick={() => setLightboxImage(null)} 
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/15 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <motion.div 
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2.5rem] overflow-hidden max-w-3xl w-full border border-white/10 shadow-2xl relative"
                        >
                            <div className="relative h-80 md:h-[400px] w-full bg-slate-900">
                                <Image src={lightboxImage.src} alt={lightboxImage.title} fill className="object-cover" />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[9px] bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-700 font-black px-3 py-1 rounded-full uppercase tracking-wider">{lightboxImage.category} Event</span>
                                    <span className="text-xs font-bold text-slate-400">{lightboxImage.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-montserrat leading-tight mb-2">
                                    {lightboxImage.title}
                                </h3>
                                <p className="text-slate-500 text-xs leading-relaxed">Buddha Hospital &amp; Research Institute — Fostering clinical excellence, social health outreach drives, and active student-doctor sports and cultural milestones.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
