"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/types";
import clsx from "clsx";

export function ProductGallery({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-forest-50 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
             <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
             />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={clsx(
              "relative aspect-square overflow-hidden rounded-sm transition-all border",
              selectedImage === idx ? "border-forest-800 opacity-100" : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
             <Image src={img} alt={`${product.name} thumbnail`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
