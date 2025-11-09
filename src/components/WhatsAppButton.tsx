import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Ganti dengan nomor WhatsApp bisnis Anda (format: 628xxxxxxxxxx)
  const phoneNumber = "6281234567890";
  const message = encodeURIComponent(
    "Halo SyntaxTrust! Saya tertarik dengan jasa pembuatan website Anda. Bisa diskusi lebih lanjut?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat via WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          Chat dengan kami di WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-foreground"></div>
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-hover transition-all duration-300 group-hover:scale-110">
            <MessageCircle className="w-7 h-7" />
          </div>
          
          {/* Badge notification (optional) */}
          <div className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
            1
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
