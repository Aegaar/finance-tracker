import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/auth";
import { getAuthSession } from "../../../utils/auth";

export async function GET(NextRequest, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "You are not logged in" });
  }

  const { searchParams } = new URL(NextRequest.url);

  let tableName;

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

  const { slug } = params;
  try {
    const item = await tableName.findUnique({
      where: { slug: slug },
    });

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(NextRequest, { params }) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(NextRequest.url);

  let tableName;

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

  const { slug } = params;

  try {
    const deleteItem = await tableName.delete({
      where: { slug: slug, userEmail: session.user.email },
    });

    return NextResponse.json(deleteItem, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
