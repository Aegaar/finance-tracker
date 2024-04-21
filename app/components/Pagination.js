"use client";

import { useRouter } from "next/navigation";

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className="flex justify-around">
      <button
        className="disabled:bg-gray-500"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="disabled:bg-gray-500"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
