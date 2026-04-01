"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SuccessBanner() {
  return (
    <section className="bg-brand-cream py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200" id="kurikulum">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">
            MEMBENTUK <span className="text-brand-green">AKHLAKUL KARIMAH</span> & KECINTAAN TERHADAP <span className="text-brand-gold">AL-QUR'AN</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Kami berkomitmen memberikan pendidikan agama yang komprehensif, mulai dari kemampuan membaca 
            Al-Qur'an secara tartil hingga pemahaman praktik ibadah harian. Visi kami adalah mencetak generasi 
            yang tidak hanya cerdas, tetapi juga berbudi pekerti luhur sesuai tuntunan Islam.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
