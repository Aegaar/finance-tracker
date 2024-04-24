import { z } from "zod";

export const createIncomeSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
    amount: z.number().positive(),
    // incomeDate: z.string().datetime(),
  });
