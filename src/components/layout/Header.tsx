"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useCartStore } from "@/store/useCartStore";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, items } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-paper/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative h-12 w-48 block">
           <Image 
             src="/LOGO-PNG.webp" 
             alt="Pracownia O Lesie" 
             fill 
             className="object-contain object-left"
             priority
           />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-forest-800 font-light tracking-widest uppercase text-sm">
          <Link href="/sklep" className="hover:text-gold transition-colors">Sklep</Link>
          <Link href="/o-nas" className="hover:text-gold transition-colors">O Pracowni</Link>
          <Link href="/kontakt" className="hover:text-gold transition-colors">Kontakt</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
             onClick={toggleCart}
             className="relative p-2 text-forest-900 hover:text-gold transition-colors"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {mounted && items.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-white text-[10px] flex items-center justify-center rounded-full">
                {items.length}
                </span>
            )}
          </button>
          
          <button 
            className="md:hidden p-2 text-forest-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-paper shadow-lg md:hidden border-t border-forest-100"
          >
            <nav className="flex flex-col p-6 space-y-4 text-center font-light uppercase text-sm text-forest-800">
              <Link href="/sklep" onClick={() => setIsMobileMenuOpen(false)}>Sklep</Link>
              <Link href="/o-nas" onClick={() => setIsMobileMenuOpen(false)}>O Pracowni</Link>
              <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
