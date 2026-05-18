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
    Database, Heart, ShieldAlert, AlertTriangle, Eye, Sparkles,
    Volume2, Smile, Baby, Thermometer, Brain, Bone, Activity as MuscleIcon
} from "lucide-react";

const serifFont = "'Playfair Display', serif";
const sansFont = "'Montserrat', sans-serif";

// Custom Blood Drop Lucide Icon replacement representation
function BloodDropIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={className}
        >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
}

// Custom Scales of Justice Icon representation for Forensic Medicine
function JusticeIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M16 16c0-3.5-3.5-3.5-3.5-3.5s-3.5 0-3.5 3.5" />
            <path d="M12 2v20" />
            <path d="M2 22h20" />
            <path d="M7 8h10" />
            <path d="M7 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
            <path d="M13 8c0 2 2 3.5 2 3.5s2-1.5 2-3.5" />
        </svg>
    );
}

// Custom teeth icon representation for Dentistry
function TeethIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M12 2c-3.3 0-6 2.7-6 6c0 3 2.5 5.5 5 7.5-.8 1-.9 2-.9 3.5 0 2.2 1.8 4 4.9 4 3.1 0 5-1.8 5-4 0-1.5-.1-2.5-.9-3.5 2.5-2 5-4.5 5-7.5 0-3.3-2.7-6-6-6z" />
            <path d="M9.5 8h5" />
        </svg>
    );
}

