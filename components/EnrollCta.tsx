"use client";
import React from 'react';

export default function EnrollCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FBFCF8] to-[#F1F8EB]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Kolom Kiri - Teks */}
        <div>
           <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4 font-outfit">Pendaftaran</p>
           <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-brand-dark mb-6 leading-[1.15] font-outfit text-balance">
             Mari Bergabung Bersama <span className="text-brand-primary">TPQ Al-Muthmainnah</span>
           </h2>
           <p className="text-gray-600 leading-relaxed mb-10 text-[17px] max-w-lg">
             Daftarkan putra-putri Anda sekarang juga dan jadikan mereka generasi pencinta Al-Qur'an yang cerdas dan berakhlakul karimah.
           </p>
           
           <a 
              href="https://wa.me/6289612213131" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition shadow-[0_8px_20px_rgba(143,192,65,0.3)] font-outfit transform hover:-translate-y-1"
           >
              Daftar via WhatsApp Sekarang
           </a>
        </div>

        {/* Kolom Kanan - Gambar/Media */}
        <div className="relative aspect-video lg:aspect-[4/3] w-full max-w-xl mx-auto rounded-[32px] overflow-hidden shadow-2xl group border-[8px] border-white bg-white">
           <img 
              src="/g3.jpeg" 
              alt="Profil TPQ" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
           />
           <div className="absolute inset-0 bg-brand-secondary/30 -z-10 flex items-center justify-center">
              <span className="text-brand-gray font-semibold text-xs border-b border-brand-gray/30 pb-0.5">Visual /g3.jpeg</span>
           </div>
           
           {/* Decorative corner */}
           <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl z-0"></div>
        </div>

      </div>
    </section>
  );
}
