
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Pill, Save } from "lucide-react";

interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  instructions: string;
}

interface DoctorMedicationAdjustmentsProps {
  medications: Medication[];
  onUpdateTime: (medicationId: number, newTime: string) => void;
}

// Helper functions for time conversion
const convertTo24Hour = (time12h: string): string => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString();
  }
  return `${hours.padStart(2, '0')}:${minutes}`;
};

const convertTo12Hour = (time24h: string): string => {
  const [hours, minutes] = time24h.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

const DoctorMedicationAdjustments = ({ medications, onUpdateTime }: DoctorMedicationAdjustmentsProps) => {
  const [timeAdjustments, setTimeAdjustments] = useState<{[key: number]: string}>({});

  const handleTimeChange = (medicationId: number, newTime: string) => {
    setTimeAdjustments(prev => ({
      ...prev,
      [medicationId]: newTime
    }));
  };

  const handleSaveTime = (medicationId: number) => {
    const newTime = timeAdjustments[medicationId];
    if (newTime) {
      onUpdateTime(medicationId, newTime);
      // Remove from local state after saving
      setTimeAdjustments(prev => {
        const updated = { ...prev };
        delete updated[medicationId];
        return updated;
      });
    }
  };

  const getDisplayTime = (medicationId: number, originalTime: string) => {
    return timeAdjustments[medicationId] || originalTime;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
          <Clock className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Medication Time Adjustments
          </h2>
          <p className="text-gray-600 text-lg">Adjust medication schedules to better fit patient preferences</p>
        </div>
      </div>

      {medications.length === 0 ? (
        <Card className="border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Pill className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">No medications to adjust</h3>
            <p className="text-gray-500 text-center">
              Add medications first to adjust their timing schedules
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {medications.map((medication) => (
            <Card key={medication.id} className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-white to-orange-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <Pill className="h-6 w-6 text-orange-600 mr-3" />
                  {medication.name}
                  <span className="ml-3 text-sm font-normal bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                    {medication.dosage}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">Current Schedule</Label>
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <p className="font-semibold text-gray-800">{medication.frequency}</p>
                      <p className="text-blue-600 font-medium">{medication.time}</p>
                      <p className="text-sm text-gray-600 mt-2">{medication.instructions}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label htmlFor={`time-${medication.id}`} className="text-sm font-medium text-gray-600">
                      Adjust Time
                    </Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`time-${medication.id}`}
                        type="time"
                        value={getDisplayTime(medication.id, medication.time.includes('AM') || medication.time.includes('PM') ? 
                          convertTo24Hour(medication.time) : medication.time)}
                        onChange={(e) => handleTimeChange(medication.id, e.target.value)}
                        className="flex-1 text-lg h-12"
                      />
                      <Button
                        onClick={() => handleSaveTime(medication.id)}
                        disabled={!timeAdjustments[medication.id]}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                    
                    {timeAdjustments[medication.id] && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-700">
                          New time: {convertTo12Hour(timeAdjustments[medication.id])}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorMedicationAdjustments;
