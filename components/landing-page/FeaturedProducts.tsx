import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { Button } from "../ui/button";
import Link from "next/link";
<<<<<<< HEAD
=======
import ProductCard from "../products/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["Saas", "Pricing", "Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Modern Full Stack Next.js Course",
    description: "Learn to build production-ready full stack apps with Next.js",
    tags: ["Next.js", "Full-Stack", "Course"],
    votes: 124,
    isFeatured: false,
  },
];
>>>>>>> 1c4b6a6 (Add featured product: product card)

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All
<<<<<<< HEAD
              <ArrowUpRightIcon className="size-4"/>
            </Link>
          </Button>
        </div>
=======
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
>>>>>>> 1c4b6a6 (Add featured product: product card)
      </div>
    </section>
  );
};

export default FeaturedProducts;
