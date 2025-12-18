"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-paper flex items-center overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-50/50 z-0 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block font-sans text-gold uppercase tracking-[0.25em] text-xs md:text-sm mb-6 font-bold"
            >
              Pracownia Papeterii Ślubnej
            </motion.span>
            
            <h1 className="font-display text-5xl md:text-7xl text-forest-900 mb-8 leading-[1.1]">
              Tworzymy <br/>
              <span className="italic text-forest-500">historię</span> zapisaną <br/>
              na papierze.
            </h1>

            <p className="font-light text-forest-700 text-lg mb-10 leading-relaxed max-w-md">
              Każde zaproszenie to początek Waszej wspólnej opowieści. 
              Projektujemy z dbałością o każdy detal, inspirując się naturą i Waszą miłością.
            </p>

            <div className="flex gap-4">
              <Link 
                href="/sklep" 
                className="group relative px-8 py-4 bg-forest-900 text-white overflow-hidden transition-all hover:bg-forest-800"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold">Zobacz Kolekcje</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-forest-800/50" />
              </Link>
              
              <Link 
                href="/o-nas" 
                className="px-8 py-4 border border-forest-200 text-forest-900 hover:border-gold hover:text-gold transition-colors uppercase tracking-[0.2em] text-xs font-bold"
              >
                O Nas
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image Composition */}
          <div className="relative h-[500px] md:h-[700px] w-full hidden md:block">
            {/* Main Image (Tall) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-10 right-10 w-2/3 h-[85%] z-10"
            >
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                 <Image
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Elegancka papeteria ślubna"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  priority
                />
              </div>
            </motion.div>

            {/* Secondary Image (Overlapping) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-20 left-0 w-1/2 h-[45%] z-20 border-8 border-paper shadow-xl"
            >
               <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Detale zaproszeń - lak i wstążka"
                  fill
                  className="object-cover"
                />
               </div>
            </motion.div>

            {/* Decorative Outline Box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute top-0 right-0 w-2/3 h-[85%] border border-gold/30 -translate-y-4 translate-x-4 z-0"
            />
          </div>

           {/* Mobile Image (Single) */}
           <div className="md:hidden mt-8 relative aspect-[4/5] w-full">
              <Image
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Elegancka papeteria ślubna"
                  fill
                  className="object-cover shadow-lg"
                  priority
                />
           </div>

        </div>
      </div>
    </section>
  );
}
