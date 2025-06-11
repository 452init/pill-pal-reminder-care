
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User } from "lucide-react";

const PatientInfo = () => {
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    allergies: "",
    medicalConditions: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving patient data:", patientData);
    // Here you would typically save to a database
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <User className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Patient Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="text-lg font-medium">First Name</Label>
            <Input
              id="firstName"
              value={patientData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <Label htmlFor="lastName" className="text-lg font-medium">Last Name</Label>
            <Input
              id="lastName"
              value={patientData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <Label htmlFor="dateOfBirth" className="text-lg font-medium">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={patientData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className="mt-1 text-lg h-12"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-lg font-medium">Phone Number</Label>
            <Input
              id="phone"
              value={patientData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="emergencyContact" className="text-lg font-medium">Emergency Contact</Label>
            <Input
              id="emergencyContact"
              value={patientData.emergencyContact}
              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Contact person name"
            />
          </div>

          <div>
            <Label htmlFor="emergencyPhone" className="text-lg font-medium">Emergency Phone</Label>
            <Input
              id="emergencyPhone"
              value={patientData.emergencyPhone}
              onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="allergies" className="text-lg font-medium">Allergies</Label>
            <Textarea
              id="allergies"
              value={patientData.allergies}
              onChange={(e) => handleInputChange("allergies", e.target.value)}
              className="mt-1 text-lg min-h-[80px]"
              placeholder="List any allergies..."
            />
          </div>

          <div>
            <Label htmlFor="medicalConditions" className="text-lg font-medium">Medical Conditions</Label>
            <Textarea
              id="medicalConditions"
              value={patientData.medicalConditions}
              onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
              className="mt-1 text-lg min-h-[80px]"
              placeholder="List any medical conditions..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 h-auto"
        >
          Save Patient Information
        </Button>
      </div>
    </div>
  );
};

export default PatientInfo;
