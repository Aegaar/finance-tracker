import React from "react";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/auth";
import { redirect } from "next/navigation";

const getData = async function (slug) {
  const res = await fetch(`http://localhost:3000/api/income/${slug}`, {
    cache: "no-store",
    method: "GET",
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

async function SingleIncome({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const slug = params.incomeSlug;

  const income = await getData(slug);
  return (
    <div>
      {income.title}
      {income.source}
    </div>
  );
}

export default SingleIncome;
