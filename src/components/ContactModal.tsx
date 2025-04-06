
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useContactModalStore } from "@/store/useContactModalStore";
import LeadForm from "./LeadForm";
import { X } from "lucide-react";

const ContactModal = () => {
  const { isOpen, source, closeModal } = useContactModalStore();

  const getTitle = () => {
    switch (source) {
      case "automation":
        return "Start Automating Now";
      case "expert":
        return "Talk to an Expert";
      case "demo":
        return "Request a Demo";
      case "consultation":
        return "Schedule a Free Consultation";
      default:
        return "Contact Us";
    }
  };

  const getSubtitle = () => {
    switch (source) {
      case "automation":
        return "Fill out the form below to start your automation journey with our team.";
      case "expert":
        return "Our experts are ready to help you with your specific needs.";
      case "demo":
        return "Request a personalized demo of our solutions.";
      case "consultation":
        return "Schedule a free consultation with our team to discuss your needs.";
      default:
        return "We'd love to hear from you. Fill out the form below and we'll get back to you shortly.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-newtheme-purple">
            {getTitle()}
          </DialogTitle>
          <DialogDescription>
            {getSubtitle()}
          </DialogDescription>
        </DialogHeader>
        
        <LeadForm 
          title="" 
          subtitle="" 
          serviceName={source} 
          hideTitle={true}
        />
        
        <DialogClose asChild className="absolute right-4 top-4">
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
