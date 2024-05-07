import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import FinancialItems from "../components/FinancialItems";

async function IncomesPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <FinancialItems page={page} tableName={"income"} link={"/incomes"} />
    </>
  );
}

export default IncomesPage;
