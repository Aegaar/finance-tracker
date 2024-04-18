// import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
// import prisma from "../../../prisma/client";

// const createExpenseSchema = z.object({
//   title: z.string().min(1).max(255),
//   description: z.string().min(1),
//   amount: z.number().positive(),
//   // expenseDate: z.string().datetime(),
// });

// export async function POST(request: NextRequest) {
//   const body = await request.json;
//   const validation = createExpenseSchema.safeParse(body);

//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }

//   const addExpense = await prisma.expense.create({
//     data: {
//       title: body.title,
//       description: body.description,
//       amount: body.amount,
//       // expenseDate: body.incomeDate,
//     },
//   });

//   return NextResponse.json(addExpense, { status: 201 });
// }

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";

const createExpenseSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  amount: z.number().positive(),
  // incomeDate: z.string().datetime(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createExpenseSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }


  const addExpense = await prisma.expense.create({
    data: {
      title: body.title,
      description: body.description,
      amount: body.amount,
      // incomeDate: body.incomeDate,
    },
  });

  return NextResponse.json(addExpense, {status: 201})
}