
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MedicationList from "@/components/MedicationList";
import AddMedication from "@/components/AddMedication";

interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  instructions: string;
}

interface MedicationsTabProps {
  medications: Medication[];
  showAddMedication: boolean;
  onShowAddMedication: (show: boolean) => void;
  onAddMedication: (medication: any) => void;
}

const MedicationsTab = ({ 
  medications, 
  showAddMedication, 
  onShowAddMedication, 
  onAddMedication 
}: MedicationsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Medications
        </h2>
        <Button 
          onClick={() => onShowAddMedication(true)}
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <Plus className="h-6 w-6 mr-2" />
          Add Medication
        </Button>
      </div>
      {showAddMedication ? (
        <AddMedication 
          onAdd={onAddMedication}
          onCancel={() => onShowAddMedication(false)}
        />
      ) : (
        <MedicationList medications={medications} />
      )}
    </div>
  );
};

export default MedicationsTab;
