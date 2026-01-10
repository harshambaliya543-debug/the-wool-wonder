import review1 from "@/assets/reviews/review1.jpg";
import review2 from "@/assets/reviews/review2.jpg";
import review3 from "@/assets/reviews/review3.jpg";
import review4 from "@/assets/reviews/review4.jpg";

const testimonials = [
  { id: 1, name: "Sarah M.", image: review1 },
  { id: 2, name: "Emily R.", image: review2 },
  { id: 3, name: "Jessica L.", image: review3 },
  { id: 4, name: "Amanda K.", image: review4 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real moments shared by our happy customers on Instagram
          </p>
        </div>

        {/* Reviews Grid - Instagram Story Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Story Image */}
              <img
                src={testimonial.image}
                alt={`Review from ${testimonial.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Customer Name */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-medium text-sm">
                  {testimonial.name}
                </p>
              </div>

              {/* Instagram-style ring */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-primary/20 group-hover:ring-primary/40 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
