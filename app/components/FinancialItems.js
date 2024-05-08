"use client";

import Link from "next/link";
import Pagination from "../components/Pagination";
import useSWR from "swr";
import { MoveRight } from "lucide-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialItems({ page, tableName, link }) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/finances?page=${page}&table=${tableName}`,
    fetcher
  );

  if (error) {
    return <div>Failed to load data</div>;
  }

  const items = data?.items || [];
  const PAGINATION_NUMBER = 9;
  const count = data?.count || 0;
  const hasPrev = PAGINATION_NUMBER * (page - 1) > 0;
  const hasNext = PAGINATION_NUMBER * page < count;

  return (
    <>
      <div className="flex justify-center py-10">
        <button className="bg-blue-500 text-blue-500 hover:bg-blue-600 transition-colors p-4 rounded-2xl">
          <Link href={`${link}/new`}>
            <span className="px-8 py-3 text-white">Add new {tableName}</span>
          </Link>
        </button>
      </div>
      {!data && !isLoading ? (
        <div>No {tableName} at present, add it</div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-blue-500 border border-gray-200 rounded-2xl  flex flex-col "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-white ">
                  <span className="text-black font-bold">Amount: </span>
                  {item.amount}
                </p>
                <p className="mb-3 font-normal text-white">
                  <span className="text-black font-bold">Source: </span>
                  {item.source.toLowerCase()}
                </p>
                <div className="flex justify-center">
                  <Link
                    href={`${link}/${item.slug}`}
                    className="w-3/4 inline-flex items-center justify-center px-3 mx-3 py-2 text-sm font-medium text-center text-black bg-white hover:text-blue-500 transition-colors rounded-lg hover: focus:ring-4 focus:outline-none align-center "
                  >
                    <p className="mr-3 text-center">
                      Show details and manage {tableName}
                    </p>
                    <MoveRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </>
      )}
    </>
  );
}

export default FinancialItems;
