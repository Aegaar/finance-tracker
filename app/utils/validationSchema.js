import { z } from "zod";

export const createItemSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  amount: z.number().positive(),
  source: z.string().min(1).max(255),
});
