
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}

const FormField = ({ 
  id, 
  label, 
  value, 
  onChange, 
  type = "text", 
  placeholder, 
  className = "" 
}: FormFieldProps) => {
  return (
    <div>
      <Label htmlFor={id} className="text-lg font-medium">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 text-lg h-12 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
