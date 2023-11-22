// src/domain/models/Student.ts
import { z } from "zod";

const StudentSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  gender: z.string(),
  phoneNumber: z.string(),
});

export type Student = z.infer<typeof StudentSchema>;

export { StudentSchema };
