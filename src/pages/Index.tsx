
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import PatientInfo from "@/components/PatientInfo";
import DoctorInfo from "@/components/DoctorInfo";
import AIHealthChat from "@/components/AIHealthChat";
import DoctorMedicationAdjustments from "@/components/DoctorMedicationAdjustments";
import AppHeader from "@/components/layout/AppHeader";
import AppTabs from "@/components/layout/AppTabs";
import MedicationsTab from "@/components/medications/MedicationsTab";
import { useMedications } from "@/hooks/useMedications";
import { useAppState } from "@/hooks/useAppState";

const Index = () => {
  const {
    activeTab,
    setActiveTab,
    showAddMedication,
    setShowAddMedication,
    showAIChat,
    setShowAIChat
  } = useAppState();

  const {
    medications,
    addMedication,
    updateMedicationTime
  } = useMedications();

  const handleAddMedication = (medication: any) => {
    addMedication(medication);
    setShowAddMedication(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <AppHeader onOpenAIChat={() => setShowAIChat(true)} />

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <AppTabs activeTab={activeTab} onTabChange={setActiveTab} />

              <TabsContent value="patient" className="space-y-6">
                <PatientInfo />
              </TabsContent>

              <TabsContent value="doctor" className="space-y-6">
                <DoctorInfo />
              </TabsContent>

              <TabsContent value="medications" className="space-y-6">
                <MedicationsTab
                  medications={medications}
                  showAddMedication={showAddMedication}
                  onShowAddMedication={setShowAddMedication}
                  onAddMedication={handleAddMedication}
                />
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

        {showAIChat && (
          <AIHealthChat onClose={() => setShowAIChat(false)} />
        )}
      </div>
    </div>
  );
};

export default Index;
