import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import FinancialItems from "../components/FinancialItems";
import { Suspense } from "react";
import Loading from "../loading";

async function ExpensesPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <FinancialItems page={page} tableName={"expense"} link={"/expenses"} />
      </Suspense>
    </>
  );
}

export default ExpensesPage;
