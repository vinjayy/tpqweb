"use client";
import React from 'react';

export default function KurikulumProgram() {
  return (
    <section id="kurikulum" className="py-24 bg-[#FDFBFA] px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1A1C1E] mb-12 tracking-tight text-center">
          Kurikulum & Program
        </h2>

        {/* 3 Wide Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Card 1: Materi & Kelas */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-black text-[#3F6338] mb-6 tracking-tight">Materi Pokok</h3>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-3 mb-10">
                 <li>Membaca Al-Qur'an (Metode Ummi)</li>
                 <li>Tahfidz Juz 30 (Juz 'Amma)</li>
                 <li>Hafalan Doa Sehari-hari</li>
                 <li>Praktik Wudhu & Shalat Berjamaah</li>
                 <li>Penanaman Akhlakul Karimah</li>
              </ul>
              
              <h3 className="text-lg font-bold text-[#1A1C1E] mb-4 tracking-tight border-b pb-2">Pembagian Kelas</h3>
              <div className="space-y-4 text-gray-700 text-sm">
                 <div>
                    <span className="font-bold block text-gray-900">Tingkat Pra-TK / TK</span>
                    Penanaman huruf Hijaiyah dasar & bermain edukatif.
                 </div>
                 <div>
                    <span className="font-bold block text-gray-900">Tingkat SD / Sederajat</span>
                    Pembelajaran Ummi Jilid 1 - 6, dilanjutkan Al-Qur'an.
                 </div>
                 <div>
                    <span className="font-bold block text-gray-900">Tingkat SMP / Lanjutan</span>
                    Tajwid dasar, Ghorib, dan Tahfidz lanjutan.
                 </div>
              </div>
           </div>

           {/* Card 2: Metode Pembelajaran */}
           <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-black text-[#3F6338] mb-6 tracking-tight">Metode Edukasi</h3>
              <div className="space-y-6">
                 <div>
                    <h4 className="font-bold text-[#1A1C1E] text-lg">Metode Ummi</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                       Pendekatan bahasa ibu yang menyentuh hati, dengan bacaan yang tartil dan berkualitas.
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-[#1A1C1E] text-lg">Talaqqi</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                       Guru berhadapan langsung dengan santri untuk mengoreksi makharijul huruf secara persis.
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-[#1A1C1E] text-lg">Tikrar (Pengulangan)</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                       Program menghafal dengan mengulang materi agar hafalan lebih melekat kuat.
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-[#1A1C1E] text-lg">Kisah Nabawi & Cerita Islami</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                       Pendidikan akhlak menggunakan teladan kisah inspiratif para Nabi.
                    </p>
                 </div>
                 <div>
                   <h4 className="font-bold text-[#1A1C1E] text-lg">Praktik Langsung</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                       Penerapan wudhu dan shalat yang dikontrol harian oleh ustadz/ah.
                    </p>
                 </div>
              </div>
           </div>

           {/* Card 3: Program Unggulan */}
           <div className="bg-[#1A1C1E] p-8 rounded-[2rem] shadow-sm hover:shadow-md transition text-white">
              <h3 className="text-2xl font-black text-[#3F6338] mb-6 tracking-tight">Program TPQ</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                 Kegiatan harian maupun tahunan disusun agar santri termotivasi dan proses belajar tidak monoton.
              </p>
              
              <ul className="space-y-5">
                 <li className="flex gap-4 items-start">
                    <span className="bg-white/10 text-white w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">1</span>
                    <span className="font-medium text-[15px]">Target Tahfidz Juz 30 Bertahap</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="bg-white/10 text-white w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">2</span>
                    <span className="font-medium text-[15px]">Pembiasaan Shalat Berjamaah</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="bg-white/10 text-white w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">3</span>
                    <span className="font-medium text-[15px]">Lomba Keislaman (Muharram/Ramadhan)</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="bg-white/10 text-white w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">4</span>
                    <span className="font-medium text-[15px]">Pesantren Kilat Ramadhan</span>
                 </li>
                 <li className="flex gap-4 items-start">
                    <span className="bg-[#3F6338] text-white w-6 h-6 rounded flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">5</span>
                    <span className="font-bold text-[15px] text-[#3F6338] bg-white px-2 py-0.5 rounded shadow-sm">Khatmul Qur'an & Munaqosyah</span>
                 </li>
              </ul>
              
              <div className="mt-10 border-t border-white/10 pt-6">
                 <a href="https://wa.me/6289612213131" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#3F6338] hover:bg-green-700 py-3 rounded-xl font-bold transition">
                   Tanya Program (WA)
                 </a>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
