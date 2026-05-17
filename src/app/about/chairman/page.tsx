"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart, Target, Eye, ShieldCheck, Users, Zap,
    Award, CheckCircle, Star, Quote, Globe, Microscope, UserCheck
} from "lucide-react";
import ElectricBorder from "@/components/ui/electric-border";

const ChairmanPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "A Vision for Better Healthcare", desc: "Making quality healthcare accessible to all.", icon: Eye, image: "/carousel-1.png" },
        { title: "Compassion Meets Excellence", desc: "Care that goes beyond treatment.", icon: Heart, image: "/carousel-2.png" },
        { title: "Driven by Trust & Integrity", desc: "Building confidence in every patient.", icon: ShieldCheck, image: "/carousel-3.png" },
        { title: "Committed to Community", desc: "Serving beyond hospital walls.", icon: Users, image: "/carousel-4.png" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* ===== HERO SECTION ===== */}
            <section className="relative bg-slate-50 pt-8 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 -skew-x-12 translate-x-20" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-green-50/40 skew-x-12 -translate-x-20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 flex flex-col justify-center py-4"
                        >
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight font-montserrat">
                                Message from the <span className="text-green-600">Chairman</span>
                            </h1>
                            <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed font-montserrat">
                                <p>
                                    At Buddha Hospital & Research Institute, our journey began with a simple yet powerful vision — to make quality healthcare accessible, affordable, and trustworthy for every individual.
                                </p>
                                <p>
                                    Healthcare is not just about treatment; it is about care, compassion, and commitment. At BHRI, we strive to create an environment where patients feel safe, respected, and confident in the care they receive. Our team of dedicated doctors, nurses, and staff work tirelessly to uphold the highest standards of medical excellence.
                                </p>
                                <p>
                                    We believe that modern healthcare must combine advanced technology with a human touch. That is why we continuously invest in infrastructure, innovation, and skilled professionals to deliver the best possible outcomes.
                                </p>
                                <p>
                                    Our mission goes beyond hospital walls. We are deeply committed to serving the community through health awareness programs, rural outreach, and preventive care initiatives. Every step we take is aimed at building a healthier and stronger society.
                                </p>
                                <p>
                                    As we move forward, BHRI will continue to grow as a center of excellence in healthcare and medical education. We are dedicated to earning your trust every day through transparency, integrity, and compassionate service.
                                </p>
                                <p className="font-medium text-green-700 mt-2">
                                    Your health is our responsibility, and your trust is our greatest strength.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col">
                                <span className="font-bold text-gray-900 font-montserrat">Warm regards,</span>
                                <span className="text-green-600 font-semibold font-montserrat text-lg mt-1">Chairman</span>
                                <span className="text-sm text-gray-500 font-montserrat">Buddha Hospital & Research Institute</span>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5 relative w-full min-h-[400px]"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white relative bg-gray-100">
                                {/* Placeholder for Chairman Image */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
                                    <UserCheck size={48} className="mb-3 opacity-50 text-green-600" />
                                    <p className="font-montserrat font-semibold text-sm text-gray-600">Chairman Image</p>
                                    <p className="text-xs mt-1">Upload to /chairman.jpg</p>
                                </div>
                                <Image 
                                    src="/chairman.jpg" 
                                    alt="Chairman" 
                                    fill 
                                    className="object-cover object-top relative z-10" 
                                    onError={(e) => e.currentTarget.style.opacity = '0'} 
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== HIGHLIGHT SECTION (Short Version) ===== */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Star className="text-green-600 mx-auto mb-4" size={32} />
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-relaxed font-montserrat">
                            At BHRI, we are committed to delivering compassionate, affordable, and high-quality healthcare.
                        </h2>
                        <p className="text-base text-gray-600 font-montserrat leading-relaxed max-w-2xl mx-auto">
                            Our focus is on patient well-being, advanced medical practices, and community service.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== KEY MESSAGE POINTS (UI Cards) ===== */}
            <section className="py-10 lg:py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-green-600 font-bold text-xs uppercase tracking-wider font-montserrat">Our Core Focus</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 font-montserrat">Key Highlights</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Heart, title: "Patient-first", desc: "approach in every service" },
                            { icon: ShieldCheck, title: "Ethical Care", desc: "Commitment to transparent healthcare" },
                            { icon: Zap, title: "Modern Tech", desc: "Continuous investment in technology" },
                            { icon: Users, title: "Community Focus", desc: "Health and outreach initiatives" },
                            { icon: Award, title: "Building Trust", desc: "Through care and excellence" }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                    <value.icon size={24} />
                                </div>
                                <h4 className="text-base font-bold text-gray-900 mb-2 font-montserrat">{value.title}</h4>
                                <p className="text-gray-600 text-xs font-montserrat leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== QUOTE SECTION (Highlight Banner) ===== */}
            <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Quote size={80} className="mx-auto mb-8 text-green-500/20 rotate-180" />
                        <h2 className="text-2xl lg:text-4xl font-medium mb-10 font-montserrat leading-relaxed mx-auto text-slate-100">
                            "Healthcare is not just a service, it is a responsibility towards humanity. At BHRI, we honor that responsibility every day."
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ChairmanPage;
