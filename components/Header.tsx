"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { PiMosqueDuotone } from "react-icons/pi";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Placeholder Logo Icon */}
        <PiMosqueDuotone className="w-10 h-10 text-brand-green" />
        <div>
          <h1 className="font-extrabold text-[#113B26] text-lg leading-tight tracking-tight uppercase">Hejrat Foundation</h1>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Masjid Al-Nabi</p>
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-gray-700">
        <Link href="#" className="hover:text-brand-green transition">About us</Link>
        <Link href="#" className="hover:text-brand-green transition">News</Link>
        <Link href="#" className="hover:text-brand-green transition">Educational</Link>
        <Link href="#" className="hover:text-brand-green transition">Event</Link>
        <Link href="#" className="hover:text-brand-green transition">Donate</Link>
        <Link href="#" className="hover:text-brand-green transition">Services</Link>
      </nav>

      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-brand-green transition">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-[#113B26] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-900 transition shadow-md">
          Get Involved
        </button>
      </div>
    </header>
  );
}
