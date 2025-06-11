
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIHealthChatProps {
  onClose: () => void;
}

const AIHealthChat = ({ onClose }: AIHealthChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your health assistant. I can help answer questions about medications, general health advice, and wellness tips. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("medication") || lowerQuestion.includes("pill")) {
      return "For medication-related questions, always consult with your healthcare provider. I can provide general information, but your doctor knows your specific situation best. Make sure to take medications as prescribed and never stop without consulting your doctor.";
    }
    
    if (lowerQuestion.includes("side effect")) {
      return "If you're experiencing side effects from any medication, please contact your healthcare provider immediately. Common side effects vary by medication, but any concerning symptoms should be reported to your doctor right away.";
    }
    
    if (lowerQuestion.includes("dose") || lowerQuestion.includes("dosage")) {
      return "Never adjust your medication dosage without consulting your healthcare provider. If you have concerns about your current dosage, please discuss this with your doctor or pharmacist.";
    }
    
    if (lowerQuestion.includes("time") || lowerQuestion.includes("when")) {
      return "Medication timing is important for effectiveness. Take medications at the times prescribed by your doctor. If you need to adjust timing, consult with your healthcare provider first.";
    }
    
    return "Thank you for your question. For specific medical advice, please consult with your healthcare provider. I'm here to provide general health information and remind you to follow your prescribed medication regimen.";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Bot className="h-6 w-6" />
              <span>Health Assistant</span>
            </CardTitle>
            <Button 
              onClick={onClose}
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && <Bot className="h-4 w-4 mt-1 text-blue-600" />}
                    {message.isUser && <User className="h-4 w-4 mt-1" />}
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about medications, health tips, or wellness advice..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This is a general health assistant. Always consult your healthcare provider for medical advice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIHealthChat;
