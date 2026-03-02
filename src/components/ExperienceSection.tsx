import { CheckCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import heroImg from "@/assets/hero-salon.jpg";

const bullets = [
  "Premium imported products",
  "Certified & experienced stylists",
  "Hygienic environment, sanitized tools",
  "Bridal specialists with 8+ years experience",
];

const ExperienceSection = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-4 fade-in-section${isVisible ? " visible" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="overflow-hidden" style={{ borderRadius: "16px" }}>
            <img
              src={heroImg}
              alt="Inside Zazzle Salon"
              className="w-full h-[360px] md:h-[440px] object-cover hover-zoom"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">
              Why Zazzle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient underline-gold mb-8">
              More than a haircut — an experience.
            </h2>
            <ul className="space-y-4 mt-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground/80 font-sans text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
