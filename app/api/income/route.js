import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";
import { getAuthSession } from "../../utils/auth";
const uniqueSlug = require("unique-slug");

const createIncomeSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  amount: z.number().positive(),
  // incomeDate: z.string().datetime(),
});

export async function POST(NextRequest) {
  const session = await getAuthSession();

  // console.log(session.user.email);

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const body = await NextRequest.json();
  const validation = createIncomeSchema.safeParse(body);



  const incomeSlug = body.title + uniqueSlug();



  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const addIncome = await prisma.income.create({
    data: {
      title: body.title,
      description: body.description,
      amount: body.amount,
      userEmail: session.user.email,
      slug: incomeSlug

      // incomeDate: body.incomeDate,
    },
  });

  return NextResponse.json(addIncome, { status: 200 });

  // try {
  //   const body = await NextRequest.json();
  //   const validation = createIncomeSchema.safeParse(body);
  //   const slug = title + uniqueSlug();

  //   if (!validation.success) {
  //     return NextResponse.json(validation.error.errors, { status: 400 });
  //   }

  //   const addIncome = await prisma.income.create({
  //     data: {
  //       title: body.title,
  //       description: body.description,
  //       amount: body.amount,
  //       userEmail: session.user.email,
  //       slug: slug,
  //       // incomeDate: body.incomeDate,
  //     },
  //   });

  //   return NextResponse.json(addIncome, { status: 201 });
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Something went wrong" },
  //     { status: 500 }
  //   );
  // }
}

export async function GET(NextRequest) {
  const { searchParams } = new URL(NextRequest.url);

  const page = searchParams.get("page");

  const PAGINATION_NUMBER = 2;

  const query = {
    take: PAGINATION_NUMBER,
    skip: PAGINATION_NUMBER * (page - 1),
  };

  try {
    const [incomes, count] = await prisma.$transaction([
      prisma.income.findMany(query),
      prisma.income.count(),
    ]);

    return NextResponse.json({ incomes, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
