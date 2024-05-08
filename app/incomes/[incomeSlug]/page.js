import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import FinancialItem from "../../components/FinancialItem";
import { Suspense } from "react";
import Loading from "../../loading";

async function IncomePage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const slug = params.incomeSlug;

  return (
    <Suspense fallback={<Loading />}>
      <FinancialItem slug={slug} tableName={"income"} link={"/incomes"} />
    </Suspense>
  );
}

export default IncomePage;
