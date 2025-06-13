
import { useState } from "react";

export const useAppState = () => {
  const [activeTab, setActiveTab] = useState("patient");
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  return {
    activeTab,
    setActiveTab,
    showAddMedication,
    setShowAddMedication,
    showAIChat,
    setShowAIChat
  };
};
