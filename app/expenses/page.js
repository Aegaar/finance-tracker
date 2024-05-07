"use client";

import Link from "next/link";
import Pagination from "../components/Pagination";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function IncomesPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  const { data, error } = useSWR(
    `http://localhost:3000/api/finances?page=${page}&table=expense`,
    fetcher
  );

  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  if (error) {
    return <div>Failed to load data</div>;
  }

  if (!data) return <div>Loading...</div>;

  const expenses = data?.items || [];
  const PAGINATION_NUMBER = 2;
  const count = data?.count || 0;
  const hasPrev = PAGINATION_NUMBER * (page - 1) > 0;
  const hasNext = PAGINATION_NUMBER * page < count;

  return (
    <>
      <button className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
        <Link href="/expenses/new">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative block border border-current bg-white px-8 py-3">
            Add expense
          </span>
        </Link>
      </button>
      {expenses.map((item) => (
        <Link key={item.id} href={`expenses/${item.slug}`}>
          {item.title}
        </Link>
      ))}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </>
  );
}

export default IncomesPage;
