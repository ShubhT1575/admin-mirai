import React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import "../../style/Income.css";

const TokenDistribution = () => {
  // Define the distribution data
  const distributionData = [
    { percentage: 1.7, label: "Liquidity Mgmt.", color: "#e74c3c" },
    { percentage: 3.3, label: "Strategic Sale", color: "#3498db" },
    { percentage: 10, label: "Founding Team", color: "#f1c40f" },
    { percentage: 10, label: "Ecosystem Dev. (Treasury)", color: "#9b59b6" },
  ];
  // const { width } = useWindowSize();

  // const chartSize = Math.min(Math.max(width * 0.1, 40), 100); // Min size of 40 and max size of 100
  const communityData = [
    { percentage: 12, label: "Airdrop", color: "#2ecc71" },
    { percentage: 18.9, label: "Staking Rewards", color: "#2ecc71" },
    { percentage: 44.1, label: "Volume Rewards", color: "#2ecc71" },
  ];

  const renderPieChart = (
    percentage,
    color,
    startAngle = 90,
    clockwise = true
  ) => (
    <PieChart
      series={[
        {
          innerRadius: 40,
          outerRadius: 30,

          data: [
            { id: "filled", value: percentage, color: color },
            { id: "empty", value: 100 - percentage, color: "#2c2c2c" },
          ],
          colorField: "color",
          segmentStyle: { strokeWidth: 0 },
        },
      ]}
      width={100}
      height={100}
      interactive={false}
    />
  );

  return (
    <div className="tokenomics-breakdown-section">
      <div className="distribution-section">
        {distributionData.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "45px",
              display: "flex",
            }}
          >
            <div className="pichartContainer">
              {renderPieChart(item.percentage, item.color)}
            </div>
            <span style={{ color: item.color, gap: "20px" }}>
              <div className="percentage-amount"> {`${item.percentage}%`}</div>
              <div className="distribution-label">{item.label}</div>
            </span>
          </div>
        ))}
      </div>

      <div className="community-breakdown-section">
        <div
          style={{
            marginBottom: "12px",
            display: "flex",
            paddingTop: "20px",
          }}
        >
          <div className="pichartContainer">
            {renderPieChart(75, "#2ecc71")}
          </div>
          <span style={{ color: "#2ecc71", gap: "20px" }}>
            <div className="percentage-amount"> 75%</div>
            <div className="distribution-label">Community</div>
          </span>
        </div>
        {/* <div className="community-section">
          <div style={{ marginBottom: "10px" }}>
            {renderPieChart(75, "#2ecc71", 90, false)}
          </div>
      
          <div style={{ flexDirection: "column" }}>
            <div className="percentage-amount" style={{ color: "#2ecc71" }}>
              75%
            </div>
            <div className="distribution-label" style={{ color: "#2ecc71" }}>
              Community
            </div>
          </div>
        </div> */}
        <div className="vertical-line"></div>
        <div className="breakdown-container">
          <h4 style={{ color: "#ccc", textAlign: "right", fontSize: "20px" }}>
            BREAKDOWN
          </h4>
          {communityData.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                display: "flex",
              }}
            >
              <div className="pichartContainer" style={{ marginRight: "10px" }}>
                {renderPieChart(item.percentage, item.color)}
              </div>
              <span style={{ color: item.color, gap: "20px" }}>
                <div className="percentage-amount">{`${item.percentage}%`}</div>
                <div className="distribution-label">{item.label}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenDistribution;