// Interactive dynamic visual charts representing clinical/practical workflows based on department theme
const PracticalInfographic = ({ type }: { type: string }) => {
    if (type === "forensic-medicine") {
        return (
            <div className="bg-slate-900 border border-zinc-700/30 rounded-3xl p-6 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-500/10 rounded-full blur-xl" />
                <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Bone Density & Age profile</span>
                    <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full">Skeletal Audit</span>
                </div>
                <div className="space-y-3 text-xs">
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                        <span className="text-zinc-500">Femur Fusion:</span>
                        <span className="text-zinc-300 font-bold">Completed (Age &gt; 18)</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                        <span className="text-zinc-500">Clavicle Medial:</span>
                        <span className="text-zinc-300 font-bold">Unfused (Age &lt; 25)</span>
                    </div>
                    <div className="flex justify-between pb-1">
                        <span className="text-zinc-500">Estimated Range:</span>
                        <span className="text-teal-400 font-black">19 - 24 Years</span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "orthopaedics") {
        return (
            <div className="bg-slate-900 border border-blue-500/20 rounded-3xl p-6 text-white max-w-sm mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
                <div className="flex items-center justify-between mb-4 border-b border-blue-900 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Flexion & Extension Angle</span>
                    <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Joint Mobility</span>
                </div>
                <div className="relative h-28 w-full flex items-center justify-center">
                    <svg className="w-24 h-24" viewBox="0 0 100 100">
                        {/* Circular bone joint flexion visual representation */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                        <motion.circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="4" 
                            strokeDasharray="251"
                            initial={{ strokeDashoffset: 251 }}
                            whileInView={{ strokeDashoffset: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        />
                        <text x="50" y="55" textAnchor="middle" fill="#ffffff" className="text-sm font-black font-montserrat">135°</text>
                    </svg>
                </div>
                <div className="text-center text-[10px] text-blue-300 mt-2">Active Knee Flexion Scope Verified</div>
            </div>
        );
    }

    // Default neat medical parameter checklist
    return (
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 max-w-sm mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600" />
            <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] uppercase font-bold text-slate-400">BHRI Clinical Flow</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-teal-50 text-teal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    LIVE
                </span>
            </div>
            <div className="space-y-2">
                {[
                    { label: "Patient Diagnostics Check", val: "100% Accurate" },
                    { label: "Clinical safety Protocols", val: "Enforced" },
                    { label: "Quality Audit Verification", val: "Completed" }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-100 pb-1.5 text-[11px]">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="font-bold text-slate-800">{item.val}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Department Content Store for all 15 remaining departments
const departmentData: Record<string, {
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    badge: string;
    colorTheme: {
        primary: string;
        accent: string;
        badge: string;
        button: string;
        alertBg: string;
        alertText: string;
        alertIcon: string;
        glow: string;
        cardBg: string;
        iconColor: string;
        specialText: string;
    };
    curriculum: Array<{ icon: any; title: string; desc: string }>;
    practicals: string[];
    facilities: Array<{ icon: any; title: string; desc: string }>;
    faculty: Array<{ name: string; role: string; exp: string; tags: string[] }>;
    specialTitle: string;
    specialDesc: string;
    specialList: Array<{ text: string; icon: any }>;
    highlights: Array<{ icon: any; title: string; desc: string }>;
    slides: Array<{ title: string; desc: string; icon: any }>;
}> = {
    "forensic-medicine": {
        title: "Forensic Medicine & Toxicology",
        tagline: "Bridging Medical Science with Justice",
        description: "The department focuses on the application of medical knowledge for the administration of law and justice. Students are trained in forensic pathology, clinical forensics, post-mortem examinations, and clinical toxicology.",
        heroImage: "/carousel-1.png",
        badge: "Forensic Investigation",
        colorTheme: {
            primary: "from-zinc-950 via-slate-900 to-zinc-950",
            accent: "text-zinc-400 border-zinc-500/30",
            badge: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
            button: "from-zinc-700 to-zinc-900 shadow-zinc-900/40 hover:shadow-zinc-700/50",
            alertBg: "bg-zinc-100 border-zinc-200",
            alertText: "text-zinc-900",
            alertIcon: "text-zinc-600",
            glow: "hover:shadow-[0_20px_45px_rgba(63,63,70,0.1)] hover:border-zinc-300",
            cardBg: "from-zinc-50 to-zinc-100/50",
            iconColor: "text-zinc-600",
            specialText: "text-zinc-700"
        },
        curriculum: [
            { icon: JusticeIcon, title: "Medical Jurisprudence", desc: "Understanding the legal duties of medical practitioners and forensic legal terms." },
            { icon: Microscope, title: "Forensic Pathology", desc: "Systematic investigation of deaths, autopsies, and post-mortem biological changes." },
            { icon: ShieldAlert, title: "Clinical Forensic Medicine", desc: "Clinical examination of physical injuries, assaults, and age/sex determination." },
            { icon: AlertTriangle, title: "Forensic Toxicology", desc: "Detection, clinical features, and emergency therapies for various poisons." },
            { icon: Atom, title: "Forensic Entomology", desc: "Evaluating insect activity on biological remains to approximate time of death." },
            { icon: FileText, title: "Courtroom Testimony", desc: "Structuring expert medical testimonies and drafting verified legal certificates." }
        ],
        practicals: [
            "Demonstration of forensic post-mortem procedures",
            "Identification of poison samples, toxic plants, and chemical reagents",
            "Clinical evaluation of simulated trauma and injury types",
            "Moot court sessions for expert legal testimony practice",
            "Skeletal analysis for age, stature, and sex estimation"
        ],
        facilities: [
            { icon: Hospital, title: "Forensic Autopsy Block", desc: "Modern clinical dissection and autopsy review halls." },
            { icon: Microscope, title: "Analytical Toxicology Lab", desc: "Special tools for chemical screening of toxic elements." },
            { icon: Database, title: "Forensic Specimen Museum", desc: "Exhaustive set of wet poisons, models, and weapons." },
            { icon: Monitor, title: "Digital Simulation Tools", desc: "Audio-visual mock courtrooms and virtual dissection suites." },
            { icon: ShieldCheck, title: "Bones Diagnostics Library", desc: "Reference bank of anthropometrical skeletal models." }
        ],
        faculty: [
            { name: "Dr. R. K. Singh", role: "Professor & HOD", exp: "18+ Years Experience", tags: ["Forensic Expert", "Autopsy Specialist"] },
            { name: "Dr. Vibha Kumari", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Toxicologist", "Research Head"] }
        ],
        specialTitle: "Clinical Toxicology & Poison Center",
        specialDesc: "Our center actively supports critical emergency poisonings, drug overdoses, and toxic chemical exposures through round-the-clock advisory services.",
        specialList: [
            { text: "Autopsy analysis guides", icon: AlertTriangle },
            { text: "Poisons analysis manuals", icon: ShieldCheck },
            { text: "Verified medical testimonies", icon: CheckCircle },
            { text: "Skeletal modeling databases", icon: Target }
        ],
        highlights: [
            { icon: Microscope, title: "Precise Post-Mortems", desc: "Highly systematic autopsy examinations." },
            { icon: Database, title: "Poisons Specimen Bank", desc: "Extensive collections for direct research." },
            { icon: CheckCircle, title: "Courtroom Preparedness", desc: "Equipping medical students with legal expertise." },
            { icon: Users, title: "Dedicated Pathologists", desc: "Specialist forensic scholars guiding academic labs." }
        ],
        slides: [
            { title: "Precision Autopsy", desc: "Understanding the post-mortem science in detail.", icon: Microscope },
            { title: "Poison Identification", desc: "Systematic toxicological studies and recovery therapies.", icon: AlertTriangle },
            { title: "Justice and Medicine", desc: "Providing accurate courtroom expert testimonies.", icon: JusticeIcon }
        ]
    },

    "orthopaedics": {
        title: "Orthopaedics",
        tagline: "Restoring Mobility and Musculoskeletal Health",
        description: "The department is dedicated to the diagnosis, surgical treatment, and rehabilitation of injuries and disorders affecting bones, joints, ligaments, tendons, and muscles.",
        heroImage: "/carousel-2.png",
        badge: "Bones & Joint Excellence",
        colorTheme: {
            primary: "from-blue-950 via-slate-900 to-indigo-950",
            accent: "text-blue-400 border-blue-500/30",
            badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            button: "from-blue-600 to-indigo-600 shadow-blue-600/30 hover:shadow-blue-600/50",
            alertBg: "bg-blue-50 border-blue-100",
            alertText: "text-blue-900",
            alertIcon: "text-blue-600",
            glow: "hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-200",
            cardBg: "from-blue-50 to-blue-100/50",
            iconColor: "text-blue-600",
            specialText: "text-blue-700"
        },
        curriculum: [
            { icon: Bone, title: "Fracture & Trauma Care", desc: "Advanced management of bone fractures, open injuries, and dislocations." },
            { icon: Award, title: "Joint Replacements", desc: "Surgical phaco arthroplasty of knee, hip, and shoulder joints." },
            { icon: Activity, title: "Spine Surgery", desc: "Correcting spinal cord deformities, herniations, and trauma fractures." },
            { icon: Baby, title: "Pediatric Orthopaedics", desc: "Diagnosing congenital limb disorders, squints, and clubfoot abnormalities." },
            { icon: HeartPulse, title: "Sports Medicine", desc: "Endoscopic keyhole repairs of ligaments and tendon reconstructions." },
            { icon: ShieldCheck, title: "Musculoskeletal Oncology", desc: "Diagnosis and limb-salvage surgeries for bone tumors." }
        ],
        practicals: [
            "Cast application, splinting, and orthopedic dressing drills",
            "Demonstration of skin and skeletal traction setups",
            "Reading digital bone X-rays, CT-scans, and joint MRIs",
            "Simulated keyhole arthroscopic surgery models",
            "Joint aspiration and intra-articular injection techniques"
        ],
        facilities: [
            { icon: Hospital, title: "Orthopaedic OPDS", desc: "Large daily clinical chambers for patient consultation." },
            { icon: Bone, title: "Modern Plaster Suites", desc: "Quick cast application and reduction chambers." },
            { icon: Activity, title: "Physical Therapy Wing", desc: "Comprehensive skeletal rehab and motor exercise setups." },
            { icon: Monitor, title: "Digital Ortho X-Ray", desc: "High-resolution low-radiation digital bone scanning." },
            { icon: ShieldCheck, title: "Bone Density Labs", desc: "Advanced DEXA screening tools for osteoporosis." }
        ],
        faculty: [
            { name: "Dr. S. N. Prasad", role: "Professor & HOD", exp: "20+ Years Experience", tags: ["Joint Surgeon", "Trauma Expert"] },
            { name: "Dr. Harsh Vardhan", role: "Associate Professor", exp: "12+ Years Experience", tags: ["Spine Specialist", "Arthroscopy Lead"] }
        ],
        specialTitle: "Joint & Mobility Rehabilitation",
        specialDesc: "Our department features integrated orthotics and physical therapy tracks, helping post-surgery joint patients regain 100% active flexion ranges safely.",
        specialList: [
            { text: "Bone fracture reduction drills", icon: Bone },
            { text: "Digital radiological bone mapping", icon: ShieldCheck },
            { text: "Simulated joint injection training", icon: CheckCircle },
            { text: "Limb rehabilitation protocols", icon: Target }
        ],
        highlights: [
            { icon: Bone, title: "Premium Trauma Care", desc: "Rapid treatment for compound bone fractures." },
            { icon: Award, title: "Joint Replacements", desc: "Top success rates in hip and knee arthroplasties." },
            { icon: Activity, title: "Keyhole Orthopedics", desc: "Minimally invasive arthroscopic joint reconstructions." },
            { icon: Users, title: "Expert Bone Specialists", desc: "Specialist trauma surgeons available 24/7." }
        ],
        slides: [
            { title: "Ortho Trauma Care", desc: "Rapid response bone fractures and dislocations management.", icon: Bone },
            { title: "Total Joint Replacements", desc: "Innovative knee and hip surgeries for lifelong mobility.", icon: Award },
            { title: "Sports Injury Rehab", desc: "Comprehensive arthroscopic repairs of tendon damages.", icon: Activity }
        ]
    },

    "community-medicine": {
        title: "Community Medicine",
        tagline: "Preventive Care & Universal Health Equity",
        description: "The department focuses on health promotion, preventive medicine, epidemiology, and community health development, bridging hospital excellence directly with rural households.",
        heroImage: "/carousel-3.png",
        badge: "Public Health Advocacy",
        colorTheme: {
            primary: "from-emerald-950 via-teal-950 to-emerald-950",
            accent: "text-emerald-400 border-emerald-500/30",
            badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
            button: "from-emerald-600 to-teal-600 shadow-emerald-600/30 hover:shadow-emerald-600/50",
            alertBg: "bg-emerald-50 border-emerald-100",
            alertText: "text-emerald-900",
            alertIcon: "text-emerald-600",
            glow: "hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)] hover:border-emerald-200",
            cardBg: "from-emerald-50 to-emerald-100/50",
            iconColor: "text-emerald-600",
            specialText: "text-emerald-700"
        },
        curriculum: [
            { icon: Globe, title: "Epidemiological Studies", desc: "Evaluating disease patterns and vectors across population demographics." },
            { icon: Database, title: "Biostatistics", desc: "Applying statistical models to analyze community clinical data." },
            { icon: HeartPulse, title: "Environmental Health", desc: "Enforcing clean sanitation, water safety, and waste processing rules." },
            { icon: Baby, title: "Family Medicine & Nutrition", desc: "Focused maternal, child nutrition, and gestational health monitoring." },
            { icon: ShieldCheck, title: "National Health Plans", desc: "Systematic execution of TB, malaria, and pandemic control programs." },
            { icon: Hospital, title: "Primary Healthcare Care", desc: "Running health training and delivery centers in rural settings." }
        ],
        practicals: [
            "Conducting detailed family health and survey audits in villages",
            "Planning cold-chain logistics for vaccination campaigns",
            "Analyzing drinking water purity levels and local sanitation systems",
            "Designing and displaying clear public health education charts",
            "Running rural diagnostic and primary medicine camps"
        ],
        facilities: [
            { icon: Hospital, title: "Rural Training Center", desc: "Fully operational rural diagnostic and medical care outpost." },
            { icon: Building2, title: "Urban Training Center", desc: "Urban primary healthcare training wing." },
            { icon: Database, title: "Health Exhibition Museum", desc: "Exhaustive sets of vectors, charts, and vaccine cold-chains." },
            { icon: Monitor, title: "Biostatistical Data Lab", desc: "Analytical software systems to calculate public health indices." },
            { icon: ShieldCheck, title: "Vaccine Cold-Chain Station", desc: "Precision temperature-controlled pharmaceutical vaccine storage." }
        ],
        faculty: [
            { name: "Dr. Shalini Sen", role: "Professor & HOD", exp: "16+ Years Experience", tags: ["Epidemiologist", "Public Health Expert"] },
            { name: "Dr. Alok Ranjan", role: "Associate Professor", exp: "10+ Years Experience", tags: ["Immunization Lead", "Rural Care Specialist"] }
        ],
        specialTitle: "Rural Outreach & Immunization",
        specialDesc: "The department coordinates extensive rural clinics and free school immunization campaigns, establishing preventive medical security for underserved communities.",
        specialList: [
            { text: "Sociological health surveys", icon: Globe },
            { text: "Environmental water screenings", icon: ShieldCheck },
            { text: "Rural immunization clinics", icon: CheckCircle },
            { text: "Health data biostatistics", icon: Target }
        ],
        highlights: [
            { icon: Globe, title: "Universal Direct Care", desc: "Regular clinical outreach in neighboring villages." },
            { icon: ShieldCheck, title: "Cold-Chain Vaccines", desc: "Highly optimized children vaccine deliveries." },
            { icon: Database, title: "Epidemiological Research", desc: "Tracking regional vector-borne illnesses." },
            { icon: Users, title: "Dedicated Field Experts", desc: "Coordinating rural clinics and primary care hubs." }
        ],
        slides: [
            { title: "Preventive Medicine", desc: "Immunizing societies and ending disease outbreaks systematically.", icon: ShieldCheck },
            { title: "Rural Health Outreach", desc: "Active diagnostic camps in remote villages and health training.", icon: Hospital },
            { title: "Public Health Analytics", desc: "Formulating regional sanitation and nutritional models.", icon: Globe }
        ]
    },

    "ent": {
        title: "Oto-Rhino-Laryngology (ENT)",
        tagline: "Surgical and Medical Excellence in Ear, Nose & Throat",
        description: "Provides comprehensive medical and surgical management for disorders of the ear, nose, throat, and related structures of the head and neck, including hearing and speech restoration.",
        heroImage: "/carousel-2.png",
        badge: "Sensory & Speech Restoration",
        colorTheme: {
            primary: "from-cyan-950 via-slate-900 to-blue-950",
            accent: "text-cyan-400 border-cyan-500/30",
            badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
            button: "from-cyan-600 to-blue-600 shadow-cyan-600/30 hover:shadow-cyan-600/50",
            alertBg: "bg-cyan-50 border-cyan-100",
            alertText: "text-cyan-900",
            alertIcon: "text-cyan-600",
            glow: "hover:shadow-[0_20px_45px_rgba(6,182,212,0.12)] hover:border-cyan-200",
            cardBg: "from-cyan-50 to-cyan-100/50",
            iconColor: "text-cyan-600",
            specialText: "text-cyan-700"
        },
        curriculum: [
            { icon: Volume2, title: "Otology", desc: "Diagnosing ear diseases, hearing loss, and performing cochlear implants." },
            { icon: Stethoscope, title: "Rhinology", desc: "Treating complex sinus conditions and performing micro-endoscopic surgeries." },
            { icon: Activity, title: "Laryngology", desc: "Evaluating voice disorders, swallowing anomalies, and vocal cord therapies." },
            { icon: ShieldCheck, title: "Head & Neck Oncology", desc: "Surgical oncology interventions for tumors of the head, neck, and throat." },
            { icon: Baby, title: "Pediatric ENT", desc: "Caring for congenital pediatric airways and pediatric hearing assessments." },
            { icon: Users, title: "Audiology & Speech", desc: "Speech pathology, hearing-aid calibration, and linguistic rehab." }
        ],
        practicals: [
            "Performing otoscopy and clinical tuning fork diagnostic tests",
            "Anterior and posterior rhinoscopy clinical steps",
            "Indirect laryngoscopy drills for vocal cord inspections",
            "Interpreting pure-tone audiology diagnostic charts",
            "Sinus endoscopic diagnostic reading sessions"
        ],
        facilities: [
            { icon: Hospital, title: "ENT Specialized Clinics", desc: "Dedicated OPD suites for detailed diagnosis." },
            { icon: Volume2, title: "Audiology Testing Lab", desc: "Sound-proof rooms for pure-tone and tympanometry checks." },
            { icon: Monitor, title: "Sinus Endoscopy Suite", desc: "HD fiber-optic nasal diagnostic endoscopes." },
            { icon: Database, title: "Micro-Ear Surgery OT", desc: "Modular operating systems for sensory reconstruction." },
            { icon: ShieldCheck, title: "Speech Pathology Wing", desc: "Rehabilitation setups for post-stroke voice deficits." }
        ],
        faculty: [
            { name: "Dr. Vinod Mehta", role: "Professor & HOD", exp: "19+ Years Experience", tags: ["Micro-Ear Surgeon", "ENT Specialist"] },
            { name: "Dr. Shweta Pathak", role: "Associate Professor", exp: "10+ Years Experience", tags: ["Sinus Expert", "Speech Therapist"] }
        ],
        specialTitle: "Micro-Ear & Hearing Aid Clinic",
        specialDesc: "Equipped with state-of-the-art audiological diagnostics, the department coordinates cochlear implant programs and specialized voice rehabilitation therapies.",
        specialList: [
            { text: "Pure-tone audiology sweeps", icon: Volume2 },
            { text: "Endoscopic nasal diagnostics", icon: ShieldCheck },
            { text: "Micro-ear surgery simulations", icon: CheckCircle },
            { text: "Speech evaluation diagnostics", icon: Target }
        ],
        highlights: [
            { icon: Volume2, title: "Micro-Ear Surgery", desc: "High-precision sensory hearing restorations." },
            { icon: Stethoscope, title: "Endoscopic Sinus", desc: "Advanced sinus relief procedures." },
            { icon: Activity, title: "Voice Care Clinics", desc: "Detailed vocal fold diagnostic analysis." },
            { icon: Users, title: "Certified ENT Surgeons", desc: "Academic guides directing diagnostic labs." }
        ],
        slides: [
            { title: "Hearing Restoration", desc: "Advanced cochlear implants and micro-surgical ear repairs.", icon: Volume2 },
            { title: "Endoscopic Sinus Surgery", desc: "Gentle, precise relief from chronic sinus issues.", icon: Stethoscope },
            { title: "Voice & Throat Care", desc: "Professional Swallowing and vocal rehabilitation therapies.", icon: Activity }
        ]
    },

    "general-medicine": {
        title: "General Medicine",
        tagline: "Holistic Diagnostic Care & Therapeutic Excellence",
        description: "Serves as the foundation of hospital care, managing patients with complex, multi-system diseases, infections, chronic conditions, and diagnostic challenges.",
        heroImage: "/pharmacology_overview.png",
        badge: "Comprehensive Inpatient Care",
        colorTheme: {
            primary: "from-blue-950 via-slate-900 to-indigo-950",
            accent: "text-blue-400 border-blue-500/30",
            badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            button: "from-blue-600 to-indigo-600 shadow-blue-600/30 hover:shadow-blue-600/50",
            alertBg: "bg-blue-50 border-blue-100",
            alertText: "text-blue-900",
            alertIcon: "text-blue-600",
            glow: "hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] hover:border-blue-200",
            cardBg: "from-blue-50 to-blue-100/50",
            iconColor: "text-blue-600",
            specialText: "text-blue-700"
        },
        curriculum: [
            { icon: HeartPulse, title: "Infectious Diseases", desc: "Diagnosing viral, bacterial, and tropical epidemics systematically." },
            { icon: Stethoscope, title: "Endocrinology", desc: "Specialist management of diabetes, thyroid, and metabolic imbalances." },
            { icon: Activity, title: "Cardiology Basics", desc: "Hypertension diagnostics, coronary evaluations, and medical care." },
            { icon: ShieldCheck, title: "Nephrology Care", desc: "Medical management of chronic kidney disease and electrolyte balances." },
            { icon: Layers, title: "Rheumatology", desc: "Caring for rheumatoid arthritis and autoimmune inflammatory diseases." },
            { icon: Users, title: "Geriatric Medicine", desc: "Focused primary care for physical and cognitive elderly concerns." }
        ],
        practicals: [
            "Detailed clinical examination of vital multi-organ systems",
            "Electrocardiogram (ECG) diagnostic interpretations",
            "Pleural fluid, peritoneal fluid, and lumbar puncture drills",
            "Arterial Blood Gas (ABG) analysis steps",
            "Intensive Care Unit (ICU) bedside patient audits"
        ],
        facilities: [
            { icon: Hospital, title: "General Outpatient Clinics", desc: "Spacious diagnostic halls serving daily outpatients." },
            { icon: Activity, title: "Medical Intensive Care Unit", desc: "Multi-parameter ICU beds for life support." },
            { icon: Monitor, title: "Cardiac Stress Lab", desc: "Treadmill testing, Echo, and ECG scanning suites." },
            { icon: Database, title: "Diabetic Care Center", desc: "Focused clinical counseling and insulin training." },
            { icon: ShieldCheck, title: "Dialysis Support Wing", desc: "Clean, sterilized vascular filtration setups." }
        ],
        faculty: [
            { name: "Dr. Rajiv Nayan", role: "Professor & HOD", exp: "22+ Years Experience", tags: ["Diagnostic Expert", "Critical Care HOD"] },
            { name: "Dr. P. K. Jha", role: "Associate Professor", exp: "15+ Years Experience", tags: ["Endocrinologist", "Infection Specialist"] }
        ],
        specialTitle: "Metabolic & Diabetes Care Center",
        specialDesc: "The department drives comprehensive metabolic screenings and diet charts, ensuring chronic diabetes is managed seamlessly at all clinical stages.",
        specialList: [
            { text: "ECG diagnostic assessments", icon: Activity },
            { text: "Fluid aspiration procedures", icon: ShieldCheck },
            { text: "ABG respiratory diagnostics", icon: CheckCircle },
            { text: "Bedside ICU patient care", icon: Target }
        ],
        highlights: [
            { icon: HeartPulse, title: "24/7 Intensive Care", desc: "Excellent post-surgery and emergency ICUs." },
            { icon: Stethoscope, title: "Diagnostic Excellence", desc: "Expert multidisciplinary diagnostic panels." },
            { icon: Activity, title: "Chronic Care Centers", desc: "Successful therapies for long-term health." },
            { icon: Users, title: "Renowned Medical Gurus", desc: "Specialist academic HODs directing wards." }
        ],
        slides: [
            { title: "Critical Care Medicine", desc: "Constant ICU organ-support monitoring for acute emergencies.", icon: HeartPulse },
            { title: "Metabolic Management", desc: "Advanced therapies for diabetes and thyroid hormone issues.", icon: Stethoscope },
            { title: "Diagnostic Mysteries", desc: "Solving complex multi-system clinical diagnostic cases.", icon: Activity }
        ]
    },

    "ophthalmology": {
        title: "Ophthalmology",
        tagline: "Restoring Clear Vision & Advanced Eye Care",
        description: "Dedicated to the medical and surgical treatment of eye conditions, providing advanced micro-surgical treatment for cataracts, glaucoma, and refractive errors.",
        heroImage: "/pathology_hero.png",
        badge: "Precision Eye Surgery",
        colorTheme: {
            primary: "from-blue-950 via-[#0c1a30] to-slate-950",
            accent: "text-blue-400 border-blue-500/30",
            badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            button: "from-blue-600 to-sky-600 shadow-blue-600/30 hover:shadow-blue-600/50",
            alertBg: "bg-blue-50 border-blue-100",
            alertText: "text-blue-900",
            alertIcon: "text-blue-600",
            glow: "hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:border-blue-200",
            cardBg: "from-blue-50 to-blue-100/50",
            iconColor: "text-blue-600",
            specialText: "text-blue-700"
        },
        curriculum: [
            { icon: Eye, title: "Cataract Surgery", desc: "Learning sutureless high-precision micro-phacoemulsification." },
            { icon: ShieldCheck, title: "Glaucoma Clinic", desc: "Controlling intraocular pressure and protecting optic nerves." },
            { icon: Target, title: "Retinal Diagnostics", desc: "Diabetic retinopathy screens and medical laser treatments." },
            { icon: Activity, title: "Refractive Surgery", desc: "Innovative lasik and refractive vision restorations." },
            { icon: Baby, title: "Pediatric Eye Care", desc: "Treating childhood squints and pediatric vision impairments." },
            { icon: Layers, title: "Corneal Diseases", desc: "Diagnosing corneal scarring and keratoplasty procedures." }
        ],
        practicals: [
            "Performing slit-lamp bio-microscopy diagnostics",
            "Direct and indirect ophthalmoscopy procedures",
            "Computerized visual acuity and refraction calibrations",
            "Tonometry drills (measuring eye pressure)",
            "Diagnostic B-scan eye ultrasound screenings"
        ],
        facilities: [
            { icon: Hospital, title: "Comprehensive Eye OPD", desc: "Spacious consulting rooms with refraction blocks." },
            { icon: Eye, title: "Phacoemulsification OT", desc: "Modular micro-surgery suites with HD microscopes." },
            { icon: Monitor, title: "Computer Refraction Lab", desc: "Automated vision refraction systems." },
            { icon: Database, title: "Retinal Laser Suite", desc: "HD fundus cameras and double-frequency YAG lasers." },
            { icon: ShieldCheck, title: "Visual Aids center", desc: "Low-vision screening and optical aids." }
        ],
        faculty: [
            { name: "Dr. S. K. Gupta", role: "Professor & HOD", exp: "18+ Years Experience", tags: ["Phaco Surgeon", "Retinal Specialist"] },
            { name: "Dr. Arpana Sahay", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Glaucoma Expert", "Pediatric Eye Lead"] }
        ],
        specialTitle: "Advanced Laser Refractive Center",
        specialDesc: "Features the latest generation of automated laser refractor technology to perform quick and completely painless sutureless vision restorations.",
        specialList: [
            { text: "Slit-lamp ocular checks", icon: Eye },
            { text: "Fundus retinal scanning", icon: ShieldCheck },
            { text: "Micro-phaco eye surgeries", icon: CheckCircle },
            { text: "Painless refraction tests", icon: Target }
        ],
        highlights: [
            { icon: Eye, title: "Sutureless Phaco", desc: "Painless single-day cataract surgeries." },
            { icon: ShieldCheck, title: "Retinal Lasers", desc: "Protecting vision from diabetic damage." },
            { icon: Activity, title: "Auto-Refraction Labs", desc: "Precise optical power evaluations." },
            { icon: Users, title: "Certified Eye HODs", desc: "Instructors available for clinical diagnostic guides." }
        ],
        slides: [
            { title: "Sutureless Cataract Surgery", desc: "Full visual clarity restored inside a single day.", icon: Eye },
            { title: "Glaucoma Protections", desc: "Targeted control of intraocular pressure to guard nerves.", icon: ShieldCheck },
            { title: "Pediatric Squint Correction", desc: "Early intervention to help childhood squints.", icon: Baby }
        ]
    },

    "paediatrics": {
        title: "Paediatrics",
        tagline: "Compassionate Care for Newborns, Children & Adolescents",
        description: "Provides comprehensive healthcare for infants, children, and adolescents, specializing in pediatric emergencies, neonatology intensive care, and childhood vaccine models.",
        heroImage: "/carousel-1.png",
        badge: "Child Health Excellence",
        colorTheme: {
            primary: "from-amber-950 via-slate-900 to-amber-950",
            accent: "text-amber-400 border-amber-500/30",
            badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
            button: "from-amber-600 to-orange-600 shadow-amber-600/30 hover:shadow-amber-600/50",
            alertBg: "bg-amber-50 border-amber-100",
            alertText: "text-amber-900",
            alertIcon: "text-amber-600",
            glow: "hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)] hover:border-amber-200",
            cardBg: "from-amber-50 to-amber-100/50",
            iconColor: "text-amber-600",
            specialText: "text-amber-700"
        },
        curriculum: [
            { icon: Baby, title: "Neonatology", desc: "Advanced level-3 intensive nursing of preterm babies." },
            { icon: Stethoscope, title: "Pediatric ICU (PICU)", desc: "Resuscitating and treating acute severe pediatric disorders." },
            { icon: Activity, title: "Growth & Nutrition", desc: "Detailed developmental chart monitoring and nutritional health." },
            { icon: ShieldCheck, title: "Child Vaccination", desc: "Managing national and pain-free immunization guidelines." },
            { icon: Heart, title: "Infant Sickness Care", desc: "Treating childhood pneumonia, asthma, and diarrheal illnesses." },
            { icon: Users, title: "Adolescent Health", desc: "Caring for growth delays and teenage psychological developments." }
        ],
        practicals: [
            "Demonstration of neonatal resuscitation procedures",
            "Growth chart mapping and pediatric nutritional profiling",
            "Calculating precise pediatric pharmacological drug doses",
            "Clinical evaluation of child developmental milestones",
            "Pediatric intravenous (IV) cannulation steps"
        ],
        facilities: [
            { icon: Hospital, title: "Advanced Level-3 NICU", desc: "Preterm incubators, warmers, and baby ventilators." },
            { icon: Stethoscope, title: "Pediatric ICU Wing", desc: "PICU setups for active critical child management." },
            { icon: Monitor, title: "Immunization Unit", desc: "Certified, cold-chain protected childhood vaccine center." },
            { icon: Database, title: "Play Therapy Clinic", desc: "Friendly setups to reduce hospital anxiety in children." },
            { icon: ShieldCheck, title: "Baby Monitoring Stations", desc: "Precision vital monitors for newborn babies." }
        ],
        faculty: [
            { name: "Dr. M. P. Singh", role: "Professor & HOD", exp: "20+ Years Experience", tags: ["Neonatologist", "NICU Specialist"] },
            { name: "Dr. Sunita Roy", role: "Associate Professor", exp: "12+ Years Experience", tags: ["Growth Expert", "Pediatrician"] }
        ],
        specialTitle: "Premature & Neonatal Support NICU",
        specialDesc: "Features modern incubators and precision respiratory ventilators, delivering 24/7 intensive monitoring for low birthweight babies.",
        specialList: [
            { text: "Neonatal resuscitation runs", icon: Baby },
            { text: "Growth developmental profiles", icon: ShieldCheck },
            { text: "Pain-free vaccine delivery", icon: CheckCircle },
            { text: "Pediatric drug computations", icon: Target }
        ],
        highlights: [
            { icon: Baby, title: "Advanced NICU Units", desc: "Excellent preterm survival rates." },
            { icon: ShieldCheck, title: "Safe Child Vaccines", desc: "Optimal vaccine safety schedules." },
            { icon: Stethoscope, title: "Acute PICU resuscitations", desc: "Critical pediatric emergency care." },
            { icon: Users, title: "Expert Pediatricians", desc: "Dedicated child specialists available 24/7." }
        ],
        slides: [
            { title: "Preterm Neonatal Care", desc: "Giving vulnerable newborn babies a safe, healthy start.", icon: Baby },
            { title: "Childhood Vaccinations", desc: "Pain-free clinical immunization shields for growing children.", icon: ShieldCheck },
            { title: "Pediatric ICU Support", desc: "Dedicated and compassionate critical care round-the-clock.", icon: Stethoscope }
        ]
    },

    "obstetrics-gynecology": {
        title: "Obstetrics & Gynecology",
        tagline: "Comprehensive Health for Women & Safe Maternity Care",
        description: "Provides comprehensive diagnostic and surgical care for women's reproductive health, prenatal/pregnancy monitoring, labor delivery, and postnatal support.",
        heroImage: "/carousel-3.png",
        badge: "Women's Health & Maternity",
        colorTheme: {
            primary: "from-rose-950 via-slate-900 to-rose-950",
            accent: "text-rose-400 border-rose-500/30",
            badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
            button: "from-rose-600 to-purple-600 shadow-rose-600/30 hover:shadow-rose-600/50",
            alertBg: "bg-rose-50 border-rose-100",
            alertText: "text-rose-900",
            alertIcon: "text-rose-600",
            glow: "hover:shadow-[0_20px_45px_rgba(244,63,94,0.12)] hover:border-rose-200",
            cardBg: "from-rose-50 to-rose-100/50",
            iconColor: "text-rose-600",
            specialText: "text-rose-700"
        },
        curriculum: [
            { icon: Heart, title: "Antenatal Care", desc: "Pre-pregnancy counselling and tracking gestational safety milestones." },
            { icon: ShieldCheck, title: "High-Risk Obstetrics", desc: "Caring for severe complications like pre-eclampsia and gestational diabetes." },
            { icon: Stethoscope, title: "Gynaec Laparoscopy", desc: "Keyhole laparoscopic hysterectomies and cyst removals." },
            { icon: Activity, title: "Infertility Clinic", desc: "Advanced diagnostics and metabolic therapies for PCOS." },
            { icon: Baby, title: "Postnatal Support", desc: "Lactation guidance, neonatal bonding, and mother wellness." },
            { icon: Layers, title: "Onco-Gynaecology", desc: "Preventive screenings, pap smears, and clinical cervical cancer checks." }
        ],
        practicals: [
            "Demonstration of clinical antenatal obstetric examinations",
            "Simulating normal physiological labor delivery mechanisms",
            "Reading fetal ultrasound scans and amniotic indices",
            "Bedside cardiotocography (CTG) fetal monitoring steps",
            "Handling obstetric clinical emergency drills"
        ],
        facilities: [
            { icon: Hospital, title: "Modern Labor Suites", desc: "Hygienic, comfortable delivery and labor rooms." },
            { icon: ShieldCheck, title: "High-Risk Pregnancy OPD", desc: "Advanced pregnancy complications screening units." },
            { icon: Monitor, title: "Laparoscopic Gynaec OT", desc: "State-of-the-art keyhole surgical monitors." },
            { icon: Database, title: "Fetal Medicine Station", desc: "3D/4D ultrasound fetal health scanning." },
            { icon: Baby, title: "Postnatal Recovery Bays", desc: "Spacious mother-child care recovery rooms." }
        ],
        faculty: [
            { name: "Dr. Renu Singh", role: "Professor & HOD", exp: "19+ Years Experience", tags: ["Maternity Expert", "Laparoscopy Lead"] },
            { name: "Dr. Pooja Sinha", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Infertility Specialist", "High-Risk OB Lead"] }
        ],
        specialTitle: "High-Risk Pregnancy & Fetal Monitoring",
        specialDesc: "Equipped with advanced CTG monitoring, our maternity units coordinate rapid responses for complicated labor states, ensuring maternal-fetal safety.",
        specialList: [
            { text: "Antenatal diagnosis runs", icon: Heart },
            { text: "Normal delivery simulators", icon: ShieldCheck },
            { text: "Laparoscopic surgery reviews", icon: CheckCircle },
            { text: "CTG fetal health tracking", icon: Target }
        ],
        highlights: [
            { icon: Heart, title: "Safe Deliveries", desc: "Excellent tracking records in labor emergencies." },
            { icon: ShieldCheck, title: "Keyhole Laparoscopy", desc: "Quick recovery gynaecological surgeries." },
            { icon: Stethoscope, title: "Painless Delivery", desc: "Modern epidural options for pain-free labor." },
            { icon: Users, title: "Renowned Obstetricians", desc: "Senior MD doctors active in clinics." }
        ],
        slides: [
            { title: "Safe Maternity", desc: "Compassionate, high-standard clinical care for mother and baby.", icon: Heart },
            { title: "Laparoscopic Gynecology", desc: "Minimal-access surgeries ensuring rapid physical recoveries.", icon: Stethoscope },
            { title: "Infertility & PCOS Care", desc: "Comprehensive hormonal and reproductive recovery programs.", icon: Activity }
        ]
    },

    "psychiatry": {
        title: "Psychiatry",
        tagline: "Empathetic Mental Healthcare & Cognitive Wellness",
        description: "Addresses the full spectrum of mental health disorders, substance abuse, and cognitive conditions, combining pharmacological management with advanced psychotherapy.",
        heroImage: "/pharmacology_overview.png",
        badge: "Mental Health Advocacy",
        colorTheme: {
            primary: "from-indigo-950 via-slate-900 to-indigo-950",
            accent: "text-indigo-400 border-indigo-500/30",
            badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
            button: "from-indigo-600 to-violet-600 shadow-indigo-600/30 hover:shadow-indigo-600/50",
            alertBg: "bg-indigo-50 border-indigo-100",
            alertText: "text-indigo-900",
            alertIcon: "text-indigo-600",
            glow: "hover:shadow-[0_20px_45px_rgba(79,70,229,0.12)] hover:border-indigo-200",
            cardBg: "from-indigo-50 to-indigo-100/50",
            iconColor: "text-indigo-600",
            specialText: "text-indigo-700"
        },
        curriculum: [
            { icon: Brain, title: "General Psychiatry", desc: "Clinical profiling of depression, anxiety, and bipolar states." },
            { icon: Baby, title: "Child & Teen Behavioral", desc: "Understanding ADHD, autism spectrums, and childhood learning deficits." },
            { icon: ShieldCheck, title: "Addiction Medicine", desc: "Comprehensive substance withdrawal and de-addiction programs." },
            { icon: Clock, title: "Geriatric Psychiatry", desc: "Evaluating dementia, Alzheimer's, and late-onset mood anomalies." },
            { icon: Activity, title: "Neuropsychiatry", desc: "Exploring psychiatric features of organic neuro-diseases." },
            { icon: Users, title: "Psychotherapy & CBT", desc: "Cognitive Behavioral Therapy and patient counseling modules." }
        ],
        practicals: [
            "Performing structured Mental State Examinations (MSE)",
            "Systematic clinical history taking in psychiatric patients",
            "Scoring and evaluating standard diagnostic psychiatric scales",
            "Role-plays for cognitive counseling and patient empathy",
            "Analyzing clinical Electroencephalogram (EEG) tracings"
        ],
        facilities: [
            { icon: Hospital, title: "Private Counseling Chambers", desc: "Quiet, calm clinical spaces for confidential counseling." },
            { icon: ShieldCheck, title: "Addiction Rehab Clinic", desc: "Focused de-addiction and detox therapy units." },
            { icon: Monitor, title: "Neuro-Diagnostic EEG Lab", desc: "HD electroencephalography brain wave recorders." },
            { icon: Database, title: "Child Guidance Center", desc: "Focused counseling for developmental learning issues." },
            { icon: Users, title: "Cognitive Therapy Halls", desc: "Spacious group-therapy and wellness halls." }
        ],
        faculty: [
            { name: "Dr. S. K. Mitra", role: "Professor & HOD", exp: "18+ Years Experience", tags: ["Neuropsychiatrist", "Addiction Expert"] },
            { name: "Dr. Neha Sharma", role: "Associate Professor", exp: "9+ Years Experience", tags: ["Child Psychologist", "CBT Specialist"] }
        ],
        specialTitle: "De-Addiction & Behavioral Counseling",
        specialDesc: "Our center integrates psychiatry and psychotherapy, guiding patients out of severe substance dependencies with absolute care and confidentiality.",
        specialList: [
            { text: "Structured MSE diagnostics", icon: Brain },
            { text: "Psychiatric history templates", icon: ShieldCheck },
            { text: "EEG wave analysis systems", icon: CheckCircle },
            { text: "Cognitive therapy protocols", icon: Target }
        ],
        highlights: [
            { icon: Brain, title: "Private Counseling", desc: "100% confidential clinical therapy chambers." },
            { icon: ShieldCheck, title: "Focused De-Addiction", desc: "Excellent rates of patient dependency recovery." },
            { icon: Baby, title: "Child Behavioral guidance", desc: "Dedicated plans for early cognitive growth." },
            { icon: Users, title: "Experienced Counselors", desc: "Dedicated team of active psychiatrists." }
        ],
        slides: [
            { title: "Empathetic Psychotherapy", desc: "Restoring cognitive balance through expert clinical counseling.", icon: Brain },
            { title: "Substance De-Addiction", desc: "Integrated medical and psychological de-addiction programs.", icon: ShieldCheck },
            { title: "Child Behavioral Clinic", desc: "Early intervention plans for childhood developmental deficits.", icon: Baby }
        ]
    },

    "radiology": {
        title: "Radiology",
        tagline: "Advanced Medical Imaging & Precise Diagnostics",
        description: "The department serves as the hospital's diagnostic compass, using cutting-edge X-Ray, CT-Scan, MRI, and Ultrasound imaging to visualize anatomical structures.",
        heroImage: "/pathology_hero.png",
        badge: "Imaging & Diagnostics",
        colorTheme: {
            primary: "from-[#030712] via-slate-950 to-[#030712]",
            accent: "text-indigo-400 border-indigo-500/30",
            badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
            button: "from-indigo-600 to-violet-600 shadow-indigo-600/30 hover:shadow-indigo-600/50",
            alertBg: "bg-indigo-50 border-indigo-100",
            alertText: "text-indigo-900",
            alertIcon: "text-indigo-600",
            glow: "hover:shadow-[0_20px_45px_rgba(99,102,241,0.12)] hover:border-indigo-200",
            cardBg: "from-indigo-50 to-indigo-100/50",
            iconColor: "text-indigo-600",
            specialText: "text-indigo-700"
        },
        curriculum: [
            { icon: Microscope, title: "Diagnostic Radiology", desc: "Reading high-definition digital musculoskeletal X-Rays." },
            { icon: Activity, title: "Ultrasonography", desc: "Understanding Doppler blood flow and 3D/4D fetal scans." },
            { icon: Stethoscope, title: "Computed Tomography (CT)", desc: "Analyzing multi-slice head, abdominal, and chest CT scans." },
            { icon: ShieldCheck, title: "Magnetic Resonance (MRI)", desc: "Soft-tissue diagnostic imaging, joint ligaments, and brain scans." },
            { icon: Target, title: "Interventional Radiology", desc: "Minimally invasive therapies guided by live imaging." },
            { icon: Award, title: "Radiation Safety", desc: "Enforcing safe low-dose radiological protocols (ALARA)." }
        ],
        practicals: [
            "Identifying diagnostic anatomical landmarks on digital X-Rays",
            "Observing live abdominal and pelvic ultrasound scans",
            "Analyzing multi-slice transverse slices of CT and MRI scans",
            "Calibrating correct radiological patient projection settings",
            "Practicing low-dose shielding and radiation protection safety"
        ],
        facilities: [
            { icon: Hospital, title: "Multislice CT Scanner Suite", desc: "High-speed multi-row diagnostic scanning systems." },
            { icon: Microscope, title: "High-Field MRI Unit", desc: "HD soft-tissue imaging and joint evaluations." },
            { icon: Monitor, title: "Digital X-Ray Rooms", desc: "Shielded, high-frequency low-dose X-Ray bays." },
            { icon: Database, title: "Color Doppler USG Clinic", desc: "Advanced diagnostic fetal and vascular doppler scanners." },
            { icon: ShieldCheck, title: "PACS Network Servers", desc: "Instant clinical imaging distribution systems." }
        ],
        faculty: [
            { name: "Dr. A. P. Sinha", role: "Professor & HOD", exp: "21+ Years Experience", tags: ["MRI Specialist", "Interventional Lead"] },
            { name: "Dr. Kiran Mishra", role: "Associate Professor", exp: "13+ Years Experience", tags: ["Fetal Imaging Expert", "CT Specialist"] }
        ],
        specialTitle: "High-Definition 3D/4D Ultrasound",
        specialDesc: "Equipped with high-resolution doppler imaging, our scanning labs support precise fetal organ evaluations and rapid vascular screenings.",
        specialList: [
            { text: "Anatomical X-ray evaluations", icon: Microscope },
            { text: "Bedside ultrasound observations", icon: ShieldCheck },
            { text: "Cross-sectional CT/MRI audits", icon: CheckCircle },
            { text: "ALARA radiation protection", icon: Target }
        ],
        highlights: [
            { icon: Microscope, title: "High-Field MRI Systems", desc: "Highly precise soft tissue and joint scans." },
            { icon: ShieldCheck, title: "Fast-Scan CT Scanners", desc: "Safe, rapid trauma computed tomographies." },
            { icon: Monitor, title: "Low-Dose Digital X-Ray", desc: "Ensuring minimal exposure for patient safety." },
            { icon: Users, title: "Radiological Pioneers", desc: "HOD doctors available for clinical imaging audits." }
        ],
        slides: [
            { title: "Advanced CT & MRI Diagnostics", desc: "Highly detailed scans for absolute diagnostic precision.", icon: Microscope },
            { title: "Fetal Doppler Ultrasound", desc: "HD 3D/4D scans to monitor pregnancy development.", icon: Activity },
            { title: "Interventional Imaging", desc: "Precision vascular therapies guided by digital imaging.", icon: Target }
        ]
    },

    "microbiology": {
        title: "Microbiology",
        tagline: "Diagnostic Infectious Disease Analysis & Infection Control",
        description: "The department focuses on identifying bacterial, viral, fungal, and parasitic infections. It supports hospital safety through diagnostic cultures and PCR testing.",
        heroImage: "/biochemistry_lab.png",
        badge: "Infectious Disease Diagnostics",
        colorTheme: {
            primary: "from-purple-950 via-[#1e113a] to-slate-950",
            accent: "text-purple-400 border-purple-500/30",
            badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
            button: "from-purple-600 to-pink-600 shadow-purple-600/30 hover:shadow-purple-600/50",
            alertBg: "bg-purple-50 border-purple-100",
            alertText: "text-purple-900",
            alertIcon: "text-purple-600",
            glow: "hover:shadow-[0_20px_45px_rgba(147,51,234,0.12)] hover:border-purple-200",
            cardBg: "from-purple-50 to-purple-100/50",
            iconColor: "text-purple-600",
            specialText: "text-purple-700"
        },
        curriculum: [
            { icon: Microscope, title: "Bacteriology", desc: "Microscopic isolation and identification of disease-causing bacteria." },
            { icon: FlaskConical, title: "Virology", desc: "Viral PCR detection, ELISA assays, and immunodiagnostic markers." },
            { icon: Atom, title: "Mycology", desc: "Culture and identification of clinically significant fungal organisms." },
            { icon: ShieldCheck, title: "Parasitology", desc: "Microscopic staging of malaria, amoebae, and tissue parasites." },
            { icon: Stethoscope, title: "Clinical Immunology", desc: "Serum autoimmune profiling, antibody testing, and antigen checks." },
            { icon: Users, title: "Infection Control HOD", desc: "Sterilization standards, hospital waste care, and disinfection audits." }
        ],
        practicals: [
            "Gram-staining and acid-fast staining bacterial procedures",
            "Bacterial culture inoculations on blood and nutrient agar plates",
            "Antibiotic Susceptibility Testing (AST) disc diffusions",
            "Diagnostic ELISA and PCR molecular diagnostic drills",
            "Microscopic blood and stool pathogen screening audits"
        ],
        facilities: [
            { icon: Hospital, title: "Diagnostic Bacteriology Lab", desc: "Pathogen diagnostic processing and culture setups." },
            { icon: Microscope, title: "PCR Molecular Suite", desc: "HD thermocyclers for infectious viral DNA diagnostics." },
            { icon: Monitor, title: "Immunodiagnostic Station", desc: "Automated ELISA diagnostic plate readers." },
            { icon: Database, title: "Biosafety Cabinet Room", desc: "Level-2 clinical hoods to isolate pathogens safely." },
            { icon: ShieldCheck, title: "Autoclave & Sterilizer Lab", desc: "Quality audits for surgical sterilization tools." }
        ],
        faculty: [
            { name: "Dr. N. K. Prasad", role: "Professor & HOD", exp: "19+ Years Experience", tags: ["Virology Expert", "Infection Control HOD"] },
            { name: "Dr. Swati Kumari", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Bacteriology Expert", "PCR Specialist"] }
        ],
        specialTitle: "Molecular Diagnostics & PCR center",
        specialDesc: "Equipped with high-sensitivity PCR setups, our department delivers rapid molecular confirmations for acute respiratory and blood-borne viral pathogens.",
        specialList: [
            { text: "Gram-staining diagnosis runs", icon: Microscope },
            { text: "Agar culture pathogen screens", icon: ShieldCheck },
            { text: "Antibiotic susceptibility charts", icon: CheckCircle },
            { text: "High-grade ELISA micro-assays", icon: Target }
        ],
        highlights: [
            { icon: Microscope, title: "Advanced PCR Suites", desc: "High-speed molecular viral diagnostics." },
            { icon: ShieldCheck, title: "Antibiotic Profiling", desc: "Expert AST guidance for targeted therapies." },
            { icon: Stethoscope, title: "Hospital Clean Audits", desc: "Directing infection control standards." },
            { icon: Users, title: "Expert Microbiologists", desc: "Academic guides available in clinical labs." }
        ],
        slides: [
            { title: "Pathogen Cultures", desc: "Precise microscopic identification of clinical infectious threats.", icon: Microscope },
            { title: "Molecular PCR Scans", desc: "High-speed diagnostic sweeps for acute viral infections.", icon: FlaskConical },
            { title: "Hospital Bio-Safety", desc: "Sterilizing operational theatres and ensuring patient safety.", icon: ShieldCheck }
        ]
    },

    "dermatology": {
        title: "Dermatology, Venereology & Leprosy",
        tagline: "Clinical Skin Care, Laser Surgery & Wellness",
        description: "Provides expert clinical care for complex skin conditions, hair and nail disorders, leprosy, and reproductive tract infections, using advanced medical treatments and cosmetic lasers.",
        heroImage: "/carousel-2.png",
        badge: "Skin, Hair & Nail Care",
        colorTheme: {
            primary: "from-amber-950 via-[#2e1d12] to-slate-950",
            accent: "text-amber-400 border-amber-500/30",
            badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
            button: "from-amber-600 to-amber-700 shadow-amber-600/30 hover:shadow-amber-600/50",
            alertBg: "bg-amber-50 border-amber-100",
            alertText: "text-amber-900",
            alertIcon: "text-amber-600",
            glow: "hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)] hover:border-amber-200",
            cardBg: "from-amber-50 to-amber-100/50",
            iconColor: "text-amber-600",
            specialText: "text-amber-700"
        },
        curriculum: [
            { icon: Sparkles, title: "Clinical Dermatology", desc: "Managing chronic eczema, psoriasis, acne, and immune skin lesions." },
            { icon: Stethoscope, title: "Cosmetic Dermato-Surgery", desc: "Laser resurfacing, microdermabrasion, and minor skin grafting." },
            { icon: Activity, title: "Trichology & Onychology", desc: "Treating hair-loss conditions and nail plate deformities surgically." },
            { icon: ShieldCheck, title: "Venereology", desc: "Diagnosing and managing sexually transmitted reproductive infections." },
            { icon: Award, title: "Leprosy Care", desc: "Multi-drug chemotherapy regimens and peripheral nerve rehabilitation." },
            { icon: Layers, title: "Phototherapy", desc: "Applying clinical UV light exposure for vitiligo and lesions." }
        ],
        practicals: [
            "Performing diagnostic skin scrapings and fungal KOH tests",
            "Observing clinical laser dermatology surgery steps",
            "Chemical peeling and dermato-cosmetic calibration drills",
            "Practicing clean clinical skin biopsy extractions",
            "Calibrating target phototherapy UV dosing guidelines"
        ],
        facilities: [
            { icon: Hospital, title: "Dermatology Outpatient", desc: "Spacious consulting rooms with minor surgical blocks." },
            { icon: Sparkles, title: "Laser Surgery center", desc: "High-precision cosmetic laser resurfacing units." },
            { icon: Monitor, title: "Focused Phototherapy Station", desc: "Calibrated narrow-band UVB phototherapy cabins." },
            { icon: Database, title: "Minor Operation Theatre", desc: "Sterile surgical bays for skin and nail biopsies." },
            { icon: ShieldCheck, title: "Trichology Scanning Lab", desc: "Digital dermoscopes for automated hair follicle assessments." }
        ],
        faculty: [
            { name: "Dr. S. S. Roy", role: "Professor & HOD", exp: "16+ Years Experience", tags: ["Laser Surgeon", "Skin Specialist"] },
            { name: "Dr. Monika Sinha", role: "Associate Professor", exp: "10+ Years Experience", tags: ["Cosmetologist", "Leprosy Care Expert"] }
        ],
        specialTitle: "Cosmetic Dermato-Surgery & Laser Center",
        specialDesc: "Equipped with advanced laser therapy setups, our cosmetic center delivers painless, sutureless scar revisions and skin restorations.",
        specialList: [
            { text: "KOH fungal diagnostics", icon: Sparkles },
            { text: "Laser resurfacing drills", icon: ShieldCheck },
            { text: "Precision skin biopsy steps", icon: CheckCircle },
            { text: "Phototherapy UV safety rules", icon: Target }
        ],
        highlights: [
            { icon: Sparkles, title: "Cosmetic Lasers", desc: "State-of-the-art scar and skin revision work." },
            { icon: ShieldCheck, title: "Sutureless Biopsies", desc: "Clean, painless tissue screening procedures." },
            { icon: Stethoscope, title: "Focused Phototherapy", desc: "Successful target vitiligo therapies." },
            { icon: Users, title: "Expert Dermatologists", desc: "Academic MD instructors active in diagnostic clinics." }
        ],
        slides: [
            { title: "Advanced Laser Resurfacing", desc: "Clear, healthy skin through modern cosmetic laser systems.", icon: Sparkles },
            { title: "Clinical Skin Therapies", desc: "Long-term relief from eczema, dermatitis, and severe psoriasis.", icon: Stethoscope },
            { title: "Trichology & Hair Growth", desc: "Specialized clinical options for hair loss and follicle health.", icon: Activity }
        ]
    },

    "dentistry": {
        title: "Dentistry",
        tagline: "Advanced Dental Care, Maxillofacial Surgery & Aesthetics",
        description: "Provides complete oral healthcare, from routine root canal procedures and implants to advanced reconstructive jaw trauma surgeries.",
        heroImage: "/carousel-1.png",
        badge: "Dental & Oral Health",
        colorTheme: {
            primary: "from-teal-950 via-[#072421] to-slate-950",
            accent: "text-teal-400 border-teal-500/30",
            badge: "bg-teal-500/20 text-teal-300 border-teal-500/30",
            button: "from-teal-600 to-emerald-600 shadow-teal-600/30 hover:shadow-teal-600/50",
            alertBg: "bg-teal-50 border-teal-100",
            alertText: "text-teal-900",
            alertIcon: "text-teal-600",
            glow: "hover:shadow-[0_20px_45px_rgba(20,184,166,0.12)] hover:border-teal-200",
            cardBg: "from-teal-50 to-teal-100/50",
            iconColor: "text-teal-600",
            specialText: "text-teal-700"
        },
        curriculum: [
            { icon: TeethIcon, title: "Conservative Dentistry", desc: "Managing root canals, dental restorations, and pulp therapy." },
            { icon: Stethoscope, title: "Maxillofacial Surgery", desc: "Surgical jaw trauma corrections, reconstructive work, and wisdom tooth extractions." },
            { icon: Award, title: "Orthodontics", desc: "Aesthetic braces, dental alignments, and orthopedic bite alignments." },
            { icon: ShieldCheck, title: "Prosthodontics", desc: "Crowns, cosmetic veneers, bridges, and complete dental implants." },
            { icon: Baby, title: "Pedodontics", desc: "Compassionate, gentle dental checkups and cavity prevention in children." },
            { icon: Layers, title: "Periodontics", desc: "Gum surgery, plaque removal, and systemic oral disease prevention." }
        ],
        practicals: [
            "Cavity preparation on tooth plaster casts",
            "Observing root canal and wisdom tooth extractions",
            "Reading digital dental X-Rays (RVGs)",
            "Demonstrating dental braces alignment steps",
            "Oral screening diagnostics for lesions and anomalies"
        ],
        facilities: [
            { icon: Hospital, title: "Electronic Dental Chairs", desc: "Spacious diagnostic setups with adjustable patient control." },
            { icon: Monitor, title: "Digital Dental RVG X-Ray", desc: "High-speed, low-dose dental imaging sensor suites." },
            { icon: ShieldCheck, title: "Sterile Autoclave Lab", desc: "Advanced dental tool sterilization units." },
            { icon: TeethIcon, title: "Implants Micro-Surgery OT", desc: "Modular surgeries for permanent tooth replacement." },
            { icon: Database, title: "Prosthetic Casting Lab", desc: "Precise custom crown and denture modeling." }
        ],
        faculty: [
            { name: "Dr. A. K. Sen", role: "Professor & HOD", exp: "17+ Years Experience", tags: ["Maxillofacial Surgeon", "Oral Health Expert"] },
            { name: "Dr. Ritu Kumari", role: "Associate Professor", exp: "11+ Years Experience", tags: ["Endodontist", "Implant Specialist"] }
        ],
        specialTitle: "Dental Implant & Aesthetic smile clinic",
        specialDesc: "Equipped with modern dental casting labs, our clinic coordinates high-grade dental implant restorations and invisible orthodontic alignments.",
        specialList: [
            { text: "Tooth casting simulations", icon: TeethIcon },
            { text: "Wisdom teeth extraction steps", icon: ShieldCheck },
            { text: "Oral cancer screen tests", icon: CheckCircle },
            { text: "Low-dose dental scan rules", icon: Target }
        ],
        highlights: [
            { icon: TeethIcon, title: "Single-Visit RCTs", desc: "Painless computerized root canal treatments." },
            { icon: ShieldCheck, title: "Maxillofacial Reconstruction", desc: "Excellent recoveries in complex jaw fractures." },
            { icon: Stethoscope, title: "High-Grade Implants", desc: "Safe, bio-compatible permanent tooth replacements." },
            { icon: Users, title: "Certified Dental Surgeons", desc: "HOD instructors active in oral health clinics." }
        ],
        slides: [
            { title: "Advanced Dental Implants", desc: "Natural-looking, highly durable permanent teeth replacements.", icon: TeethIcon },
            { title: "Aesthetic Braces", desc: "Perfecting teeth alignment using modern invisible braces.", icon: Award },
            { title: "Maxillofacial Trauma Recovery", desc: "Restoring facial structure and bite function post-trauma.", icon: Stethoscope }
        ]
    },

    "anaesthesiology": {
        title: "Anaesthesiology",
        tagline: "Critical Patient Care, Pain Management & Life Support",
        description: "Oversees patient safety, pain management, and vital organ monitoring before, during, and after surgical operations, managing critical care and trauma resuscitations.",
        heroImage: "/pharmacology_overview.png",
        badge: "Surgical Organ Support",
        colorTheme: {
            primary: "from-indigo-950 via-[#121c38] to-slate-950",
            accent: "text-indigo-400 border-indigo-500/30",
            badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
            button: "from-indigo-600 to-blue-600 shadow-indigo-600/30 hover:shadow-indigo-600/50",
            alertBg: "bg-indigo-50 border-indigo-100",
            alertText: "text-indigo-900",
            alertIcon: "text-indigo-600",
            glow: "hover:shadow-[0_20px_45px_rgba(99,102,241,0.12)] hover:border-indigo-200",
            cardBg: "from-indigo-50 to-indigo-100/50",
            iconColor: "text-indigo-600",
            specialText: "text-indigo-700"
        },
        curriculum: [
            { icon: ShieldCheck, title: "General Anaesthesia", desc: "Understanding patient intubation, surgical gas ventilation, and sedation." },
            { icon: Stethoscope, title: "Regional Anaesthesia", desc: "Managing spinal, epidural blocks, and targeted peripheral nerve blocks." },
            { icon: HeartPulse, title: "Critical Care recovery", desc: "Monitoring post-surgical vital organs and ventilator support." },
            { icon: Activity, title: "Pain Management", desc: "Medical block therapies for chronic spinal and joint pain." },
            { icon: Award, title: "Life Support (ACLS)", desc: "Cardiopulmonary resuscitation drills for cardiac and respiratory failures." },
            { icon: Users, title: "Pre-Anaesthetic Check", desc: "Evaluating surgical risks and cardiac statuses pre-operation." }
        ],
        practicals: [
            "Simulating airway intubation and mechanical ventilation",
            "Setting up multi-parameter anaesthesia machines",
            "Identifying surface landmarks for spinal and epidural injections",
            "Advanced Cardiac Life Support (ACLS) simulator drills",
            "Bedside vital organ and arterial line monitoring steps"
        ],
        facilities: [
            { icon: Hospital, title: "Pre-Operative Check OPD", desc: "Pre-anaesthetic patient assessment rooms." },
            { icon: Monitor, title: "Anaesthesia workstations", desc: "Advanced ventilators, vaporizers, and gas monitoring systems." },
            { icon: HeartPulse, title: "Post-Anaesthesia Care (PACU)", desc: "High-vital recovery ICU beds post-surgery." },
            { icon: Database, title: "ACLS Resuscitation Bay", desc: "Defibrillators, crash carts, and cardiac monitors." },
            { icon: ShieldCheck, title: "Chronic Pain Clinic", desc: "Focused ultrasound-guided nerve blocks." }
        ],
        faculty: [
            { name: "Dr. S. K. Das", role: "Professor & HOD", exp: "20+ Years Experience", tags: ["Anaesthetic Expert", "ACLS Director"] },
            { name: "Dr. Meena Kumari", role: "Associate Professor", exp: "12+ Years Experience", tags: ["Pain Specialist", "Critical Care HOD"] }
        ],
        specialTitle: "Critical Care Resuscitation",
        specialDesc: "Our department leads the hospital's trauma and cardiac resuscitations, training students in advanced mechanical ventilation and vascular line access.",
        specialList: [
            { text: "Airway intubation sweeps", icon: ShieldCheck },
            { text: "Epidural surface landmarks", icon: Stethoscope },
            { text: "Cardiac defibrillator drills", icon: CheckCircle },
            { text: "Arterial vital monitoring", icon: Target }
        ],
        highlights: [
            { icon: Monitor, title: "Modern Workstations", desc: "Precision gas ventilation controls." },
            { icon: ShieldCheck, title: "Safe Spinal Blocks", desc: "Sutureless target regional anesthesias." },
            { icon: HeartPulse, title: "24/7 Life Support", desc: "Trained code-blue trauma resuscitation teams." },
            { icon: Users, title: "Anesthesiology HODs", desc: "Active intensivists supervising diagnostic checkups." }
        ],
        slides: [
            { title: "Peri-Operative Safety", desc: "Completely pain-free, secure anesthesia during surgical operations.", icon: ShieldCheck },
            { title: "Vital Organ Intensive Care", desc: "Constant ICU surveillance of cardiac and respiratory indicators.", icon: HeartPulse },
            { title: "Cardiac Life Resuscitations", desc: "ACLS protocols to stabilize severe respiratory/cardiac arrests.", icon: Award }
        ]
    },

    "general-surgery": {
        title: "General Surgery",
        tagline: "Precision Surgical Care & Laparoscopic Innovation",
        description: "Specializes in surgical interventions of the abdomen, thyroid, breast, and soft tissues, pioneering minimally invasive keyhole laparoscopy.",
        heroImage: "/pathology_overview.png",
        badge: "Precision Surgery",
        colorTheme: {
            primary: "from-red-950 via-[#180a0a] to-slate-950",
            accent: "text-red-400 border-red-500/30",
            badge: "bg-red-500/20 text-red-300 border-red-500/30",
            button: "from-red-600 to-red-700 shadow-red-600/30 hover:shadow-red-600/50",
            alertBg: "bg-red-50 border-red-100",
            alertText: "text-red-900",
            alertIcon: "text-red-600",
            glow: "hover:shadow-[0_20px_45px_rgba(239,68,68,0.12)] hover:border-red-200",
            cardBg: "from-red-50 to-red-100/50",
            iconColor: "text-red-600",
            specialText: "text-red-700"
        },
        curriculum: [
            { icon: Stethoscope, title: "Laparoscopic Surgery", desc: "Learning minimally invasive keyhole gallbladder, appendix, and hernia repairs." },
            { icon: FlaskConical, title: "Gastrointestinal Surgery", desc: "Surgical resection of stomach, bowel, and colon diseases." },
            { icon: ShieldCheck, title: "Endocrine Surgery", desc: "Precision thyroidectomies and adrenal gland surgical interventions." },
            { icon: HeartPulse, title: "Breast Oncology", desc: "Comprehensive screening, lump removals, and mastectomy procedures." },
            { icon: Activity, title: "Trauma Wound Surgery", desc: "Rapid clinical care for open injuries and emergency lacerations." },
            { icon: Users, title: "Podiatric Wound Clinic", desc: "Comprehensive vascular diagnostics and diabetic foot ulcer care." }
        ],
        practicals: [
            "Practicing surgical suturing and micro knot-tying simulations",
            "Surgical hand scrubbing and sterile OT dressing protocols",
            "Observing active laparoscopic camera feed manipulations",
            "Bedside clinical abdominal diagnostic palpatory steps",
            "Post-operative wound dressing and suture removal audits"
        ],
        facilities: [
            { icon: Hospital, title: "Modular Surgical OTs", desc: "Clean operating rooms with absolute air filtration." },
            { icon: Monitor, title: "Laparoscopic HD Cameras", desc: "HD monitor and scope systems for keyhole surgeries." },
            { icon: Stethoscope, title: "Surgical OPD Consulting", desc: "Diagnostic OPD suites for surgical planning." },
            { icon: Database, title: "Post-Operative Recovery", desc: "Integrated post-surgery monitoring beds." },
            { icon: ShieldCheck, title: "Surgical Dressing Clinic", desc: "Dedicated clean dressings and wound reviews." }
        ],
        faculty: [
            { name: "Dr. B. P. Singh", role: "Professor & HOD", exp: "21+ Years Experience", tags: ["Laparoscopic HOD", "Surgical Expert"] },
            { name: "Dr. Anupam Ghosh", role: "Associate Professor", exp: "13+ Years Experience", tags: ["Gastro Surgeon", "Onco-Surgical Expert"] }
        ],
        specialTitle: "Minimally Invasive Laparoscopy",
        specialDesc: "Equipped with high-definition laparoscopes, our surgical teams complete sutureless keyhole procedures, allowing patients to recover rapidly.",
        specialList: [
            { text: "Suturing & knotting drills", icon: Stethoscope },
            { text: "Sterile OT prep steps", icon: ShieldCheck },
            { text: "Laparoscopic monitor feeds", icon: CheckCircle },
            { text: "Wound care dressings", icon: Target }
        ],
        highlights: [
            { icon: Stethoscope, title: "Keyhole Surgery", desc: "Advanced sutureless laparoscopic OTs." },
            { icon: ShieldCheck, title: "Rapid Trauma Care", desc: "Emergency suturing available 24/7." },
            { icon: HeartPulse, title: "Diabetic Foot Care", desc: "Dedicated vascular and wound clinics." },
            { icon: Users, title: "Master Gastro Surgeons", desc: "Academic MD instructors active in diagnostic wards." }
        ],
        slides: [
            { title: "Sutureless Laparoscopy", desc: "Rapid recovery gallbladder and appendix repairs via keyhole surgeries.", icon: Stethoscope },
            { title: "Abdominal Gastro Surgery", desc: "Advanced digestive tract resections with high survival rates.", icon: FlaskConical },
            { title: "Emergency Surgical Care", desc: "Rapid, highly professional trauma response during critical wound states.", icon: Activity }
        ]
    }
};

export default function DynamicDepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const [currentSlide, setCurrentSlide] = useState(0);

    const department = departmentData[slug];

    useEffect(() => {
        if (department) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % department.slides.length);
            }, 6000);
            return () => clearInterval(timer);
        }
    }, [department]);

    // Safe fall-back screen in case page is accessed with an invalid department slug
    if (!department) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 py-20 px-6 font-montserrat">
                <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 animate-bounce">
                    <AlertTriangle size={28} />
                </div>
                <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-2">Under Construction</h1>
                <p className="text-slate-500 mb-8 text-center max-w-md text-sm">
                    The department page for "{slug}" is currently being populated or is not in the medical register.
                </p>
                <a 
                    href="/" 
                    className="px-8 py-3 bg-[#0a192f] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-md hover:bg-red-600 transition-colors"
                >
                    Back to Home
                </a>
            </div>
        );
    }

    const theme = department.colorTheme;

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
                        src={department.heroImage}
                        alt={department.title}
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
                            {department.title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                            {department.tagline}
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

            {/* ===== OVERVIEW SECTION ===== */}
            <section id="overview-section" className="py-20 lg:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4 block">About the Department</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Scientific Care & <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">Educational Rigor</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>{department.description}</p>
                                <p>
                                    Through standard textbooks, hands-on clinical laboratories, and bedside patient observation, the department guarantees medical graduates compile essential expertise.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
                        >
                            <Image 
                                src={department.heroImage}
                                alt="Department Details"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CORE AREAS OF STUDY ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3 block">Curriculum Syllabus</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Core Areas of Study</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {department.curriculum.map((area, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -6 }}
                                className={`bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-300 group ${theme.glow} relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 ${theme.iconColor} group-hover:bg-gradient-to-r ${theme.button} group-hover:text-white transition-all shadow-sm`}>
                                    <area.icon size={26} strokeWidth={1.5} />
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
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-teal-800 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-slate-200">
                                <FlaskConical size={12} className="animate-pulse" /> Advanced Practical Training
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: serifFont }}>
                                Practical & Experimental Training
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                The department drives extensive practical protocols, allowing medical students to compile standard diagnostic certifications:
                            </p>
                            <div className="space-y-4">
                                {department.practicals.map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal-200 transition-all cursor-default"
                                    >
                                        <div className={`w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center ${theme.iconColor} shadow-sm group-hover:bg-gradient-to-r ${theme.button} group-hover:text-white transition-all`}>
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
                            <PracticalInfographic type={slug} />
                            
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm text-center">
                                <span className="text-xs text-slate-600 font-semibold leading-relaxed">
                                    Our diagnostic labs strictly enforce high quality standards to assure zero mistakes in patient reports.
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FACILITIES & INFRASTRUCTURE ===== */}
            <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Labs</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Facilities & Infrastructure</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {department.facilities.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:border-teal-200 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 ${theme.iconColor} group-hover:bg-gradient-to-r ${theme.button} group-hover:text-white transition-colors`}>
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
            <section className="py-20 lg:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-2 block">Our Specialists</span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900" style={{ fontFamily: serifFont }}>Faculty & Teaching Approach</h2>
                        <p className="text-slate-500 max-w-3xl mx-auto mt-4 text-base lg:text-lg leading-relaxed">
                            {department.title} academics is led by senior specialist doctors, training students through standard case discussions, dynamic practical runs, and critical ward observations.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {department.faculty.map((faculty, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white border border-slate-100 hover:border-teal-200 transition-all duration-500"
                            >
                                <div className="h-60 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <Users size={64} className="text-slate-400 opacity-60" strokeWidth={1.2} />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[9px] font-bold text-slate-900">
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

            {/* ===== ROLE IN CLINICAL DIAGNOSIS ===== */}
            <section className="py-20 lg:py-28 bg-[#0a192f] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-4 block">Diagnostic Backbone</span>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight animate-pulse" style={{ fontFamily: serifFont }}>
                                {department.specialTitle}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                {department.specialDesc}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {department.specialList.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-teal-400 border border-white/10 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="relative w-80 h-80 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/20" />
                                <div className="absolute inset-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center shadow-xl">
                                    <ShieldAlert size={60} className="text-teal-500 mb-2" />
                                    <span className="text-teal-400 font-black text-xs uppercase tracking-widest leading-tight">BHRI Standard</span>
                                    <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Reliability Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== DEPARTMENT HIGHLIGHTS ===== */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {department.highlights.map((stat, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-[0_15px_30px_rgba(20,184,166,0.06)] hover:border-teal-100 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 ${theme.iconColor}`}>
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

            {/* ===== SLIDER SECTION ===== */}
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
                                    src={department.heroImage}
                                    alt={department.slides[currentSlide].title}
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
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                {React.createElement(department.slides[currentSlide].icon, { size: 32, className: 'text-white' })}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: serifFont }}>
                                            {department.slides[currentSlide].title}
                                        </h3>
                                        <p className="text-teal-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
                                            {department.slides[currentSlide].desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                            {department.slides.map((_, i) => (
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
                            Begin Your Career in {department.title}
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the Department of {department.title} at BHRI and explore standard clinical, surgical, and preventive diagnostics.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-10 py-4 bg-gradient-to-r ${theme.button} text-white font-bold rounded-full shadow-2xl text-lg transition-all`}
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
