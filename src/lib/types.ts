export type Category = "wedding" | "occasional" | "business";

export interface PaperOption {
  id: string;
  name: string;
  priceModifier: number; // e.g. 0 for standard, 1.5 for handmade
  description?: string;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  priceModifier: number;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  type: "seal" | "ribbon" | "insert";
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  basePrice: number;
  description: string;
  images: string[];
  category: Category;
  tags?: string[];
}

export interface CartItem {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    quantity: number;
    totalPrice: number;
    unitPrice: number;
    configuration: {
        paper: PaperOption;
        envelopeColor: ColorOption;
        addons: AddonOption[];
    }
}
