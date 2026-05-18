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
    Database, Heart, ShieldAlert, AlertTriangle
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// Custom Blood Drop Lucide Icon replacement representation
function BloodDropIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={className}
        >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
}

// "Report Ready" - Premium Interactive Diagnostic Report Table Widget
const MiniReportCard = () => (
    <div className="bg-white border border-slate-200 shadow-[0_20px_50px_rgba(220,38,38,0.06)] rounded-3xl p-6 max-w-sm mx-auto relative overflow-hidden group">
        {/* Top precise indicator border representing diagnostic verification */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600" />
        
        <div className="flex items-center justify-between mb-4">
            <span className="text-[9px] uppercase font-black tracking-widest text-slate-400">BHRI Diagnostics</span>
            {/* Status badge with a subtle, steady green pulse */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative" />
                REPORT READY
            </span>
        </div>
        
        {/* Sample Patient Data Table */}
        <div className="space-y-3 mb-4">
            <div className="flex justify-between border-b border-slate-100 pb-1.5 text-[11px]">
                <span className="text-slate-400">Patient ID:</span>
                <span className="font-bold text-slate-800">#BHRI-9924</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5 text-[11px]">
                <span className="text-slate-400">Investigation:</span>
                <span className="font-bold text-slate-800">Complete Hemogram</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5 text-[11px]">
                <span className="text-slate-400">Methodology:</span>
                <span className="font-bold text-slate-800">Automated Flow Cytometry</span>
            </div>
        </div>
        
        {/* Mini Table-style Parameter Component */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-[10px]">
            <div className="grid grid-cols-3 font-bold text-slate-400 mb-2 border-b border-slate-200 pb-1.5 uppercase tracking-wider">
                <span>Parameter</span>
                <span className="text-center">Result</span>
                <span className="text-right">Interval</span>
            </div>
            <div className="grid grid-cols-3 py-1.5 text-slate-700 border-b border-slate-100">
                <span className="font-medium text-slate-800">Hemoglobin</span>
                <span className="text-center font-bold text-slate-900">14.2 g/dL</span>
                <span className="text-right">13.0 - 17.0</span>
            </div>
            <div className="grid grid-cols-3 py-1.5 text-slate-700 border-b border-slate-100">
                <span className="font-medium text-slate-800">WBC Count</span>
                <span className="text-center font-bold text-slate-900">7,200 /µL</span>
                <span className="text-right">4.0k - 11.0k</span>
            </div>
            <div className="grid grid-cols-3 py-1.5 text-slate-700">
                <span className="font-medium text-slate-800">Platelet Count</span>
                <span className="text-center font-bold text-slate-900">240,000 /µL</span>
                <span className="text-right">150k - 450k</span>
            </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100">
            <span className="text-[8.5px] text-slate-400 font-medium">Verified by: Dr. S. K. Pathak (MD)</span>
            <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <CheckCircle size={12} />
            </div>
        </div>
    </div>
);

export default function PathologyPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Precision in Diagnosis", desc: "Accurate reports for better treatment.", image: "/pathology_hero.png", icon: Microscope },
        { title: "Advanced Laboratory Systems", desc: "Modern tools for reliable results.", image: "/pathology_overview.png", icon: FlaskConical },
        { title: "Supporting Clinical Care", desc: "Helping doctors make informed decisions.", image: "/carousel-2.png", icon: CheckCircle },
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
                        src="/pathology_hero.png"
                        alt="Department of Pathology"
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
                            Science of Accuracy & Disease Diagnostic
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Department of <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-indigo-300 to-blue-400">
                                Pathology
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Accurate Diagnosis for Better Treatment. Understanding diseases through advanced laboratory analysis and scientific investigation.
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

            {/* ===== OVERVIEW SECTION (2-Column Layout) ===== */}
            <section id="overview-section" className="py-20 lg:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-4 block">Cornerstone of Care</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Unlocking Disease Secrets <br/> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">Accurate Prognosis</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    The <strong className="text-slate-900">Department of Pathology</strong> at Buddha Hospital & Research Institute (BHRI) plays a vital role in the diagnosis and understanding of diseases. It focuses on the study of disease processes through laboratory examination of blood, tissues, and body fluids.
                                </p>
                                <p>
                                    The department supports clinical decision-making by providing accurate and timely diagnostic reports, which are essential for effective treatment planning.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(220,38,38,0.1)] group border-8 border-red-50/70"
                        >
                            <Image 
                                src="/pathology_overview.png"
                                alt="Pathology Laboratory Diagnostics"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY (Icon Grid) ===== */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3 block">Diagnostics Curriculum</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Layers, title: "Histopathology", desc: "Detailed examination of surgical biopsies and tissue structures to identify tumor margins and abnormalities." },
                            { icon: BloodDropIcon, title: "Hematology", desc: "Scientific analysis of cellular components of blood and bone marrow, helping identify anemia and leukemia." },
                            { icon: FlaskConical, title: "Clinical Pathology", desc: "Applying advanced automated chemical analyzers to examine chemical components in body fluids." },
                            { icon: Atom, title: "Cytology", desc: "Microscopic study of individual cells harvested from fluid specimens to screen for oncological anomalies." },
                            { icon: ShieldCheck, title: "Immunopathology", desc: "Exploring antigen-antibody reactions, histocompatibility profiles, and auto-immune disorder indicators." },
                            { icon: FileText, title: "Disease Diagnosis & Reporting", desc: "Structuring clear, precise, and verified laboratory case summaries to guide clinical procedures." }
                        ].map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group hover:shadow-[0_20px_45px_rgba(220,38,38,0.06)] hover:border-red-200 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:from-red-600 group-hover:to-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <area.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{area.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== LABORATORY & DIAGNOSTIC SERVICES ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-500/10 to-blue-500/10 text-red-700 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-red-500/20">
                                <ShieldCheck size={12} className="animate-pulse" /> Accurate Lab Diagnostics
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Laboratory & Diagnostic Services
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Buddha Hospital & Research Institute offers an exhaustive menu of diagnostic testing procedures to ensure accurate, timely, and complete clinical screening:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Blood tests and analysis",
                                    "Tissue biopsy examination",
                                    "Cytology tests & cytology reviews",
                                    "Infection detection & microbial panels",
                                    "Disease screening and monitoring"
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-600 shadow-sm group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 group-hover:text-white transition-all">
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
                            {/* "Report Ready" - Automated Sample Diagnostic Sheet Widget */}
                            <MiniReportCard />
                            
                            <div className="p-4 bg-red-50/50 border border-red-100 rounded-2xl max-w-sm text-center">
                                <span className="text-xs text-red-800 font-semibold leading-relaxed">
                                    Our pathology lab strictly follows standard quality control rules to guarantee zero errors in reporting.
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
                        <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Labs</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: FlaskConical, title: "Fully Equipped Lab", desc: "Integrated automated pathology setups." },
                            { icon: Activity, title: "Advanced Equipment", desc: "Automated cytometers & spectrophotometers." },
                            { icon: Hospital, title: "Sample Collection", desc: "Safe sample extraction & coding units." },
                            { icon: Monitor, title: "Digital Reporting", desc: "Instant computer-generated report delivery." },
                            { icon: ShieldCheck, title: "Quality-Controlled Lab", desc: "ISO-standard clean diagnostic rooms." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:border-red-200 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-red-600 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 group-hover:text-white transition-colors">
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
                        <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Specialists</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto mt-4 text-base lg:text-lg leading-relaxed">
                            The department is led by experienced faculty members who provide in-depth knowledge of disease mechanisms and laboratory techniques. Teaching is supported by practical sessions, case studies, and diagnostic training.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. S. K. Pathak", role: "Professor & HOD", exp: "17+ Years Experience", tags: ["Diagnostic Expert", "Lab Specialist"] },
                            { name: "Dr. Meera Rao", role: "Associate Professor", exp: "12+ Years Experience", tags: ["Lab Specialist", "Diagnostic Expert"] },
                            { name: "Dr. Amit Roy", role: "Assistant Professor", exp: "7+ Years Experience", tags: ["Diagnostic Expert", "Lab Specialist"] }
                        ].map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white border border-slate-100 hover:border-red-200 transition-all duration-500"
                            >
                                <div className="h-60 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Users size={64} className="text-slate-400 opacity-60" strokeWidth={1.2} />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[9px] font-bold text-red-900">
                                        {faculty.exp}
                                    </div>
                                </div>
                                
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>{faculty.name}</h3>
                                    <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-6">{faculty.role}</p>
                                    
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {faculty.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-red-50 border border-red-100 text-[10px] font-semibold rounded-full text-red-700"
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

            {/* ===== ROLE IN CLINICAL DIAGNOSIS (Important Section) ===== */}
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
                            <span className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4 block">Medical Foundation</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Role in <br/>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-indigo-400">
                                    Clinical Diagnosis
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Pathology serves as the backbone of clinical diagnosis by providing:
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Accurate disease identification", icon: Target },
                                    { title: "Support for treatment decisions", icon: ShieldCheck },
                                    { title: "Monitoring of disease progression", icon: Activity },
                                    { title: "Early detection of health conditions", icon: CheckCircle }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-red-400 border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm leading-tight">{item.title}</span>
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
                                {/* Subtle concentric visual rings */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/20" />
                                <div className="absolute inset-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center shadow-xl">
                                    <ShieldAlert size={60} className="text-red-500 mb-2" />
                                    <span className="text-red-400 font-black text-xs uppercase tracking-widest leading-tight">Accurate Science</span>
                                    <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Reliability Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS (Stats / Cards) ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Microscope, title: "Accurate Diagnostics", desc: "Double-checked, verified, and reliable results." },
                            { icon: FlaskConical, title: "Advanced Lab Support", desc: "Highly automated diagnostics with quality control rules." },
                            { icon: FileText, title: "Timely Report Delivery", desc: "Instant automated notification systems for reports." },
                            { icon: Users, title: "Experienced Experts", desc: "Dedicated pathologists supporting clinical decisions." }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-[0_15px_30px_rgba(220,38,38,0.06)] hover:border-red-100 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
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

            {/* ===== SLIDER SECTION (Slideshow) ===== */}
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
                                    src={slides[currentSlide].image}
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
                                            <div className="w-16 h-16 bg-red-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-red-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-red-500' : 'w-3 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-blue-900/15 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                            Begin Your Diagnostic Practice in Pathology
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the Department of Pathology at BHRI and explore how advanced laboratory examination translates to therapeutic excellence.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-full shadow-2xl text-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all"
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
