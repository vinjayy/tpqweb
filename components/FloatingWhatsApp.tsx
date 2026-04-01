"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[9999]">
      <div className="relative flex items-center group">
        
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-40 duration-1000"></div>
        <div className="absolute -inset-2 bg-[#25D366] rounded-full blur-xl opacity-20 transition-opacity"></div>
        
        {/* Main Button */}
        <a 
          href="https://wa.me/6289612213131" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3 md:py-4 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-all transform group-hover:-translate-y-1"
        >
          <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
          <span className="font-bold tracking-wide whitespace-nowrap text-sm md:text-base font-outfit inline-block">
            Hubungi Kami
          </span>
        </a>
      </div>
    </div>
  );
}
