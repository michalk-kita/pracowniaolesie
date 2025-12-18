"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-paper overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[50%] bg-forest-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 border border-gold/40 translate-x-4 translate-y-4 z-0" />
              <div className="relative h-full w-full overflow-hidden bg-forest-100 shadow-xl z-10">
                <Image
                  src="https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sylwia Oleś - twórczyni Pracowni O Lesie"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block font-sans text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
                O Pracowni
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-forest-900 mb-8 leading-tight">
                Tworzę z miłości <br />
                <span className="italic text-forest-500">do natury</span>
              </h2>
              
              <div className="prose prose-lg text-forest-700 font-light mb-8 leading-relaxed">
                <p className="mb-4">
                  Mam na imię Sylwia i to ja stoję za kulisami pracowni. Jestem absolwentką liceum plastycznego, 
                  wielbicielką rękodzieła oraz kreatywną duszą pełną pomysłów.
                </p>
                <p>
                  Interesuję się sztuką, modą ślubną oraz dekoracją wnętrz, lubię również gotować 
                  i spędzać czas z najbliższymi na łonie natury. Moja pracownia to miejsce, gdzie papier 
                  spotyka się z emocjami, tworząc niezapomniane pamiątki Waszych najważniejszych chwil.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
                 <Image 
                    src="/signature.png" // Placeholder for signature if needed, or just text
                    alt="Podpis" 
                    width={150} 
                    height={50} 
                    className="opacity-0 hidden" // Hiding until real signature asset
                 />
                 <span className="font-display text-2xl text-gold italic">Sylwia Oleś</span>
                 
                 <Link 
                    href="/o-nas"
                    className="inline-block border-b border-forest-800 text-forest-900 pb-1 text-sm uppercase tracking-widest hover:text-gold hover:border-gold transition-all ml-0 md:ml-auto"
                 >
                    Poznaj moją historię
                 </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
