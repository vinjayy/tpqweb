"use client";
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="profil" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Kolom Kiri - Gambar Tunggal */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 pr-0 pb-10 lg:pb-0">
           {/* Decorative dots */}
           <div className="absolute top-0 -left-6 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_center,#218905_2px,transparent_2px)] [background-size:12px_12px]"></div>

           {/* Gambar Utama Tunggal */}
           <div className="relative z-10 w-full bg-brand-secondary rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
             <img src="/g2.jpeg" alt="Pendidikan Al-Qur'an" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
             <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#E3F2D4]">
                <span className="text-brand-gray font-semibold text-xs border-b border-brand-gray/30 pb-1">Visual /g2.jpeg</span>
             </div>
             
             {/* Badge Info */}
             <div className="absolute bottom-8 left-8 bg-white shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 border border-green-50 z-30">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="text-brand-primary w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-brand-dark leading-none">100%</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Cinta Al-Qur'an</span>
                </div>
             </div>
           </div>
        </div>

        {/* Kolom Kanan - Teks */}
        <div>
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4 font-outfit">Tentang Kami</p>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-[1.15] font-outfit text-balance">
            Membentuk Generasi Qur’ani yang <span className="text-brand-primary">Berakhlak Mulia</span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-[17px]">
            TPQ Al-Muthmainnah didirikan sebagai sarana pendidikan nonformal untuk membentuk generasi yang mampu membaca, memahami, dan mengamalkan Al-Qur’an dalam kehidupan sehari-hari, serta menanamkan akhlakul karimah sejak dini.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-10">
             {/* Point 1 */}
             <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-brand-secondary flex items-center justify-center font-bold text-brand-primary font-outfit text-lg">
                 1
               </div>
               <div>
                 <h4 className="font-bold text-brand-dark mb-1 font-outfit">Baca Tulis Tartil</h4>
                 <p className="text-sm text-gray-500 leading-tight">Pengajaran metode baca tulis Al-Qur'an secara benar dan tartil.</p>
               </div>
             </div>
             {/* Point 2 */}
             <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-2xl border-2 border-brand-secondary flex items-center justify-center font-bold text-brand-primary font-outfit text-lg">
                 2
               </div>
               <div>
                 <h4 className="font-bold text-brand-dark mb-1 font-outfit">Pembiasaan Ibadah</h4>
                 <p className="text-sm text-gray-500 leading-tight">Menanamkan nilai akhlak dan ibadah harian berlandaskan iman.</p>
               </div>
             </div>
          </div>

          <a 
            href="#program" 
            className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-brand-primary/90 transition shadow-[0_8px_20px_rgba(143,192,65,0.3)] font-outfit group"
          >
            Misi & Visi Kami 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
