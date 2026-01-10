// Easy to update business information
export const BUSINESS_INFO = {
  name: "Woolly Wonders",
  tagline: "Handmade Wool Creations Made With Love",
  description: "Beautiful handcrafted wool flowers, bouquets, keychains, and kitchen items — each piece made with care and creativity.",
  whatsapp: "1234567890", // Replace with actual WhatsApp number
  instagram: "woolly.wonders", // Replace with actual Instagram handle
  instagramUrl: "https://instagram.com/woolly.wonders",
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Rose Bouquet",
    description: "Handknit roses in soft pink and white wool, perfect for gifting.",
    image: "/products/rose-bouquet.jpg",
    category: "bouquets",
  },
  {
    id: 2,
    name: "Sunflower Single",
    description: "Cheerful sunflower that never wilts, brings warmth to any room.",
    image: "/products/sunflower.jpg",
    category: "flowers",
  },
  {
    id: 3,
    name: "Lavender Bundle",
    description: "Calming lavender stems, hand-knit with delicate purple yarn.",
    image: "/products/lavender.jpg",
    category: "flowers",
  },
  {
    id: 4,
    name: "Flower Keychain",
    description: "Cute mini flower keychain to brighten your everyday carry.",
    image: "/products/keychain.jpg",
    category: "keychains",
  },
  {
    id: 5,
    name: "Kitchen Coasters",
    description: "Set of 4 handmade coasters in pastel colors.",
    image: "/products/coasters.jpg",
    category: "kitchen",
  },
  {
    id: 6,
    name: "Pot Holder Set",
    description: "Charming handknit pot holders for your cozy kitchen.",
    image: "/products/pot-holder.jpg",
    category: "kitchen",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    image: "/reviews/review1.jpg",
  },
  {
    id: 2,
    name: "Emily R.",
    image: "/reviews/review2.jpg",
  },
  {
    id: 3,
    name: "Jessica L.",
    image: "/reviews/review3.jpg",
  },
  {
    id: 4,
    name: "Amanda K.",
    image: "/reviews/review4.jpg",
  },
];

export const getWhatsAppLink = (productName?: string, productUrl?: string) => {
  const baseUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}`;
  if (productName && productUrl) {
    const message = encodeURIComponent(
      `Hi! I'm interested in this product: ${productName}. Link: ${productUrl}`
    );
    return `${baseUrl}?text=${message}`;
  }
  return baseUrl;
};
