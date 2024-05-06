import React from "react";

function Totals({ total, totalIncomes, totalExpenses }) {
  return (
    <>
      <div>
        <b>Total Balance</b>
        <p>$ {total}</p>
      </div>
      <div>
        <b>Total Income</b>
        <p>$ {totalIncomes}</p>
      </div>
      <div>
        <b>Total expense</b>
        <p>$ {totalExpenses}</p>
      </div>
    </>
  );
}

export default Totals;
