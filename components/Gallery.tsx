"use client";
import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-[#EFFFED] py-16 px-4 sm:px-6 md:px-12 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold text-brand-green tracking-tight">Gallery</h3>
          <button className="bg-white text-brand-green px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-50 transition shadow-sm">
            Show all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[2rem] overflow-hidden h-80 bg-white border border-green-100 shadow-sm relative group">
            <img 
               src="/images/gallery_1.jpg" 
               alt="Gallery item 1" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="rounded-[2rem] overflow-hidden h-96 -mt-8 bg-white border border-green-100 shadow-xl relative z-10 group">
            <img 
               src="/images/gallery_2.jpg" 
               alt="Gallery item 2" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="rounded-[2rem] overflow-hidden h-80 bg-white border border-green-100 shadow-sm relative group">
            <img 
               src="/images/gallery_3.jpg" 
               alt="Gallery item 3" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
