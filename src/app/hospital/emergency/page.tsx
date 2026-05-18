"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    Zap, AlertTriangle, Truck, Siren, UserCheck, 
    ClipboardList, MapPin, Navigation, Phone, 
    Smartphone, Timer, Flame, Baby, Heart, Brain, Wind,
    Bed,
    FlaskConical,
    Monitor
} from "lucide-react";

export default function EmergencyPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "24/7 Emergency Care", desc: "Always ready to respond.", image: "/carousel-4.png", icon: Siren },
        { title: "Fast & Immediate Action", desc: "Quick response saves lives.", image: "/carousel-1.png", icon: Zap },
        { title: "Advanced Emergency Setup", desc: "Equipped for critical situations.", image: "/carousel-2.png", icon: Activity },
        { title: "Care You Can Trust", desc: "Expert team, reliable support.", image: "/carousel-3.png", icon: HeartPulse },
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
        <div className="bg-slate-50 relative" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* ===== FLOATING EMERGENCY BUTTON ===== */}
            <motion.a
                href="tel:+91XXXXXXXXXX"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-8 right-8 z-[100] bg-red-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center justify-center group lg:hidden"
            >
                <Phone className="group-hover:animate-shake" size={28} />
            </motion.a>

            {/* ===== EMERGENCY ALERT BAR ===== */}
            <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-[72px] lg:top-[80px] z-[40] shadow-md border-b border-red-500 overflow-hidden">
                <motion.div 
                    animate={{ x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex items-center justify-center gap-4 text-sm lg:text-base font-bold font-montserrat tracking-wide"
                >
                    <Siren size={20} className="animate-pulse" />
                    <span className="uppercase">24×7 Emergency Helpline: <a href="tel:+91XXXXXXXXXX" className="underline ml-2 hover:text-red-100">+91-XXXXXXXXXX</a></span>
                    <span className="hidden md:inline text-red-200">|</span>
                    <span className="hidden md:inline uppercase">Immediate response for critical situations — Call Now</span>
                </motion.div>
            </div>

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[75vh] min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
                    <Image 
                        src="/pharmacology_hero.png"
                        alt="Emergency Services"
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
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                EMERGENCY STATUS: ACTIVE 24/7
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-montserrat" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Emergency Services
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md font-montserrat">
                            24/7 Immediate Care When Every Second Matters
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
            <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-red-600 font-bold text-sm uppercase tracking-widest font-montserrat">Rapid Response</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                Saving Lives Through <br/><span className="text-red-600">Speed and Expertise</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px]">
                                <p>
                                    The <strong className="text-slate-800">Emergency Department</strong> at Buddha Hospital & Research Institute (BHRI) is fully equipped to handle critical and life-threatening situations with speed, precision, and care. Our emergency services operate 24×7 to ensure that patients receive immediate medical attention whenever it is needed.
                                </p>
                                <p>
                                    We are committed to saving lives through rapid response, expert care, and advanced medical support.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-red-600 transform group-hover:scale-110 transition-transform duration-500">
                                    <AlertTriangle size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat relative z-10 flex items-center gap-3">
                                    <Siren className="text-red-600" />
                                    Emergency Department
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px] relative z-10">
                                    <p>
                                        Our emergency department is managed by trained doctors, nurses, and paramedics who specialize in handling critical situations with efficiency and care.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        {["24/7 Availability", "Instant Triage", "Critical ICU Transfer", "Life Support Ops"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 p-3 bg-red-50 rounded-xl border border-red-100">
                                                <Zap size={14} className="text-red-600 shrink-0" />
                                                <span className="text-[11px] font-bold text-red-900 uppercase tracking-tighter">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHTS (Stats Section) ===== */}
            <section id="overview-section" className="py-12 lg:py-16 bg-white border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
                        {[
                            { icon: Siren, text: "Emergency Response", count: "24×7" },
                            { icon: Users, text: "Emergency Team", count: "Skilled" },
                            { icon: Zap, text: "Triage System", count: "Rapid" },
                            { icon: Bed, text: "Emergency Beds", count: "Dedicated" },
                            { icon: Microscope, text: "Diagnostic Support", count: "Instant" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 shadow-sm">
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-xl lg:text-2xl font-bold font-montserrat text-slate-900 mb-1">{stat.count}</div>
                                <div className="text-[10px] lg:text-xs font-semibold text-slate-500 font-montserrat uppercase tracking-wider">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE HANDLE (Emergency Cases) ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-wider font-montserrat">Critical Care</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">What We Handle</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { icon: AlertTriangle, name: "Road Trauma", color: "bg-red-50 text-red-600" },
                            { icon: Heart, name: "Heart Attack", color: "bg-red-50 text-red-600" },
                            { icon: Brain, name: "Stroke / Neuro", color: "bg-red-50 text-red-600" },
                            { icon: Wind, name: "Respiratory Distress", color: "bg-red-50 text-red-600" },
                            { icon: Flame, name: "Burns & Injuries", color: "bg-red-50 text-red-600" },
                            { icon: Baby, name: "Pediatric Emergencies", color: "bg-red-50 text-red-600" },
                            { icon: Stethoscope, name: "Maternity Urgent", color: "bg-red-50 text-red-600" },
                            { icon: Activity, name: "Infection / Fever", color: "bg-red-50 text-red-600" }
                        ].map((spec, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100 hover:shadow-lg hover:bg-white hover:border-red-200 transition-all cursor-default group"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors ${spec.color}`}>
                                    <spec.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-800 font-montserrat text-xs lg:text-sm leading-tight">{spec.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EMERGENCY CARE PROCESS (Step Flow) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 border-y border-red-900/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-bold text-sm uppercase tracking-wider font-montserrat">Protocol</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 font-montserrat">Emergency Care Process</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                        {[
                            { icon: Siren, title: "Arrival", desc: "Ambulance entry" },
                            { icon: Target, title: "Triage", desc: "Priority assessment" },
                            { icon: Zap, title: "Stabilization", desc: "Immediate care" },
                            { icon: Microscope, title: "Diagnostics", desc: "Urgent testing" },
                            { icon: Users, title: "Specialist", desc: "Consultation" },
                            { icon: CheckCircle, title: "Transfer", desc: "Admission / Discharge" }
                        ].map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-red-500 shadow-xl border border-white/20 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <step.icon size={28} />
                                </div>
                                <h4 className="font-bold text-white text-sm mb-1 font-montserrat tracking-tight">{step.title}</h4>
                                <p className="text-[10px] text-slate-400 font-montserrat px-2 leading-tight">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== AMBULANCE & INFRASTRUCTURE (Split) ===== */}
            <section id="ambulance" className="py-16 lg:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Ambulance */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="bg-slate-50 p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                                    <Truck size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 font-montserrat">Ambulance Services</h3>
                                    <p className="text-red-600 font-bold text-sm font-montserrat">24/7 AVAILABILITY</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Equipped with life-saving support systems",
                                    "Trained emergency staff onboard",
                                    "Quick response and patient transport",
                                    "Advanced monitoring while in transit"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                                        <CheckCircle className="text-red-600 shrink-0" size={18} />
                                        <span className="text-slate-700 font-montserrat font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a href="tel:+91XXXXXXXXXX" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                                    <Phone size={20} /> Request Ambulance Now
                                </a>
                            </div>
                        </motion.div>

                        {/* Infrastructure */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <span className="text-red-600 font-bold text-sm uppercase tracking-wider font-montserrat">Technology</span>
                            <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-8 font-montserrat">Emergency Infrastructure</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Siren, text: "Fully equipped emergency rooms" },
                                    { icon: Monitor, text: "Advanced monitoring systems" },
                                    { icon: Activity, text: "Immediate access to ICU & OT" },
                                    { icon: FlaskConical, text: "Integrated diagnostic services" },
                                    { icon: Zap, text: "Life-saving ventilators & equipment" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shadow-sm shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-slate-700 font-montserrat font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== WHY SPEED MATTERS (0 MIN DELAY) ===== */}
            <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    >
                        <div className="inline-block py-1 px-4 bg-red-600 text-[10px] font-bold rounded-full mb-6 tracking-[0.2em]">SPEED SAVES LIVES</div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 font-montserrat tracking-tight leading-none">
                            <span className="text-red-600">0 MIN</span> WAIT TIME
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
                            {[
                                { t: "Attention", d: "Immediate" },
                                { t: "Triage", i: Zap, d: "Instant" },
                                { t: "Diagnosis", d: "Quick" },
                                { t: "Monitoring", d: "Continuous" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <span className="text-red-500 font-bold text-xl font-montserrat">{item.d}</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-widest mt-1">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== CAROUSEL ===== */}
            <section className="py-10 lg:py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-wider font-montserrat">In Action</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 font-montserrat">Emergency Care in Focus</h2>
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden relative min-h-[320px] lg:min-h-[400px] shadow-2xl bg-slate-900 border-4 border-slate-100">
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
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                                <div className="relative z-10 h-full flex flex-col justify-end items-center p-6 lg:p-10 text-center pb-16">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-12 bg-red-600/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 24, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-red-50 text-sm lg:text-base max-w-2xl mx-auto font-montserrat drop-shadow-md">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-red-500' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MAP & FINAL CTA ===== */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-red-600 rounded-[3rem] p-10 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 font-montserrat">Need urgent medical help?</h2>
                            <p className="text-xl lg:text-2xl text-red-100 mb-12 font-montserrat max-w-2xl mx-auto">
                                Call our Emergency Helpline now and get immediate assistance.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <motion.a 
                                    href="tel:+91XXXXXXXXXX"
                                    whileHover={{ scale: 1.05 }}
                                    className="px-12 py-5 bg-white text-red-600 font-black rounded-full shadow-2xl flex items-center justify-center gap-3 font-montserrat text-xl"
                                >
                                    <Phone size={28} /> CALL NOW
                                </motion.a>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    className="px-12 py-5 bg-slate-950 text-white font-black rounded-full shadow-2xl flex items-center justify-center gap-3 font-montserrat text-xl"
                                >
                                    <Navigation size={28} /> DIRECTIONS
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
