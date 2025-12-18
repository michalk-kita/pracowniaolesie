"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data"; // Używamy istniejących produktów jako bestsellerów
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BestsellersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="block font-sans text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Ulubieńce Klientów
          </span>
          <h2 className="font-display text-4xl text-forest-900">Bestsellery</h2>
        </div>
        
        <div className="hidden md:flex gap-4">
             {/* Opcjonalne strzałki nawigacyjne (wizualne w tym wariancie drag) */}
            <div className="text-forest-300 text-sm flex items-center gap-2">
                <ChevronLeft size={20} />
                <span>Przesuń</span>
                <ChevronRight size={20} />
            </div>
        </div>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"> {/* Padding left aligned with container */}
        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 w-fit pr-12"
          >
            {products.map((product) => (
              <Link 
                href={`/sklep/${product.slug}`} 
                key={product.id}
                className="group relative w-[280px] md:w-[350px] flex-shrink-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-forest-50 mb-6 rounded-sm">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-forest-900 border border-forest-100">
                    Bestseller
                  </div>

                   {/* Quick Action */}
                   <div className="absolute inset-0 bg-forest-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-forest-900 px-6 py-3 uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                            Zobacz
                        </span>
                   </div>
                </div>

                <div className="text-left">
                  <h3 className="font-display text-2xl text-forest-900 mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-forest-500 font-light text-sm uppercase tracking-widest mb-3">
                    od {product.basePrice.toFixed(2)} zł
                  </p>
                </div>
              </Link>
            ))}
            
            {/* Karta "Zobacz Wszystkie" */}
            <Link 
                href="/sklep"
                className="group relative w-[200px] flex-shrink-0 flex items-center justify-center bg-forest-50 border border-forest-100 hover:bg-forest-100 transition-colors rounded-sm"
            >
                <div className="text-center">
                    <span className="block font-display text-xl text-forest-900 mb-2">Zobacz<br/>Wszystkie</span>
                    <div className="w-12 h-[1px] bg-gold mx-auto group-hover:w-20 transition-all duration-300" />
                </div>
            </Link>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
