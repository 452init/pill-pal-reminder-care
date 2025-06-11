
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from "lucide-react";

interface AddMedicationProps {
  onAdd: (medication: any) => void;
  onCancel: () => void;
}

const AddMedication = ({ onAdd, onCancel }: AddMedicationProps) => {
  const [medicationData, setMedicationData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    time: "",
    instructions: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setMedicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (medicationData.name && medicationData.dosage && medicationData.frequency && medicationData.time) {
      onAdd(medicationData);
    }
  };

  return (
    <Card className="border-2 border-green-200 shadow-lg">
      <CardHeader className="bg-green-50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
            <Plus className="h-6 w-6 text-green-600 mr-2" />
            Add New Medication
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="medName" className="text-lg font-medium">Medication Name</Label>
            <Input
              id="medName"
              value={medicationData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="e.g., Aspirin"
            />
          </div>

          <div>
            <Label htmlFor="dosage" className="text-lg font-medium">Dosage</Label>
            <Input
              id="dosage"
              value={medicationData.dosage}
              onChange={(e) => handleInputChange("dosage", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="e.g., 81mg, 1 tablet"
            />
          </div>

          <div>
            <Label htmlFor="frequency" className="text-lg font-medium">Frequency</Label>
            <Select value={medicationData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
              <SelectTrigger className="h-12 text-lg">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Once daily">Once daily</SelectItem>
                <SelectItem value="Twice daily">Twice daily</SelectItem>
                <SelectItem value="Three times daily">Three times daily</SelectItem>
                <SelectItem value="Four times daily">Four times daily</SelectItem>
                <SelectItem value="As needed">As needed</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="time" className="text-lg font-medium">Time to Take</Label>
            <Input
              id="time"
              type="time"
              value={medicationData.time}
              onChange={(e) => handleInputChange("time", e.target.value)}
              className="mt-1 text-lg h-12"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="instructions" className="text-lg font-medium">Special Instructions</Label>
          <Textarea
            id="instructions"
            value={medicationData.instructions}
            onChange={(e) => handleInputChange("instructions", e.target.value)}
            className="mt-1 text-lg min-h-[80px]"
            placeholder="e.g., Take with food, avoid alcohol..."
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button
            variant="outline"
            onClick={onCancel}
            className="text-lg px-6 py-3 h-auto"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-lg px-6 py-3 h-auto"
            disabled={!medicationData.name || !medicationData.dosage || !medicationData.frequency || !medicationData.time}
          >
            Add Medication
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddMedication;
