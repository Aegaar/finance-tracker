import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import FinancialItems from "../components/FinancialItems";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
  title: "Incomes",
  description: "See your incomes",
};

async function IncomesPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <FinancialItems page={page} tableName={"income"} link={"/incomes"} />
      </Suspense>
    </>
  );
}

export default IncomesPage;
