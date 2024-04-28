import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/auth";
import { getAuthSession } from "../../../utils/auth";
// import { revalidatePath } from "next/cache";

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "You are not logged in" });
  }
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

export async function DELETE(NextRequest, { params }) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  const { slug } = params;

  try {
    const deletedIncome = await prisma.income.delete({
      where: {slug: slug, userEmail: session.user.email}
    });

    // revalidatePath("/incomes", "layout")
    return NextResponse.json(deletedIncome, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
