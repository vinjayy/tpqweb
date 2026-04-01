"use client";
import React from 'react';
import { FaGraduationCap, FaBookReader, FaBuilding, FaUsers } from 'react-icons/fa';

const stats = [
  { id: 1, value: "15+", label: "Guru Ustadz/Ustadzah", icon: FaUsers },
  { id: 2, value: "3+", label: "Program Pilihan", icon: FaBookReader },
  { id: 3, value: "100+", label: "Santri Aktif", icon: FaGraduationCap },
  { id: 4, value: "2026", label: "Tahun Berdiri", icon: FaBuilding },
];

export default function StatsRow() {
  return (
    <section className="py-0 relative z-20 -mt-10 lg:-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-primary rounded-[32px] md:rounded-[48px] shadow-2xl py-12 px-8 flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 overflow-hidden relative">
          
          {/* Decorative faint pattern inside the green box */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#ffffff_2px,transparent_2px)] [background-size:24px_24px]"></div>

          {stats.map((stat, idx) => (
            <div key={stat.id} className="flex items-center gap-4 relative z-10 group cursor-default">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center p-3 text-white shadow-inner group-hover:scale-110 transition-transform">
                 <stat.icon className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-outfit">{stat.value}</span>
                <span className="text-[13px] font-bold text-brand-secondary tracking-wide uppercase mt-1">{stat.label}</span>
              </div>
              {/* Divider except for last element on large screens */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block w-px h-16 bg-white/20 absolute -right-12 top-1/2 -translate-y-1/2"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
