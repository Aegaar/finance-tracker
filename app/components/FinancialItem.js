"use client";

import React from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialItem({ slug, tableName, link }) {
  const router = useRouter();

  const { data, error } = useSWR(
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

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.title}
      {data.source}
      {data.amount}
      <button onClick={deleteHandler}>Delete {tableName}</button>
    </div>
  );
}

export default FinancialItem;
