"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">
      <div className={`transition-all duration-300 ${scrolled ? 'h-0 max-h-0 overflow-hidden opacity-0' : 'h-auto max-h-[100px] opacity-100'} `}>
        <TopBar />
      </div>

      <nav className={`w-full bg-white transition-all duration-300 shadow-sm ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">

          {/* Brand */}
          <Link href="#" className="flex items-center gap-3 group">
            <img src="/logoam.png" alt="Logo TPQ Al-Muthmainnah" className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="flex flex-col">
              <span className="text-brand-dark font-black text-lg lg:text-xl font-outfit leading-tight tracking-tight uppercase">TPQ Al-Muthmainnah</span>
              <span className="text-brand-gray text-[10px] uppercase tracking-widest font-semibold">Ciledug, Setu</span>
            </div>
          </Link>

          {/* Navigation - Anchor Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#profil" className="text-[15px] font-semibold text-brand-dark hover:text-brand-primary transition-colors font-outfit">Profil</Link>
            <Link href="#program" className="text-[15px] font-semibold text-brand-dark hover:text-brand-primary transition-colors font-outfit">Program</Link>
            <Link href="#fasilitas" className="text-[15px] font-semibold text-brand-dark hover:text-brand-primary transition-colors font-outfit">Fasilitas</Link>
            <Link href="#galeri" className="text-[15px] font-semibold text-brand-dark hover:text-brand-primary transition-colors font-outfit">Galeri</Link>
            <Link href="#kontak" className="text-[15px] font-semibold text-brand-dark hover:text-brand-primary transition-colors font-outfit">Kontak</Link>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/6289612213131"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-7 py-2.5 rounded-xl text-sm font-bold transition-all"
          >
            Hubungi Kami
          </a>
        </div>
      </nav>
    </header>
  );
}
