
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import FormInput from "@/components/forms/FormInput";
import MarketingCheckbox from "@/components/forms/MarketingCheckbox";
import SubmitButton from "@/components/forms/SubmitButton";
import { formSchema, FormValues } from "@/components/forms/FormSchema";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  serviceName?: string;
}

const LeadForm = ({ 
  title = "Get Your Free Consultation", 
  subtitle = "Fill out the form below and one of our experts will get back to you within 24 hours.",
  serviceName = "our services"
}: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      marketing: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Form submitted successfully! We'll be in touch soon.", {
        description: `Thank you for your interest in ${serviceName}.`,
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput 
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="John Smith"
              icon="user"
            />
            
            <FormInput 
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="john@example.com"
              type="email"
              icon="email"
            />
            
            <FormInput 
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="+1 (234) 567-8901"
              type="tel"
              icon="phone"
              optional
            />
            
            <FormInput 
              control={form.control}
              name="company"
              label="Company Name"
              placeholder="Your Company"
              icon="company"
              optional
            />
          </div>
          
          <FormInput 
            control={form.control}
            name="message"
            label="Tell us about your project"
            placeholder="I'm looking for help with..."
            type="textarea"
            icon="message"
          />
          
          <MarketingCheckbox control={form.control} />
          
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-full p-1">
            <Check className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm text-gray-500">
            By submitting this form, you'll be connected with a specialist from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
