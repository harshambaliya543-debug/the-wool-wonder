import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Handmade wool creations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-light text-primary mb-6 animate-fade-up">
            <span className="text-lg">🧶</span>
            <span className="text-sm font-medium">Handmade with Love</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {BUSINESS_INFO.tagline}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {BUSINESS_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </Button>
            </a>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={scrollToProducts}
              className="w-full sm:w-auto gap-2"
            >
              View Products
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
