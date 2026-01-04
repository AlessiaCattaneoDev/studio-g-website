"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileCode,
  Layers,
  Cpu,
  BookOpen,
  Wrench,
  Box,
} from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Layers,
      title: "Progettazione Meccanica 3D",
      description:
        "Disegnazione di particolari meccanici in 3D secondo le richieste e su specifiche del cliente. Utilizziamo Autocad, Inventor, SolidWorks e CATIA V5-V6.",
      tools: ["Autocad", "Inventor", "SolidWorks", "CATIA V5-V6"],
    },
    {
      icon: Cpu,
      title: "Schemi Elettrici",
      description:
        "Progettazione e sviluppo di schemi elettrici con SPAC Automazione. Schemi relativi al PLC e documentazione completa.",
      tools: ["SPAC Automazione", "PLC"],
    },
    {
      icon: FileCode,
      title: "Carpenterie Meccaniche",
      description:
        "Disegnazione delle carpenterie meccaniche relative ai quadri elettrici, pulsantiere e disposizioni apparecchiature.",
      tools: ["Quadri elettrici", "Pulsantiere"],
    },
    {
      icon: Box,
      title: "Armadi di Comando",
      description:
        "Realizzazione e sviluppo della documentazione necessaria alla costruzione di armadi di comando di apparecchiature industriali.",
      tools: ["Documentazione tecnica", "Impiantistica"],
    },
    {
      icon: Wrench,
      title: "Distinte Materiali",
      description:
        "Elaborazione delle distinte dei materiali utilizzati su ogni singola commessa con precisione e dettaglio.",
      tools: ["BOM", "Gestione commesse"],
    },
    {
      icon: BookOpen,
      title: "Manuali e Documentazione",
      description:
        "Realizzazione di manuali d'uso e documentazione per le parti di scorta. Documentazione completa per ogni progetto.",
      tools: ["Manuali d'uso", "Parti di scorta"],
    },
  ];

  const industries = [
    "Packaging",
    "Converting",
    "Rotocalco",
    "Flexo",
    "Solvent Less",
    "Estrusione",
    "Accoppiamento",
    "Spalmatura",
  ];

  return (
    <section
      id="servizi"
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Servizi
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Le nostre
            <span className="block gradient-text">competenze</span>
          </h2>
          <div className="flex justify-center px-4">
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl text-center">
              La fornitura della documentazione comprende tutti gli aspetti della progettazione industriale
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-blue-500/20">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 rounded-xl sm:rounded-2xl"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white pb-6 sm:pb-8 md:pb-10">
            Settori di specializzazione
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-all cursor-default text-xs sm:text-sm md:text-base"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Software Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl glass text-center"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
            Software utilizzati
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "SPAC Automazione", desc: "Schemi elettrici" },
              { name: "Autocad", desc: "CAD 2D/3D" },
              { name: "Inventor", desc: "Progettazione 3D" },
              { name: "SolidWorks", desc: "Modellazione" },
              { name: "CATIA V5-V6", desc: "Design avanzato" },
            ].map((software, index) => (
              <motion.div
                key={software.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-sm sm:text-base md:text-lg font-medium text-white">
                  {software.name}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">{software.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

