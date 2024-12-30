import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ChartComponent = ({ weatherData, selectedData }) => {
  const labels = weatherData?.daily?.time || [];
  const chartData = weatherData?.daily[selectedData] || [];

  // Chart Data Configuration
  const data = {
    labels,
    datasets: [
      {
        label: selectedData.replace("_", " ").toUpperCase(),
        data: chartData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return <Line data={data} options={{ animation: { duration: 1500 } }} />;
};

export default ChartComponent;
