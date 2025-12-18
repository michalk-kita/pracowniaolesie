"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: "zaproszenia",
    title: "Zaproszenia Ślubne",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=zaproszenia",
    size: "large" // zajmuje 2 kolumny
  },
  {
    id: "vouchery",
    title: "Vouchery",
    image: "https://images.pexels.com/photos/6054170/pexels-photo-6054170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=vouchery",
    size: "small"
  },
  {
    id: "boxy",
    title: "Boxy Prezentowe",
    image: "https://images.pexels.com/photos/6614480/pexels-photo-6614480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=boxy",
    size: "small"
  },
  {
    id: "chrzest",
    title: "Chrzest Święty",
    image: "https://images.pexels.com/photos/35372/family-baby-baptism-christian.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=chrzest",
    size: "small"
  },
  {
    id: "metryczki",
    title: "Metryczki",
    image: "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=metryczki",
    size: "small"
  },
  {
    id: "plakaty",
    title: "Plakaty",
    image: "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=plakaty",
    size: "large"
  },
   {
    id: "pamiatki",
    title: "Pamiątki",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/sklep?kategoria=pamiatki",
    size: "wide" // pełna szerokość
  },
];

export function OfferSection() {
  return (
    <section className="py-20 bg-paper-dark/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="block font-sans text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
             Kategorie
           </span>
           <h2 className="font-display text-4xl text-forest-900">Nasza Oferta</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {categories.map((cat, idx) => (
            <Link 
              href={cat.link} 
              key={cat.id}
              className={`group relative overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500
                ${cat.size === 'large' ? 'md:col-span-2' : ''}
                ${cat.size === 'wide' ? 'md:col-span-2 lg:col-span-4 lg:row-span-1' : ''}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="border border-white/0 group-hover:border-white/80 p-6 transition-all duration-500 w-[90%] h-[85%] flex items-center justify-center relative">
                    <h3 className="font-display text-3xl text-white drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.title}
                    </h3>
                    <span className="absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white text-xs uppercase tracking-widest">
                        Zobacz
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
