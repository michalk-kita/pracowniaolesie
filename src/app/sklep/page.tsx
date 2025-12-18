import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="block font-sans text-forest-400 uppercase tracking-[0.2em] text-sm mb-4">
          Nasza Oferta
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-forest-900">Kolekcja Ślubna</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product, idx) => (
          <Link 
            href={`/sklep/${product.slug}`} 
            key={product.id} 
            className="group cursor-pointer block"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-forest-50 mb-6">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-500" />
              
              {/* Quick View Button (Visual Only) */}
              <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-forest-900 px-6 py-3 uppercase tracking-widest text-xs border border-forest-100">
                  Zobacz szczegóły
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-2xl text-forest-900 mb-2 group-hover:text-gold transition-colors duration-300">{product.name}</h3>
              <p className="text-forest-600 font-light text-sm uppercase tracking-widest">
                od {product.basePrice.toFixed(2)} zł
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
