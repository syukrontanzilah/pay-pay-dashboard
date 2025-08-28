"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

export interface IPieChart {
  produk: string;
  margin: number;
}
// Register the required components of Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Options for the Pie chart
const options = {
  plugins: {
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 1,
    },
    legend: {
      labels: {
        color: "#343433",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const PieChartComponent = ({ data }: { data: IPieChart[] }) => {
  // Data for the Pie chart
  const datas = {
    labels: data?.map((item) => item.produk),
    datasets: [
      {
        label: "Values",
        // data: data?.map((item) => item.margin),
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#8884d8",
          "#82ca9d",
          "#ffc658",
          "#ff7300",
          "#d0ed57",
          "#a4de6c",
          "#8dd1e1",
          "#83a6ed",
          "#8a5c8f",
          "#d1a9a5",
        ],
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="relative w-full h-[80%] ">
      <Pie data={datas} options={options} />
    </div>
  );
};

export default PieChartComponent;
