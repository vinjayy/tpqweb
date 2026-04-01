"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function VisiMisi() {
  const misi = [
    "Menyelenggarakan pendidikan baca Al-Qur'an secara tartil.",
    "Membimbing santri memahami dan mempraktikkan ibadah wajib dan sunnah.",
    "Menanamkan akhlak mulia melalui pembiasaan doa harian dan adab Islami.",
    "Membangun lingkungan belajar yang menyenangkan, kreatif, dan inspiratif.",
    "Bekerja sama dengan orang tua dalam pengawasan ibadah anak di rumah."
  ];

  const tujuan = [
    "Santri mampu membaca Al-Qur'an secara tartil sesuai kaidah tajwid.",
    "Santri hafal surat pendek (Juz 'Amma) dan doa-doa harian.",
    "Santri mampu melaksanakan wudhu dan shalat dengan gerakan dan bacaan yang benar.",
    "Tumbuhnya kecintaan santri terhadap Al-Qur'an dan penerapannya dalam akhlak sehari-hari."
  ];

  return (
    <section id="visi-misi" className="bg-white py-24 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Visi */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
           <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Visi Kami</h2>
           <p className="text-3xl md:text-5xl font-black text-[#1A1C1E] leading-[1.3] text-[#3F6338]">
             "Mewujudkan Generasi Qur'ani yang Berkemampuan Membaca Al-Qur'an Secara Tartil, serta Berakhlak Mulia Berdasarkan Ajaran Islam."
           </p>
        </div>

        {/* Misi & Tujuan - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
           {/* Section Misi */}
           <div>
              <div className="mb-8 pb-4 border-b-2 border-[#3F6338] inline-block">
                 <h3 className="text-2xl font-black text-[#1A1C1E] tracking-tight">Misi TPQ</h3>
              </div>
              <ul className="space-y-6">
                 {misi.map((m, idx) => (
                    <li key={idx} className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 shrink-0 text-[#3F6338] mt-0.5" />
                       <span className="text-gray-700 font-medium leading-relaxed">{m}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Section Tujuan */}
           <div>
              <div className="mb-8 pb-4 border-b-2 border-[#1A1C1E] inline-block">
                 <h3 className="text-2xl font-black text-[#1A1C1E] tracking-tight">Tujuan Pendidikan</h3>
              </div>
              <ul className="space-y-6">
                 {tujuan.map((t, idx) => (
                    <li key={idx} className="flex gap-4">
                       <div className="w-6 h-6 shrink-0 bg-[#FDFBFA] border-2 border-gray-300 rounded flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-[#1A1C1E] rounded-full"></div>
                       </div>
                       <span className="text-gray-700 font-medium leading-relaxed">{t}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}
