"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Award, Layers, Cpu, FileCode } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Precisione",
      description: "Progetti accurati al millimetro per ogni applicazione industriale",
    },
    {
      icon: Users,
      title: "Flessibilità",
      description: "Disponibili a lavorare presso la vostra sede quando necessario",
    },
    {
      icon: Lightbulb,
      title: "Innovazione",
      description: "Utilizzo dei software più avanzati per risultati eccellenti",
    },
    {
      icon: Award,
      title: "Esperienza",
      description: "Oltre un decennio di progetti di successo nel settore",
    },
  ];

  return (
    <section
      id="chi-siamo"
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Chi Siamo
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            La nostra storia e
            <span className="block gradient-text">cosa facciamo</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6">
              <strong className="text-white">Studio G</strong> è uno studio tecnico che dispone della 
              decennale esperienza maturata dai suoi fondatori nel campo della{" "}
              <span className="text-blue-400">progettazione meccanica in 3D</span>, ed elettrica; nella 
              realizzazione e nello sviluppo della documentazione necessaria alla costruzione di armadi 
              di comando di apparecchiature industriali nonché della loro impiantistica a bordo.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6">
              Il costante contatto diretto con molteplici realtà industriali nei settori del{" "}
              <span className="text-blue-400">packaging/converting</span> e rebuilding dei relativi 
              impianti (impianti rotocalco, flexo, solvent less, estrusione, accoppiamento, spalmatura) 
              conferisce allo Studio G caratteristiche di esperienza e serietà professionale che sono 
              garanzia del raggiungimento della piena soddisfazione del cliente nella realizzazione dei progetti.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Uno dei nostri punti di forza è la <strong className="text-white">FLESSIBILITÀ</strong>, 
              infatti siamo disponibili a lavorare presso la vostra sede qualora si rendesse necessario.
            </p>
          </motion.div>

          {/* Visual Element - Stacked Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Card 1 - CAD 3D */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 shadow-xl shadow-blue-500/10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">CAD 3D</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">Modellazione avanzata per componenti industriali</p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">CATIA</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">SolidWorks</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">Inventor</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Elettronica */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-indigo-500/20 shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Elettronica</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">Schemi elettrici e programmazione PLC</p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">SPAC</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">PLC</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Documentazione */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-cyan-500/20 shadow-lg"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center flex-shrink-0">
                    <FileCode className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Documentazione</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">Manuali tecnici e distinte materiali</p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Manuali</span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">BOM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
        <br />
        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-slate-800/80"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

