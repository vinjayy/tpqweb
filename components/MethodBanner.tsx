"use client";
import { motion } from "framer-motion";
import { BookOpen, Repeat, UserSquare, Activity } from "lucide-react";

const methods = [
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Metode Ummi & Talaqqi",
    text: "Pembelajaran terstruktur & setor langsung ke Ustadz.",
  },
  {
    icon: <Repeat className="w-8 h-8 text-white" />,
    title: "Hafalan (Tikrar)",
    text: "Program hafalan dengan pengulangan terencana.",
  },
  {
    icon: <UserSquare className="w-8 h-8 text-white" />,
    title: "Cerita Islami & Akhlak",
    text: "Membangun karakter melalui teladan kisah Nabi.",
  },
  {
    icon: <Activity className="w-8 h-8 text-white" />,
    title: "Praktik Langsung",
    text: "Penerapan ibadah harian secara terbimbing.",
  },
];

export default function MethodBanner() {
  return (
    <section className="bg-brand-green py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-green-500/50"
        >
          {methods.map((method, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="text-center md:px-6 pt-8 md:pt-0 first:pt-0 flex flex-col items-center group"
            >
              <div className="bg-white/10 rounded-full p-4 mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                {method.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">{method.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{method.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </section>
  );
}
