
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isSubmitting}
      className="w-full text-lg font-semibold bg-white hover:bg-gray-100 text-newtheme-purple px-8 py-6 rounded-lg"
    >
      {isSubmitting ? (
        "Submitting..."
      ) : (
        <>
          Submit Request
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
