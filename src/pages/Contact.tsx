import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { MessageCircle, Instagram, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const name = formData.name.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      toast({
        title: "Please fill in all fields",
        description: "Name and message are required.",
        variant: "destructive",
      });
      return;
    }

    if (name.length > 100) {
      toast({
        title: "Name too long",
        description: "Name must be less than 100 characters.",
        variant: "destructive",
      });
      return;
    }

    if (message.length > 1000) {
      toast({
        title: "Message too long",
        description: "Message must be less than 1000 characters.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hi! My name is ${name}.\n\n${message}`
    );
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    setFormData({ name: "", message: "" });
    
    toast({
      title: "Message sent!",
      description: "You'll be redirected to WhatsApp to complete your message.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-blush-light">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you! Reach out for custom orders, questions, or just to say hello.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  The fastest way to reach us is through WhatsApp. We typically respond within a few hours!
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Chat with us directly</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">@{BUSINESS_INFO.instagram}</p>
                    </div>
                  </a>
                </div>

                {/* Business Name */}
                <div className="mt-10 p-6 rounded-2xl bg-muted/50">
                  <p className="font-display font-semibold text-lg text-foreground mb-2">
                    {BUSINESS_INFO.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Handmade wool creations, made with love 🧶
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12 px-6 rounded-2xl bg-sage-light">
                    <CheckCircle className="w-16 h-16 text-sage mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Continue the conversation on WhatsApp.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 rounded-xl"
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you're looking for..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="min-h-32 rounded-xl resize-none"
                        maxLength={1000}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full gap-2">
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      This will open WhatsApp with your message pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
