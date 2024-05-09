"use client";

import Pagination from "../components/Pagination";
import useSWR from "swr";
import { MoveRight, CirclePlus } from "lucide-react";
import Loading from "../loading";
import Button from "./Button";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialItems({ page, tableName, link }) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/finances?page=${page}&table=${tableName}`,
    fetcher
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <div>Failed to load data</div>;
  }

  const items = data?.items || [];
  const PAGINATION_NUMBER = 6;
  const count = data?.count || 0;
  const hasPrev = PAGINATION_NUMBER * (page - 1) > 0;
  const hasNext = PAGINATION_NUMBER * page < count;

  return (
    <>
      <div className="flex justify-center pt-10 pb-16 ">
        <Button
          href={`${link}/new`}
          description={`Add new ${tableName}`}
          icon={<CirclePlus />}
          style={"bg-blue-500 text-white rounded-2xl px-8 py-3"}
        />
      </div>
      {items.length <= 0 ? (
        <div className="text-center text-2xl">No {tableName} at present</div>
      ) : (
        <div
          className={`grid lg:grid-cols-${
            items.length <= 2 ? 2 : 3
          } md:grid-cols-1 gap-6 px-10`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-blue-500 border border-gray-200 rounded-2xl  flex flex-col "
            >
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-white text-center italic">
                {item.title}
              </h1>
              <hr />
              <div className="mb-6 mt-6 mx-5 font-normal text-white flex justify-between ">
                <span className="font-bold text-xl">Amount: </span>
                <span className="text-2xl italic">{item.amount}</span>
              </div>

              <div className="mb-6  mx-5 font-normal text-white flex justify-between ">
                <span className=" font-bold text-xl">Source: </span>
                <span className="text-2xl italic">
                  {item.source.toLowerCase()}
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  href={`${link}/${item.slug}`}
                  description={`Show details and manage ${tableName}`}
                  icon={<MoveRight />}
                  style={" rounded-2xl bg-white px-8 py-3 text-blue-500"}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {(hasNext || hasPrev) && (
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      )}
    </>
  );
}

export default FinancialItems;
