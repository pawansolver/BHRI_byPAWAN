"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, ShieldCheck, HeartPulse, Stethoscope, Microscope, 
    Pill, Bed, Clock, Award, Users, CheckCircle, ChevronRight,
    Hospital, Target, PhoneCall, Globe,
    Check
} from "lucide-react";

export default function HospitalPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Comprehensive Healthcare Services", desc: "All your medical needs under one roof.", image: "/carousel-1.png", icon: Hospital },
        { title: "Advanced Infrastructure", desc: "Modern facilities designed for better care.", image: "/carousel-2.png", icon: Activity },
        { title: "Expert Medical Team", desc: "Experienced professionals you can trust.", image: "/carousel-3.png", icon: Stethoscope },
        { title: "24/7 Patient Support", desc: "Always here when you need us.", image: "/carousel-4.png", icon: Clock },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-slate-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-teal-900 mix-blend-multiply opacity-90 z-10" />
                    <Image 
                        src="/carousel-1.png"
                        alt="The Hospital"
                        fill
                        className="object-cover"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                
                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto -mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold tracking-wider text-sm mb-6 border border-white/30 font-montserrat">
                            BHRI HOSPITAL
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-montserrat drop-shadow-lg">
                            The Hospital
                        </h1>
                        <p className="text-xl lg:text-2xl text-green-50 font-medium font-montserrat drop-shadow-md">
                            Delivering Compassionate Care with Excellence and Trust
                        </p>
                    </motion.div>
                </div>
                
                {/* Curve divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.5,187.5,89.57,232.07,71.55,278.4,64.88,321.39,56.44Z" fill="#f8fafc"></path>
                    </svg>
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
                            <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Overview</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                A Legacy of <span className="text-green-600">Care</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px]">
                                <p>
                                    <strong className="text-slate-800">Buddha Hospital & Research Institute (BHRI)</strong> is a modern multi-speciality healthcare institution committed to providing high-quality, affordable, and patient-centered medical services. Located in Gaya, BHRI is designed to meet the growing healthcare needs of the region by combining advanced medical technology with a compassionate approach to care.
                                </p>
                                <p>
                                    Our hospital serves as a trusted destination for patients seeking reliable diagnosis, effective treatment, and continuous support throughout their healthcare journey.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-green-600 transform group-hover:scale-110 transition-transform duration-500">
                                    <Hospital size={120} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-montserrat relative z-10 flex items-center gap-3">
                                    <ShieldCheck className="text-green-500" />
                                    About the Hospital
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed font-montserrat text-[15px] relative z-10">
                                    <p>
                                        BHRI is built with the vision of creating a comprehensive healthcare ecosystem where patients receive complete care under one roof. From outpatient consultations to advanced critical care services, our hospital is equipped to handle a wide range of medical conditions with precision and efficiency.
                                    </p>
                                    <p>
                                        We focus on maintaining the highest standards of safety, hygiene, and patient satisfaction. Our team of experienced doctors, nurses, and healthcare professionals work together to ensure every patient receives personalized attention and quality treatment.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== STATS COUNTER ROW (Hospital Highlights) ===== */}
            <section className="py-12 lg:py-16 bg-white border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 text-center">
                        {[
                            { icon: Hospital, text: "Multi-speciality", count: "50+" },
                            { icon: Stethoscope, text: "Experienced Doctors", count: "100+" },
                            { icon: Microscope, text: "Advanced Diagnostics", count: "24/7" },
                            { icon: Activity, text: "Emergency Services", count: "24x7" },
                            { icon: Bed, text: "Well-equipped ICUs", count: "200+" },
                            { icon: Pill, text: "In-house Pharmacy", count: "100%" }
                        ].map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 shadow-sm">
                                    <stat.icon size={26} />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold font-montserrat text-slate-900 mb-1">{stat.count}</div>
                                <div className="text-[10px] lg:text-xs font-semibold text-slate-500 font-montserrat uppercase tracking-wider">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== OBJECTIVES (Icon Cards) ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Our Mission</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">Core Objectives</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                        {[
                            { icon: Users, title: "Accessible & Affordable", desc: "To provide accessible and affordable healthcare to all sections of society." },
                            { icon: ShieldCheck, title: "Safety & Care", desc: "To maintain high standards of patient safety, hygiene, and care." },
                            { icon: Activity, title: "Timely Diagnosis", desc: "To deliver timely and accurate diagnosis for effective treatment." },
                            { icon: HeartPulse, title: "Ethical Practices", desc: "To ensure ethical, transparent, and patient-first medical practices." },
                            { icon: Target, title: "Continuous Innovation", desc: "To continuously improve through advanced technology and innovation." }
                        ].map((obj, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:bg-white hover:border-green-200 transition-all group"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                    <obj.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-montserrat">{obj.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-montserrat">{obj.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INFRASTRUCTURE (Image + Text) ===== */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white"
                        >
                            <Image 
                                src="/carousel-2.png"
                                alt="Hospital Infrastructure"
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.style.backgroundColor = '#e2e8f0';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Facilities</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6 font-montserrat leading-tight">
                                Modern Infrastructure
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-montserrat text-lg">
                                BHRI is equipped with modern infrastructure designed to provide comfort, safety, and efficiency in healthcare delivery.
                            </p>
                            
                            <ul className="space-y-4">
                                {[
                                    "Spacious and clean patient wards",
                                    "Advanced ICU, NICU, and PICU units",
                                    "Modular operation theatres",
                                    "Digital diagnostic and imaging facilities",
                                    "Comfortable waiting and consultation areas",
                                    "24/7 pharmacy and emergency support"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-montserrat font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== TEAM & PATIENT CARE & COMMUNITY (Split Layout) ===== */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Team */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-slate-50 p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Stethoscope size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Our Medical Team</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-montserrat mb-4">
                                Our hospital is supported by a team of highly qualified and experienced doctors across multiple specialties. Along with skilled nursing staff and trained technicians, we ensure that patients receive comprehensive and coordinated care.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed font-montserrat font-medium">
                                We believe that the strength of a hospital lies in its people, and at BHRI, our team is dedicated to serving with professionalism and compassion.
                            </p>
                        </motion.div>

                        {/* Patient Care */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-slate-50 p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <HeartPulse size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Patient-Centered Care</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-montserrat mb-6">
                                At BHRI, patients are at the center of everything we do. We focus on:
                            </p>
                            <ul className="space-y-3 mb-6">
                                {["Personalized treatment plans", "Clear communication", "Comfortable & safe environment", "Quick & efficient service"].map((i, k) => (
                                    <li key={k} className="flex items-center gap-3 text-sm text-slate-700 font-montserrat font-medium">
                                        <div className="w-2 h-2 bg-green-500 rounded-full" /> {i}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-green-700 text-sm leading-relaxed font-montserrat font-semibold italic">
                                Our aim is to make every patient feel cared for, respected, and supported.
                            </p>
                        </motion.div>

                        {/* Community */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Community Commitment</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-montserrat mb-6">
                                We extend our services beyond hospital walls by organizing:
                            </p>
                            <ul className="space-y-3 mb-6">
                                {["Health awareness programs", "Free medical camps", "Preventive health initiatives", "Rural outreach services"].map((i, k) => (
                                    <li key={k} className="flex items-center gap-3 text-sm text-slate-700 font-montserrat font-medium">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full" /> {i}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-purple-700 text-sm leading-relaxed font-montserrat font-semibold italic">
                                Our goal is to improve the overall health and well-being of the community.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US (Grid) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-green-400 font-bold text-sm uppercase tracking-wider font-montserrat">Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 font-montserrat">Why Our Hospital Stands Out</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Trusted Provider", text: "Trusted healthcare provider in Gaya." },
                            { title: "Modern Facilities", text: "Modern infrastructure and advanced facilities." },
                            { title: "Expert Team", text: "Dedicated and experienced medical team." },
                            { title: "Transparent", text: "Affordable and transparent services." },
                            { title: "Quality Focus", text: "Focus on quality, safety, and patient satisfaction." }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors text-center"
                            >
                                <Award className="mx-auto text-green-400 mb-4" size={32} />
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
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wider font-montserrat">Gallery</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-1 font-montserrat">A Glimpse of Care</h2>
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
                                            <div className="w-12 h-12 bg-green-600/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                                                {React.createElement(slides[currentSlide].icon, { size: 24, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold mb-3 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-green-50 text-sm lg:text-base max-w-2xl mx-auto font-montserrat drop-shadow-md">
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
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-green-500' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat leading-tight text-white">
                            Experience healthcare that prioritizes your well-being.
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium mb-10 font-montserrat">
                            Visit BHRI and take a step towards better health.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 font-montserrat">
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
