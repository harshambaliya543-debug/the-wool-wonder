import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display font-bold">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-2xl">🧶</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Beautiful handcrafted wool creations made with love and care. Each piece is unique and made to order.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Products
              </Link>
              <Link to="/#reviews" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Reviews
              </Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @{BUSINESS_INFO.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Handmade with <Heart className="w-4 h-4 text-primary fill-primary" /> 🧶
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
