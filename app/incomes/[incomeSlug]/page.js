import React from "react";

function SingleIncome({ params }) {
  const income = params.incomeSlug

  return <div>{income}</div>;
}

export default SingleIncome;
