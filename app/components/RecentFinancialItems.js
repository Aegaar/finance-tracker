import React from "react";
import { MoveUpRight } from "lucide-react";
import { MoveDownRight } from "lucide-react";

function RecentFinancialItems({ lastAddedItems }) {
  return (
    <>
      <h2 className="text-center font-bold text-3xl pb-5">Recent history</h2>
      <article className="rounded-xl text-black bg-white  mb-5">
        {lastAddedItems?.map((item) => (
          <div
            key={item.id}
            className={`p-2 sm:p-3 lg:p-5 flex justify-between gap-2 sm:gap-4 border-2 rounded-xl mb-3 border-black ${
              item.type === "income" ? "border-green-700" : "border-red-500"
            }`}
          >
            <div className="flex">
              {item.type === "income" ? (
                <MoveUpRight color="#15803d" size={30} className="mr-2" />
              ) : (
                <MoveDownRight color="#ef4444" size={30} className="mr-2" />
              )}
              <p className="font-bold">{item.title}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <p
                className={`text-blue-500 sm:text-lg mr-2 font-bold ${
                  item.type === "income" ? "text-green-700" : "text-red-500"
                }`}
              >
                {item.type !== "income" && "-"}
                {item.amount}
              </p>
            </div>
          </div>
        ))}
      </article>
    </>
  );
}

export default RecentFinancialItems;
