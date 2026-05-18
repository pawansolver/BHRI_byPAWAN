"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    TestTube, Monitor, Zap, ClipboardList, Database,
    Dna, Droplets, FlaskConical, Scan, Heart,
    Calendar,
    UserCheck
} from "lucide-react";

export default function DiagnosticsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Accurate Diagnosis Matters", desc: "Reliable test results for better treatment.", image: "/carousel-1.png", icon: Microscope },
        { title: "Advanced Technology", desc: "Modern equipment for precise testing.", image: "/carousel-2.png", icon: Monitor },
        { title: "Fast & Efficient Service", desc: "Quick reports with minimal waiting time.", image: "/carousel-3.png", icon: Clock },
        { title: "Trusted Diagnostic Support", desc: "Supporting doctors and patients with accuracy.", image: "/carousel-4.png", icon: ShieldCheck },
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
        <div className="bg-slate-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/biochemistry_diagnostics.png"
                        alt="Diagnostic Services"
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
                        <span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold tracking-[0.2em] text-xs mb-6 border border-white/20 uppercase font-montserrat">
                            BHRI LABS
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-montserrat" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Diagnostic Services
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md font-montserrat">
                            Accurate Testing, Advanced Technology, Reliable Results
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                onClick={scrollToOverview}
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 max-w-xs font-montserrat"
                            >
                                Explore Services
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== OVERVIEW (2 Column Layout) ===== */}
            <section id="overview-section" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider font-montserrat">Precision First</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                Accurate Diagnosis for <span className="text-cyan-600">Effective Treatment</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px]">
                                <p>
                                    At <strong className="text-slate-800">Buddha Hospital & Research Institute (BHRI)</strong>, our Diagnostic Services play a crucial role in ensuring accurate diagnosis and effective treatment. We are equipped with modern diagnostic technologies and advanced laboratory systems to provide reliable and timely results.
                                </p>
                                <p>
                                    Our goal is to support doctors with precise data and help patients receive the right treatment at the right time.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-cyan-600 transform group-hover:scale-110 transition-transform duration-500">
                                    <Microscope size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat relative z-10 flex items-center gap-3">
                                    <FlaskConical className="text-cyan-500" />
                                    The Diagnostic Department
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px] relative z-10">
                                    <p>
                                        Our department delivers comprehensive testing services under one roof—from routine blood tests to advanced imaging. All tests are conducted by trained professionals using modern equipment.
                                    </p>
                                    <div className="flex items-center gap-4 mt-6 p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
                                        <Database className="text-cyan-600" />
                                        <p className="text-sm font-semibold text-cyan-900">Standardized Testing & Digital Reports</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS (Stats Section) ===== */}
            <section className="py-12 lg:py-16 bg-white border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
                        {[
                            { icon: Microscope, text: "Advanced Laboratory", count: "Setup" },
                            { icon: Zap, text: "Fast & Accurate", count: "Reports" },
                            { icon: Users, text: "Skilled Technicians", count: "Staff" },
                            { icon: Monitor, text: "Modern Imaging", count: "Equipment" },
                            { icon: Database, text: "Digital Reports", count: "Availability" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4 border border-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300 shadow-sm">
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-xl lg:text-2xl font-bold font-montserrat text-slate-900 mb-1">{stat.count}</div>
                                <div className="text-[10px] lg:text-xs font-semibold text-slate-500 font-montserrat uppercase tracking-wider">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES CATEGORIES GRID ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider font-montserrat">Comprehensive Testing</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">Our Diagnostic Services Include</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                title: "Pathology & Lab", 
                                icon: Droplets, 
                                list: ["Blood tests", "Urine analysis", "Biochemistry", "Hematology", "Microbiology"],
                                color: "blue"
                            },
                            { 
                                title: "Imaging Services", 
                                icon: Scan, 
                                list: ["X-Ray", "Ultrasound (USG)", "CT Scan", "Digital Radiology"],
                                color: "cyan"
                            },
                            { 
                                title: "Cardiac Diagnostics", 
                                icon: Heart, 
                                list: ["ECG", "2D Echo", "Cardiac Monitoring"],
                                color: "red"
                            },
                            { 
                                title: "Specialized Tests", 
                                icon: Dna, 
                                list: ["Hormonal tests", "Infection screening", "Preventive check-ups"],
                                color: "purple"
                            }
                        ].map((cat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:bg-white hover:border-cyan-200 transition-all group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-cyan-600 shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-montserrat">{cat.title}</h3>
                                <ul className="space-y-2">
                                    {cat.list.map((item, k) => (
                                        <li key={k} className="flex items-center gap-2 text-sm text-slate-600 font-montserrat">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS (Process Flow) ===== */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider font-montserrat">The Process</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">How Diagnostic Services Work</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-cyan-100 z-0" />
                        
                        {[
                            { icon: Stethoscope, title: "Consultation", desc: "Test recommendation" },
                            { icon: Calendar, title: "Booking", desc: "Registration" },
                            { icon: Droplets, title: "Collection", desc: "Sample / Imaging" },
                            { icon: Microscope, title: "Analysis", desc: "Lab processing" },
                            { icon: ClipboardList, title: "Report", desc: "Generation" },
                            { icon: UserCheck, title: "Review", desc: "Doctor diagnosis" }
                        ].map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-14 h-14 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center text-cyan-600 shadow-md mb-4 group-hover:scale-110 transition-transform">
                                    <step.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-900 text-[13px] mb-1 font-montserrat leading-tight">{step.title}</h4>
                                <p className="text-[10px] text-slate-500 font-montserrat leading-tight">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TECHNOLOGY & CONVENIENCE (Split) ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Technology */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider font-montserrat">Infrastructure</span>
                            <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-6 font-montserrat">Technology & Infrastructure</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Zap, text: "Automated laboratory systems for precision" },
                                    { icon: Monitor, text: "Digital imaging technology for clear results" },
                                    { icon: ShieldCheck, text: "Strict quality control protocols" },
                                    { icon: Hospital, text: "Safe and hygienic testing environment" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100/50">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-slate-700 font-montserrat font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Convenience */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="bg-slate-900 p-8 lg:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                            <h3 className="text-2xl font-bold mb-8 font-montserrat flex items-center gap-3">
                                <HeartPulse className="text-cyan-400" /> Patient Convenience
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "Easy test booking process",
                                    "Minimal waiting time",
                                    "Clean and safe sample collection",
                                    "Guidance from trained staff",
                                    "Digital and printed reports"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-slate-300">
                                        <CheckCircle className="text-cyan-500 shrink-0" size={18} />
                                        <span className="font-montserrat text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SPEED & ACCURACY HIGHLIGHT ===== */}
            <section className="py-16 bg-cyan-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat">Speed & Accuracy You Can Trust</h2>
                        <p className="text-cyan-100 max-w-3xl mx-auto font-montserrat text-lg">
                            Quick turnaround times, modern machines, and standardized procedures ensure reliable and consistent results every time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US (Grid) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider font-montserrat">The BHRI Edge</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 font-montserrat">Why Choose Our Diagnostics?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Reliable Results", text: "Accurate and reliable test results." },
                            { title: "Advanced Tech", text: "Advanced medical equipment." },
                            { title: "Fast Delivery", text: "Fast report delivery time." },
                            { title: "Expert Staff", text: "Experienced technical staff." },
                            { title: "Integrated", text: "Integrated with treatment systems." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-colors text-center"
                            >
                                <Award className="mx-auto text-cyan-400 mb-4" size={32} />
                                <h4 className="font-bold font-montserrat text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-300 font-montserrat leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CAROUSEL ===== */}
            <section className="py-10 lg:py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <span className="text-cyan-600 font-bold text-sm uppercase tracking-wider font-montserrat">Gallery</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 font-montserrat">A Glimpse of BHRI Labs</h2>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden relative min-h-[320px] lg:min-h-[400px] shadow-2xl bg-slate-900 border-4 border-slate-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    fill
                                    className="object-cover opacity-60 mix-blend-overlay"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#1e293b';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                                <div className="relative z-10 h-full flex flex-col justify-end items-center p-6 lg:p-10 text-center pb-16">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-600/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 24, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-cyan-50 text-sm lg:text-base max-w-2xl mx-auto font-montserrat drop-shadow-md">
                                            {slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-cyan-500' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat leading-tight text-white">
                            Get your diagnostic tests done at BHRI.
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium mb-10 font-montserrat">
                            Accurate results and reliable healthcare support for your well-being.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 font-montserrat">
                                <PhoneCall size={20} />
                                Book a Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
