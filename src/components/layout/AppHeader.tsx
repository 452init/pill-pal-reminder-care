
import { Button } from "@/components/ui/button";
import { MessageCircle, Pill } from "lucide-react";

interface AppHeaderProps {
  onOpenAIChat: () => void;
}

const AppHeader = ({ onOpenAIChat }: AppHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
          <Pill className="h-12 w-12 text-white" />
        </div>
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PillPal
          </h1>
          <p className="text-xl text-gray-600 mt-2">Your Intelligent Medication Companion</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onOpenAIChat}
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg px-8 py-3 h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Ask Health Assistant
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
