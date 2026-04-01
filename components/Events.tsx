"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const events = [
    { date: "Feb 22", day: "Tues", title: "Dua Tawwasul", location: "5:30 pm, Convention City Bashundhara", active: false },
    { date: "Feb 25", day: "Wed", title: "Dua Kumayl", location: "5:30 pm, Balishira Resort", active: true },
    { date: "Feb 27", day: "Fri", title: "Salat al-Jumu'a", location: "2:30 pm, Convention City Bashundhara", active: false },
    { date: "Mar 01", day: "Mon", title: "Weekly Program", location: "5:30 pm, Balishira Resort", active: false }
  ];

  return (
    <section className="bg-brand-bg py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold text-brand-green tracking-tight">Events Organize</h3>
          <button className="bg-[#EFFFED] text-brand-green px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-100 transition">
            Show all
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          
          {/* Events List */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {events.map((evt, idx) => (
              <div 
                key={idx} 
                className={`py-5 px-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between transition-colors ${
                  evt.active ? "bg-white border-green-200 shadow-sm" : "bg-transparent border-gray-200 hover:bg-white hover:border-green-100"
                }`}
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="text-center min-w-[3rem]">
                    <div className="text-lg font-bold text-gray-800 leading-none mb-1">{evt.date.split(" ")[0]}</div>
                    <div className="text-2xl font-extrabold text-brand-dark leading-none">{evt.date.split(" ")[1]}</div>
                    <div className="text-xs text-gray-500 font-semibold uppercase mt-1 tracking-widest">{evt.day}</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                  <div>
                    <h4 className="text-[17px] font-bold text-brand-green mb-1.5">{evt.title}</h4>
                    <p className="text-sm font-semibold text-gray-500">{evt.location}</p>
                  </div>
                </div>
                
                <button className={`px-6 py-2 rounded-full text-xs font-bold transition shadow-sm whitespace-nowrap ${
                  evt.active 
                    ? "bg-brand-green text-white hover:bg-green-800" 
                    : "bg-[#EFFFED] text-brand-green hover:bg-green-100"
                }`}>
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Speaker & Upcoming */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Speaker Widget */}
            <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h4 className="font-bold text-gray-800">Speaker</h4>
                <div className="flex items-center gap-1 text-gray-400 text-sm font-semibold">
                  <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-brand-green" />
                  <span className="text-brand-green mx-1">5</span> / 7
                  <ChevronRight className="w-4 h-4 cursor-pointer hover:text-brand-green" />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex-1">
                  <h5 className="font-bold text-brand-green text-[15px] leading-tight mb-1">Mūsā al-Kāzim</h5>
                  <p className="text-xs font-semibold text-gray-500">Mashhad, Iran</p>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm shrink-0">
                  <img src="/images/speaker_profile.jpg" alt="Speaker" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23cbd5e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' }} />
                </div>
              </div>
            </div>

            {/* Upcoming Events Widget */}
            <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-800">Upcoming Events</h4>
                <div className="flex items-center gap-1 text-gray-400 text-sm font-semibold">
                  <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-brand-green" />
                  <span className="text-brand-green mx-1">3</span> / 5
                  <ChevronRight className="w-4 h-4 cursor-pointer hover:text-brand-green" />
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden relative h-32 bg-gray-200 mb-4 group cursor-pointer">
                <img src="/images/upcoming_event.jpg" alt="Upcoming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-brand-green text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Feb 21
                </div>
              </div>
              <h5 className="font-bold text-sm text-gray-800 leading-snug">The Ten Most Common Misconceptions about Islam</h5>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
