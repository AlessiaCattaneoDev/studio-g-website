"use client";

import { motion } from "framer-motion";
import { ArrowUp, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-10 sm:py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      
      {/* Top border */}
      <div className="section-container">
        <div className="section-divider mb-8 sm:mb-12 md:mb-16" />
      </div>
      <br />
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-lg sm:text-xl font-[var(--font-display)]">
                  G
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-base sm:text-lg">Studio G</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">
                  s.n.c.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Progettazione Meccanica in 3D ed Elettronica. Esperienza decennale
              nel settore industriale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">
              Link Rapidi
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#chi-siamo", label: "Chi Siamo" },
                { href: "#servizi", label: "Servizi" },
                { href: "#contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">
              Contatti
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-400">
              <li>
                <a
                  href="tel:+393477757878"
                  className="hover:text-blue-400 transition-colors"
                >
                  +39 347 775 7878
                </a>
              </li>
              <li>
                <a
                  href="mailto:studio-gc@libero.it"
                  className="hover:text-blue-400 transition-colors break-all sm:break-normal"
                >
                  studio-gc@libero.it
                </a>
              </li>
              <li>Via Aldo Sanlorenzo 35d</li>
              <li>San Giorgio Monferrato (AL)</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/studio-g-snc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Contattaci su LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-slate-800 gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Studio G s.n.c. di Cattaneo e Calvo. Tutti i diritti riservati.
            </p>
            <p className="text-slate-600 text-xs mt-1">
              Made with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/alessia--cattaneo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                Alessia Cattaneo
              </a>
            </p>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Torna in alto"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

