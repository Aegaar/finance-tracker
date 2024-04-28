"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialChart() {
  const { data: session, status } = useSession({
    required: true,
  });

  const { data, error } = useSWR(
    `http://localhost:3000/api/dashboard`,
    fetcher
  );

  const [chartData, setSCharData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

 
  console.log(data)
  

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default FinancialChart;
