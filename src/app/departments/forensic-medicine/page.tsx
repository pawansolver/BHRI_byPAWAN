"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe, Atom, Network, 
    Dna, GraduationCap, Building2, FlaskConical, Lightbulb,
    FileText, UserCheck, Check, ArrowRight, Layers, Monitor, 
    Database, Heart, ShieldAlert, AlertTriangle, Eye, Sparkles,
    Volume2, Smile, Baby, Thermometer, Brain, Bone
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

function BloodDropIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
}

function JusticeIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 16c0-3.5-3.5-3.5-3.5-3.5s-3.5 0-3.5 3.5" />
            <path d="M12 2v20" />
            <path d="M2 22h20" />
            <path d="M7 8h10" />
            <path d="M7 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
            <path d="M13 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
        </svg>
    );
}

function TeethIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 2c-3.3 0-6 2.7-6 6c0 3 2.5 5.5 5 7.5-.8 1-.9 2-.9 3.5 0 2.2 1.8 4 4.9 4 3.1 0 5-1.8 5-4 0-1.5-.1-2.5-.9-3.5 2.5-2 5-4.5 5-7.5 0-3.3-2.7-6-6-6z" />
            <path d="M9.5 8h5" />
        </svg>
    );
}

const iconMapping: Record<string, React.ComponentType<any>> = {
    Microscope, FlaskConical, Database, Monitor, ShieldCheck, CheckCircle, Target, Hospital,
    Stethoscope, Activity, Layers, Users, Eye, Sparkles, Volume2, Smile, Baby, Thermometer,
    Brain, Bone, ShieldAlert, AlertTriangle, BloodDropIcon, JusticeIcon, TeethIcon, HeartPulse, Heart, Award, Clock, Atom, FileText
};


const PracticalGraph = () => (
    <div className="bg-slate-900 border border-zinc-700/30 rounded-3xl p-6 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Bone Density & Age Profile</span>
            <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full">Skeletal Audit</span>
        </div>
        <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">Femur Fusion:</span>
                <span className="text-zinc-300 font-bold">Completed (Age &gt; 18)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">Clavicle Medial:</span>
                <span className="text-zinc-300 font-bold">Unfused (Age &lt; 25)</span>
            </div>
            <div className="flex justify-between pb-1">
                <span className="text-zinc-500">Estimated Range:</span>
                <span className="text-teal-400 font-black">19 - 24 Years</span>
            </div>
        </div>
    </div>
);

