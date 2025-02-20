import React from "react";
import ReactApexChart from "react-apexcharts";

class Withdraw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function () {
                  // Custom formatter function for the "Total" label
                  return 249;
                },
              },
            },
          },
        },
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={300}
          />
        </div>
      </div>
    );
  }
}

export default Withdraw;
