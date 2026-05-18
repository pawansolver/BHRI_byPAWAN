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
    Database, Heart, AlertTriangle, ShieldAlert
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// Interactive Floating Capsule Pill Component
const FloatingCapsule = ({ className, delay = 0, duration = 15, scale = 1 }: { className?: string, delay?: number, duration?: number, scale?: number }) => {
    return (
        <motion.div
            className={`absolute ${className} pointer-events-none opacity-25`}
            initial={{ y: 50, x: 0, rotate: 0 }}
            animate={{ 
                y: [-40, 60, -40],
                x: [-15, 15, -15],
                rotate: [0, 360]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            style={{ scale }}
        >
            <svg width="40" height="70" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* A beautiful custom dual-color capsule SVG */}
                <rect x="2" y="2" width="36" height="66" rx="18" fill="none" stroke="currentColor" strokeWidth="3" className="stroke-teal-500/50" />
                <path d="M2 35 C 10 35, 30 35, 38 35" stroke="currentColor" strokeWidth="3" className="stroke-teal-500/50" />
                <rect x="2" y="2" width="36" height="33" rx="18" fill="currentColor" className="text-teal-400" />
                <rect x="2" y="35" width="36" height="33" rx="18" fill="currentColor" className="text-blue-500/20" />
            </svg>
        </motion.div>
    );
};

// Custom interactive Dose-Response curve simulation graph
const DoseResponseGraph = () => (
    <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 border border-teal-500/20 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Dose-Response Profile</span>
            <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30">ED50 Verified</span>
        </div>
        <div className="relative h-36 w-full flex items-end px-2 pt-2">
            {/* Graph Axis */}
            <div className="absolute left-4 bottom-4 top-0 w-px bg-white/20" />
            <div className="absolute left-4 right-0 bottom-4 h-px bg-white/20" />
            
            {/* Y-axis Label */}
            <div className="absolute left-0.5 top-[30%] text-[7px] text-white/40 uppercase tracking-widest origin-left rotate-90 translate-y-2 whitespace-nowrap">
                Response (%)
            </div>
            {/* X-axis Label */}
            <div className="absolute bottom-0 right-2 text-[7px] text-white/40 uppercase tracking-widest">
                Log [Dose]
            </div>
            
            {/* Curve Path */}
            <div className="w-full h-full relative pl-4 pb-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 0 100 Q 30 100 50 50 T 100 0"
                        fill="none"
                        stroke="url(#graphTealGradient)"
                        strokeWidth="3.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="graphTealGradient" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="50%" stopColor="#0d9488" />
                            <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                    </defs>
                </svg>
                
                {/* ED50 Marker */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
                    className="absolute left-[50%] bottom-[50%] w-3 h-3 rounded-full bg-teal-400 border-2 border-white -translate-x-1.5 translate-y-1.5 shadow-[0_0_12px_rgba(20,184,166,0.8)] cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                />
            </div>
        </div>
        <div className="flex justify-between items-center mt-3 text-[9px] text-slate-400">
            <span>Threshold: 10%</span>
            <span>Max Effect: 100%</span>
        </div>
    </div>
);

export default function PharmacologyPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Understanding Medicines", desc: "Learn how drugs work in the body.", image: "/pharmacology_hero.png", icon: Pill },
        { title: "Safe & Effective Treatment", desc: "Focus on rational drug use.", image: "/pharmacology_overview.png", icon: ShieldCheck },
        { title: "Practical Learning Approach", desc: "Experience through experiments.", image: "/carousel-3.png", icon: FlaskConical },
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
                        src="/pharmacology_hero.png"
                        alt="Department of Pharmacology"
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
                            Science of Therapeutics & Drug Action
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Department of <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-300 to-blue-400">
                                Pharmacology
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Advancing medical science through the study of drugs, their actions, and safe therapeutic use.
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
            <section id="overview-section" className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <FloatingCapsule className="top-[30%] left-[2%] text-teal-200" delay={2} duration={18} scale={0.7} />
                <FloatingCapsule className="bottom-[10%] right-[3%] text-blue-200" delay={0} duration={22} scale={0.65} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(13,148,136,0.15)] group border-8 border-teal-50"
                        >
                            <Image 
                                src="/pharmacology_overview.png"
                                alt="Pharmacology Overview"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent mix-blend-overlay" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4 block">Department Overview</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Bridging Basic Science <br/> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">Clinical Treatment</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    The <strong className="text-slate-900">Department of Pharmacology</strong> at Buddha Hospital & Research Institute (BHRI) focuses on the study of drugs, their effects, and their safe and effective use in medical practice. It plays a crucial role in bridging basic medical sciences with clinical treatment.
                                </p>
                                <p>
                                    The department equips students with the knowledge required to understand drug mechanisms, dosage, interactions, and therapeutic applications.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY (Icon Grid) ===== */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-y border-slate-100">
                <FloatingCapsule className="top-10 left-[8%] text-teal-300/40" delay={5} duration={15} scale={0.7} />
                <FloatingCapsule className="bottom-12 right-[5%] text-blue-300/40" delay={2} duration={12} scale={0.8} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Curriculum Focus</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Pill, title: "Pharmacokinetics", desc: "Comprehensive study of drug absorption, distribution, metabolism, and excretion (ADME)." },
                            { icon: Activity, title: "Pharmacodynamics", desc: "Understanding the biochem and physiological effects of drugs and their mechanism of action." },
                            { icon: Users, title: "Clinical Pharmacology", desc: "Applying pharmacological concepts within patient care, safety, and clinical setups." },
                            { icon: ShieldCheck, title: "Drug Interactions & Safety", desc: "Assessing interactions between drugs, patient factors, and therapeutic monitoring." },
                            { icon: AlertTriangle, title: "Toxicology Basics", desc: "Exploring adverse effects of chemicals, poisons, overdose profiles, and drug toxicokinetics." },
                            { icon: Layers, title: "Rational Use of Medicines", desc: "Promoting clinical efficacy, cost-effective prescribing, and safety-first drug application." }
                        ].map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white/85 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:border-teal-200 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:from-teal-600 group-hover:to-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <area.icon size={28} strokeWidth={1.5} />
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
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-700 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-teal-500/20">
                                <FlaskConical size={12} className="animate-pulse" /> Practical Drug Learning
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Practical & Experimental Training
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                The department emphasizes practical knowledge and experimental learning, allowing students to verify therapeutic mechanisms in a real laboratory environment.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Drug effect demonstrations",
                                    "Experimental pharmacology setups",
                                    "Dose-response studies",
                                    "Clinical case-based therapeutic evaluations",
                                    "Simulation-based prescribing drills"
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal-200 transition-all cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 group-hover:text-white transition-all">
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
                            {/* Dose-Response Interactive Graph */}
                            <DoseResponseGraph />
                            
                            {/* Minor Info Badge */}
                            <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl max-w-sm text-center">
                                <span className="text-xs text-teal-800 font-semibold leading-relaxed">
                                    Students utilize interactive simulation suites to simulate biological systems and plot pharmacodynamic relationships.
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <FloatingCapsule className="top-[10%] right-[3%] text-teal-200" delay={4} duration={16} scale={0.7} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Infrastructure</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: FlaskConical, title: "Pharmacology Lab", desc: "Specialized lab setups for in-vitro drug analysis." },
                            { icon: Activity, title: "Experimental Setup", desc: "Instruments configured for drug kinetics & study." },
                            { icon: Hospital, title: "Demonstration Rooms", desc: "Large lecture & presentation facilities." },
                            { icon: Monitor, title: "Digital Teaching Tools", desc: "Interactive computer simulations of drug action." },
                            { icon: Database, title: "Audio-Visual Support", desc: "Multi-media learning setups for digital case reviews." }
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
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-teal-600 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 group-hover:text-white transition-colors">
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
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <FloatingCapsule className="bottom-10 left-[4%] text-teal-200" delay={1} duration={25} scale={0.75} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Academic leaders</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto mt-4 text-base lg:text-lg leading-relaxed">
                            Our faculty members are dedicated to delivering quality education through modern teaching methods. The department focuses on case-based learning, rational prescribing practices, and active student engagement.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. A. K. Singh", role: "Professor & HOD", exp: "17+ Years Experience", tags: ["Drug Expert", "Clinical Focus", "Teaching"] },
                            { name: "Dr. Ritu Raj", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Drug Expert", "Teaching"] },
                            { name: "Dr. Sameer Khan", role: "Assistant Professor", exp: "6+ Years Experience", tags: ["Teaching", "Clinical Focus"] }
                        ].map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white border border-slate-100 hover:border-teal-200 transition-all duration-500"
                            >
                                <div className="h-60 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Users size={64} className="text-slate-400 opacity-60" strokeWidth={1.2} />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[9px] font-bold text-teal-900">
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

            {/* ===== TOXICOLOGY & DRUG SAFETY (Special Alert Section) ===== */}
            <section className="py-20 lg:py-28 bg-red-50/60 border-y border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-red-200/50 shadow-[0_15px_40px_rgba(239,68,68,0.05)]"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-600 rounded-full text-[9px] font-bold uppercase tracking-wider mb-6 border border-red-500/20">
                                <ShieldAlert size={12} className="animate-pulse" /> Drug Safety Initiative
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight" style={{ fontFamily: serifFont }}>
                                Toxicology & <br/><span className="text-red-600">Drug Safety</span>
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed mb-8">
                                Pharmacology goes beyond prescribing. The department places deep emphasis on the study of harmful effects of drugs and chemical compounds on living organisms.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { text: "Drug toxicity & adverse reactions", icon: AlertTriangle },
                                    { text: "Poisoning & overdose basics", icon: ShieldCheck },
                                    { text: "Safe medication practices", icon: CheckCircle },
                                    { text: "Awareness of drug misuse", icon: Target }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.icon size={16} className="text-red-500 shrink-0" />
                                        <span className="text-slate-700 font-semibold text-xs leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="relative w-72 h-72 flex items-center justify-center bg-white border border-red-100 rounded-full shadow-xl">
                                <motion.div 
                                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-full border-4 border-red-500/20"
                                />
                                <div className="absolute inset-8 rounded-full border border-red-500/10 bg-red-50/50 flex flex-col items-center justify-center p-6 text-center">
                                    <ShieldAlert size={60} className="text-red-600 mb-2" />
                                    <span className="text-red-800 font-bold text-xs uppercase tracking-widest leading-tight">Safety Protocol</span>
                                    <span className="text-[9px] text-red-500 mt-1 uppercase font-semibold">Primum non nocere</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS (Stats / Cards) ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative overflow-hidden">
                <FloatingCapsule className="top-[30%] left-[4%] text-teal-200" delay={2} duration={14} scale={0.7} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Pill, title: "Drug Science & Therapy", desc: "Rigorous focus on drug mechanisms, dynamics, and clinical application." },
                            { icon: FlaskConical, title: "Practical Learning", desc: "Direct hands-on simulation tools and in-vitro experimental drug models." },
                            { icon: Stethoscope, title: "Clinical Application", desc: "Bridging laboratory drug discoveries with safe bedside patient prescription." },
                            { icon: Users, title: "Experienced Guidance", desc: "Active specialist doctors and researchers lecturing in class halls." }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-[0_15px_30px_rgba(13,148,136,0.08)] hover:border-teal-100 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
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
                                            <div className="w-16 h-16 bg-teal-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 32, className: 'text-white' })}
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
                            Gain in-depth knowledge of medicines
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the Department of Pharmacology at BHRI and explore their safe, rational use in clinical treatment.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold rounded-full shadow-2xl text-lg hover:shadow-[0_10px_30px_rgba(13,148,136,0.4)] transition-all"
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
