
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Pill, AlertCircle } from "lucide-react";

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
  return (
    <div className="space-y-4">
      {medications.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Pill className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">No medications added yet</h3>
            <p className="text-gray-500 text-center">
              Click "Add Medication" to start tracking your prescriptions
            </p>
          </CardContent>
        </Card>
      ) : (
        medications.map((medication) => (
          <Card key={medication.id} className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <Pill className="h-6 w-6 text-blue-600 mr-2" />
                  {medication.name}
                </CardTitle>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {medication.dosage}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Schedule</p>
                    <p className="text-lg font-semibold text-gray-800">{medication.frequency}</p>
                    <p className="text-md text-blue-600">{medication.time}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Instructions</p>
                    <p className="text-md text-gray-800">{medication.instructions}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default MedicationList;
