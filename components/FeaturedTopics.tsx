"use client";
import React from "react";
import { BookOpen, Calendar, DollarSign, Activity, Handshake } from "lucide-react";
import { FaDrum } from "react-icons/fa"; // Closest approximation to the icon

export default function FeaturedTopics() {
  const topics = [
    { label: "News/Blog", icon: <FaDrum className="w-8 h-8" />, active: false },
    { label: "Educational Content", icon: <BookOpen className="w-8 h-8" />, active: true },
    { label: "Events", icon: <Calendar className="w-8 h-8" />, active: false },
    { label: "Donate", icon: <DollarSign className="w-8 h-8" />, active: false },
    { label: "Services", icon: <Activity className="w-8 h-8" />, active: false },
    { label: "Get involved", icon: <Handshake className="w-8 h-8" />, active: false },
  ];

  return (
    <section className="bg-brand-bg py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold text-brand-green tracking-tight">Featured Topics</h3>
          <button className="bg-[#EFFFED] text-brand-green px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-100 transition">
            Show all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {topics.map((topic, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-6 bg-white rounded-3xl border transition-all duration-300 hover:shadow-xl cursor-pointer h-52 relative overflow-hidden ${
                topic.active 
                  ? "border-green-100 shadow-md text-brand-green" 
                  : "border-gray-100 text-gray-500 hover:border-gray-200"
              }`}
            >
              <div className={`mb-6 p-2 ${topic.active ? "text-brand-green" : "text-gray-400"}`}>
                {topic.icon}
              </div>
              <p className={`text-[15px] font-bold text-center px-1 leading-tight ${topic.active ? "text-brand-green" : "text-gray-800"}`}>
                {topic.label}
              </p>
              {topic.active && (
                <div className="mt-4 text-xs text-brand-green font-semibold underline decoration-2 underline-offset-4">View Details</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
