"use client";
import React from 'react';

export default function JadwalEvaluasi() {
  return (
    <section id="jadwal" className="py-24 bg-white px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Jadwal KBM */}
        <div className="flex-1">
           <h2 className="text-3xl font-black text-[#1A1C1E] mb-2 tracking-tight">Waktu Belajar</h2>
           <p className="text-gray-500 font-medium mb-8">Senin s.d Jum'at (5 Hari Kerja)</p>
           
           <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#FDFBFA] px-6 py-4 border-b border-gray-200">
                 <h4 className="font-bold text-[#1A1C1E]">Sesi 1: Tingkat TK & SD</h4>
                 <div className="text-2xl font-black text-[#3F6338] mt-1 tracking-tight">16.30 - 18.00</div>
              </div>
              <div className="bg-white px-6 py-5">
                 <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Fokus pada pengenalan huruf, Ummi jilid dasar, tajwid tajdid praktis, dan praktik ibadah yang lebih banyak visualisasinya.
                 </p>
              </div>
           </div>

           <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-6">
              <div className="bg-[#FDFBFA] px-6 py-4 border-b border-gray-200">
                 <h4 className="font-bold text-[#1A1C1E]">Sesi 2: Tingkat SMP</h4>
                 <div className="text-2xl font-black text-[#3F6338] mt-1 tracking-tight">18.30 - 20.00</div>
              </div>
              <div className="bg-white px-6 py-5">
                 <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    Fokus pada peningkatan tahfidz Juz 30, perbaikan makhraj lanjutan, dan pengembangan materi akhlak kontemporer.
                 </p>
              </div>
           </div>
        </div>

        {/* Evaluasi */}
        <div className="flex-1">
           <h2 className="text-3xl font-black text-[#1A1C1E] mb-2 tracking-tight">Metode Evaluasi</h2>
           <p className="text-gray-500 font-medium mb-8">Pemeriksaan Capaian Hasil Belajar</p>

           <div className="space-y-4">
              <div className="flex items-start gap-5 p-5 bg-[#FDFBFA] rounded-xl border border-gray-200">
                 <div className="px-3 py-1 bg-[#1A1C1E] text-white text-xs font-bold uppercase tracking-wider rounded">Harian</div>
                 <div>
                    <h5 className="font-bold text-[#1A1C1E] text-base mb-1">Setoran Hafalan & Bacaan</h5>
                    <p className="text-gray-600 text-sm font-medium">Dicatat per hari oleh tim asatidz untuk memastikan kuantitas dan kualitas bacaan.</p>
                 </div>
              </div>

              <div className="flex items-start gap-5 p-5 bg-[#FDFBFA] rounded-xl border border-gray-200">
                 <div className="px-3 py-1 bg-[#1A1C1E] text-white text-xs font-bold uppercase tracking-wider rounded">Mingguan</div>
                 <div>
                    <h5 className="font-bold text-[#1A1C1E] text-base mb-1">Review Perkembangan Santri</h5>
                    <p className="text-gray-600 text-sm font-medium">Tinjauan asatidz secara kolektif setiap pekan atas materi yang belum dipahami.</p>
                 </div>
              </div>

              <div className="flex items-start gap-5 p-5 bg-[#FDFBFA] rounded-xl border border-gray-200">
                 <div className="px-3 py-1 bg-[#1A1C1E] text-white text-xs font-bold uppercase tracking-wider rounded">Bulanan</div>
                 <div>
                    <h5 className="font-bold text-[#1A1C1E] text-base mb-1">Ujian Kenaikan Jilid Ummi</h5>
                    <p className="text-gray-600 text-sm font-medium">Ujian praktis untuk santri yang sudah siap naik tingkat pada level Umm-nya.</p>
                 </div>
              </div>

              <div className="flex items-start gap-5 p-5 bg-white border-2 border-[#3F6338] rounded-xl shadow-sm">
                 <div className="px-3 py-1 bg-[#3F6338] text-white text-xs font-bold uppercase tracking-wider rounded">Tahunan</div>
                 <div>
                    <h5 className="font-bold text-[#3F6338] text-base mb-1">Munaqosyah & Wisuda</h5>
                    <p className="text-gray-800 text-sm font-medium">Uji publik akhir capaian tahfidz & khatmul qur'an sebagai syarat kelulusan program.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
