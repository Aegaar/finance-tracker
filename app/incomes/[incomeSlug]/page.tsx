import React from "react";

function SingleIncome({ params }: { params: {
    incomeSlug: string;
}}) {
  const income = params.incomeSlug

  return <div>{income}</div>;
}

export default SingleIncome;
