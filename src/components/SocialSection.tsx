import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Instagram } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-blush-light">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Instagram Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background card-shadow mb-8">
            <Instagram className="w-10 h-10 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            See more reviews & handmade creations. Join our cozy community and stay updated with new products!
          </p>

          {/* Instagram Handle */}
          <p className="text-xl font-display font-semibold text-primary mb-6">
            @{BUSINESS_INFO.instagram}
          </p>

          {/* CTA Button */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl" className="gap-2">
              <Instagram className="w-5 h-5" />
              Visit Our Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
