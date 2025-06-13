
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import FormField from "@/components/ui/form-field";

const DoctorInfo = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    specialty: "",
    clinic: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setDoctorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving doctor data:", doctorData);
    // Here you would typically save to a database
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Stethoscope className="h-8 w-8 text-green-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Doctor Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <FormField
            id="doctorName"
            label="Doctor's Name"
            value={doctorData.name}
            onChange={(value) => handleInputChange("name", value)}
            placeholder="Dr. Smith"
          />

          <FormField
            id="specialty"
            label="Specialty"
            value={doctorData.specialty}
            onChange={(value) => handleInputChange("specialty", value)}
            placeholder="Cardiologist, Family Medicine, etc."
          />

          <FormField
            id="clinic"
            label="Clinic/Hospital"
            value={doctorData.clinic}
            onChange={(value) => handleInputChange("clinic", value)}
            placeholder="Medical Center Name"
          />
        </div>

        <div className="space-y-4">
          <FormField
            id="doctorPhone"
            label="Phone Number"
            value={doctorData.phone}
            onChange={(value) => handleInputChange("phone", value)}
            placeholder="(555) 123-4567"
          />

          <FormField
            id="doctorEmail"
            label="Email"
            type="email"
            value={doctorData.email}
            onChange={(value) => handleInputChange("email", value)}
            placeholder="doctor@clinic.com"
          />

          <FormField
            id="address"
            label="Clinic Address"
            value={doctorData.address}
            onChange={(value) => handleInputChange("address", value)}
            placeholder="123 Medical Drive, City, State"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3 h-auto"
        >
          Save Doctor Information
        </Button>
      </div>
    </div>
  );
};

export default DoctorInfo;
