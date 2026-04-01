"use client";
import React from 'react';

export default function GalleryRow() {
  const images = ['/g1.jpeg', '/g2.jpeg', '/g3.jpeg', '/g4.jpeg'];
  
  return (
    <section id="galeri" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-3 font-outfit">Dokumentasi</p>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 font-outfit">Kegiatan Pembelajaran</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm group border-4 border-white">
              <img src={src} alt={`Galeri ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              
              <div className="absolute inset-0 bg-brand-secondary/30 -z-10 flex items-center justify-center">
                 <span className="text-brand-gray font-semibold text-[10px] sm:text-xs text-center border-b border-brand-gray/30 pb-0.5">Visual {src}</span>
              </div>
              
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <span className="text-white font-bold font-outfit translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Kegiatan TPQ</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
