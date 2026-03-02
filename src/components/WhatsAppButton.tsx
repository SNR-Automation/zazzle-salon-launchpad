import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918682077777?text=Hi%20Zazzle%20Salon!%20I'd%20like%20to%20book%20an%20appointment.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: "#1F7A4C" }}
      aria-label="Book via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;
