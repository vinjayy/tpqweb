"use client";
import React from 'react';

export default function ProfilIdentity() {
  const pengurus = [
    { title: "Pembina", name: "Ustadz Eki Sopian, S.Ag" },
    { title: "Kepala TPQ", name: "Ustadzah Patimah Batubara, S.Hum" },
    { title: "Sekretaris", name: "Nurjannah Batubara" },
    { title: "Bendahara", name: "Eji Ismail Mahmud" },
  ];

  return (
    <section id="profil" className="py-24 bg-[#FDFBFA] px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Identitas TPQ */}
        <div className="lg:col-span-5">
           <h2 className="text-3xl lg:text-4xl font-black text-[#1A1C1E] mb-8 tracking-tight">
             Profil Lembaga
           </h2>
           <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-6 pb-6 border-b border-gray-100">
                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Nama Lembaga</h3>
                 <p className="text-xl font-bold text-[#1A1C1E]">TPQ Al-Muthmainnah</p>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-100">
                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Tahun Berdiri</h3>
                 <p className="text-xl font-bold text-[#3F6338]">2026</p>
              </div>
              <div>
                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Alamat Lengkap</h3>
                 <p className="text-gray-700 leading-relaxed font-medium">
                    Villa Setu Permai Blok MM No 22,<br/>
                    RT 002 RW 018, Kelurahan Ciledug,<br/>
                    Kecamatan Setu, Kabupaten Bekasi 17320
                 </p>
              </div>
           </div>
        </div>
        
        {/* Susunan Pengurus */}
        <div className="lg:col-span-7">
           <h2 className="text-3xl lg:text-4xl font-black text-[#1A1C1E] mb-8 tracking-tight">
             Susunan Pengurus
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pengurus.map((p, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-center h-32 hover:border-[#3F6338] transition duration-300">
                   <p className="text-xs font-bold text-[#3F6338] uppercase tracking-widest mb-2">
                     {p.title}
                   </p>
                   <p className="text-lg font-bold text-[#1A1C1E] leading-tight">
                     {p.name}
                   </p>
                </div>
              ))}
           </div>
           
           <div className="mt-8 bg-green-50/50 p-6 rounded-2xl border border-green-100">
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 Seluruh asatidz dan pengurus di TPQ Al-Muthmainnah berkomitmen penuh dalam memberikan layanan pendidikan agama Islam terbaik bagi generasi penerus di lingkungan Kabupaten Bekasi.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
