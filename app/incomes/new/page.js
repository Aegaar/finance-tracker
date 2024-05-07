import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import NewFinancialItem from "../../components/NewFinancialItem";

const SOURCE_OPTIONS = [
  {
    id: "salary",
    value: "SALARY",
    name: "Salary",
  },
  {
    id: "freelancing",
    value: "FREELANCING",
    name: "Freelancing",
  },
  {
    id: "investments",
    value: "INVESTMENTS",
    name: "Investments",
  },
  {
    id: "stocks",
    value: "STOCKS",
    name: "Stocks",
  },
  {
    id: "bank_transfers",
    value: "BANK_TRANSFERS",
    name: "Bank transfers",
  },
  {
    id: "other",
    value: "OTHER",
    name: "Other",
  },
];

async function NewIncomesPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <>
      <NewFinancialItem
        tableName={"income"}
        link={"/incomes"}
        sources={SOURCE_OPTIONS}
      />
    </>
  );
}

export default NewIncomesPage;
