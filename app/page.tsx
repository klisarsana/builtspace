import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import HeroSection from "@/components/landing-page/HeroSection";
import RecentlyLaunchedProducts from "@/components/landing-page/RecentlyLaunchedProducts";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <FeaturedProducts />

      <Suspense
        fallback={
          <div className="wrapper flex items-center gap-2">
            Loading Recently Launched Products...
            <LoaderIcon className="size-4 animate-spin" />
          </div>
        }
      >
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}
