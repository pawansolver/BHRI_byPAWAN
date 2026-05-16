"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We will contact you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section>
      {/* Top banner */}
      <div className="relative py-10 md:py-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/hero-2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488]/85 to-[#0f766e]/80" />
        <h2 className="relative z-10 section-heading-white">Contact Us</h2>
      </div>

      {/* Form section */}
      <div className="bg-white py-10 md:py-14">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Contact info */}
            <div>
              <p className="text-[#0d9488] font-bold text-sm uppercase tracking-widest mb-2">
                Need Help
              </p>
              <h3 className="section-heading !text-left !mb-3">Get In Touch</h3>
              <span className="section-heading-line !mx-0" />
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-md">
                Buddha Hospital &amp; Research Institute is always here to help you.
                Reach out to us for appointments, enquiries, or any assistance.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#1a1a2e] font-bold text-[15px]">Emergency Contact</h4>
                    <p className="text-gray-500 text-[15px]">+91 8603048174 / 9060646592</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#1a1a2e] font-bold text-[15px]">Mail Us</h4>
                    <a href="mailto:bhribodhgaya@gmail.com" className="text-gray-500 text-[15px] hover:text-[#0d9488] transition">
                      bhribodhgaya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#0d9488] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#1a1a2e] font-bold text-[15px]">Location</h4>
                    <p className="text-gray-500 text-[15px]">
                      Gaya-Dobhi Road, NH-22, Kharanti More, Tikuna Farm, Gaya (Bihar)-823004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] transition"
                />
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0d9488] text-white font-bold text-sm uppercase tracking-wider rounded-md hover:bg-[#0f766e] transition-colors shadow-md"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
