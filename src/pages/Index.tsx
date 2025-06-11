
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Stethoscope, Pill, Plus } from "lucide-react";
import PatientInfo from "@/components/PatientInfo";
import DoctorInfo from "@/components/DoctorInfo";
import MedicationList from "@/components/MedicationList";
import AddMedication from "@/components/AddMedication";

const Index = () => {
  const [activeTab, setActiveTab] = useState("patient");
  const [showAddMedication, setShowAddMedication] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Pill className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">PillPal</h1>
          </div>
          <p className="text-xl text-gray-600">Your Medication Reminder Companion</p>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-16 text-lg">
                <TabsTrigger value="patient" className="flex items-center space-x-2 py-3">
                  <User className="h-5 w-5" />
                  <span>Patient Info</span>
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex items-center space-x-2 py-3">
                  <Stethoscope className="h-5 w-5" />
                  <span>Doctor Info</span>
                </TabsTrigger>
                <TabsTrigger value="medications" className="flex items-center space-x-2 py-3">
                  <Pill className="h-5 w-5" />
                  <span>Medications</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-4">
                <PatientInfo />
              </TabsContent>

              <TabsContent value="doctor" className="space-y-4">
                <DoctorInfo />
              </TabsContent>

              <TabsContent value="medications" className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">My Medications</h2>
                  <Button 
                    onClick={() => setShowAddMedication(true)}
                    className="bg-green-600 hover:bg-green-700 text-lg px-6 py-3 h-auto"
                  >
                    <Plus className="h-5 w-5 mr-2" />
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
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
