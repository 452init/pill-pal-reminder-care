
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Stethoscope, Pill, Plus, MessageCircle, Clock } from "lucide-react";
import PatientInfo from "@/components/PatientInfo";
import DoctorInfo from "@/components/DoctorInfo";
import MedicationList from "@/components/MedicationList";
import AddMedication from "@/components/AddMedication";
import AIHealthChat from "@/components/AIHealthChat";
import DoctorMedicationAdjustments from "@/components/DoctorMedicationAdjustments";

const Index = () => {
  const [activeTab, setActiveTab] = useState("patient");
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      time: "9:00 AM",
      instructions: "Take with food"
    }
  ]);

  const addMedication = (medication: any) => {
    const newMedication = {
      ...medication,
      id: Date.now()
    };
    setMedications([...medications, newMedication]);
    setShowAddMedication(false);
  };

  const updateMedicationTime = (medicationId: number, newTime: string) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === medicationId 
          ? { ...med, time: newTime }
          : med
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
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
          
          {/* AI Chat Button */}
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowAIChat(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg px-8 py-3 h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Ask Health Assistant
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 h-20 text-lg bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl">
                <TabsTrigger value="patient" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <User className="h-6 w-6" />
                  <span>Patient Profile</span>
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <Stethoscope className="h-6 w-6" />
                  <span>Doctor Profile</span>
                </TabsTrigger>
                <TabsTrigger value="medications" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <Pill className="h-6 w-6" />
                  <span>Medications</span>
                </TabsTrigger>
                <TabsTrigger value="adjustments" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
                  <Clock className="h-6 w-6" />
                  <span>Time Adjustments</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-6">
                <PatientInfo />
              </TabsContent>

              <TabsContent value="doctor" className="space-y-6">
                <DoctorInfo />
              </TabsContent>

              <TabsContent value="medications" className="space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    My Medications
                  </h2>
                  <Button 
                    onClick={() => setShowAddMedication(true)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Plus className="h-6 w-6 mr-2" />
                    Add Medication
                  </Button>
                </div>
                {showAddMedication ? (
                  <AddMedication 
                    onAdd={addMedication}
                    onCancel={() => setShowAddMedication(false)}
                  />
                ) : (
                  <MedicationList medications={medications} />
                )}
              </TabsContent>

              <TabsContent value="adjustments" className="space-y-6">
                <DoctorMedicationAdjustments 
                  medications={medications}
                  onUpdateTime={updateMedicationTime}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* AI Health Chat Modal */}
        {showAIChat && (
          <AIHealthChat onClose={() => setShowAIChat(false)} />
        )}
      </div>
    </div>
  );
};

export default Index;
