"use client";

import FinancialChart from "../components/FinancialChart";
import { useSession } from "next-auth/react";
import RecentFinancialItems from "../components/RecentFinancialItems";
import Totals from "../components/Totals";
import useSWR from "swr";
import Loading from "../loading";
import { BarChart3 } from "lucide-react";
import { CirclePlus } from "lucide-react";
import Button from "../components/Button";

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
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-col lg:flex-row mx-10">
      <div className=" lg:w-4/6 lg:mr-10 flex flex-col ">
        {data.incomes.length > 0 ? (
          <FinancialChart
            items={data.incomes}
            title="incomes"
            text="Total income from a given source"
          />
        ) : (
          <div className=" mt-10 mb-10">
            <div className="flex align-center justify-center">
              <BarChart3 size={30} />
              <p className="text-center font-bold text-blue-500 pl-4 text-xl">
                You need to add incomes to see the graph
              </p>
            </div>
            <div className="flex justify-center pt-10">
              <Button
                href={"/incomes/new"}
                description={"Add new income"}
                icon={<CirclePlus />}
                style={"bg-blue-500 text-white rounded-2xl px-8 py-3"}
              />
            </div>
          </div>
        )}
        {data.expenses.length > 0 ? (
          <FinancialChart
            items={data.expenses}
            title="expenses"
            text="Total expense from a given source"
          />
        ) : (
          <div className=" mt-10 mb-10">
            <div className="flex align-center justify-center">
              <BarChart3 size={30} />
              <p className="text-center font-bold text-blue-500 pl-4 text-xl">
                You need to add expenses to see the graph
              </p>
            </div>
            <div className="flex justify-center pt-10">
              <Button
                href={"/expenses/new"}
                description={"Add new expense"}
                icon={<CirclePlus />}
                style={"bg-blue-500 text-white rounded-2xl px-8 py-3"}
              />
            </div>
          </div>
        )}
      </div>

      <div className=" lg:w-2/6 mt-5 lg:mt-0">
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
