import { z } from "zod";

const { string, object, number } = z;

export const createItemSchema = object({
  title: string()
    .min(1, { message: "Title must be at least 1 character long" })
    .max(255, { message: "Title must not exceed 255 characters" })
    .refine(value => value.trim().length > 0, { message: "Title must not be empty or contain only whitespace" }),
  description: string()
    .min(1, { message: "Description must be at least 1 character long" })
    .refine(value => value.trim().length > 0, { message: "Description must not be empty or contain only whitespace" }),
  amount: number({
      errorMap: () => ({ message: "Amount must be a number" }),
    })
    .positive({
      errorMap: () => ({ message: "Amount must be a positive number" }),
    }).lte(999999999, { message: "Amount must be max 10 digits long" }),
  source: string({
      errorMap: () => ({ message: "Source must not be empty" }),
    })
    .min(1)
    .max(255, { message: "Source must be between 1 and 255 characters" }),
});
