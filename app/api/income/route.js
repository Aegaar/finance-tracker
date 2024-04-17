import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIncomeSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  amount: z.number().positive(),
  date: z.string().date(),
});

export async function POST() {
  const body = await NextRequest.json();
  const validation = createIncomeSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400});
  }

  
}
