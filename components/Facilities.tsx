"use client";
import React from 'react';
import { BookOpen, Presentation, Volume2, LayoutGrid, ShieldCheck, Component } from 'lucide-react';

const facilities = [
  { id: 1, title: 'Ruang Belajar', icon: Presentation },
  { id: 2, title: 'Buku Ummi & Al-Qur\'an', icon: BookOpen },
  { id: 3, title: 'Papan Tulis', icon: Component },
  { id: 4, title: 'Sound System', icon: Volume2 },
  { id: 5, title: 'Karpet Nyaman', icon: LayoutGrid },
  { id: 6, title: 'Lingkungan Aman', icon: ShieldCheck },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-3 font-outfit">Sarana Mumpuni</p>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 font-outfit">
            Fasilitas Terbaik Pembelajaran
          </h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {facilities.map((fac) => (
            <div key={fac.id} className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-brand-secondary/40 to-white shadow-sm border border-brand-secondary/50 flex items-center justify-center mb-5 transition transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_24px_rgba(143,192,65,0.15)] group-hover:border-brand-primary/30">
                <fac.icon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-center text-[13px] sm:text-[15px] text-brand-dark px-2 font-outfit leading-tight">{fac.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
