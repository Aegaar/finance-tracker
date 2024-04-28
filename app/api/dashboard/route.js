import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import prisma from "../../../prisma/client";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }
  try {
    const [incomes, expense, sumIncomes, sumExpenses] =
      await prisma.$transaction([
        prisma.income.findMany({
          select: {
            amount: true,
          },
          where: {
            userEmail: session.user.email
          }
        }),
        prisma.expense.findMany({
          select: {
            amount: true,
          },
          where: {
            userEmail: session.user.email
          }
        }),
        prisma.income.aggregate({
          _sum: {
            amount: true,
          },
          where: {
            userEmail: session.user.email
          }
        }),
        prisma.expense.aggregate({
          _sum: {
            amount: true,
          },
          where: {
            userEmail: session.user.email
          }
        }),
      ]);

    const totalIncomes = sumIncomes?._sum.amount || 0;
    const totalExpenses = sumExpenses?._sum.amount || 0;

    const total = totalIncomes - totalExpenses;

    return NextResponse.json(
      { total, incomes, expense, totalIncomes, totalExpenses },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
