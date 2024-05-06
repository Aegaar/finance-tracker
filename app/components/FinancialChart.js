"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
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

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FinancialChart() {

  // const { data, error } = useSWR(
  //   `http://localhost:3000/api/dashboard`,
  //   fetcher
  // );

  const [chartData, setSCharData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setSCharData({
      labels: [
        "Salary",
        "Freelancing",
        "Investments",
        "Stocks",
        "Bank transfers",
        "other",
      ],
      datasets: [
        {
          label: "Incomes",
          data: [118127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Total income from a given source",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  const [chartOptions, setChartOptions] = useState({});

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default FinancialChart;
