import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, description, image }: ProductCardProps) => {
  const productUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappLink = getWhatsAppLink(name, productUrl);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* WhatsApp Button */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="sm" className="w-full gap-2">
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
