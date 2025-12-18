import { Product, PaperOption, ColorOption, AddonOption } from "./types";

export const products: Product[] = [
  {
    id: "1",
    slug: "lesna-opowiesc",
    name: "Leśna Opowieść",
    basePrice: 15.00,
    description: "Delikatne zaproszenie z motywem paproci i leśnych roślin. Idealne na ślub w stylu boho lub rustykalnym. Wykonane na wysokiej jakości papierze ekologicznym.",
    category: "wedding",
    tags: ["boho", "las", "paproć"],
    images: [
      "/17-3.webp",
      "https://images.pexels.com/photos/10321245/pexels-photo-10321245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5913293/pexels-photo-5913293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4041278/pexels-photo-4041278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "2",
    slug: "zloty-blask",
    name: "Złoty Blask",
    basePrice: 18.50,
    description: "Eleganckie zaproszenie z delikatnymi złoceniami i minimalistyczną typografią. Klasyka w nowoczesnym wydaniu.",
    category: "wedding",
    tags: ["glamour", "złoto", "minimalizm"],
    images: [
      "/17-3.webp",
      "https://images.pexels.com/photos/5699435/pexels-photo-5699435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699453/pexels-photo-5699453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "3",
    slug: "polne-kwiaty",
    name: "Polne Kwiaty",
    basePrice: 14.00,
    description: "Romantyczne zaproszenie zdobione akwarelowymi grafikami polnych kwiatów. Subtelne i pełne uroku.",
    category: "wedding",
    tags: ["kwiaty", "romantyczne", "akwarela"],
    images: [
      "/17-3.webp",
      "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: "4",
    slug: "wietrzna-harmonia",
    name: "Wietrzna Harmonia",
    basePrice: 16.00,
    description: "Nowoczesne zaproszenie na papierze czerpanym z surowym wykończeniem brzegów. Prostota, która zachwyca.",
    category: "wedding",
    tags: ["handmade", "nowoczesne", "czerpany"],
    images: [
      "/17-3.webp",
      "https://images.pexels.com/photos/5699419/pexels-photo-5699419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699424/pexels-photo-5699424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
];

export const papers: PaperOption[] = [
  { id: "smooth", name: "Gładki Matowy", priceModifier: 0, description: "Klasyczny, biały papier o gramaturze 300g." },
  { id: "texture", name: "Faktura Lnu", priceModifier: 1.50, description: "Papier z delikatną fakturą przypominającą płótno." },
  { id: "handmade", name: "Papier Czerpany", priceModifier: 4.00, description: "Ręcznie robiony papier z naturalnymi brzegami." },
  { id: "eco", name: "Ekologiczny Kraft", priceModifier: 1.00, description: "Brązowy papier ekologiczny z recyklingu." },
];

export const envelopes: ColorOption[] = [
  { id: "white", name: "Biała", hex: "#FFFFFF", priceModifier: 0 },
  { id: "cream", name: "Kremowa", hex: "#F5F5DC", priceModifier: 0.50 },
  { id: "forest", name: "Butelkowa Zieleń", hex: "#2C3E30", priceModifier: 1.00 },
  { id: "dusty-pink", name: "Brudny Róż", hex: "#D8B4A6", priceModifier: 1.00 },
  { id: "navy", name: "Granat", hex: "#1A2B49", priceModifier: 1.00 },
  { id: "grey", name: "Szary", hex: "#A9A9A9", priceModifier: 1.00 },
];

export const addons: AddonOption[] = [
  { id: "seal-gold", name: "Lak Złoty", price: 3.50, type: "seal" },
  { id: "seal-white", name: "Lak Biały", price: 3.50, type: "seal" },
  { id: "ribbon-silk", name: "Wstążka Jedwabna", price: 4.00, type: "ribbon" },
  { id: "ribbon-jute", name: "Sznurek Jutowy", price: 1.00, type: "ribbon" },
  { id: "gold-leaf", name: "Złocenie Brzegów", price: 5.00, type: "insert" },
];
