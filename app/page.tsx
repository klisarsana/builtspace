import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import HeroSection from "@/components/landing-page/HeroSection";
import RecentlyLaunchedProducts from "@/components/landing-page/RecentlyLaunchedProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <FeaturedProducts />

      <RecentlyLaunchedProducts />
    </div>
  );
}
