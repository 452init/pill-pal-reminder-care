
import { Card, CardContent } from "@/components/ui/card";
import { Pill } from "lucide-react";

const EmptyMedicationState = () => {
  return (
    <Card className="border-2 border-dashed border-gray-300 bg-gradient-to-br from-blue-50 to-purple-50">
      <CardContent className="flex flex-col items-center justify-center py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full mb-6">
          <Pill className="h-16 w-16 text-white" />
        </div>
        <h3 className="text-2xl font-medium text-gray-700 mb-3">No medications added yet</h3>
        <p className="text-gray-500 text-center text-lg">
          Click "Add Medication" to start tracking your prescriptions
        </p>
      </CardContent>
    </Card>
  );
};

export default EmptyMedicationState;
