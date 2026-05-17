"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap, Stethoscope, Microscope, BookOpen, Activity, 
    Lightbulb, Users, Quote, Target, Building, ShieldCheck, 
    Laptop, Award, ChevronRight, UserCheck
} from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";

const MDPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Building Future Medical Leaders", desc: "Empowering students through quality education.", icon: GraduationCap, image: "/carousel-1.png" },
        { title: "Healthcare Meets Academics", desc: "Integrating learning with real-world practice.", icon: Stethoscope, image: "/carousel-2.png" },
        { title: "Driven by Research & Innovation", desc: "Advancing medical science for better outcomes.", icon: Microscope, image: "/carousel-3.png" },
        { title: "Excellence in Every Dimension", desc: "Care, education, and growth together.", icon: Award, image: "/carousel-4.png" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            
            {/* ===== HERO SECTION (Contrasting Design: Image Left, Blue/Slate Theme) ===== */}
            <section className="relative bg-slate-100 pt-8 pb-10 lg:pt-10 lg:pb-12 overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200/50 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                        
                        {/* Image Left (Contrast to Chairman) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5 relative w-full min-h-[400px] order-2 lg:order-1"
                        >
                            <div className="w-full h-full rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-xl border-4 border-white relative bg-gray-200">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-6 text-center">
                                    <UserCheck size={48} className="mb-3 opacity-50 text-blue-600" />
                                    <p className="font-montserrat font-semibold text-sm">Managing Director Image</p>
                                    <p className="text-xs mt-1">Using chairman.jpg temporarily</p>
                                </div>
                                <Image 
                                    src="/chairman.jpg" 
                                    alt="Managing Director" 
                                    fill 
                                    className="object-cover object-top relative z-10" 
                                    onError={(e) => e.currentTarget.style.opacity = '0'} 
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Text Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full w-fit">
                                <GraduationCap size={14} />
                                <span className="text-[10px] font-bold uppercase tracking-wider font-montserrat">Leadership Vision</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight font-montserrat">
                                Message from the <br className="hidden lg:block"/><span className="text-blue-600">Managing Director</span>
                            </h1>
                            
                            <div className="space-y-3 text-slate-700 text-[13px] lg:text-sm leading-relaxed font-montserrat bg-white/60 p-6 rounded-[2rem] shadow-sm border border-white backdrop-blur-sm">
                                <p>
                                    At Buddha Hospital & Research Institute, we are building more than just a healthcare facility — we are shaping a center of excellence that integrates patient care, medical education, and research.
                                </p>
                                <p>
                                    In today’s rapidly evolving world, healthcare and academics must go hand in hand. Our vision is to create an institution where clinical excellence is supported by strong academic foundations, enabling future medical professionals to learn, innovate, and lead with confidence.
                                </p>
                                <p>
                                    We are committed to developing a robust academic environment through our medical education programs, advanced training facilities, and research initiatives. By nurturing young minds and encouraging scientific inquiry, we aim to contribute to the growth of the healthcare ecosystem in our region and beyond.
                                </p>
                                <p>
                                    At the same time, we continue to strengthen our hospital services by adopting modern technologies, improving patient care systems, and maintaining the highest standards of quality and safety.
                                </p>
                                <p className="font-semibold text-blue-900">
                                    Our focus remains on three key pillars — Healthcare, Education, and Research. Together, these pillars define our journey towards excellence.
                                </p>
                                <p>
                                    We believe that the future of healthcare lies in knowledge, innovation, and collaboration. At BHRI, we are dedicated to creating opportunities for learning, advancing medical science, and delivering meaningful impact to society.
                                </p>
                                <p className="italic font-medium text-slate-800">
                                    Together, we are building a healthier future through knowledge and care.
                                </p>
                                
                                <div className="pt-4 mt-2 border-t border-slate-200">
                                    <p className="font-bold text-slate-900 font-montserrat text-base">Warm regards,</p>
                                    <p className="text-blue-600 font-bold font-montserrat text-lg">Managing Director</p>
                                    <p className="text-xs text-slate-500 font-montserrat">Buddha Hospital & Research Institute</p>
                                </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHT SECTION (Short Version) ===== */}
            <section className="py-10 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-1 bg-blue-600/20 mx-auto mb-4 rounded-full" />
                        <h2 className="text-2xl lg:text-3xl font-medium leading-relaxed font-montserrat text-slate-800">
                            "At BHRI, we combine quality healthcare with strong academic and research initiatives to build a future-ready medical institution focused on excellence and innovation."
                        </h2>
                        <div className="w-12 h-1 bg-blue-600/20 mx-auto mt-4 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* ===== 3 PILLAR SECTION ===== */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Our Foundation</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">The Three Pillars of BHRI</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1: Healthcare */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-slate-50 rounded-[2rem] p-10 text-center border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                        >
                            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                <Stethoscope size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Healthcare</h3>
                            <p className="text-slate-600 font-montserrat leading-relaxed text-sm">
                                Delivering world-class medical services, adopting modern technologies, and prioritizing patient safety and compassionate care.
                            </p>
                        </motion.div>

                        {/* Pillar 2: Education */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="bg-blue-50 rounded-[2rem] p-10 text-center border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />
                            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 relative z-10">
                                <GraduationCap size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat relative z-10">Education</h3>
                            <p className="text-slate-600 font-montserrat leading-relaxed text-sm relative z-10">
                                Nurturing future medical leaders through rigorous academic programs, modern training facilities, and expert mentorship.
                            </p>
                        </motion.div>

                        {/* Pillar 3: Research */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="bg-slate-50 rounded-[2rem] p-10 text-center border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                        >
                            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                <Microscope size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">Research</h3>
                            <p className="text-slate-600 font-montserrat leading-relaxed text-sm">
                                Advancing medical science through continuous research, innovation, and evidence-based clinical practices.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== ACADEMIC FOCUS POINTS (UI Cards) & EXTRA ADD-ON ===== */}
            <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Text Add-on */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Academic Excellence</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight font-montserrat">
                                Fostering a Culture of <br/>Learning & Innovation
                            </h2>
                            <p className="text-slate-700 text-lg mb-6 leading-relaxed font-montserrat">
                                BHRI is dedicated to fostering a strong academic culture that supports learning, research, and professional growth. Our institution aims to provide students with practical exposure, modern training facilities, and mentorship from experienced faculty.
                            </p>
                            <p className="text-slate-600 text-base leading-relaxed font-montserrat mb-8">
                                By integrating academic excellence with clinical practice, we prepare the next generation of healthcare professionals to meet global standards.
                            </p>
                            
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                                <div className="flex gap-4">
                                    <BookOpen className="text-blue-600 shrink-0" size={32} />
                                    <p className="text-sm font-montserrat text-slate-700 italic">
                                        "Education is the most powerful weapon which you can use to change the world." - Integrating this philosophy into medical science.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Academic Focus Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {[
                                { icon: Building, text: "Development of medical education programs" },
                                { icon: Award, text: "Focus on MBBS and future postgraduate courses" },
                                { icon: Microscope, text: "Research-driven healthcare practices" },
                                { icon: Laptop, text: "Training and skill development for students" },
                                { icon: Users, text: "Collaboration between doctors and academic faculty" },
                                { icon: Lightbulb, text: "Encouraging innovation and clinical research" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <item.icon size={20} />
                                    </div>
                                    <p className="font-montserrat text-sm font-semibold text-slate-800 leading-snug">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE / STRATEGIC VISION (Premium Roadmap) ===== */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Roadmap to Excellence</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-montserrat">Our Strategic Vision</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2" />

                        <div className="space-y-8 relative z-10">
                            {[
                                { title: "Teaching Hospital Ecosystem", desc: "Creating a comprehensive environment where clinical practice meets academic learning.", icon: Building },
                                { title: "Expanding Infrastructure", desc: "Investing in advanced academic infrastructure and modern medical facilities.", icon: Activity },
                                { title: "Evidence-Based Practice", desc: "Promoting medical practices strictly driven by research and verifiable data.", icon: ShieldCheck },
                                { title: "Research-Oriented Culture", desc: "Building a culture that constantly questions, investigates, and innovates.", icon: Microscope },
                                { title: "Digital Healthcare Systems", desc: "Enhancing our capabilities through modern IT and digital health solutions.", icon: Laptop },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-lg -translate-x-0 md:-translate-x-1/2 z-10">
                                        <item.icon size={24} />
                                    </div>
                                    
                                    {/* Content Box */}
                                    <div className="w-full md:w-1/2 pl-20 md:pl-0">
                                        <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-12 text-left md:text-right' : 'md:ml-12 text-left'}`}>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2 font-montserrat">{item.title}</h4>
                                            <p className="text-sm text-slate-600 font-montserrat leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== QUOTE SECTION (Highlight Banner) ===== */}
            <section className="py-12 lg:py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Quote size={64} className="mx-auto mb-8 text-blue-500/30 rotate-180" />
                        <h2 className="text-2xl lg:text-4xl font-medium mb-10 font-montserrat leading-relaxed mx-auto text-slate-100">
                            "The future of healthcare depends on education and innovation. At BHRI, we are committed to nurturing both."
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* ===== CAROUSEL ===== */}
            <section className="py-12 lg:py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider font-montserrat">Focus Areas</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 font-montserrat">Excellence in Action</h2>
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden relative min-h-[400px] lg:min-h-[500px] shadow-2xl bg-slate-900 border-4 border-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    fill
                                    className="object-cover opacity-60 mix-blend-overlay"
                                />
                                {/* Overlay for readability - Blue tinted */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-blue-900/30" />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-12 text-center">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                                {React.createElement(slides[currentSlide].icon, { size: 36, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 font-montserrat text-white leading-tight drop-shadow-lg">
                                            {slides[currentSlide].title}
                                        </h3>
                                        <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto font-montserrat drop-shadow-md">
                                            {slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots UI Overlay */}
                        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-4">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-blue-500 shadow-lg shadow-blue-500/50' : 'w-4 bg-white/40 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MDPage;
