import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-brand-primary text-white w-full py-2.5 px-6 hidden lg:block text-sm font-medium">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <a href="tel:62 896-1221-3131" className="flex items-center gap-2 hover:text-brand-dark transition-colors">
            <Phone size={14} className="opacity-80" />
            <span>62 896-1221-3131</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-brand-dark transition-colors">
            <MapPin size={14} className="opacity-80" />
            <span>Villa Setu Permai, Setu, Bekasi</span>
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <a href="#" className="p-1.5 border border-white/30 rounded-full hover:bg-white hover:text-brand-primary transition-colors">
            <FaFacebookF size={12} />
          </a>
          <a href="#" className="p-1.5 border border-white/30 rounded-full hover:bg-white hover:text-brand-primary transition-colors">
            <FaInstagram size={12} />
          </a>
          <a href="#" className="p-1.5 border border-white/30 rounded-full hover:bg-white hover:text-brand-primary transition-colors">
            <FaYoutube size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
