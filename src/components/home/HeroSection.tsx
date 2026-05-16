"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SparkleButton } from "@/components/ui/button-8";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageSlides = [
  {
    image: "/images/hero/hero-1.png",
    title: "World-Class Healthcare",
    subtitle: "State-of-the-art infrastructure with advanced medical technology",
  },
  {
    image: "/images/hero/hero-2.png",
    title: "Expert Medical Team",
    subtitle: "250+ experienced doctors & faculty across 20+ departments",
  },
  {
    image: "/images/hero/hero-3.png",
    title: "Advanced Surgical Care",
    subtitle: "Equipped with modern OT, ICU, NICU & PICU with ventilator support",
  },
  {
    image: "/images/hero/hero-4.png",
    title: "Patient-First Approach",
    subtitle: "Compassionate care with the motto — सेवा परमो धर्म:",
  },
];

const TOTAL = 1 + imageSlides.length;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % TOTAL);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[500px] md:h-[580px] lg:h-[620px] overflow-hidden">
      {/* ── Slide 0: Original static hero ── */}
      <div
        className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out bg-gradient-to-br from-brandBlue via-brandBlueDark to-brandBlue"
        style={{ opacity: current === 0 ? 1 : 0, zIndex: current === 0 ? 2 : 1 }}
      >
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-no-repeat bg-center opacity-[0.04] bg-[length:500px]" />
        <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex-1 text-center lg:text-left text-white">
            <p className="text-brandSaffron font-bold text-sm uppercase tracking-widest mb-3">
              सेवा परमो धर्म:
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
              Welcome to <br className="hidden md:block" />
              <span className="text-brandSaffronLight">Buddha Hospital</span>{" "}
              &amp; Research Institute
            </h1>
            <p className="text-white/80 text-lg max-w-xl mb-8 mx-auto lg:mx-0">
              A premier healthcare and medical education institution in Gaya, Bihar —
              delivering compassionate care with modern infrastructure and expert faculty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <SparkleButton href="/about">Explore More</SparkleButton>
              <SparkleButton href="/contact">Contact Us</SparkleButton>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <Image
              src="/logo.png"
              alt="BHRI Logo"
              width={260}
              height={260}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ── Slides 1-4: Full image slides ── */}
      {imageSlides.map((slide, i) => {
        const slideIdx = i + 1;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{ opacity: current === slideIdx ? 1 : 0, zIndex: current === slideIdx ? 2 : 1 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2557]/80 via-[#0f2557]/50 to-transparent" />
            <div className="relative z-10 h-full w-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col justify-center">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4">
                  {slide.title}
                </h2>
                <p className="text-white/75 text-base md:text-xl max-w-md leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── Navigation arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-brandSaffron" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-5 right-6 md:right-10 z-10 text-white/50 text-sm font-mono">
        <span className="text-white font-bold text-lg">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(TOTAL).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
