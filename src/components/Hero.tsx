"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cog, Cpu, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons - Hidden on small mobile, visible from sm breakpoint */}
        <motion.div
          className="absolute top-1/3 left-[5%] sm:left-[15%] text-blue-500/20 hidden sm:block"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cog className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-[5%] sm:right-[15%] text-blue-500/20 hidden sm:block"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cpu className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
        </motion.div>
        <motion.div
          className="absolute top-[60%] left-[10%] sm:left-[20%] text-indigo-500/20 hidden sm:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </motion.div>
      </div>
      <br />
      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm tracking-widest uppercase">
            Progettazione Industriale
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-white">Studio G</span>
          <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 text-slate-400 font-normal">
            s.n.c. di Cattaneo e Calvo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl text-blue-400 font-medium mb-6 sm:mb-8 tracking-wide px-4 sm:px-0"
        >
          Progettazione Meccanica in 3D ed Elettronica
        </motion.p>

        <div className="flex justify-center px-4 sm:px-5">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl text-center mb-8 sm:mb-12 leading-relaxed"
          >
            Decennale esperienza nel settore del packaging e converting. 
            Soluzioni innovative per l&apos;industria italiana ed internazionale.
          </motion.p>
        </div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center px-4 sm:px-5"
        >
          <motion.a
            href="#chi-siamo"
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scopri di più
          </motion.a>
          <motion.a
            href="#contatti"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-blue-500 transition-all text-base sm:text-lg w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contattaci
          </motion.a>
        </motion.div>
        <br />Informazioni di contatto
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
        >
          {[
            { value: "10+", label: "Anni di Esperienza" },
            { value: "500+", label: "Progetti Completati" },
            { value: "100%", label: "Clienti Soddisfatti" },
            { value: "24/7", label: "Supporto Tecnico" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#chi-siamo"
          className="flex flex-col items-center text-slate-500 hover:text-blue-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}

