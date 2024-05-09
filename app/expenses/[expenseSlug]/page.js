import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import FinancialItem from "../../components/FinancialItem";
import { Suspense } from "react";
import Loading from "../../loading";

export async function generateMetadata({ params }) {
  const slug = params.expenseSlug;

  const parts = slug.split("-");
  const firstTwoParts = parts.slice(0, 2);
  const id = firstTwoParts.join("-");

  return {
    title: id,
    description: 'See details of expense'
  };
}

async function ExpensePage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const slug = params.expenseSlug;

  return (
    <Suspense fallback={<Loading />}>
      <FinancialItem slug={slug} tableName={"expense"} link={"/expenses"} />
    </Suspense>
  );
}

export default ExpensePage;
