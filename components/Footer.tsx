"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="kontak" className="pt-24 bg-white flex flex-col">
      {/* Upper Contact Section */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-20 text-center">
        <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-3 font-outfit">Hubungi Kami</p>
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-16 font-outfit">Konsultasi & Pendaftaran</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left items-center">
           {/* Left: Map */}
           <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
              {/* Fake Map using iframe, we can use an actual maps embed if needed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.90483842103!2d106.96918519726563!3d-6.284792000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d2817ee67b9%3A0xe5be26e95ce217c4!2sSetu%2C%20Bekasi%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1709117652750!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>

           {/* Right: Contact Details */}
           <div className="flex flex-col gap-8 bg-brand-bg rounded-3xl p-8 md:p-12 border border-brand-secondary/30">
              <div className="flex items-start gap-5">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand-primary w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-dark mb-1 font-outfit text-lg">Alamat Lengkap</h4>
                    <p className="text-gray-600 leading-relaxed text-[15px]">Villa Setu Permai Blok MM No 22, RT 002 RW 018,<br />Kelurahan Ciledug, Kecamatan Setu,<br />Kabupaten Bekasi 17320</p>
                 </div>
              </div>

              <div className="flex items-start gap-5">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-primary w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-dark mb-1 font-outfit text-lg">Telepon / WhatsApp</h4>
                    <p className="text-gray-600 leading-relaxed text-[15px]">62 896-1221-3131 (Ustadzah Patimah)</p>
                 </div>
              </div>

              <div className="flex items-start gap-5">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-brand-primary w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                    <h4 className="font-bold text-brand-dark mb-1 font-outfit text-lg">Waktu Operasional</h4>
                    <p className="text-gray-600 leading-relaxed text-[15px]">Taman Kanak-Kanak & SD: 16.30 - 18.00<br />Lanjutan (SMP): 18.30 - 20.00</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Dark Bottom Section */}
      <div className="bg-brand-dark py-12 border-t-4 border-brand-primary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="flex justify-center md:justify-start">
             <Link href="#" className="flex items-center gap-4">
               <img src="/logoam.png" alt="Logo TPQ Al-Muthmainnah" className="h-20 md:h-24 w-auto object-contain bg-white rounded-xl p-2" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <div className="flex flex-col text-left">
                 <span className="text-white font-black text-lg md:text-xl font-outfit tracking-tight uppercase">TPQ Al-Muthmainnah</span>
               </div>
             </Link>
          </div>

          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
             <Link href="#profil" className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-outfit">Tentang Kami</Link>
             <Link href="#program" className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-outfit">Program</Link>
             <Link href="#fasilitas" className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-outfit">Fasilitas</Link>
             <Link href="#galeri" className="text-gray-400 hover:text-white transition-colors text-sm font-medium font-outfit">Galeri</Link>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
               <FaFacebookF size={16} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
               <FaInstagram size={16} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
               <FaYoutube size={16} />
             </a>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TPQ Al-Muthmainnah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
