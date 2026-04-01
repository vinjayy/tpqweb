"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-brand-bg min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle at center, #123019 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        {/* Kolom Kiri - Teks */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#E3F2D4]/50 border border-brand-secondary text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 font-outfit">
            <span className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
            Pendidikan Islam Sejak Dini
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-black text-brand-dark leading-[1.1] mb-6 tracking-tight font-outfit text-balance">
            Mewujudkan Generasi <span className="text-brand-primary">Qur’ani</span> yang Berakhlak Mulia.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-medium max-w-lg">
            Pendidikan nonformal untuk menanamkan kecintaan terhadap Al-Qur’an sejak dini, mewujudkan anak shalih dan shalihah.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* CTA Buttons */}
            <a
              href="#program"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold shadow-[0_8px_20px_rgba(143,192,65,0.3)] hover:bg-brand-primary/90 transition transform hover:-translate-y-1 font-outfit"
            >
              Program Kami
            </a>
            <a
              href="https://wa.me/6289612213131"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/5 transition transform hover:-translate-y-1 font-outfit"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>

        {/* Kolom Kanan - Gambar/Video Placeholder */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center mt-10 lg:mt-0">
          {/* Decorative Green Background Shape */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-primary rounded-[40px] rotate-3 opacity-20 -z-10 blur-xl"></div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-secondary rounded-[32px] -rotate-3 -z-10"></div>

          <div className="relative w-4/5 h-4/5 bg-white rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white group">
            {/* NO IMAGE GENERATION: as commanded, strictly an img with /hero1.jpg */}
            <img
              src="/g1.jpeg"
              alt="Kegiatan Santri TPQ"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Fallback styling for the placeholder */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-100">
              <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm border-b-2 border-gray-300 pb-1">
                Visual /hero1.jpg
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
