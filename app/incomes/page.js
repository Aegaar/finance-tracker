import Link from "next/link";
import {GET} from '../api/income/route'

const getData = async function () {
  const res = await fetch("http://localhost:3000/api/income", {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

async function IncomesPage() {
  const data = await getData();
  console.log(data)


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
      {data?.map((item) => (
        <Link key={item.id} href={`incomes/${item.slug}`}>{item.title}</Link>
      ))}
    </>
  );
}

export default IncomesPage;
