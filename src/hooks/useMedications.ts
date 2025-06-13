
import { useState } from "react";

interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  instructions: string;
}

export const useMedications = () => {
  const [medications, setMedications] = useState<Medication[]>([
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

  return {
    medications,
    addMedication,
    updateMedicationTime
  };
};
