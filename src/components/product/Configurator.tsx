"use client";
import { useState } from "react";
import { Product, PaperOption, ColorOption, AddonOption } from "@/lib/types";
import { papers, envelopes, addons } from "@/lib/data";
import { Check } from "lucide-react";
import clsx from "clsx";
import { useCartStore } from "@/store/useCartStore";
import { addons as allAddons } from "@/lib/data";

export function Configurator({ product }: { product: Product }) {
  const [selectedPaper, setSelectedPaper] = useState<PaperOption>(papers[0]);
  const [selectedEnvelope, setSelectedEnvelope] = useState<ColorOption>(envelopes[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const addItem = useCartStore(state => state.addItem);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = product.basePrice + selectedPaper.priceModifier + selectedEnvelope.priceModifier;
    selectedAddons.forEach(id => {
      const addon = addons.find(a => a.id === id);
      if (addon) total += addon.price;
    });
    return total;
  };

  const handleAddToCart = () => {
    const total = calculateTotal();
    const selectedAddonObjects = allAddons.filter(a => selectedAddons.includes(a.id));
    
    addItem({
        id: Date.now().toString(),
        productId: product.id,
        productName: product.name,
        productImage: product.images[0],
        quantity: 1,
        totalPrice: total,
        unitPrice: total,
        configuration: {
            paper: selectedPaper,
            envelopeColor: selectedEnvelope,
            addons: selectedAddonObjects
        }
    });
  };

  const formatPrice = (price: number) => price.toFixed(2).replace(".", ",") + " zł";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl md:text-5xl text-forest-900 mb-4">{product.name}</h1>
        <p className="text-2xl font-light text-forest-600">{formatPrice(calculateTotal())} / szt.</p>
      </div>

      <div className="prose prose-sm text-forest-700 font-light leading-relaxed">
        <p>{product.description}</p>
      </div>

      {/* Paper Selection */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-forest-400 mb-4 font-bold">Wybierz Papier</h3>
        <div className="grid grid-cols-1 gap-3">
          {papers.map((paper) => (
            <button
              key={paper.id}
              onClick={() => setSelectedPaper(paper)}
              className={clsx(
                "flex items-center justify-between p-4 border rounded-sm transition-all text-left",
                selectedPaper.id === paper.id 
                  ? "border-forest-800 bg-forest-50/50" 
                  : "border-forest-200 hover:border-forest-400 hover:bg-white"
              )}
            >
              <div>
                <span className="font-display text-lg text-forest-900 block mb-1">{paper.name}</span>
                <span className="text-xs text-forest-500 font-light">{paper.description}</span>
              </div>
              <span className="text-sm font-medium text-forest-700">
                {paper.priceModifier > 0 ? `+${formatPrice(paper.priceModifier)}` : "W cenie"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Envelope Selection */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-forest-400 mb-4 font-bold">Kolor Koperty</h3>
        <div className="flex flex-wrap gap-3">
          {envelopes.map((env) => (
            <button
              key={env.id}
              onClick={() => setSelectedEnvelope(env)}
              className={clsx(
                "w-12 h-12 rounded-full border border-gray-200 shadow-sm relative transition-transform hover:scale-110",
                selectedEnvelope.id === env.id && "ring-2 ring-offset-2 ring-forest-800 scale-110"
              )}
              style={{ backgroundColor: env.hex }}
              title={`${env.name} (+${formatPrice(env.priceModifier)})`}
            >
              {selectedEnvelope.id === env.id && (
                 <span className="absolute inset-0 flex items-center justify-center text-forest-900 drop-shadow-md">
                   <Check size={18} strokeWidth={3} className={env.hex === "#2C3E30" || env.hex === "#1A2B49" ? "text-white" : "text-black"} />
                 </span>
              )}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-forest-600 font-light">Wybrano: <span className="font-medium">{selectedEnvelope.name}</span> ({selectedEnvelope.priceModifier > 0 ? `+${formatPrice(selectedEnvelope.priceModifier)}` : "W cenie"})</p>
      </div>

      {/* Addons Selection */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-forest-400 mb-4 font-bold">Dodatki</h3>
        <div className="space-y-3">
          {addons.map((addon) => (
            <button
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={clsx(
                "flex items-center w-full p-3 rounded-sm border transition-all",
                selectedAddons.includes(addon.id) 
                  ? "border-gold bg-gold/5" 
                  : "border-transparent hover:bg-forest-50"
              )}
            >
              <div className={clsx(
                "w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors",
                selectedAddons.includes(addon.id) ? "bg-gold border-gold text-white" : "border-forest-300"
              )}>
                {selectedAddons.includes(addon.id) && <Check size={12} />}
              </div>
              <span className="text-forest-800 flex-grow text-left font-light">{addon.name}</span>
              <span className="text-forest-600 font-medium">+{formatPrice(addon.price)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-forest-100 sticky bottom-0 bg-paper/90 backdrop-blur-sm pb-4 md:static md:bg-transparent md:pb-0">
        <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-light text-forest-600 uppercase tracking-widest">Suma</span>
            <span className="text-4xl font-display text-forest-900">{formatPrice(calculateTotal())}</span>
        </div>
        <button 
            onClick={handleAddToCart}
            className="w-full bg-forest-900 text-white py-4 uppercase tracking-[0.2em] hover:bg-forest-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 text-sm"
        >
            Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
