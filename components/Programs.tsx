"use client";
import React from 'react';
import { BookOpen } from 'lucide-react';

const programs = [
  {
    id: 1,
    category: "Buku Ummi Jilid 1–2",
    title: "Kelas TK",
    desc: "Pengenalan huruf hijaiyah dan dasar-dasar bacaan Al-Qur'an bagi anak usia pra-sekolah.",
    iconUrl: "/icon-quran.svg"
  },
  {
    id: 2,
    category: "Buku Ummi Jilid 3–4",
    title: "Kelas SD",
    desc: "Pemantapan makharijul huruf dan tajwid untuk tingkat sekolah dasar.",
    iconUrl: "/icon-masjid.svg"
  },
  {
    id: 3,
    category: "Buku Ummi Jilid 5–6 / Tahfidz",
    title: "Lanjutan / SMP",
    desc: "Pembelajaran Al-Qur'an tingkat lanjut dengan fokus pada tahfidz Juz 30.",
    iconUrl: "/icon-arch.svg"
  }
];

export default function Programs() {
  return (
    <section id="program" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-3 font-outfit">Program Unggulan</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6 font-outfit leading-tight text-balance">
            Departemen Kelas & Kurikulum Pembelajaran
          </h2>
          <p className="text-gray-600 text-[17px]">Berkembang bersama metode Ummi, membentuk hafalan kuat dan karakter Islami sejak dini sesuai dengan tingkatannya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {programs.map((prog) => (
            <div key={prog.id} className="bg-[#FBFCF8] rounded-[32px] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(143,192,65,0.08)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
               
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-secondary/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

               <div className="relative z-10">
                 {/* Icon Box */}
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-brand-secondary/30 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
                 </div>

                 <span className="inline-block px-3 py-1 rounded-md bg-brand-secondary text-brand-dark text-xs font-bold font-outfit mb-4">
                   {prog.category}
                 </span>

                 <h3 className="text-2xl font-black text-brand-dark mb-4 font-outfit">
                   {prog.title}
                 </h3>

                 <p className="text-gray-600 leading-relaxed mb-10 flex-grow">
                   {prog.desc}
                 </p>

                 <a href="https://wa.me/6289612213131" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-brand-primary text-white py-3.5 rounded-xl font-bold hover:bg-brand-primary/90 transition shadow-sm font-outfit">
                   Daftar Sekarang
                 </a>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
