import Link from "next/link";

function IncomesPage() {
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
    </>
  );
}

export default IncomesPage;
