import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { cutAfterDecimal } from "../web3";

const ApexChart = ({
  totalCoreIncome,
  totalGlobleIncome,
  totalFortuneIncome,
  totalAllIncome,
  extraincome,
}) => {
  const [chartOptions, setChartOptions] = useState({
    series: [50, 30, 20, 40, 10],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
        },
      },
      colors: ["#FF33A1", "#0084ff", "#39539E", "#0077B5", "#FF5733"],
      labels: ["Referral", "Rank", "Stake", "Login", "Fund Wallet"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="radialBar"
          height={390}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
