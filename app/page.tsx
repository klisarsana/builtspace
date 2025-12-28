import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import HeroSection from "@/components/landing-page/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <FeaturedProducts />
    </div>
  );
}
