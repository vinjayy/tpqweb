"use client";
import React from "react";

const times = [
  { name: "Fajr", time: "5:00am" },
  { name: "Zuhr", time: "1:30pm" },
  { name: "Asr", time: "4:30pm" },
  { name: "Maghrib", time: "6:00pm" },
  { name: "Isha", time: "8:00pm" },
  { name: "Jumu'a", time: "1:30pm" }
];

export default function PrayerTimes() {
  return (
    <section className="bg-brand-bg py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F2FAF4] rounded-[2.5rem] p-10 lg:p-14 flex flex-col lg:flex-row shadow-sm relative overflow-hidden">
        
          <div className="lg:w-5/12 w-full relative z-10">
            <h3 className="text-xl font-bold text-[#113B26] mb-8">Prayer Times</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {times.map((t, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-[14px] px-5 py-3.5 flex justify-between items-center shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:border-gray-200 transition">
                  <span className="text-gray-500 font-medium text-sm">{t.name}</span>
                  <span className="text-gray-800 font-bold text-sm tracking-wide">{t.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-4/12 w-full mt-12 lg:mt-0 flex flex-col items-center lg:items-start lg:pl-16 relative z-10 pt-2 lg:pt-0">
            <h3 className="text-2xl font-bold text-brand-green mb-1">Gunung Salak</h3>
            <p className="text-gray-500 font-semibold text-sm mb-6">Indonesia</p>
            <div className="text-5xl font-extrabold text-[#F28437] tracking-tight mb-2">5:05</div>
            <p className="text-brand-green font-bold text-sm tracking-wide">Sunrise</p>
          </div>

          {/* Illustrations & Decorations */}
          <div className="hidden lg:block absolute bottom-0 right-[25%] h-52 w-64 z-10">
             {/* Mimic the image illustration - prayer on mat */}
             <div className="w-full h-full relative">
                 <div className="absolute bottom-4 left-0 right-0 h-4 bg-[#81D0A3] border-b-8 border-brand-green transform skew-x-12 mx-8 shadow-lg"></div>
                 <div className="absolute inset-x-0 bottom-8 h-32 flex items-end justify-center opacity-60">
                     <p className="text-xs font-semibold text-brand-green bg-white/60 px-2 py-1 rounded">Prayer Illustration</p>
                 </div>
             </div>
          </div>
          
          <div className="absolute left-0 bottom-0 text-white/50 text-[300%] opacity-10 leading-none -ml-40 tracking-tighter pointer-events-none select-none">
              بسم الله
          </div>
          
          <div className="absolute right-0 bottom-0 w-[40%] h-[60%] bg-[#FFF2E5] rounded-tl-full z-0 overflow-hidden"></div>
          <div className="absolute right-12 bottom-6 w-32 h-32 bg-[#F28437] rounded-full z-0"></div>

        </div>
      </div>
    </section>
  );
}
