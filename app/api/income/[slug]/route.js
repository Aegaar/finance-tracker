import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const income = await prisma.income.findUnique({
      where: { slug: slug },
      
    });

    return NextResponse.json(income, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
