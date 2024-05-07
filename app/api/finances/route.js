import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../prisma/client";
import { getAuthSession } from "../../utils/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { createItemSchema } from "../../utils/validationSchema";

const uniqueSlug = require("unique-slug");

export async function POST(NextRequest) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }
  try {
    const body = await NextRequest.json();
    let validation;
    let tableName;
    let slugBase;

    if (body.table === "income") {
      validation = createItemSchema.safeParse(body);
      tableName = prisma.income;
      slugBase = "incomes";
    } else if (body.table === "expense") {
      validation = createItemSchema.safeParse(body);
      tableName = prisma.expense;
      slugBase = "expenses";
    } else {
      return NextResponse.json(
        { message: "Invalid table name" },
        { status: 400 }
      );
    }

    const incomeSlug =
      body.title.trim().replace(/\s/g, "-") + "-" + uniqueSlug();

    if (!validation.success) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    console.log(body.source);

    const addItem = await tableName.create({
      data: {
        title: body.title,
        description: body.description,
        amount: body.amount,
        userEmail: session.user.email,
        slug: slugBase + "-" + incomeSlug,
        source: body.source,
      },
    });

    return NextResponse.json(addItem, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(NextRequest.url);

  const page = searchParams.get("page");

  const PAGINATION_NUMBER = 2;

  let tableName;

  console.log(searchParams.get("table"));

  if (searchParams.get("table") === "income") {
    tableName = prisma.income;
  } else if (searchParams.get("table") === "expense") {
    tableName = prisma.expense;
  } else {
    return NextResponse.json(
      { message: "Invalid table name" },
      { status: 400 }
    );
  }

  const query = {
    take: PAGINATION_NUMBER,
    skip: PAGINATION_NUMBER * (page - 1),
    orderBy: {
      updatedAt: "desc",
    },
    where: { userEmail: session.user.email },
  };

  try {
    const [items, count] = await prisma.$transaction([
      tableName.findMany(query),
      tableName.count({
        where: { userEmail: session.user.email },
      }),
    ]);

    return NextResponse.json({ items, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
