
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";

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
          <div>
            <Label htmlFor="doctorName" className="text-lg font-medium">Doctor's Name</Label>
            <Input
              id="doctorName"
              value={doctorData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Dr. Smith"
            />
          </div>

          <div>
            <Label htmlFor="specialty" className="text-lg font-medium">Specialty</Label>
            <Input
              id="specialty"
              value={doctorData.specialty}
              onChange={(e) => handleInputChange("specialty", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Cardiologist, Family Medicine, etc."
            />
          </div>

          <div>
            <Label htmlFor="clinic" className="text-lg font-medium">Clinic/Hospital</Label>
            <Input
              id="clinic"
              value={doctorData.clinic}
              onChange={(e) => handleInputChange("clinic", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="Medical Center Name"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="doctorPhone" className="text-lg font-medium">Phone Number</Label>
            <Input
              id="doctorPhone"
              value={doctorData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="doctorEmail" className="text-lg font-medium">Email</Label>
            <Input
              id="doctorEmail"
              type="email"
              value={doctorData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="doctor@clinic.com"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-lg font-medium">Clinic Address</Label>
            <Input
              id="address"
              value={doctorData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="mt-1 text-lg h-12"
              placeholder="123 Medical Drive, City, State"
            />
          </div>
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
