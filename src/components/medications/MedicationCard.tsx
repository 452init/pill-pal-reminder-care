
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

interface MedicationCardProps {
  medication: Medication;
}

const MedicationCard = ({ medication }: MedicationCardProps) => {
  return (
    <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-white to-blue-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full mr-3">
              <Pill className="h-6 w-6 text-white" />
            </div>
            {medication.name}
          </CardTitle>
          <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
            {medication.dosage}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="bg-green-500 p-2 rounded-full">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-700">Schedule</p>
              <p className="text-lg font-bold text-gray-800">{medication.frequency}</p>
              <p className="text-xl text-green-600 font-semibold">{medication.time}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="bg-orange-500 p-2 rounded-full">
              <AlertCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-orange-700">Instructions</p>
              <p className="text-lg text-gray-800">{medication.instructions}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationCard;
