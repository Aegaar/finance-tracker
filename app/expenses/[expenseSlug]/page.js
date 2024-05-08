import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import FinancialItem from "../../components/FinancialItem";
import { Suspense } from "react";
import Loading from "../../loading";

async function ExpensePage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const slug = params.expenseSlug;

  return (
    <Suspense>
      <FinancialItem slug={slug} tableName={"expense"} link={"/expenses"} />
    </Suspense>
  );
}

export default ExpensePage;
