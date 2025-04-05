
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Phone, User, MessageSquare, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }).optional(),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }).optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  marketing: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const ShopifyLeadForm = () => {
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
        description: "Thank you for your interest in our Shopify services.",
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
        <h2 className="text-2xl md:text-3xl font-bold text-newtheme-purple mb-4">Get Your Free Shopify Consultation</h2>
        <p className="text-gray-600">Fill out the form below and one of our Shopify experts will get back to you within 24 hours.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4 text-pink-500" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-pink-500" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-pink-500" />
                    Phone Number (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (234) 567-8901" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4 text-pink-500" />
                    Company Name (optional)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-pink-500" />
                  Tell us about your project
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I'm looking for help with my Shopify store..." 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="marketing"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Keep me updated with Shopify tips, trends, and insights
                  </FormLabel>
                  <FormDescription>
                    You can unsubscribe at any time. We respect your privacy.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white py-6 text-lg"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-full p-1">
            <Check className="h-4 w-4 text-green-600" />
          </div>
          <p className="text-sm text-gray-500">
            By submitting this form, you'll be connected with a Shopify specialist from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopifyLeadForm;
