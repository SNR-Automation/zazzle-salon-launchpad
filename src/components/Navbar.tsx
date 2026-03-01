import { Home, Scissors, Star, Phone, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const WHATSAPP_LINK = "https://wa.me/918682077777?text=Hi%20Zazzle%20Salon!%20I'd%20like%20to%20book%20an%20appointment.";

const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Services", url: "#services", icon: Scissors },
  { name: "Reviews", url: "#reviews", icon: Star },
  { name: "Contact", url: "#contact", icon: Phone },
  { name: "Book Now", url: WHATSAPP_LINK, icon: MessageCircle },
];

const Navbar = () => {
  return <NavBar items={navItems} />;
};

export default Navbar;
