"use client";

import React from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { Trash2 } from "lucide-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialItem({ slug, tableName, link }) {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/finances/${slug}?table=${tableName}`,
    fetcher
  );

  const deleteHandler = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/finances/${slug}?table=${tableName}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to delete ${tableName}`);
      }

      mutate(link);
      router.push(link);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>No data</div>;

  let itemName = tableName.charAt(0).toUpperCase() + tableName.slice(1);

  const ITEM_DETAILS = [
    {
      detail: data.title,
      description: "Title",
    },
    {
      detail: data.amount,
      description: "Amount",
    },
    { detail: data.description, description: "Description" },
    { detail: data.createdAt, description: "Created at" },
    { detail: data.userEmail, description: "Creator email" },
  ];

  return (
    <div className="flex justify-center align-center mt-10">
      <div className="p-10 bg-blue-500 border-2 border-gray-200 rounded-2xl flex flex-col mx-5 w-full md:w-4/5 lg:w-3/4">
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-white text-center">
          {itemName} details
        </h1>
        <div className="flow-root rounded-lg border border-white py-3 shadow-sm">
          <dl className="-my-3 divide-y divide-gray-100 ">
            {ITEM_DETAILS.map((item_detail) => (
              <div
                key={`${tableName}-${item_detail.description}`}
                className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-black font-bold ">
                  {item_detail.description}
                </dt>
                <dd className=" text-white sm:col-span-2">
                  {item_detail.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center">
          <button
            onClick={deleteHandler}
            className="w-1/2 md:w-1/3 lx:w-1/4 inline-flex items-center justify-center px-3 mx-3 py-2 mt-10 text-sm font-medium text-center text-black bg-white hover:text-blue-500 transition-colors rounded-lg hover: focus:ring-4 focus:outline-none align-center "
          >
            <p className="mr-3 text-center">Delete {tableName}</p>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinancialItem;
