"use client";
import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer className="bg-white pt-16 pb-12 px-6 md:px-12 border-t border-gray-100 relative overflow-hidden">
      {/* Background calligraphy watermark faint */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[url('/images/calligraphy_bg.png')] bg-contain bg-no-repeat opacity-[0.03] translate-x-1/3 -translate-y-1/3 pointer-events-none mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column - Contact Text */}
        <div className="lg:col-span-4">
          <h4 className="text-xl font-extrabold text-[#113B26] mb-4 leading-tight">
            Contact us by email or<br/>Text and we will get<br/>back to you as soon as we can.
          </h4>
          
          <div className="mt-8 text-gray-500 text-sm font-semibold space-y-1">
            <p>Yaseen Educational Institute</p>
            <p>123 Fake Street, Suite 22A0</p>
            <p>New York, NY 10001</p>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-[#EFFFED] text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EFFFED] text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V10h2v6zm-1-6.9c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm6 6h-2v-3.5c0-.83-.75-1.5-1.58-1.5H13v5h-2V10h2v1.5c.34-.63 1.07-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5V16z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EFFFED] text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Middle Columns - Links */}
        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-extrabold text-[#113B26] text-sm mb-5">Support Yaseen</h5>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Get Involved</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Donate</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Sponsor Food</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Sponsor Event</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-extrabold text-[#113B26] text-sm mb-5">Start Learning</h5>
             <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Videos</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Audio Lectures</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Events</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Resources</Link></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h5 className="font-extrabold text-[#113B26] text-sm mb-5">About Yaseen</h5>
             <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Overview</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Leadership</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-500 font-semibold text-xs hover:text-brand-green">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column - Message Input */}
        <div className="lg:col-span-3 flex items-end">
           <form className="w-full relative group">
              <input 
                type="text" 
                placeholder="Write your message..." 
                className="w-full bg-[#f8f9fa] border-b-2 border-gray-200 text-sm text-gray-800 placeholder-gray-400 py-3 pr-10 outline-none focus:border-brand-green transition bg-transparent"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-green transition group-focus-within:text-brand-green flex items-center gap-2 text-xs font-bold"
              >
                Send <Send className="w-4 h-4" />
              </button>
           </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-semibold gap-4">
        <p>© 2026 Yaseen Educational Institute. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gray-600">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-600">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
