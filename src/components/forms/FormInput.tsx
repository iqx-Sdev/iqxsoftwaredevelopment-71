
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";

type IconType = "user" | "email" | "phone" | "company" | "message";

const iconMap = {
  user: <User className="h-4 w-4 text-pink-500" />,
  email: <Mail className="h-4 w-4 text-pink-500" />,
  phone: <Phone className="h-4 w-4 text-pink-500" />,
  company: <User className="h-4 w-4 text-pink-500" />,
  message: <MessageSquare className="h-4 w-4 text-pink-500" />
};

interface FormInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "textarea";
  icon: IconType;
  optional?: boolean;
}

const FormInput = ({ 
  control, 
  name, 
  label, 
  placeholder, 
  type = "text", 
  icon,
  optional = false
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            {iconMap[icon]}
            {label}{optional && " (optional)"}
          </FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea 
                placeholder={placeholder} 
                className="min-h-[120px]" 
                {...field} 
              />
            ) : (
              <Input 
                type={type} 
                placeholder={placeholder} 
                {...field} 
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
