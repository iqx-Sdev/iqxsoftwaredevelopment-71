
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isSubmitting}
      className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white py-6 text-lg font-semibold"
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
  );
};

export default SubmitButton;
