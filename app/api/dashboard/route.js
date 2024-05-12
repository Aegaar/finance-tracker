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
    const [incomes, expenses, sumIncomes, sumExpenses] =
      await prisma.$transaction([
        prisma.income.findMany({
          select: {
            id: true,
            amount: true,
            source: true,
            createdAt: true,
            title: true,
            slug: true,
          },
          where: {
            userEmail: session.user.email,
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
        prisma.expense.findMany({
          select: {
            id: true,
            amount: true,
            source: true,
            createdAt: true,
            title: true,
            slug: true,
          },
          where: {
            userEmail: session.user.email,
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
        prisma.income.aggregate({
          _sum: {
            amount: true,
          },
          where: {
            userEmail: session.user.email,
          },
        }),
        prisma.expense.aggregate({
          _sum: {
            amount: true,
          },
          where: {
            userEmail: session.user.email,
          },
        }),
      ]);

    const totalIncomes = sumIncomes?._sum.amount || 0;
    const totalExpenses = sumExpenses?._sum.amount || 0;

    const numberOfIncomes = incomes.length;
    const numberOfExpenses = expenses.length;
    const numberOfIncomesAndExpenses = numberOfIncomes + numberOfExpenses;

    const totalDifference = totalIncomes - totalExpenses;

    const total = totalDifference.toFixed(2);

    const lastAddedItems = [
      ...incomes.map((item) => ({ ...item, type: "income" })),
      ...expenses.map((item) => ({ ...item, type: "expense" })),
    ]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);

    return NextResponse.json(
      {
        total,
        incomes,
        expenses,
        totalIncomes,
        totalExpenses,
        lastAddedItems,
        numberOfIncomes,
        numberOfExpenses,
        numberOfIncomesAndExpenses,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
