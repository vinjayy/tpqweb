"use client";
import React from 'react';

export default function DonateSubscribe() {
  return (
    <section className="relative mt-20">
      {/* Green Donate Banner */}
      <div className="bg-brand-green py-24 px-4 sm:px-6 md:px-12 text-center text-white relative z-0 overflow-hidden">
        {/* Soft background text/watermark if possible, mimicking the calligraphy in the image margin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] leading-none opacity-5 font-arabic select-none pointer-events-none w-full text-center whitespace-nowrap">
          بسم الله الرحمن الرحيم
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-[44px] font-extrabold mb-6 tracking-tight">
            Help us Better Serve You
          </h2>
          <p className="text-green-50 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            Yaseen Educational Institute provides all services and programming to the community
            through your support. Click the button below to donate any amount you
            wish on a one-time or monthly recurring basis.
          </p>
          <button className="bg-white text-brand-green px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition">
            Donate Today!
          </button>
        </div>
      </div>

      {/* Subscribe Overlapping Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 -mt-16 mb-20">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 md:p-12 text-center border border-gray-100">
          <h3 className="text-2xl font-extrabold text-[#113B26] mb-2 tracking-tight">
            Subscribe Now to Receive Updates!
          </h3>
          <p className="text-gray-500 font-medium mb-8 text-sm">
            As always, the best way to keep in touch is to join our mailing list
          </p>
          
          <form className="max-w-xl mx-auto flex gap-3 relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#F5F8F6] text-gray-800 placeholder-gray-400 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-brand-green border border-transparent transition"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-2 bottom-2 bg-[#113B26] text-white px-8 rounded-full font-bold hover:bg-green-900 transition text-sm shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
