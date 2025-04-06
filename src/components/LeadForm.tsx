
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormInput from "./forms/FormInput";
import MarketingCheckbox from "./forms/MarketingCheckbox";
import SubmitButton from "./forms/SubmitButton";
import { formSchema } from "./forms/FormSchema";

interface LeadFormProps {
  title: string;
  subtitle: string;
  serviceName: string;
  hideTitle?: boolean;
}

const LeadForm = ({ title, subtitle, serviceName, hideTitle = false }: LeadFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      marketing: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", { ...data, service: serviceName });
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      {!hideTitle && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-newtheme-purple mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <FormInput
            control={form.control}
            name="name"
            label="Full Name"
            placeholder="John Doe"
            type="text"
            icon="user"
          />
        </div>
        
        <FormInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="john.doe@example.com"
          type="email"
          icon="email"
        />
        
        <FormInput
          control={form.control}
          name="company"
          label="Company"
          placeholder="Acme Inc."
          type="text"
          icon="company"
          optional={true}
        />
        
        <FormInput
          control={form.control}
          name="message"
          label="Message"
          placeholder="Tell us about your project or inquiries..."
          type="textarea"
          icon="message"
        />
        
        <MarketingCheckbox control={form.control} />
        
        <div className="pt-2">
          <SubmitButton isSubmitting={form.formState.isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
