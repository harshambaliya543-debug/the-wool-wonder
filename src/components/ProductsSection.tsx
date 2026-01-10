import ProductCard from "./ProductCard";

// Import product images
import roseBouquet from "@/assets/products/rose-bouquet.jpg";
import sunflower from "@/assets/products/sunflower.jpg";
import lavender from "@/assets/products/lavender.jpg";
import keychain from "@/assets/products/keychain.jpg";
import coasters from "@/assets/products/coasters.jpg";
import potHolder from "@/assets/products/pot-holder.jpg";

// Products with actual images
const products = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "Handknit roses in soft pink and white wool, perfect for gifting.",
    image: roseBouquet,
    category: "bouquets",
  },
  {
    id: 2,
    name: "Sunflower Single",
    description: "Cheerful sunflower that never wilts, brings warmth to any room.",
    image: sunflower,
    category: "flowers",
  },
  {
    id: 3,
    name: "Lavender Bundle",
    description: "Calming lavender stems, hand-knit with delicate purple yarn.",
    image: lavender,
    category: "flowers",
  },
  {
    id: 4,
    name: "Flower Keychain",
    description: "Cute mini flower keychain to brighten your everyday carry.",
    image: keychain,
    category: "keychains",
  },
  {
    id: 5,
    name: "Kitchen Coasters",
    description: "Set of 4 handmade coasters in pastel colors.",
    image: coasters,
    category: "kitchen",
  },
  {
    id: 6,
    name: "Pot Holder Set",
    description: "Charming handknit pot holders for your cozy kitchen.",
    image: potHolder,
    category: "kitchen",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Handcrafted With Care
          </h2>
          <p className="text-muted-foreground text-lg">
            Each piece is lovingly made by hand, ensuring unique quality and charm in every creation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
