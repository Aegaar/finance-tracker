"use client";

import React from "react";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SingleIncome({ params }) {
  const { data: session, status } = useSession({
    required: true,
  });

  const router = useRouter();

  const slug = params.expenseSlug;

  const { data, error } = useSWR(
    `http://localhost:3000/api/finances/${slug}?table=expense`,
    fetcher
  );

  const deleteHandler = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/finances/${slug}?table=expense`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete income");
      }

      mutate(`/expenses`);
      router.push("/expenses");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.title}
      {data.source}
      {data.amount}
      <button onClick={deleteHandler}>Delete expense</button>
    </div>
  );
}

export default SingleIncome;
