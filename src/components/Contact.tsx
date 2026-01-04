"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle, Linkedin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 347 775 7878",
      subtext: "Cattaneo Gian Piero",
      href: "tel:+393477757878",
    },
    {
      icon: Mail,
      label: "Email",
      value: "studio-gc@libero.it",
      subtext: "Rispondiamo entro 24h",
      href: "mailto:studio-gc@libero.it",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.studiogc.info",
      subtext: "Visita il nostro sito",
      href: "https://www.studiogc.info",
    },
    {
      icon: MapPin,
      label: "Indirizzo",
      value: "Via Aldo Sanlorenzo 35d",
      subtext: "San Giorgio Monferrato (AL)",
      href: "https://maps.google.com/?q=Via+Aldo+Sanlorenzo+35d+San+Giorgio+Monferrato",
    },
  ];

  return (
    <section
      id="contatti"
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 md:mb-20 pb-2 sm:pb-5"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            Contatti
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Parliamo del tuo
            <span className="block gradient-text">prossimo progetto</span>
          </h2>
          <div className="flex justify-center px-4">
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl text-center">
              Siamo a disposizione per discutere le vostre esigenze e trovare la soluzione migliore
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl pb-5 sm:text-2xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
              Informazioni di contatto
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-start gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-white font-medium group-hover:text-blue-400 transition-colors break-all sm:break-normal">
                      {info.value}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 sm:mt-1">{info.subtext}</p>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl pb-5 sm:text-2xl gap-5 font-semibold text-white mb-4 sm:mb-6 md:mb-8">
              Modulo di contatto
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field text-sm sm:text-base"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field text-sm sm:text-base"
                    placeholder="la.tua@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2"
                >
                  Azienda
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input-field text-sm sm:text-base"
                  placeholder="Nome azienda (opzionale)"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2"
                >
                  Oggetto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="input-field text-sm sm:text-base"
                  placeholder="Di cosa hai bisogno?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm text-slate-400 mb-1.5 sm:mb-2"
                >
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="input-field resize-none text-sm sm:text-base sm:rows-5"
                  placeholder="Descrivi il tuo progetto o richiesta..."
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg py-3 sm:py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Messaggio Inviato!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Invia Messaggio
                  </>
                )}
              </motion.button>
            </form>

            {/* LinkedIn CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-900 px-4 text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                    oppure
                  </span>
                </div>
              </div>
              <motion.a
                href="https://www.linkedin.com/company/studio-g-snc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg py-3 sm:py-4 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white font-medium transition-all duration-300 shadow-lg shadow-[#0A66C2]/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                Contattaci su LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

