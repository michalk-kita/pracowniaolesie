import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Configurator } from "@/components/product/Configurator";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-24">
             <ProductGallery product={product} />
          </div>
          <Configurator product={product} />
       </div>
    </div>
  );
}
