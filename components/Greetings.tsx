"use client";
import React from 'react';
import { Quote } from 'lucide-react';

export default function Greetings() {
  const greetings = [
    {
      id: 1,
      name: "Ustadz Eki Sopian, S.Ag",
      role: "Pembina TPQ Al-Muthmainnah",
      image: "/g4.jpeg",
      text: (
        <>
          <p className="mb-3">Assalamu’alaikum warahmatullahi wabarakatuh.</p>
          <p className="mb-3">Alhamdulillahirabbil ‘alamin, puji syukur kita panjatkan ke hadirat Allah SWT... Shalawat serta salam semoga tercurah kepada junjungan kita Nabi Muhammad SAW, beserta keluarga, sahabat, dan para pengikutnya hingga akhir zaman.</p>
          <p className="mb-3">Sebagai Pembina TPQ Al-Muthmainnah, saya menyambut dengan penuh rasa bangga dan apresiasi atas inisiatif serta dibuatnya website TPQ Al-Muthmainnah. Ini merupakan langkah yang sangat baik dalam mengikuti perkembangan zaman, khususnya dalam memanfaatkan teknologi sebagai sarana dakwah dan pendidikan Al-Qur’an.</p>
          <p className="mb-3">Kehadiran website ini diharapkan dapat menjadi media informasi, komunikasi, dan publikasi yang efektif bagi TPQ Al-Muthmainnah. Selain itu, website ini juga dapat memperluas jangkauan syiar Islam, memperkenalkan program-program TPQ kepada masyarakat, serta mempererat hubungan antara pengurus, ustadz/ustadzah, santri, dan wali santri.</p>
          <p className="mb-3">Kami memberikan dukungan penuh terhadap pengembangan website ini, serta mendorong agar dapat dikelola secara profesional, berkelanjutan, dan memberikan manfaat yang nyata bagi kemajuan lembaga. Semoga website ini menjadi salah satu sarana yang membawa keberkahan dan menjadi amal jariyah bagi semua pihak yang terlibat.</p>
          <p className="mb-4">Kami juga mengajak seluruh pihak untuk turut mendukung, berpartisipasi, dan memanfaatkan website ini dengan sebaik-baiknya demi kemajuan TPQ Al-Muthmainnah.</p>
          <p className="font-medium italic">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
        </>
      )
    },
    {
      id: 2,
      name: "Ustadzah Patimah Batubara, S.Hum",
      role: "Kepala TPQ Al-Muthmainnah",
      image: "/g1.jpeg",
      text: (
        <>
          <p className="mb-3">Assalamu’alaikum warahmatullahi wabarakatuh.</p>
          <p className="mb-3">Alhamdulillahirabbil ‘alamin, segala puji bagi Allah SWT... Shalawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, keluarga, sahabat, dan seluruh umatnya hingga akhir zaman.</p>
          <p className="mb-3">Dengan penuh rasa syukur, kami menyambut baik dan mengapresiasi atas dibuatnya website Program TPQ Al-Muthmainnah. Kehadiran website ini merupakan langkah positif dan inovatif dalam mendukung perkembangan dakwah, pendidikan Al-Qur’an, serta penyebaran informasi kepada masyarakat secara lebih luas dan mudah diakses.</p>
          <p className="mb-3">Melalui website ini, kami berharap segala kegiatan, program pembelajaran, serta informasi terkait TPQ Al-Muthmainnah dapat tersampaikan dengan baik kepada para santri, wali santri, dan masyarakat umum. Selain itu, website ini juga diharapkan menjadi sarana syiar Islam serta media komunikasi yang efektif dan transparan.</p>
          <p className="mb-3">Kami menyadari bahwa keberhasilan program ini tidak terlepas dari dukungan berbagai pihak. Oleh karena itu, kami memohon dukungan, partisipasi, serta doa dari seluruh pihak, baik pengurus, ustadz/ustadzah, wali santri, maupun masyarakat, agar website ini dapat dimanfaatkan secara optimal dan terus berkembang menjadi lebih baik.</p>
          <p className="mb-4">Semoga dengan adanya website ini, TPQ Al-Muthmainnah semakin maju, berkualitas, dan mampu mencetak generasi Qur’ani yang berakhlakul karimah.</p>
          <p className="font-medium italic">Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
        </>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-3 font-outfit">Sapaan Pimpinan</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6 font-outfit">Sambutan Pengurus TPQ</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {greetings.map((person) => (
            <div key={person.id} className="bg-brand-bg rounded-[32px] p-8 md:p-10 border border-brand-secondary/40 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 relative flex flex-col h-full">

              <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-primary opacity-10" />

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-brand-secondary/50">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-brand-secondary/30 -z-10 flex items-center justify-center text-[10px] text-brand-gray text-center px-2">Visual {person.image}</div>
                </div>
                <div>
                  <h3 className="font-black text-xl md:text-2xl text-brand-dark font-outfit leading-tight mb-1">{person.name}</h3>
                  <p className="text-brand-primary font-bold text-sm tracking-wide">{person.role}</p>
                </div>
              </div>

              <div className="text-gray-600 leading-relaxed text-[15px] prose-p:mb-3 flex-grow">
                {person.text}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
