"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    Zap, Heart, Brain, Wind, Droplets, FlaskConical,
    GraduationCap, ClipboardList, Monitor, UserCheck,
    Check, ArrowRight, MousePointer2
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

export default function PhysiologyPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Understanding Body Functions", desc: "Learn how the human body works.", image: "/carousel-2.png", icon: HeartPulse },
        { title: "Practical Learning Approach", desc: "Experience through real experiments.", image: "/carousel-3.png", icon: Activity },
        { title: "Modern Teaching Methods", desc: "Interactive and engaging education.", image: "/carousel-1.png", icon: Monitor },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const scrollToOverview = () => {
        const overviewSec = document.getElementById("overview-section") || document.getElementsByTagName("section")[1];
        if (overviewSec) {
            overviewSec.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="bg-white min-h-screen" style={{ fontFamily: sansFont }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/carousel-2.png"
                        alt="Department of Physiology"
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
                            Science of Function
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl" style={{ fontFamily: serifFont }}>
                            Department of <br/> Physiology
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            Understanding the Functions of Life. Exploring how the human body works through scientific learning and practical training.
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

            {/* ===== OVERVIEW SECTION (Image + Text) ===== */}
            <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl group"
                        >
                            <Image 
                                src="/carousel-3.png"
                                alt="Physiology Experiments"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Mechanisms of Life</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                How Life <span className="text-blue-600">Functions</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    The <strong className="text-slate-900">Department of Physiology</strong> at Buddha Hospital & Research Institute (BHRI) focuses on the study of normal body functions and mechanisms. It helps students understand how different systems of the human body work together to maintain life and health.
                                </p>
                                <p>
                                    Through a combination of theoretical knowledge and practical experiments, the department builds a strong base for understanding disease processes and clinical medicine.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY (Icon Grid) ===== */}
            <section id="overview-section" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
                {/* Subtle Background Waves */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1000 1000">
                        {[100, 300, 500, 700, 900].map((y, i) => (
                            <motion.path
                                key={i}
                                d={`M 0 ${y} Q 250 ${y-50} 500 ${y} T 1000 ${y}`}
                                fill="transparent"
                                stroke="blue"
                                strokeWidth="1"
                                animate={{ d: [`M 0 ${y} Q 250 ${y-50} 500 ${y} T 1000 ${y}`, `M 0 ${y} Q 250 ${y+50} 500 ${y} T 1000 ${y}`, `M 0 ${y} Q 250 ${y-50} 500 ${y} T 1000 ${y}`] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                            />
                        ))}
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 block">Curriculum</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Cardiovascular System", desc: "Heart and blood flow mechanisms." },
                            { icon: Wind, title: "Respiratory System", desc: "Lungs and breathing mechanics." },
                            { icon: Brain, title: "Nervous System", desc: "Brain and neural communication." },
                            { icon: Activity, title: "Muscular System", desc: "Muscle and body movement." },
                            { icon: Zap, title: "Endocrine System", desc: "Hormones and chemical control." },
                            { icon: Droplets, title: "Renal System", desc: "Kidney functions and fluid balance." }
                        ].map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <area.icon size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
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
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                                <FlaskConical size={12} /> Hands-on Learning
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>Practical & Laboratory Training</h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                The department emphasizes hands-on learning through practical sessions and experiments, bridging the gap between theory and medicine.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Clinical physiology experiments",
                                    "Blood pressure and ECG monitoring",
                                    "Spirometry and respiratory analysis",
                                    "Human performance and reflex testing",
                                    "Use of modern lab instruments"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <MousePointer2 size={16} />
                                        </div>
                                        <span className="text-slate-800 font-semibold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image 
                                src="/carousel-1.png"
                                alt="Laboratory Training"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <h4 className="font-bold mb-1">Modern Equipment</h4>
                                <p className="text-xs text-blue-100">Advanced diagnostic and experimental tools.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-2 block">Infrastructure</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Well-equipped Lab", icon: Microscope },
                            { title: "Advanced Instruments", icon: Activity },
                            { icon: Hospital, title: "Demonstration Rooms" },
                            { icon: Monitor, title: "Digital Teaching Tools" },
                            { icon: ShieldCheck, title: "Organized Lab" }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:border-blue-200 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm leading-tight font-montserrat">{item.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FACULTY & TEACHING APPROACH ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Mentors</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
                            Dedicated to providing high-quality education using modern techniques and interactive sessions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((_, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-64 bg-slate-200 relative">
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="flex items-center justify-center h-full text-slate-400">
                                        <Users size={64} strokeWidth={1} />
                                    </div>
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        {["INTERACTIVE", "DIGITAL"].map((b, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-[8px] font-bold text-blue-900">{b}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-10 text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: serifFont }}>Dr. Faculty Name</h3>
                                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Physiology Specialist</p>
                                    <div className="flex justify-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50" />
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESEARCH & ACADEMIC DEVELOPMENT (Dark) ===== */}
            <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 block">Scientific Thinking</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>Research & <br/>Development</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                The Department of Physiology promotes research and scientific thinking. We encourage students to explore the boundaries of functional medicine.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Research Projects", icon: ClipboardList },
                                    { title: "Data Analysis", icon: Activity },
                                    { title: "Academic Seminars", icon: Users },
                                    { title: "Collaborations", icon: Globe }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-80 h-80">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
                                />
                                <div className="absolute inset-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
                                    <Activity size={100} className="text-blue-500 opacity-40 animate-pulse" strokeWidth={1} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS (Cards) ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: "Functional Focus", desc: "Deep understanding of body systems" },
                            { icon: FlaskConical, title: "Practical Learning", desc: "Experience through real experiments" },
                            { icon: GraduationCap, title: "Strong Foundation", desc: "Base for all clinical subjects" },
                            { icon: Users, title: "Expert Faculty", desc: "Experienced and dedicated mentors" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all"
                            >
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <stat.icon size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{stat.title}</h3>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SLIDER SECTION ===== */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="rounded-[4rem] overflow-hidden relative min-h-[400px] lg:min-h-[500px] shadow-2xl bg-slate-900 border-4 border-slate-50">
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
                                            <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-blue-500' : 'w-3 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                            Build a strong understanding of body functions.
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the Department of Physiology at BHRI and explore the complex mechanisms that maintain life and health.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-2xl text-lg hover:bg-blue-700 transition-all"
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