export default function DepartmentPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
    {
        "title": "Precision Autopsy",
        "desc": "Understanding the post-mortem science in detail.",
        "icon": "Microscope"
    },
    {
        "title": "Poison Identification",
        "desc": "Systematic toxicological studies and recovery therapies.",
        "icon": "AlertTriangle"
    },
    {
        "title": "Justice and Medicine",
        "desc": "Providing accurate courtroom expert testimonies.",
        "icon": "JusticeIcon"
    }
];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const scrollToOverview = () => {
        const overviewSec = document.getElementById("overview-section");
        if (overviewSec) {
            overviewSec.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white min-h-screen relative overflow-hidden" style={{ fontFamily: sansFont }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/carousel-1.png"
                        alt="Forensic Medicine & Toxicology"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                
                <div className="relative z-20 container mx-auto px-6 lg:px-12 text-left max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold tracking-[0.2em] text-xs mb-6 border border-white/20 uppercase">
                            Forensic Investigation
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Forensic Medicine & Toxicology
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Bridging Medical Science with Justice
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={scrollToOverview}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs"
                            >
                                Explore Department
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== OVERVIEW SECTION ===== */}
            <section id="overview-section" className="py-20 lg:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4 block">About the Department</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Scientific Care & <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">Educational Rigor</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>The Department of Forensic Medicine & Toxicology at Buddha Hospital & Research Institute (BHRI) focuses on the application of medical knowledge for the administration of law and justice. Through a blend of theoretical knowledge and laboratory learning, students are trained in forensic pathology, clinical forensics, post-mortem examinations, and clinical toxicology.</p>
                                <p>
                                    Through standard textbooks, hands-on clinical laboratories, and bedside patient observation, the department guarantees medical graduates compile essential expertise.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
                        >
                            <Image 
                                src="/carousel-1.png"
                                alt="Department Details"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Curriculum Syllabus</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: iconMapping["JusticeIcon"], title: "Medical Jurisprudence", desc: "Understanding the legal duties of medical practitioners and forensic legal terms." },
                            { icon: iconMapping["Microscope"], title: "Forensic Pathology", desc: "Systematic investigation of deaths, autopsies, and post-mortem biological changes." },
                            { icon: iconMapping["ShieldAlert"], title: "Clinical Forensic Medicine", desc: "Clinical examination of physical injuries, assaults, and age/sex determination." },
                            { icon: iconMapping["AlertTriangle"], title: "Forensic Toxicology", desc: "Detection, clinical features, and emergency therapies for various poisons." },
                            { icon: iconMapping["Atom"], title: "Forensic Entomology", desc: "Evaluating insect activity on biological remains to approximate time of death." },
                            { icon: iconMapping["FileText"], title: "Courtroom Testimony", desc: "Structuring expert medical testimonies and drafting verified legal certificates." }
                        ].map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group hover:shadow-[0_20px_45px_rgba(63,63,70,0.1)] hover:border-zinc-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-zinc-900/40 hover:shadow-zinc-700/50 group-hover:text-white transition-all shadow-sm">
                                    <area.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{area.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRACTICAL & EXPERIMENTAL TRAINING ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-teal-800 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-slate-200">
                                <FlaskConical size={12} className="animate-pulse" /> Advanced Practical Training
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Practical & Experimental Training
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                The department drives extensive practical protocols, allowing medical students to compile standard diagnostic certifications:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Demonstration of forensic post-mortem procedures",
                                    "Identification of poison samples, toxic plants, and chemical reagents",
                                    "Clinical evaluation of simulated trauma and injury types",
                                    "Moot court sessions for expert legal testimony practice",
                                    "Skeletal analysis for age, stature, and sex estimation"
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal-200 transition-all cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-zinc-600 shadow-sm group-hover:bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-zinc-900/40 hover:shadow-zinc-700/50 group-hover:text-white transition-all">
                                            <Check size={16} />
                                        </div>
                                        <span className="text-slate-800 font-semibold text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8 justify-center items-center"
                        >
                            <PracticalGraph />
                            
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm text-center">
                                <span className="text-xs text-slate-600 font-semibold leading-relaxed">
                                    Our diagnostic labs strictly enforce high quality standards to assure zero mistakes in patient reports.
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Labs</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: iconMapping["Hospital"], title: "Forensic Autopsy Block", desc: "Modern clinical dissection and autopsy review halls." },
                            { icon: iconMapping["Microscope"], title: "Analytical Toxicology Lab", desc: "Special tools for chemical screening of toxic elements." },
                            { icon: iconMapping["Database"], title: "Forensic Specimen Museum", desc: "Exhaustive set of wet poisons, models, and weapons." },
                            { icon: iconMapping["Monitor"], title: "Digital Simulation Tools", desc: "Audio-visual mock courtrooms and virtual dissection suites." },
                            { icon: iconMapping["ShieldCheck"], title: "Bones Diagnostics Library", desc: "Reference bank of anthropometrical skeletal models." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:border-teal-200 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-zinc-600 group-hover:bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-zinc-900/40 hover:shadow-zinc-700/50 group-hover:text-white transition-colors">
                                        <item.icon size={22} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-3 leading-tight font-montserrat">{item.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FACULTY & TEACHING APPROACH ===== */}
            <section className="py-20 lg:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Specialists</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto mt-4 text-base lg:text-lg leading-relaxed">
                            Forensic Medicine & Toxicology academics is led by senior specialist doctors, training students through standard case discussions, dynamic practical runs, and critical ward observations.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Dr. R. K. Singh", role: "Professor & HOD", exp: "18+ Years Experience", tags: ["Forensic Expert","Autopsy Specialist"] },
                            { name: "Dr. Vibha Kumari", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Toxicologist","Research Head"] }
                        ].map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white border border-slate-100 hover:border-teal-200 transition-all duration-500 w-full md:w-[350px]"
                            >
                                <div className="h-60 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Users size={64} className="text-slate-400 opacity-60" strokeWidth={1.2} />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[9px] font-bold text-slate-900">
                                        {faculty.exp}
                                    </div>
                                </div>
                                
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>{faculty.name}</h3>
                                    <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-6">{faculty.role}</p>
                                    
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {faculty.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-teal-50 border border-teal-100 text-[10px] font-semibold rounded-full text-teal-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ROLE IN CLINICAL DIAGNOSIS ===== */}
            <section className="py-20 lg:py-28 bg-[#0a192f] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-4 block">Diagnostic Backbone</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Clinical Toxicology & Poison Center
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Our center actively supports critical emergency poisonings, drug overdoses, and toxic chemical exposures through round-the-clock advisory services.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { text: "Autopsy analysis guides", icon: iconMapping["AlertTriangle"] },
                                    { text: "Poisons analysis manuals", icon: iconMapping["ShieldCheck"] },
                                    { text: "Verified medical testimonies", icon: iconMapping["CheckCircle"] },
                                    { text: "Skeletal modeling databases", icon: iconMapping["Target"] }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 border border-white/10 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="relative w-80 h-80 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/20" />
                                <div className="absolute inset-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center shadow-xl">
                                    <ShieldAlert size={60} className="text-teal-500 mb-2" />
                                    <span className="text-teal-400 font-black text-xs uppercase tracking-widest leading-tight">BHRI Standard</span>
                                    <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Reliability Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: iconMapping["Microscope"], title: "Precise Post-Mortems", desc: "Highly systematic autopsy examinations." },
                            { icon: iconMapping["Database"], title: "Poisons Specimen Bank", desc: "Extensive collections for direct research." },
                            { icon: iconMapping["CheckCircle"], title: "Courtroom Preparedness", desc: "Equipping medical students with legal expertise." },
                            { icon: iconMapping["Users"], title: "Dedicated Pathologists", desc: "Specialist forensic scholars guiding academic labs." }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-[0_15px_30px_rgba(20,184,166,0.06)] hover:border-teal-100 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-600">
                                        <stat.icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-2">{stat.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SLIDER SECTION ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="rounded-[4rem] overflow-hidden relative min-h-[400px] lg:min-h-[500px] shadow-2xl bg-slate-950 border-4 border-slate-50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/carousel-1.png"
                                    alt={slides[currentSlide].title}
                                    fill
                                    className="object-cover opacity-45 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-16">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(iconMapping[slides[currentSlide].icon], { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-teal-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
                                            {slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-teal-500' : 'w-3 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-blue-900/15 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                            Begin Your Career in Forensic Medicine & Toxicology
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the Department of Forensic Medicine & Toxicology at BHRI and explore standard clinical, surgical, and preventive diagnostics.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-zinc-900/40 hover:shadow-zinc-700/50 text-white font-bold rounded-full shadow-2xl text-lg transition-all"
                            >
                                Contact Department
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
