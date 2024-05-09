import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";
import NewFinancialItem from "../../components/NewFinancialItem";

export const metadata = {
  title: "New expense",
  description: "Add new expense",
};

const SOURCE_OPTIONS = [
  {
    id: "education",
    value: "EDUCATION",
    name: "Education",
  },
  {
    id: "groceries",
    value: "GROCERIES",
    name: "Groceries",
  },
  {
    id: "health",
    value: "HEALTH",
    name: "Health",
  },
  {
    id: "subscriptions",
    value: "SUBSCRIPTIONS",
    name: "Subscriptions",
  },
  {
    id: "clothing",
    value: "CLOTHING",
    name: "Clothing",
  },
  {
    id: "traveling",
    value: "TRAVELING",
    name: "Traveling",
  },
  {
    id: "other",
    value: "OTHER",
    name: "Other",
  },
];

async function NewExpensesPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <>
      <NewFinancialItem
        tableName={"expense"}
        link={"/expenses"}
        sources={SOURCE_OPTIONS}
      />
    </>
  );
}

export default NewExpensesPage;
