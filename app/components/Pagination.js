"use client";

import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className=" items-center  rounded py-1 text-white  flex mt-10 justify-center">
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        className="inline-flex  items-center justify-center  disabled:bg-gray-500 bg-blue-500 h-8 px-2"
      >
        <span className="sr-only">Prev Page</span>
        <ChevronLeft />
      </button>

      <div className="bg-blue-500 h-8 flex justify-center items-center px-4">
        {page}
      </div>

      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
        className="inline-flex  items-center justify-center  disabled:bg-gray-500 bg-blue-500 h-8 px-2"
      >
        <span className="sr-only">Next Page</span>
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
