
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormControl, FormLabel, FormDescription } from "@/components/ui/form";
import { Control } from "react-hook-form";

interface MarketingCheckboxProps {
  control: Control<any>;
}

const MarketingCheckbox = ({ control }: MarketingCheckboxProps) => {
  return (
    <FormField
      control={control}
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
              Keep me updated with tips, trends, and insights
            </FormLabel>
            <FormDescription>
              You can unsubscribe at any time. We respect your privacy.
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default MarketingCheckbox;
