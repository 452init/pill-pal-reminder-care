
import MedicationCard from "@/components/medications/MedicationCard";
import EmptyMedicationState from "@/components/medications/EmptyMedicationState";

interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  instructions: string;
}

interface MedicationListProps {
  medications: Medication[];
}

const MedicationList = ({ medications }: MedicationListProps) => {
  if (medications.length === 0) {
    return <EmptyMedicationState />;
  }

  return (
    <div className="space-y-6">
      {medications.map((medication) => (
        <MedicationCard key={medication.id} medication={medication} />
      ))}
    </div>
  );
};

export default MedicationList;
