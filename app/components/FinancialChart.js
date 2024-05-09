import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
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

function FinancialChart({ items, title, text }) {
  const [chartData, setCharData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const itemsBySource = {};

    items.forEach((item) => {
      if (!itemsBySource[item.source]) {
        itemsBySource[item.source] = item.amount;
      } else {
        itemsBySource[item.source] += item.amount;
      }
    });
    const chartDataArray = Object.entries(itemsBySource).map(
      ([source, amount]) => ({
        source,
        amount,
      })
    );

    const borderColor = title === "incomes" ? "#95ed9a" : "#eb7171";
    const backgroundColor = title === "incomes" ? "#95ed9a" : "#eb7171";

    setCharData({
      labels: chartDataArray.map((data) => data.source),
      datasets: [
        {
          label: title,
          data: chartDataArray.map((data) => data.amount),
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ],
    });
  }, [items]);

  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: text,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default FinancialChart;
