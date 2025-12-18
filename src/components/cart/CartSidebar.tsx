"use client";
import { useCartStore } from "@/store/useCartStore";
import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartSidebar() {
  const { isOpen, closeCart, items, removeItem, total } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-forest-900/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-paper shadow-2xl z-[70] flex flex-col border-l border-forest-100"
          >
            <div className="p-6 border-b border-forest-100 flex items-center justify-between bg-paper">
              <h2 className="font-display text-2xl text-forest-900">Twój Koszyk</h2>
              <button onClick={closeCart} className="p-2 hover:bg-forest-50 rounded-full transition-colors text-forest-800">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-12 text-forest-500 font-light">
                  Twój koszyk jest pusty.
                  <br />
                  <Link href="/sklep" onClick={closeCart} className="text-forest-800 underline mt-4 inline-block hover:text-gold">
                    Wróć do sklepu
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-forest-50 pb-6 last:border-0">
                    <div className="relative w-20 h-24 bg-forest-50 flex-shrink-0">
                      <Image src={item.productImage} alt={item.productName} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                         <h3 className="font-display text-lg text-forest-900 leading-tight">{item.productName}</h3>
                         <button 
                            onClick={() => removeItem(item.id)}
                            className="text-forest-300 hover:text-red-500 transition-colors p-1"
                         >
                            <Trash2 size={16} />
                         </button>
                      </div>
                      <p className="text-xs text-forest-500 font-light mb-2">
                        {item.configuration.paper.name}, {item.configuration.envelopeColor.name}
                      </p>
                      <div className="flex justify-between items-end mt-2">
                        <span className="text-xs text-forest-400">Ilość: 1</span>
                        <span className="font-medium text-forest-800">{item.totalPrice.toFixed(2)} zł</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-forest-100 bg-forest-50/30">
              <div className="flex justify-between items-center mb-6">
                <span className="text-forest-600 uppercase tracking-widest text-sm">Suma</span>
                <span className="font-display text-3xl text-forest-900">{total().toFixed(2)} zł</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-forest-900 text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Przejdź do kasy
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
