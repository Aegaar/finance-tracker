import React from "react";
import { MoveUpRight } from "lucide-react";
import { MoveDownRight } from "lucide-react";
import { Activity } from "lucide-react";
import { ListOrdered } from "lucide-react";

function Totals({
  total,
  totalIncomes,
  totalExpenses,
  numberOfExpenses,
  numberOfIncomes,
  numberOfIncomesAndExpenses,
}) {
  const TOTALS = [
    {
      name: "income",
      total: totalIncomes,
      number: numberOfIncomes,
      icon: <MoveUpRight color="#000000" size={30} className="mr-2" />,
    },
    {
      name: "expense",
      total: totalExpenses,
      number: numberOfExpenses,
      icon: <MoveDownRight color="#000000" size={30} className="mr-2" />,
    },
    {
      name: "total",
      total: total,
      number: numberOfIncomesAndExpenses,
      icon: <Activity color="#000000" size={30} className="mr-2" />,
    },
  ];

  return TOTALS.map((total) => (
    <article
      key={total.name}
      className="rounded-xl border-2 text-white bg-blue-500 flex justify-start align-center mb-5"
    >
      <div className="flex flex-col  p-2 sm:p-3 lg:p-5">
        <div className="mt-2 flex items-center gap-2 sm:gap-4">
          {total.icon}
          <div className="flex flex-col sm:flex-row items-center gap-1">
            <p className="text-white font-medium sm:text-lg mr-2">
              {total.name}
            </p>
            <p className="text-2xl text-extrabold italic">{total.total}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 sm:gap-4">
          <ListOrdered color="#000000" size={30} className="mr-2" />
          <div className="flex flex-col sm:flex-row items-center gap-1">
            <p className="text-white font-medium sm:text-lg mr-2">
              Number of {total.name}s:
            </p>
            <p className="text-2xl text-extrabold italic">{total.number}</p>
          </div>
        </div>
      </div>
    </article>
  ));
}

export default Totals;
