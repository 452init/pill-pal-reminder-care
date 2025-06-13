
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Stethoscope, Pill, Clock } from "lucide-react";

interface AppTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const AppTabs = ({ activeTab, onTabChange }: AppTabsProps) => {
  return (
    <TabsList className="grid w-full grid-cols-4 h-20 text-lg bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl">
      <TabsTrigger value="patient" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
        <User className="h-6 w-6" />
        <span>Patient Profile</span>
      </TabsTrigger>
      <TabsTrigger value="doctor" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
        <Stethoscope className="h-6 w-6" />
        <span>Doctor Profile</span>
      </TabsTrigger>
      <TabsTrigger value="medications" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
        <Pill className="h-6 w-6" />
        <span>Medications</span>
      </TabsTrigger>
      <TabsTrigger value="adjustments" className="flex items-center space-x-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md">
        <Clock className="h-6 w-6" />
        <span>Time Adjustments</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default AppTabs;
