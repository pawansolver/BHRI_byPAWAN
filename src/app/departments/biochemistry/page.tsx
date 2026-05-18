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
    Database, Heart
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// Interactive Floating Molecule Component
const FloatingMolecule = ({ className, delay = 0, duration = 15, scale = 1 }: { className?: string, delay?: number, duration?: number, scale?: number }) => {
    return (
        <motion.div
            className={`absolute ${className} pointer-events-none opacity-25`}
            initial={{ y: 50, x: 0, rotate: 0 }}
            animate={{ 
                y: [-40, 60, -40],
                x: [-20, 20, -20],
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
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="10" fill="currentColor" className="text-purple-400" />
                <circle cx="20" cy="30" r="6" fill="currentColor" className="text-blue-400" />
                <circle cx="80" cy="30" r="6" fill="currentColor" className="text-pink-400" />
                <circle cx="50" cy="85" r="8" fill="currentColor" className="text-indigo-400" />
                <line x1="50" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="2" className="stroke-slate-400/40" />
                <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="2" className="stroke-slate-400/40" />
                <line x1="50" y1="50" x2="50" y2="85" stroke="currentColor" strokeWidth="2" className="stroke-slate-400/40" />
            </svg>
        </motion.div>
    );
};

// Interactive Floating DNA Component
const FloatingDna = ({ className, delay = 0, duration = 20, scale = 1 }: { className?: string, delay?: number, duration?: number, scale?: number }) => {
    return (
        <motion.div
            className={`absolute ${className} pointer-events-none opacity-20`}
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
                y: [-30, 30, -30],
                rotate: [0, -360]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            style={{ scale }}
        >
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,50 Q35,20 50,50 T80,50" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" className="stroke-purple-500/50" />
                <path d="M20,50 Q35,80 50,50 T80,50" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" className="stroke-blue-500/50" />
                <circle cx="20" cy="50" r="4" fill="currentColor" className="text-purple-400" />
                <circle cx="35" cy="35" r="4" fill="currentColor" className="text-indigo-400" />
                <circle cx="35" cy="65" r="4" fill="currentColor" className="text-blue-400" />
                <circle cx="50" cy="50" r="4" fill="currentColor" className="text-pink-400" />
                <circle cx="65" cy="35" r="4" fill="currentColor" className="text-indigo-400" />
                <circle cx="65" cy="65" r="4" fill="currentColor" className="text-blue-400" />
                <circle cx="80" cy="50" r="4" fill="currentColor" className="text-purple-400" />
                <line x1="35" y1="35" x2="35" y2="65" stroke="currentColor" strokeWidth="1.5" className="stroke-slate-400/40" />
                <line x1="50" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" className="stroke-slate-400/40" />
                <line x1="65" y1="35" x2="65" y2="65" stroke="currentColor" strokeWidth="1.5" className="stroke-slate-400/40" />
            </svg>
        </motion.div>
    );
};

export default function BiochemistryPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Chemistry Behind Life", desc: "Understanding molecular processes.", image: "/biochemistry_lab.png", icon: Atom },
        { title: "Hands-on Lab Training", desc: "Practical knowledge and skills.", image: "/biochemistry_diagnostics.png", icon: FlaskConical },
        { title: "Modern Research Approach", desc: "Advancing medical science.", image: "/carousel-1.png", icon: Dna },
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
                        src="/biochemistry_lab.png"
                        alt="Department of Biochemistry"
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
                            Exploring the Chemistry of Life
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Department of <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                Biochemistry
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Understanding the molecular processes that drive human health, disease, and medical science.
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
                <FloatingMolecule className="top-[30%] left-[2%] text-purple-200" delay={3} duration={18} scale={0.7} />
                <FloatingDna className="bottom-[10%] right-[3%] text-blue-200" delay={0} duration={22} scale={0.65} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-4 block">Department Overview</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Bridging Chemistry <br/> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Human Biology</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    The <strong className="text-slate-900">Department of Biochemistry</strong> at Buddha Hospital & Research Institute (BHRI) focuses on the study of chemical processes within and related to living organisms. It plays a vital role in understanding the molecular basis of health and disease.
                                </p>
                                <p>
                                    Through a blend of theoretical knowledge and laboratory-based learning, the department helps students understand how biochemical reactions influence diagnosis, treatment, and medical research.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.15)] group border-8 border-purple-50"
                        >
                            <Image 
                                src="/biochemistry_diagnostics.png"
                                alt="Biochemistry Diagnostics"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY (Icon Grid) ===== */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-y border-slate-100">
                <FloatingDna className="top-10 left-[8%] text-purple-300/40" delay={5} duration={15} scale={0.7} />
                <FloatingMolecule className="bottom-12 right-[5%] text-indigo-300/40" delay={2} duration={12} scale={0.8} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-3 block">Syllabus & Focus</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Dna, title: "Structure & Function of Biomolecules", desc: "Detailed analysis of proteins, lipids, carbohydrates, and nucleic acids." },
                            { icon: Network, title: "Enzymes & Metabolic Pathways", desc: "Understanding biological catalysts, metabolic kinetics, and reaction pathways." },
                            { icon: Microscope, title: "Clinical Biochemistry & Diagnostics", desc: "Applying biochemical principles to diagnostic testing and medical evaluation." },
                            { icon: Atom, title: "Molecular Biology & Genetics", desc: "Exploring gene expression, DNA replication, molecular cloning, and therapeutics." },
                            { icon: Pill, title: "Nutrition & Biochemical Balance", desc: "Studying macro/micronutrient metabolism and maintaining metabolic equilibrium." },
                            { icon: Activity, title: "Hormonal & Cellular Regulation", desc: "Analyzing intracellular signals, receptor mechanics, and hormonal control." }
                        ].map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] hover:border-indigo-200 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-sm">
                                    <area.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{area.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRACTICAL & LABORATORY TRAINING ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-purple-700 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-purple-500/20">
                                <FlaskConical size={12} className="animate-pulse" /> Lab-Based Learning
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Practical & Laboratory Training
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                The department provides hands-on laboratory training to enhance practical knowledge and technical skills, establishing key diagnostic capabilities.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Blood and biochemical analysis",
                                    "Enzyme activity experiments",
                                    "Metabolic pathway studies",
                                    "Clinical diagnostic techniques",
                                    "Use of modern laboratory instruments"
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-purple-200 transition-all cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-600 shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all">
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
                            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-indigo-50"
                        >
                            <Image 
                                src="/biochemistry_lab.png"
                                alt="Laboratory Training"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <h4 className="font-bold mb-1">State-of-the-Art Diagnostics</h4>
                                <p className="text-xs text-blue-100">Highly automated biochemical analysis setups.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <FloatingMolecule className="top-[10%] right-[3%] text-blue-200" delay={4} duration={16} scale={0.7} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2 block">Infrastructure</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: FlaskConical, title: "Advanced Biochem Lab", desc: "Equipped for molecular diagnostics & research." },
                            { icon: Activity, title: "Automated Analyzers", desc: "Fully-automated clinical biochemistry systems." },
                            { icon: Microscope, title: "Testing & Analysis", desc: "Advanced spectrophotometers & instruments." },
                            { icon: Users, title: "Demo & Lecture Halls", desc: "Spacious training spaces with modern dynamic tools." },
                            { icon: Monitor, title: "Digital Research Tools", desc: "Virtual simulation & data visualization platforms." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:border-purple-200 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-colors">
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
                <FloatingDna className="bottom-10 left-[4%] text-purple-200" delay={1} duration={25} scale={0.75} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Academic Leaders</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto mt-4 text-base lg:text-lg leading-relaxed">
                            Our faculty members are dedicated to delivering high-quality education through modern teaching methodologies. The department emphasizes conceptual clarity, practical exposure, and continuous evaluation to ensure student development.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Suresh Sharma", role: "Professor & HOD", exp: "18+ Years Experience", tags: ["Research", "Lab Expert", "Teaching"] },
                            { name: "Dr. Ananya Mishra", role: "Associate Professor", exp: "12+ Years Experience", tags: ["Lab Expert", "Teaching"] },
                            { name: "Dr. Rajesh Gupta", role: "Assistant Professor", exp: "8+ Years Experience", tags: ["Teaching", "Research"] }
                        ].map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white border border-slate-100 hover:border-purple-200 transition-all duration-500"
                            >
                                <div className="h-60 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Users size={64} className="text-slate-400 opacity-60" strokeWidth={1.2} />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[9px] font-bold text-indigo-900">
                                        {faculty.exp}
                                    </div>
                                </div>
                                
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>{faculty.name}</h3>
                                    <p className="text-purple-600 font-bold text-xs uppercase tracking-widest mb-6">{faculty.role}</p>
                                    
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {faculty.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-[10px] font-semibold rounded-full text-indigo-700"
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

            {/* ===== RESEARCH & ACADEMIC DEVELOPMENT (Dark Section) ===== */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0b132b] via-[#1c0f30] to-[#0c0d14] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-4 block">Innovation & Discovery</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Research & <br/>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    Academic Development
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                The Department of Biochemistry actively promotes research and scientific exploration, nurturing analytical minds capable of advancing medicine.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Research in molecular biology & diagnostics", icon: Dna },
                                    { title: "Clinical research integration", icon: FlaskConical },
                                    { title: "Student research projects", icon: FileText },
                                    { title: "Academic seminars & workshops", icon: Users },
                                    { title: "Interdisciplinary collaboration", icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm leading-tight">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center relative"
                        >
                            <div className="relative w-80 h-80 flex items-center justify-center">
                                {/* Slow Rotating Concentric Chemical Rings */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/20"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 rounded-full border-2 border-dotted border-blue-500/30"
                                />
                                <div className="absolute inset-16 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.1)]">
                                    <Atom size={90} className="text-purple-500 opacity-60 animate-pulse" strokeWidth={1} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS (Stats / Cards) ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative overflow-hidden">
                <FloatingMolecule className="top-[30%] left-[4%] text-purple-200" delay={2} duration={14} scale={0.7} />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Atom, title: "Molecular Science", desc: "Strong focus on molecular science & biochemical reactions." },
                            { icon: FlaskConical, title: "Lab-Based Training", desc: "Deep hands-on practical lab training & testing." },
                            { icon: Microscope, title: "Clinical Diagnostics", desc: "Integration with real healthcare diagnostics & evaluations." },
                            { icon: Users, title: "Experienced Faculty", desc: "Highly-qualified academic mentors guiding student growth." }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] hover:border-indigo-100 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
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
                                            <div className="w-16 h-16 bg-indigo-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-indigo-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-indigo-500' : 'w-3 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/15 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                            Begin Your Journey in Biochemistry
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Explore the science behind human health and disease with the Department of Biochemistry at BHRI.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl text-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all"
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
