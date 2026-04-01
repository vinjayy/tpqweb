"use client";
import React from 'react';

export default function FasilitasCTA() {
  const facilities = [
    "Ruang Belajar Nyaman",
    "Al-Qur'an Standar",
    "Buku Pintar Ummi",
    "Papan Tulis & Alat Peraga",
    "Sound System Pembelajaran",
    "Karpet Santri",
    "Sistem Evaluasi Digital"
  ];

  return (
    <section className="bg-[#FDFBFA] px-6 lg:px-12 py-24 border-t border-gray-100">
      
      {/* Fasilitas */}
      <div className="max-w-4xl mx-auto text-center mb-24">
         <h2 className="text-3xl font-black text-[#1A1C1E] mb-8 tracking-tight">Fasilitas Penunjang</h2>
         <div className="flex flex-wrap justify-center gap-3">
            {facilities.map((fas, idx) => (
               <span key={idx} className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:border-[#3F6338] transition cursor-default">
                  {fas}
               </span>
            ))}
         </div>
      </div>

      {/* Massive CTA Block */}
      <div className="max-w-5xl mx-auto bg-[#3F6338] rounded-[2.5rem] py-16 px-6 lg:px-20 text-center shadow-2xl">
         <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            Saatnya Membentuk Masa Depan Anak Anda Bersama Al-Qur'an.
         </h2>
         <p className="text-green-50 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Mari bergandengan tangan menuntun langkah buah hati kita ke jalan yang Allah ridhai. Hubungi kami untuk informasi kapasitas kelas dan pendaftaran santri baru.
         </p>
         
         <a 
            href="https://wa.me/6289612213131" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3F6338] px-12 py-5 rounded-2xl text-lg font-black tracking-wide shadow-xl hover:bg-gray-50 transition transform hover:-translate-y-1"
         >
            MENDAFTAR SEKARANG via WHATSAPP
         </a>
      </div>

    </section>
  );
}
