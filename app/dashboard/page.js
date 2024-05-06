"use client";

import FinancialChart from "../components/FinancialChart";
import { useSession } from "next-auth/react";
import RecentFinancialItems from "../components/RecentFinancialItems";
import Totals from "../components/Totals";
import useSWR from "swr";

// TODO ADD ROUTE PROTECTION
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function DashboardPage() {
  const { data, error } = useSWR(
    `http://localhost:3000/api/dashboard`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Totals
        total={data.total}
        totalIncomes={data.totalIncomes}
        totalExpenses={data.totalExpenses}
      />
      <RecentFinancialItems lastAddedItems={data.lastAddedItems} />
      <FinancialChart />
    </>
  );
}

export default DashboardPage;
