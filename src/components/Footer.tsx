import { MapPin, Phone, Clock, Instagram, Linkedin } from "lucide-react";
import zazzleLogo from "@/assets/zazzle-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={zazzleLogo} alt="Zazzle Salon" className="h-12 w-auto mb-4" />
            <p className="text-secondary-foreground/60 text-sm font-sans text-center md:text-left leading-relaxed">
              Premium unisex salon & bridal studio delivering stylish hair, beauty and bridal experiences since 2017.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-4">Find Us</h3>
            <p className="text-primary font-bold text-sm mb-2 font-sans">
              📍 Local Landmark: Located directly above the Sony Centre.
            </p>
            <div className="flex items-start gap-2 text-secondary-foreground/70 text-sm font-sans mb-4">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>B12, 11th Cross East Road, Above Sony Centre, Colony Street, West Thillai Nagar, Tennur, Tiruchirappalli, Tamil Nadu 620018</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm font-sans mb-2">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <div className="flex gap-2">
                <a href="tel:+918682077777" className="hover:text-primary transition-colors">86820 77777</a>
                <span>/</span>
                <a href="tel:+914314216777" className="hover:text-primary transition-colors">0431 421 6777</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm font-sans">
              <Clock className="w-4 h-4 shrink-0 text-primary" />
              <span>Daily 10:00 AM – 9:30 PM</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/zazzleacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/zazzlesalons/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/40 text-xs font-sans">
            © {new Date().getFullYear()} Zazzle Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
