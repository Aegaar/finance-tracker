"use client";

import FinancialChart from "../components/FinancialChart";
import { useSession } from "next-auth/react";
import RecentFinancialItems from "../components/RecentFinancialItems";
import Totals from "../components/Totals";
import useSWR from "swr";
import Loading from "../loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
  });

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/dashboard`,
    fetcher
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex mx-10">
      <div className="w-4/6 flex flex-col mr-10">
        {data.incomes.length > 0 ? (
          <FinancialChart
            items={data.incomes}
            title="incomes"
            text="Total income from a given source"
          />
        ) : (
          <p>You need to add incomes to see the graph</p>
        )}
        {data.expenses.length > 0 ? (
          <FinancialChart
            items={data.expenses}
            title="expenses"
            text="Total expense from a given source"
          />
        ) : (
          <p>You need to add expenses to see the graph</p>
        )}
      </div>

      <div className="w-2/6">
        <Totals
        numberOfIncomesAndExpenses={data.numberOfIncomesAndExpenses}
          numberOfExpenses={data.numberOfExpenses}
          numberOfIncomes={data.numberOfIncomes}
          total={data.total}
          totalIncomes={data.totalIncomes}
          totalExpenses={data.totalExpenses}
        />
        <RecentFinancialItems lastAddedItems={data.lastAddedItems} />
      </div>
    </div>
  );
}

export default DashboardPage;
