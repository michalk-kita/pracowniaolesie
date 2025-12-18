"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";

const instagramPhotos = [
  "https://images.pexels.com/photos/5699419/pexels-photo-5699419.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6207406/pexels-photo-6207406.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="container mx-auto px-6 mb-12 text-center">
        <Link 
            href="https://instagram.com/pracowniaolesie" 
            target="_blank"
            className="inline-flex items-center gap-2 font-display text-2xl md:text-3xl text-forest-900 hover:text-gold transition-colors"
        >
            <Instagram size={28} />
            <span>@pracowniaolesie</span>
        </Link>
        <p className="mt-4 text-forest-500 font-light text-sm tracking-widest uppercase">
            Dołącz do nas na Instagramie
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {instagramPhotos.map((photo, idx) => (
          <Link 
            href="https://instagram.com/pracowniaolesie"
            target="_blank"
            key={idx} 
            className="group relative aspect-square overflow-hidden block"
          >
            <Image
              src={photo}
              alt={`Instagram photo ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
