import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(2, { message: "A valid firstname is required" }),
  lastName: z.string().min(2, { message: "A valid lastname is required" }),
  phoneNumber: z
    .string()
    .min(8, { message: "A valid phonenumber is required" }),
  houseNumber: z
    .string()
    .min(1, { message: "A valid house number is required" }),
  streetName: z.string().min(1, { message: "A valid street is required" }),
  city: z.string().min(1, { message: "A valid city is required" }).max(50),
  postalCode: z.string().min(1, { message: "A valid postal code is required" }),

  gender: z.string().min(1, { message: "Please select an option" }),
  helpType: z.string().min(1, { message: "Please select an option" }),
  details: z.string(),
});

export type Assistance = z.infer<typeof schema>;
