import { Scissors, Sparkles, Heart, Crown, Hand, MessageCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/918682077777?text=";

const services = [
  {
    icon: Scissors,
    title: "Haircuts & Styling",
    description: "Precision cuts and modern styling for men, women & kids by expert stylists.",
    prices: ["Men from ₹350", "Women from ₹500"],
    whatsappMsg: "Hi! I'd like to book a haircut at Zazzle Salon.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Hair Treatments & Colour",
    description: "Keratin smoothening, global colour, highlights and premium hair treatments.",
    prices: ["Keratin from ₹5,000", "Colour from ₹2,500"],
    whatsappMsg: "Hi! I'd like to book a hair treatment at Zazzle Salon.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Beauty & Skin",
    description: "Rejuvenating facials, expert waxing and skin care treatments for a radiant glow.",
    prices: ["Facials from ₹1,999"],
    whatsappMsg: "Hi! I'd like to book a beauty service at Zazzle Salon.",
    highlight: false,
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description: "Complete bridal makeup, pre-bridal treatments and groom packages for your special day.",
    prices: ["Premium Packages"],
    whatsappMsg: "Hi! I'd like to enquire about bridal packages at Zazzle Salon.",
    highlight: true,
  },
  {
    icon: Hand,
    title: "Nails",
    description: "Professional manicures, pedicures, nail art and gel extensions.",
    prices: ["Manicures from ₹599"],
    whatsappMsg: "Hi! I'd like to book a nail service at Zazzle Salon.",
    highlight: false,
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-sans">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-lg p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.highlight
                  ? "bg-secondary border-2 border-primary shadow-[0_0_30px_hsla(43,45%,56%,0.15)] lg:col-span-1"
                  : "bg-card border border-border hover:border-primary/40"
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Premium
                </span>
              )}

              <service.icon className={`w-8 h-8 mb-4 ${service.highlight ? "text-primary" : "text-primary"}`} />
              <h3 className={`font-serif text-xl md:text-2xl font-semibold mb-3 ${service.highlight ? "text-secondary-foreground" : "text-foreground"}`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 font-sans leading-relaxed ${service.highlight ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                {service.description}
              </p>

              <div className="mb-5 space-y-1">
                {service.prices.map((price) => (
                  <p key={price} className={`text-sm font-semibold font-sans ${service.highlight ? "text-primary" : "text-primary"}`}>
                    {price}
                  </p>
                ))}
              </div>

              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors font-sans ${
                  service.highlight ? "text-whatsapp hover:brightness-110" : "text-whatsapp hover:brightness-110"
                }`}
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
