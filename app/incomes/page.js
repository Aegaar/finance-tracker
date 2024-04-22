import Link from "next/link";
import Pagination from "../components/Pagination";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/dist/server/api-utils";
import { headers } from "next/headers";

const getData = async function (page) {
  const res = await fetch(`http://localhost:3000/api/income?page=${page}`, {
    cache: "no-store",
    method: "GET",
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

async function IncomesPage({ searchParams }) {
  const session = await getServerSession(authOptions);

  if(!session) {
    redirect('/login')
  }

  const page = parseInt(searchParams.page) || 1;
  const { count, incomes } = await getData(page);

  const PAGINATION_NUMBER = 2;

  const hasPrev = PAGINATION_NUMBER * (page - 1) > 0;
  const hasNext = PAGINATION_NUMBER * (page - 1) + PAGINATION_NUMBER < count;

  return (
    <>
      <button className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
        <Link href="/incomes/new">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative block border border-current bg-white px-8 py-3">
            {" "}
            Add income{" "}
          </span>
        </Link>
      </button>
      {incomes?.map((item) => (
        <Link key={item.id} href={`incomes/${item.slug}`}>
          {item.title}
        </Link>
      ))}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </>
  );
}

export default IncomesPage;
