import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const reviews = [
  {
    name: "Priya R.",
    text: "Absolutely loved my bridal makeup! The team was so professional and made me feel like a queen on my special day. Highly recommend for bridal packages.",
    rating: 5,
    highlight: "Bridal Expertise",
  },
  {
    name: "Karthik S.",
    text: "Best salon in Trichy for men's grooming. Clean, hygienic and the staff really knows their craft. My go-to place for haircuts.",
    rating: 5,
    highlight: "Professional Staff",
  },
  {
    name: "Meena V.",
    text: "The keratin treatment transformed my hair completely! Premium products, lovely ambience and the results lasted months. Worth every rupee.",
    rating: 5,
    highlight: "Premium Quality",
  },
  {
    name: "Arjun M.",
    text: "The hygiene standards here are top-notch. Fresh towels, sanitized tools and a welcoming atmosphere. They really care about their clients.",
    rating: 4,
    highlight: "Clean & Hygienic",
  },
  {
    name: "Deepa L.",
    text: "Got my wedding nails and facial done here. The attention to detail is amazing. The staff made me feel so comfortable and pampered.",
    rating: 5,
    highlight: "Attention to Detail",
  },
];

const avatarColors = ["#C5A45B", "#8B6914", "#A67C3D", "#D4AF61", "#B8860B"];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useFadeIn();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 fade-in-section${isVisible ? " visible" : ""}`}
      >
        <div className="text-center mb-6">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">Client Love</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient underline-gold">
            What Our Clients Say
          </h2>
        </div>

        {/* Google badge */}
        <div className="flex items-center justify-center gap-3 text-secondary-foreground/70 text-sm font-sans mb-12 mt-8">
          <span className="text-lg">⭐</span>
          <span className="font-semibold text-secondary-foreground">4.8 Rating</span>
          <span className="text-secondary-foreground/30">|</span>
          <span>5,300+ Reviews</span>
          <span className="text-secondary-foreground/30">|</span>
          <span>Rated #1 Salon in Thillainagar</span>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div
            className="bg-secondary border border-primary/20 p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center"
            style={{ borderRadius: "16px" }}
          >
            {/* Avatar */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold font-serif mb-4"
              style={{ backgroundColor: avatarColors[current % avatarColors.length] }}
            >
              {reviews[current].name.charAt(0)}
            </div>

            <span className="text-primary text-xs uppercase tracking-widest font-sans font-semibold mb-4">
              {reviews[current].highlight}
            </span>
            <p className="text-secondary-foreground/80 text-base md:text-lg leading-relaxed mb-6 font-sans italic">
              "{reviews[current].text}"
            </p>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-secondary-foreground font-serif font-semibold">{reviews[current].name}</p>
          </div>

          {/* Controls */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-secondary border border-primary/20 rounded-full p-2 text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-secondary border border-primary/20 rounded-full p-2 text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Next">
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-secondary-foreground/20"}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
