import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(6, {
      message: "Please enter a valid phone number.",
    })
    .optional(),
  company: z
    .string()
    .min(2, {
      message: "Company name must be at least 2 characters.",
    })
    .optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  marketing: z.boolean().default(false),
});

export type FormValues = z.infer<typeof formSchema>;
