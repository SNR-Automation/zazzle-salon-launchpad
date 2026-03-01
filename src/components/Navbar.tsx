import { useState } from "react";
import { Menu, X } from "lucide-react";
import zazzleLogo from "@/assets/zazzle-logo.png";

const WHATSAPP_LINK = "https://wa.me/918682077777?text=Hi%20Zazzle%20Salon!%20I'd%20like%20to%20book%20an%20appointment.";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={zazzleLogo} alt="Zazzle Salon" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm tracking-wide uppercase">Services</a>
          <a href="#reviews" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm tracking-wide uppercase">Reviews</a>
          <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm tracking-wide uppercase">Contact</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-secondary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-primary/20 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-2">
            <a href="#services" onClick={() => setOpen(false)} className="text-secondary-foreground/80 hover:text-primary py-2 text-sm uppercase tracking-wide">Services</a>
            <a href="#reviews" onClick={() => setOpen(false)} className="text-secondary-foreground/80 hover:text-primary py-2 text-sm uppercase tracking-wide">Reviews</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-secondary-foreground/80 hover:text-primary py-2 text-sm uppercase tracking-wide">Contact</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
