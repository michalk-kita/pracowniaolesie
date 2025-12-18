import { Hero } from "@/components/home/Hero";
import { OfferSection } from "@/components/home/OfferSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BestsellersSection } from "@/components/home/BestsellersSection";
import { InstagramSection } from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <OfferSection />
      <BestsellersSection />
      <AboutSection />
      <InstagramSection />
    </div>
  );
}
