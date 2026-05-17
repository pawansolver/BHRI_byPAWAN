"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    BookOpen, MicroscopeIcon as Microscope2, Brain, Bone, 
    Dna, GraduationCap, Building2, FlaskConical, Lightbulb,
    FileText, UserCheck, MessageSquare, Check,
    Baby
} from "lucide-react";

// Importing Google Fonts in a real app would be done in layout, 
// but we'll apply font-family styles directly for the Serif feel.
const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

export default function AnatomyPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Foundation of Medical Education", desc: "Understanding human structure in depth.", image: "/carousel-1.png", icon: GraduationCap },
        { title: "Hands-on Practical Learning", desc: "Experience through real study.", image: "/carousel-2.png", icon: Microscope2 },
        { title: "Modern Teaching Methods", desc: "Interactive and advanced learning.", image: "/carousel-3.png", icon: Lightbulb },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white min-h-screen" style={{ fontFamily: sansFont }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/carousel-1.png"
                        alt="Department of Anatomy"
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
                            Academic Department
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Department of <br/> Anatomy
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Building the Foundation of Medical Science. Understanding the structure of the human body through advanced learning and research.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                Explore Department
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== OVERVIEW SECTION (2 Column) ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-slate-500 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Academic Cornerstone</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                A Legacy of Structural <span className="text-slate-400">Excellence</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    The <strong className="text-slate-900">Department of Anatomy</strong> at Buddha Hospital & Research Institute (BHRI) serves as a cornerstone of medical education. It focuses on the detailed study of the structure of the human body, providing essential knowledge required for all medical disciplines.
                                </p>
                                <p>
                                    Through a combination of theoretical learning and hands-on practical training, the department ensures that students develop a strong understanding of human anatomy.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-slate-50"
                        >
                            <Image 
                                src="/carousel-2.png"
                                alt="Anatomy Laboratory"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== ACADEMIC FOCUS (Icon Grid) ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 block">Curriculum</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Academic Focus</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Bone, title: "Body Structure", desc: "Study of human systems" },
                            { icon: Microscope2, title: "Specimen Analysis", desc: "Practical dissection" },
                            { icon: Activity, title: "Histology", desc: "Microscopic anatomy" },
                            { icon: Baby, title: "Embryology", desc: "Developmental studies" },
                            { icon: GraduationCap, title: "Clinical Subjects", desc: "Integrated learning" }
                        ].map((focus, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-800 border border-slate-100">
                                    <focus.icon size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{focus.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{focus.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 block">Environment</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                            <p className="text-slate-600 mb-10 text-lg">
                                The department is equipped with modern facilities to support both teaching and research activities:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Well-equipped dissection hall",
                                    "Anatomy museum specimens",
                                    "Histology lab with microscopes",
                                    "Digital teaching aids",
                                    "Demonstration halls",
                                    "Modern specimen models"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-slate-300 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                                            <Check size={14} />
                                        </div>
                                        <span className="text-slate-800 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
                            <Building2 className="mb-8 opacity-50" size={48} strokeWidth={1} />
                            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: serifFont }}>Department Modernization</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Our aim is to build a solid academic foundation that supports future clinical excellence through modern infrastructure.
                            </p>
                            <div className="flex items-center gap-4 py-4 border-t border-white/10">
                                <GraduationCap className="text-slate-400" />
                                <span className="text-sm font-semibold tracking-wider text-slate-300">ISO CERTIFIED ACADEMICS</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACULTY & TEACHING ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 block">Mentorship</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
                            Supported by experienced and qualified faculty members dedicated to academic excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Faculty Name 1", pos: "Head of Department", exp: "15+ Years Exp." },
                            { name: "Dr. Faculty Name 2", pos: "Associate Professor", exp: "10+ Years Exp." },
                            { name: "Dr. Faculty Name 3", pos: "Assistant Professor", exp: "8+ Years Exp." }
                        ].map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 bg-slate-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Image placeholder */}
                                    <div className="flex items-center justify-center h-full text-slate-400">
                                        <Users size={64} strokeWidth={1} />
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>{faculty.name}</h3>
                                    <p className="text-slate-500 text-sm mb-4">{faculty.pos}</p>
                                    <div className="inline-block py-1 px-3 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        {faculty.exp}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESEARCH & DEVELOPMENT ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2 blur-[100px]" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4 block">Innovation</span>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>Research & Development</h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    The Department of Anatomy encourages research and academic exploration. Students and faculty actively participate in activities that contribute to medical science.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Research-based learning approach",
                                        "Academic publications and studies",
                                        "Collaboration with clinical departments"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className="w-2 h-2 bg-slate-400 rounded-full" />
                                            <span className="font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <div className="w-64 h-64 bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm">
                                    <FlaskConical size={120} className="text-slate-400 opacity-50" strokeWidth={0.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS (Stats) ===== */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Strong Academic", desc: "Foundation" },
                            { title: "Research-Oriented", desc: "Learning Approach" },
                            { title: "Modern Teaching", desc: "Infrastructure" },
                            { title: "Experienced", desc: "Specialist Faculty" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>{stat.title}</h3>
                                <p className="text-slate-500 text-xs uppercase tracking-widest">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SLIDER SECTION ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="rounded-[3rem] overflow-hidden relative min-h-[400px] lg:min-h-[500px] shadow-2xl bg-slate-900 border-4 border-slate-50">
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
                                    className="object-cover opacity-50 mix-blend-overlay"
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
                                                {React.createElement(slides[currentSlide].icon, { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-white' : 'w-3 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                            Begin Your Journey in Medical Science
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Start with a strong foundation in Anatomy at BHRI and build your path towards clinical excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full shadow-2xl text-lg"
                            >
                                Contact Department
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
