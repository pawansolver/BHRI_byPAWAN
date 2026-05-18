"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    Bed, UserPlus, Heart, Zap, UserCheck, ClipboardList,
    Coffee, Shield, Droplets, Layout, Monitor
} from "lucide-react";

export default function InWardsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Comfortable Patient Stay", desc: "Designed for healing and recovery.", image: "/carousel-3.png", icon: Bed },
        { title: "24/7 Medical Care", desc: "Continuous monitoring and support.", image: "/carousel-1.png", icon: Monitor },
        { title: "Modern Ward Facilities", desc: "Clean, safe, and well-equipped rooms.", image: "/carousel-2.png", icon: Layout },
        { title: "Care You Can Trust", desc: "Dedicated team focused on your recovery.", image: "/carousel-4.png", icon: Heart },
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
                        src="/hospital_ipd_hero.png"
                        alt="In-Wards Services"
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
                            BHRI CARE
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-montserrat" style={{ fontFamily: "'Playfair Display', serif" }}>
                            In-Wards Services
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md font-montserrat">
                            Comprehensive Care, Comfort, and Continuous Monitoring
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
                            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider font-montserrat">In-Patient Care</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                A Home for <span className="text-indigo-600">Healing</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px]">
                                <p>
                                    The <strong className="text-slate-800">In-Wards Services</strong> at Buddha Hospital & Research Institute (BHRI) are designed to provide patients with high-quality medical care during their hospital stay. We ensure a safe, comfortable, and well-managed environment where patients receive continuous monitoring and personalized treatment.
                                </p>
                                <p>
                                    Our wards are equipped to support both short-term and long-term hospitalization with a focus on recovery, comfort, and patient well-being.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-indigo-600 transform group-hover:scale-110 transition-transform duration-500">
                                    <Bed size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat relative z-10 flex items-center gap-3">
                                    <ShieldCheck className="text-indigo-500" />
                                    About In-Patient Care
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px] relative z-10">
                                    <p>
                                        In-ward services are meant for patients who require admission for observation, treatment, surgery, or recovery. At BHRI, we provide structured and attentive in-patient care supported by experienced doctors, trained nurses, and modern facilities.
                                    </p>
                                    <div className="flex items-center gap-4 mt-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                                        <Users className="text-indigo-600" />
                                        <p className="text-sm font-semibold text-indigo-900">24/7 Nursing & Medical Supervision</p>
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
                            { icon: Layout, text: "Ward Categories", count: "Multiple" },
                            { icon: Clock, text: "Medical Care", count: "24/7" },
                            { icon: Microscope, text: "Diagnostic Support", count: "Integrated" },
                            { icon: Activity, text: "Emergency Response", count: "Rapid" },
                            { icon: Shield, text: "Hygiene Standards", count: "High" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 shadow-sm">
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-xl lg:text-2xl font-bold font-montserrat text-slate-900 mb-1">{stat.count}</div>
                                <div className="text-[10px] lg:text-xs font-semibold text-slate-500 font-montserrat uppercase tracking-wider">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WARD TYPES GRID ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider font-montserrat">Categories</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">Types of Wards Available</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "General Ward", desc: "Affordable care with essential facilities.", icon: Users },
                            { title: "Semi-Private Rooms", desc: "Shared rooms with added comfort.", icon: Layout },
                            { title: "Private Rooms", desc: "Personal space with enhanced privacy.", icon: Shield },
                            { title: "Deluxe Rooms", desc: "Premium stay with superior amenities.", icon: Award },
                            { title: "ICU / Critical Care", desc: "Advanced monitoring for critical patients.", icon: Monitor }
                        ].map((ward, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:bg-white hover:border-indigo-200 transition-all group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-500 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <ward.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-800 font-montserrat text-sm mb-2">{ward.title}</h4>
                                <p className="text-xs text-slate-500 font-montserrat leading-relaxed">{ward.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS FLOW ===== */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider font-montserrat">Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">In-Patient Care Process</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
                        {[
                            { icon: UserPlus, title: "Admission", desc: "Doctor's recommendation" },
                            { icon: Layout, title: "Allocation", desc: "Room assigned" },
                            { icon: Monitor, title: "Monitoring", desc: "Continuous care" },
                            { icon: Heart, title: "Nursing", desc: "24/7 Assistance" },
                            { icon: Microscope, title: "Diagnostics", desc: "Tests & Treatment" },
                            { icon: UserCheck, title: "Discharge", desc: "Final review" }
                        ].map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-4 border border-slate-100 group-hover:border-indigo-500 group-hover:scale-105 transition-all">
                                    <step.icon size={28} />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1 font-montserrat">{step.title}</h4>
                                <p className="text-[10px] text-slate-500 font-montserrat px-2">{step.desc}</p>
                                {idx < 5 && (
                                    <div className="hidden lg:block absolute top-8 left-[calc(100%-10px)] w-full h-[2px] bg-slate-200 -z-10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FEATURES & FACILITIES ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        
                        {/* Features */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 font-montserrat">Patient Care Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "24/7 medical supervision",
                                    "Dedicated nursing care",
                                    "Clean & hygienic environment",
                                    "Regular doctor visits",
                                    "Personalized treatment plans",
                                    "Family support guidance"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-indigo-200 transition-colors">
                                        <CheckCircle className="text-indigo-500 shrink-0" size={18} />
                                        <span className="text-slate-700 font-montserrat font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Facilities */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 font-montserrat">Facilities & Amenities</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Bed, text: "Comfortable beds and well-maintained rooms" },
                                    { icon: Zap, text: "Air-conditioned rooms (where applicable)" },
                                    { icon: Droplets, text: "Attached washrooms and safe drinking water" },
                                    { icon: Coffee, text: "Food services and in-house pharmacy" },
                                    { icon: Shield, text: "Security and patient safety systems" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
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

            {/* ===== ATTENDANT SUPPORT ===== */}
            <section className="py-16 lg:py-24 bg-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md p-8 lg:p-12 rounded-[2.5rem] border border-white/20"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">Attendant & Family Support</h3>
                            <p className="text-indigo-50 mb-8 leading-relaxed font-montserrat">
                                We understand the importance of family support during recovery. BHRI provides attendant-friendly policies and clear communication to keep you informed.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Friendly Policies", "Clear Communication", "Recovery Guidance", "Comfortable Waiting"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white font-montserrat font-medium text-sm">
                                        <div className="w-2 h-2 bg-indigo-300 rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-montserrat leading-tight">
                                Care Beyond the <br className="hidden lg:block" /> Patient Bed.
                            </h2>
                            <p className="text-indigo-100 text-lg font-montserrat mb-8">
                                Each patient is closely monitored and treated with attention and compassion by our dedicated medical team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US (Grid) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider font-montserrat">Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 font-montserrat">Why Choose Our In-Wards?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Budget Options", text: "Multiple room options for every budget." },
                            { title: "Continuous Care", text: "Continuous monitoring and expert care." },
                            { title: "Safe & Hygienic", text: "Safe and hygienic infrastructure." },
                            { title: "Modern Facilities", text: "Comfortable and patient-friendly environment." },
                            { title: "Responsive Staff", text: "Compassionate and responsive staff." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 hover:border-indigo-500/50 transition-colors text-center"
                            >
                                <Award className="mx-auto text-indigo-400 mb-4" size={32} />
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
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider font-montserrat">Gallery</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 font-montserrat">A Glimpse of In-Wards</h2>
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
                                            <div className="w-12 h-12 bg-indigo-600/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 24, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-indigo-50 text-sm lg:text-base max-w-2xl mx-auto font-montserrat drop-shadow-md">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-indigo-500' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat leading-tight text-white">
                            Contact BHRI for admission services.
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium mb-10 font-montserrat">
                            Experience quality care in a comfortable environment.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 font-montserrat">
                                <PhoneCall size={20} />
                                Contact Us Today
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
