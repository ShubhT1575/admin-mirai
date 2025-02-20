import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "All income",
        type: "column",
        data: [1000, 1500, 2000, 2500, 3000, 3500],
      },
      {
        name: "Daily Login Reward",
        type: "area",
        data: [200, 300, 400, 500, 600, 700],
      },
      {
        name: "Daily Stake Reward",
        type: "line",
        data: [50, 100, 150, 200, 250, 300],
      },
      {
        name: "Fund Wallet Reward",
        type: "area",
        data: [500, 1000, 1500, 2000, 2500, 3000],
      },
      {
        name: "Referral Reward",
        type: "area",
        data: [300, 600, 900, 1200, 1500, 1800],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5, 4],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1, 0.25],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: ["2025-02-01", "2025-02-02", "2025-02-03", "2025-02-04", "2025-02-05", "2025-02-06"],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        categories: ["2025-02-01", "2025-02-02", "2025-02-03", "2025-02-04", "2025-02-05", "2025-02-06"],
      },
      yaxis: {
        title: {
          text: "Deposit in $",
        },
        labels: {
          formatter: (value) => {
            if (value >= 1000000) return (value / 1000000).toFixed(1) + "M"; // Abbreviate millions
            if (value >= 1000) return (value / 1000).toFixed(1) + "K"; // Abbreviate thousands
            return value.toFixed(0); // Show smaller values as-is
          },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " $";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
