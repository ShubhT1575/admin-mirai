import React from "react";
import { PieChartWithCenterLabel } from "../Chart/IncomeChart";
import TokenDistribution from "./TokenDistribution";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CLOGO from "../.././assets/img/CLOGO.png";

function IncomeRow() {
  return (
    <div
      id="tokenomics"
      className="col-lg-12 Tokenomics-section d-flex justify-content-center"
    >
      <div className="col-xl-4 col-lg-12 col-sm-12 col-md-12 main-piechart-container d-flex flex-column justify-content-center">
        <div className="row piechart">
          <PieChartWithCenterLabel></PieChartWithCenterLabel>
        </div>
        <Card className="LooksRare-card">
          <CardActionArea>
            <CardContent className="LooksRare-container">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="LooksRare-span"
              >
                BITGOLD
                <span>
                  <img
                    src={CLOGO}
                    alt=""
                    style={{ width: "50px", marginLeft: "10px" }}
                  />
                </span>
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="Looks-token-container"
              >
                BITGOLD Income Graph
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <div className="row LooksRare-container">
          <div className="LooksRare-div ">
            <span className="LooksRare-span">LooksRare</span>
            <div>
              <img src={LooksRare} alt="" />
            </div>
          </div>
          <div className="Looks-token-container">LOOKS Token Allocation</div>
        </div> */}
      </div>
      <div
        className="col-xl-8 col-lg-12 token-distribution"
        style={{ width: "fit-content" }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <TokenDistribution />
        </div>
      </div>
    </div>
  );
}

export default IncomeRow;
