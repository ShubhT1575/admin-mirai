import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import LogInPieChart from "../.././assets/img/LogInPieChart.png";
import CLOGO from "../.././assets/img/CLOGO.png";
import * as React from "react";

// Data for the PieChart with color and percentage
const data = [
  { value: 1.7, color: "#e74c3c" },
  { value: 3.3, color: "#3498db" },
  { value: 10, color: "#f1c40f" },
  { value: 10, color: "rgb(155, 89, 182)" },
  { value: 75, color: "rgb(46, 204, 113)" },
];

// Size of the PieChart
const size = {
  width: 400,
  height: 280,
};

// Size of the logo in the center
const logoSize = 100;

// Custom styled component for SVG <image> tag
const StyledImage = styled("image")({
  width: logoSize,
  height: logoSize,
});

// Component to render the image at the center of the chart
function PieCenterLabel() {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledImage
      xlinkHref={CLOGO}
      x={left + width / 2 - logoSize / 2}
      y={top + height / 2 - logoSize / 2}
    />
  );
}

// Main component that renders the PieChart with a center logo and colored segments
export function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 80,
          colorField: "color", // Use color field for each segment
          segmentStyle: (point) => ({
            stroke: "none", // Remove the border
            strokeWidth: 0,
            fill: point.color, // Apply the color for each segment
          }),
        },
      ]}
      {...size}
    >
      <PieCenterLabel />

      {/* Render percentage labels for each segment */}
      {data.map((item, index) => (
        <text
          key={index}
          x={
            size.width / 2 + Math.cos((index * 2 * Math.PI) / data.length) * 120
          }
          y={
            size.height / 2 +
            Math.sin((index * 2 * Math.PI) / data.length) * 120
          }
          fill={item.color}
          fontSize={14}
          textAnchor="middle"
          alignmentBaseline="middle"
        ></text>
      ))}
    </PieChart>
  );
}
