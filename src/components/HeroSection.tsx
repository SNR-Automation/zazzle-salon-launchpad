import { MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";

const WHATSAPP_LINK = "https://wa.me/918682077777?text=Hi%20Zazzle%20Salon!%20I'd%20like%20to%20book%20an%20appointment.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video / Image background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="w-full h-full object-cover"
        >
          {/* Drop hero-salon.mp4 into src/assets for video; falls back to poster */}
        </video>
        <img
          src={heroImg}
          alt="Zazzle Salon Interior"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
        {/* Cinematic 3-stop gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-[600px] mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Your glow-up starts here — hair, beauty & bridal magic in Thillainagar.
          </h1>
          <p className="text-white text-base md:text-lg mb-10 font-sans" style={{ opacity: 0.85 }}>
            Where elegance meets expertise — your trusted destination for hair, beauty & bridal transformations since 2017.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-md text-lg font-semibold hover:brightness-110 transition-all shadow-lg"
            style={{ backgroundColor: "#1F7A4C" }}
          >
            <MessageCircle size={22} />
            Book via WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-all"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
