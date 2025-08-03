import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/38344217859', '_blank');
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse touch-manipulation"
        size="icon"
      >
        <MessageSquare className="h-5 md:h-6 w-5 md:w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
