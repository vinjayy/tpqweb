"use client";
import React from 'react';
import { Quote } from 'lucide-react';

export default function SambutanPimpinan() {
  const sambutan = [
    {
      name: "Ustadz Eki Sopian, S.Ag",
      title: "Pembina TPQ Al-Muthmainnah",
      bgColor: "bg-white",
      text: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur ke hadirat Allah SWT, berkat rahmat-Nya TPQ Al-Muthmainnah hadir untuk menjawab tantangan zaman dalam mendidik generasi penerus. Kami bertekad untuk menjadi pelopor pendidikan Al-Qur'an dan akhlak sejak dini, dengan pendekatan yang ramah dan menyenangkan. Semoga langkah mulia ini dicintai Allah dan melahirkan anak-anak yang shalih dan shalihah yang kelak mendoakan kedua orang tuanya. Amin Ya Rabbal 'Alamin.",
    },
    {
      name: "Ustadzah Patimah Batubara, S.Hum",
      title: "Kepala TPQ Al-Muthmainnah",
      bgColor: "bg-[#FDFBFA]",
      text: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di ekosistem pendidikan kami. Visi kami adalah menciptakan generasi unggul yang menjadikan Al-Qur'an sebagai pedoman dan rujukan utama. Kami memastikan seluruh civitas maupun asatidz memberikan pendampingan yang maksimal kepada seluruh santri, dari pemahaman huruf per huruf, pengulangan hafalan, sampai pada praktik adab dan ibadah harian.",
    }
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-12 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-black text-[#1A1C1E] tracking-tight mb-4">
             Sambutan Pimpinan
           </h2>
           <p className="text-gray-500 font-medium">
             Pesan dan dedikasi dari pengasuh Yayasan Al-Muthmainnah untuk para santri dan wali santri.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sambutan.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.bgColor} p-10 md:p-12 rounded-[2rem] border border-gray-200 shadow-sm relative group`}
            >
              <Quote className="w-12 h-12 text-[#3F6338] opacity-20 absolute top-10 right-10" />
              
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed font-medium text-lg relative z-10 italic">
                  "{item.text}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xl font-black text-[#1A1C1E]">{item.name}</h4>
                <p className="text-sm font-bold text-[#3F6338] uppercase tracking-widest mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
