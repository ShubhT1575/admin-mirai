import React, { useState, useEffect } from "react";
import Withdraw from "../Chart/Withdraw";
import { transferToFundWallet, UserData, withdrawFundWallet } from "../web3";
import { useSelector } from "react-redux";

function WidthdrawRow() {
  const { wallet, tokenData } = useSelector((state) => state.bitgold);
  const { walletAddress } = wallet;
  const tokenDecimals = tokenData?.decimals;
  const address = walletAddress;
  const [dashboard, setDashboard] = useState("");

  async function fetchData(address) {
    try {
      let data = await UserData(address);
      setDashboard(data);
    } catch (error) {
      setDashboard(false); 
    }
  }

  console.log(dashboard, "dash//////////");

  useEffect(() => {
    if (address) fetchData(address);
  }, [address]);
  return (
    <>
      <div className="row justify-content-center">
        {/* <div class=" col-xl-4">
          <div class="col-xl-12">
            <div class="card custom-card overflow-hidden">
              <div class=" rounded-1">
                <div class="card-body pb-4 mb-2">
                  <div class="d-flex align-items-center w-100 justify-content-between gap-1">
                    <div>
                      <p class="mb-1 fw-medium">Reward Wallet</p>
                      <h4 class="mb-0 fw-medium">
                        $ {(dashboard && Number(dashboard[5]) / ('1e' + tokenDecimals)) || 0.0}
                      </h4>
                    </div>
                  </div>
                </div>
                <div id="employees" style={{ minHeight: "50px" }}>
                  <div
                    id="apexchartsvqtg49ax"
                    class="apexcharts-canvas apexchartsvqtg49ax apexcharts-theme-light"
                    style={{ width: "559px", height: "50px" }}
                  >
                    <svg
                      id="SvgjsSvg4750"
                      width="559"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x="0" y="0" width="559" height="50">
                        <div
                          class="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{ maxHeight: "25px" }}
                        ></div>
                      </foreignObject>
                      <rect
                        id="SvgjsRect4754"
                        width="0"
                        height="0"
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fefefe"
                      ></rect>
                      <g
                        id="SvgjsG4826"
                        class="apexcharts-yaxis"
                        rel="0"
                        transform="translate(-18, 0)"
                      ></g>
                      <g
                        id="SvgjsG4752"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(0, 0)"
                      >
                        <defs id="SvgjsDefs4751">
                          <clipPath id="gridRectMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4756"
                              width="5591004"
                              height="501"
                              x="-2.5"
                              y="-0.5"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskvqtg49ax"></clipPath>
                          <clipPath id="nonForecastMaskvqtg49ax"></clipPath>
                          <clipPath id="gridRectMarkerMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4757"
                              width="563"
                              height="54"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient4762"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              id="SvgjsStop4763"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0"
                            ></stop>
                            <stop
                              id="SvgjsStop4764"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0.6"
                            ></stop>
                          </linearGradient>
                          <filter
                            id="SvgjsFilter4766"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4767"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4767Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4768"
                              in="SvgjsFeFlood4767Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4768Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4769"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4769Out"
                              in="SvgjsFeComposite4768Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4770"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4770Out"
                              in="SvgjsFeOffset4769Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4771"
                              result="SvgjsFeMerge4771Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4772"
                                in="SvgjsFeGaussianBlur4770Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4773"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4774"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4771Out"
                              mode="normal"
                              result="SvgjsFeBlend4774Out"
                            ></feBlend>
                          </filter>
                          <filter
                            id="SvgjsFilter4776"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4777"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4777Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4778"
                              in="SvgjsFeFlood4777Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4778Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4779"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4779Out"
                              in="SvgjsFeComposite4778Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4780"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4780Out"
                              in="SvgjsFeOffset4779Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4781"
                              result="SvgjsFeMerge4781Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4782"
                                in="SvgjsFeGaussianBlur4780Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4783"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4784"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4781Out"
                              mode="normal"
                              result="SvgjsFeBlend4784Out"
                            ></feBlend>
                          </filter>
                        </defs>

                        <g id="SvgjsG4785" class="apexcharts-grid">
                          <g
                            id="SvgjsG4786"
                            class="apexcharts-gridlines-horizontal"
                            style={{ display: "none" }}
                          >
                            <line
                              id="SvgjsLine4790"
                              x1="0"
                              y1="8.333333333333334"
                              x2="559"
                              y2="8.333333333333334"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4791"
                              x1="0"
                              y1="16.666666666666668"
                              x2="559"
                              y2="16.666666666666668"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4792"
                              x1="0"
                              y1="25"
                              x2="559"
                              y2="25"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4793"
                              x1="0"
                              y1="33.333333333333336"
                              x2="559"
                              y2="33.333333333333336"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4794"
                              x1="0"
                              y1="41.66666666666667"
                              x2="559"
                              y2="41.66666666666667"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4795"
                              x1="0"
                              y1="50.00000000000001"
                              x2="559"
                              y2="50.00000000000001"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG4787"
                            class="apexcharts-gridlines-vertical"
                            style={{ display: "none" }}
                          ></g>
                          <line
                            id="SvgjsLine4797"
                            x1="0"
                            y1="50"
                            x2="559"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                          <line
                            id="SvgjsLine4796"
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG4788"
                          class="apexcharts-grid-borders"
                          style={{ display: "none" }}
                        ></g>
                        <g
                          id="SvgjsG4758"
                          class="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG4759"
                            class="apexcharts-series"
                            seriesName="series-1"
                            data:longestSeries="true"
                            rel="1"
                            data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath4765"
                              d="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              fill="url(#SvgjsLinearGradient4762)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4766)"
                              pathTo="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                            ></path>
                            <path
                              id="SvgjsPath4775"
                              d="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              fill="none"
                              fill-opacity="1"
                              stroke="var(--primary-color)"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="1"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4776)"
                              pathTo="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                              fill-rule="evenodd"
                            ></path>
                            <g
                              id="SvgjsG4760"
                              class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realIndex="0"
                            >
                              <g class="apexcharts-series-markers">
                                <circle
                                  id="SvgjsCircle4830"
                                  r="0"
                                  cx="0"
                                  cy="0"
                                  class="apexcharts-marker wd9wexr0l no-pointer-events"
                                  stroke="#ffffff"
                                  fill="var(--primary-color)"
                                  fill-opacity="1"
                                  stroke-width="2"
                                  stroke-opacity="0.9"
                                  default-marker-size="0"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG4761"
                            class="apexcharts-datalabels"
                            data:realIndex="0"
                          ></g>
                        </g>

                        <line
                          id="SvgjsLine4799"
                          x1="0"
                          y1="0"
                          x2="559"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                        <g
                          id="SvgjsG4800"
                          class="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG4801"
                            class="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG4827"
                          class="apexcharts-yaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4828"
                          class="apexcharts-xaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4829"
                          class="apexcharts-point-annotations"
                        ></g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card overflow-hidden">
              <div class="rounded-1 ">
                <div class="card-body pb-4 mb-2">
                  <div class="d-flex align-items-center w-100 justify-content-between gap-1">
                    <div>
                      <p class="mb-1 fw-medium">Fund Wallet</p>
                      <h4 class="mb-0 fw-medium">
                        ${" "}
                        {(dashboard && Number(dashboard[11].fundingWallet ) / ('1e' + tokenDecimals)) ||
                          0.0}
                      </h4>
                    </div>
                  </div>
                </div>
                <div id="employees" style={{ minHeight: "50px" }}>
                  <div
                    id="apexchartsvqtg49ax"
                    class="apexcharts-canvas apexchartsvqtg49ax apexcharts-theme-light"
                    style={{ width: "559px", height: "50px" }}
                  >
                    <svg
                      id="SvgjsSvg4750"
                      width="559"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x="0" y="0" width="559" height="50">
                        <div
                          class="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{ maxHeight: "25px" }}
                        ></div>
                      </foreignObject>
                      <rect
                        id="SvgjsRect4754"
                        width="0"
                        height="0"
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fefefe"
                      ></rect>
                      <g
                        id="SvgjsG4826"
                        class="apexcharts-yaxis"
                        rel="0"
                        transform="translate(-18, 0)"
                      ></g>
                      <g
                        id="SvgjsG4752"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(0, 0)"
                      >
                        <defs id="SvgjsDefs4751">
                          <clipPath id="gridRectMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4756"
                              width="5591004"
                              height="501"
                              x="-2.5"
                              y="-0.5"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskvqtg49ax"></clipPath>
                          <clipPath id="nonForecastMaskvqtg49ax"></clipPath>
                          <clipPath id="gridRectMarkerMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4757"
                              width="563"
                              height="54"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient4762"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              id="SvgjsStop4763"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0"
                            ></stop>
                            <stop
                              id="SvgjsStop4764"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0.6"
                            ></stop>
                          </linearGradient>
                          <filter
                            id="SvgjsFilter4766"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4767"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4767Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4768"
                              in="SvgjsFeFlood4767Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4768Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4769"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4769Out"
                              in="SvgjsFeComposite4768Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4770"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4770Out"
                              in="SvgjsFeOffset4769Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4771"
                              result="SvgjsFeMerge4771Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4772"
                                in="SvgjsFeGaussianBlur4770Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4773"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4774"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4771Out"
                              mode="normal"
                              result="SvgjsFeBlend4774Out"
                            ></feBlend>
                          </filter>
                          <filter
                            id="SvgjsFilter4776"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4777"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4777Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4778"
                              in="SvgjsFeFlood4777Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4778Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4779"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4779Out"
                              in="SvgjsFeComposite4778Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4780"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4780Out"
                              in="SvgjsFeOffset4779Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4781"
                              result="SvgjsFeMerge4781Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4782"
                                in="SvgjsFeGaussianBlur4780Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4783"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4784"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4781Out"
                              mode="normal"
                              result="SvgjsFeBlend4784Out"
                            ></feBlend>
                          </filter>
                        </defs>

                        <g id="SvgjsG4785" class="apexcharts-grid">
                          <g
                            id="SvgjsG4786"
                            class="apexcharts-gridlines-horizontal"
                            style={{ display: "none" }}
                          >
                            <line
                              id="SvgjsLine4790"
                              x1="0"
                              y1="8.333333333333334"
                              x2="559"
                              y2="8.333333333333334"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4791"
                              x1="0"
                              y1="16.666666666666668"
                              x2="559"
                              y2="16.666666666666668"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4792"
                              x1="0"
                              y1="25"
                              x2="559"
                              y2="25"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4793"
                              x1="0"
                              y1="33.333333333333336"
                              x2="559"
                              y2="33.333333333333336"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4794"
                              x1="0"
                              y1="41.66666666666667"
                              x2="559"
                              y2="41.66666666666667"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4795"
                              x1="0"
                              y1="50.00000000000001"
                              x2="559"
                              y2="50.00000000000001"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG4787"
                            class="apexcharts-gridlines-vertical"
                            style={{ display: "none" }}
                          ></g>
                          <line
                            id="SvgjsLine4797"
                            x1="0"
                            y1="50"
                            x2="559"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                          <line
                            id="SvgjsLine4796"
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG4788"
                          class="apexcharts-grid-borders"
                          style={{ display: "none" }}
                        ></g>
                        <g
                          id="SvgjsG4758"
                          class="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG4759"
                            class="apexcharts-series"
                            seriesName="series-1"
                            data:longestSeries="true"
                            rel="1"
                            data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath4765"
                              d="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              fill="url(#SvgjsLinearGradient4762)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4766)"
                              pathTo="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                            ></path>
                            <path
                              id="SvgjsPath4775"
                              d="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              fill="none"
                              fill-opacity="1"
                              stroke="orange"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="1"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4776)"
                              pathTo="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                              fill-rule="evenodd"
                            ></path>
                            <g
                              id="SvgjsG4760"
                              class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realIndex="0"
                            >
                              <g class="apexcharts-series-markers">
                                <circle
                                  id="SvgjsCircle4830"
                                  r="0"
                                  cx="0"
                                  cy="0"
                                  class="apexcharts-marker wd9wexr0l no-pointer-events"
                                  stroke="#ffffff"
                                  fill="var(--primary-color)"
                                  fill-opacity="1"
                                  stroke-width="2"
                                  stroke-opacity="0.9"
                                  default-marker-size="0"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG4761"
                            class="apexcharts-datalabels"
                            data:realIndex="0"
                          ></g>
                        </g>

                        <line
                          id="SvgjsLine4799"
                          x1="0"
                          y1="0"
                          x2="559"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                        <g
                          id="SvgjsG4800"
                          class="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG4801"
                            class="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG4827"
                          class="apexcharts-yaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4828"
                          class="apexcharts-xaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4829"
                          class="apexcharts-point-annotations"
                        ></g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card overflow-hidden">
              <div class=" rounded-1">
                <div class="card-body pb-4 mb-2">
                  <div class="d-flex align-items-center w-100 justify-content-between gap-1">
                    <div>
                      <p class="mb-1 fw-medium">Future Wallet</p>
                      <h4 class="mb-0 fw-medium">
                        ${" "}
                        {(dashboard &&
                          Number(dashboard[13].futureWallet) / ('1e' + tokenDecimals)) ||
                          0.0}
                      </h4>
                    </div>
                  </div>
                </div>
                <div id="employees" style={{ minHeight: "50px" }}>
                  <div
                    id="apexchartsvqtg49ax"
                    class="apexcharts-canvas apexchartsvqtg49ax apexcharts-theme-light"
                    style={{ width: "559px", height: "50px" }}
                  >
                    <svg
                      id="SvgjsSvg4750"
                      width="559"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x="0" y="0" width="559" height="50">
                        <div
                          class="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{ maxHeight: "25px" }}
                        ></div>
                      </foreignObject>
                      <rect
                        id="SvgjsRect4754"
                        width="0"
                        height="0"
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fefefe"
                      ></rect>
                      <g
                        id="SvgjsG4826"
                        class="apexcharts-yaxis"
                        rel="0"
                        transform="translate(-18, 0)"
                      ></g>
                      <g
                        id="SvgjsG4752"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(0, 0)"
                      >
                        <defs id="SvgjsDefs4751">
                          <clipPath id="gridRectMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4756"
                              width="5591004"
                              height="501"
                              x="-2.5"
                              y="-0.5"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskvqtg49ax"></clipPath>
                          <clipPath id="nonForecastMaskvqtg49ax"></clipPath>
                          <clipPath id="gridRectMarkerMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4757"
                              width="563"
                              height="54"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient4762"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              id="SvgjsStop4763"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0"
                            ></stop>
                            <stop
                              id="SvgjsStop4764"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0.6"
                            ></stop>
                          </linearGradient>
                          <filter
                            id="SvgjsFilter4766"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4767"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4767Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4768"
                              in="SvgjsFeFlood4767Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4768Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4769"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4769Out"
                              in="SvgjsFeComposite4768Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4770"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4770Out"
                              in="SvgjsFeOffset4769Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4771"
                              result="SvgjsFeMerge4771Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4772"
                                in="SvgjsFeGaussianBlur4770Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4773"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4774"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4771Out"
                              mode="normal"
                              result="SvgjsFeBlend4774Out"
                            ></feBlend>
                          </filter>
                          <filter
                            id="SvgjsFilter4776"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4777"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4777Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4778"
                              in="SvgjsFeFlood4777Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4778Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4779"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4779Out"
                              in="SvgjsFeComposite4778Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4780"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4780Out"
                              in="SvgjsFeOffset4779Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4781"
                              result="SvgjsFeMerge4781Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4782"
                                in="SvgjsFeGaussianBlur4780Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4783"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4784"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4781Out"
                              mode="normal"
                              result="SvgjsFeBlend4784Out"
                            ></feBlend>
                          </filter>
                        </defs>

                        <g id="SvgjsG4785" class="apexcharts-grid">
                          <g
                            id="SvgjsG4786"
                            class="apexcharts-gridlines-horizontal"
                            style={{ display: "none" }}
                          >
                            <line
                              id="SvgjsLine4790"
                              x1="0"
                              y1="8.333333333333334"
                              x2="559"
                              y2="8.333333333333334"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4791"
                              x1="0"
                              y1="16.666666666666668"
                              x2="559"
                              y2="16.666666666666668"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4792"
                              x1="0"
                              y1="25"
                              x2="559"
                              y2="25"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4793"
                              x1="0"
                              y1="33.333333333333336"
                              x2="559"
                              y2="33.333333333333336"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4794"
                              x1="0"
                              y1="41.66666666666667"
                              x2="559"
                              y2="41.66666666666667"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4795"
                              x1="0"
                              y1="50.00000000000001"
                              x2="559"
                              y2="50.00000000000001"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG4787"
                            class="apexcharts-gridlines-vertical"
                            style={{ display: "none" }}
                          ></g>
                          <line
                            id="SvgjsLine4797"
                            x1="0"
                            y1="50"
                            x2="559"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                          <line
                            id="SvgjsLine4796"
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG4788"
                          class="apexcharts-grid-borders"
                          style={{ display: "none" }}
                        ></g>
                        <g
                          id="SvgjsG4758"
                          class="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG4759"
                            class="apexcharts-series"
                            seriesName="series-1"
                            data:longestSeries="true"
                            rel="1"
                            data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath4765"
                              d="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              fill="url(#SvgjsLinearGradient4762)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4766)"
                              pathTo="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                            ></path>
                            <path
                              id="SvgjsPath4775"
                              d="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              fill="none"
                              fill-opacity="1"
                              stroke="red"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="1"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4776)"
                              pathTo="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                              fill-rule="evenodd"
                            ></path>
                            <g
                              id="SvgjsG4760"
                              class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realIndex="0"
                            >
                              <g class="apexcharts-series-markers">
                                <circle
                                  id="SvgjsCircle4830"
                                  r="0"
                                  cx="0"
                                  cy="0"
                                  class="apexcharts-marker wd9wexr0l no-pointer-events"
                                  stroke="#ffffff"
                                  fill="var(--primary-color)"
                                  fill-opacity="1"
                                  stroke-width="2"
                                  stroke-opacity="0.9"
                                  default-marker-size="0"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG4761"
                            class="apexcharts-datalabels"
                            data:realIndex="0"
                          ></g>
                        </g>

                        <line
                          id="SvgjsLine4799"
                          x1="0"
                          y1="0"
                          x2="559"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                        <g
                          id="SvgjsG4800"
                          class="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG4801"
                            class="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG4827"
                          class="apexcharts-yaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4828"
                          class="apexcharts-xaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4829"
                          class="apexcharts-point-annotations"
                        ></g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card overflow-hidden">
              <div class=" rounded-1 ">
                <div class="card-body pb-4 mb-2">
                  <div class="d-flex align-items-center w-100 justify-content-between gap-1">
                    <div>
                      <p class="mb-1 fw-medium">Other Wallet</p>
                      <h4 class="mb-0 fw-medium">$ 0.00</h4>
                    </div>
                  </div>
                </div>
                <div id="employees" style={{ minHeight: "50px" }}>
                  <div
                    id="apexchartsvqtg49ax"
                    class="apexcharts-canvas apexchartsvqtg49ax apexcharts-theme-light"
                    style={{ width: "559px", height: "50px" }}
                  >
                    <svg
                      id="SvgjsSvg4750"
                      width="559"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      class="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x="0" y="0" width="559" height="50">
                        <div
                          class="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{ maxHeight: "25px" }}
                        ></div>
                      </foreignObject>
                      <rect
                        id="SvgjsRect4754"
                        width="0"
                        height="0"
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        opacity="1"
                        stroke-width="0"
                        stroke="none"
                        stroke-dasharray="0"
                        fill="#fefefe"
                      ></rect>
                      <g
                        id="SvgjsG4826"
                        class="apexcharts-yaxis"
                        rel="0"
                        transform="translate(-18, 0)"
                      ></g>
                      <g
                        id="SvgjsG4752"
                        class="apexcharts-inner apexcharts-graphical"
                        transform="translate(0, 0)"
                      >
                        <defs id="SvgjsDefs4751">
                          <clipPath id="gridRectMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4756"
                              width="5591004"
                              height="501"
                              x="-2.5"
                              y="-0.5"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskvqtg49ax"></clipPath>
                          <clipPath id="nonForecastMaskvqtg49ax"></clipPath>
                          <clipPath id="gridRectMarkerMaskvqtg49ax">
                            <rect
                              id="SvgjsRect4757"
                              width="563"
                              height="54"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient4762"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              id="SvgjsStop4763"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0"
                            ></stop>
                            <stop
                              id="SvgjsStop4764"
                              stop-opacity="0.3"
                              stop-color="var(--primary01)"
                              offset="0.6"
                            ></stop>
                          </linearGradient>
                          <filter
                            id="SvgjsFilter4766"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4767"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4767Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4768"
                              in="SvgjsFeFlood4767Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4768Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4769"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4769Out"
                              in="SvgjsFeComposite4768Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4770"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4770Out"
                              in="SvgjsFeOffset4769Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4771"
                              result="SvgjsFeMerge4771Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4772"
                                in="SvgjsFeGaussianBlur4770Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4773"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4774"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4771Out"
                              mode="normal"
                              result="SvgjsFeBlend4774Out"
                            ></feBlend>
                          </filter>
                          <filter
                            id="SvgjsFilter4776"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood4777"
                              flood-color="var(--primary-color)"
                              flood-opacity="0.4"
                              result="SvgjsFeFlood4777Out"
                              in="SourceGraphic"
                            ></feFlood>
                            <feComposite
                              id="SvgjsFeComposite4778"
                              in="SvgjsFeFlood4777Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite4778Out"
                            ></feComposite>
                            <feOffset
                              id="SvgjsFeOffset4779"
                              dx="0"
                              dy="0"
                              result="SvgjsFeOffset4779Out"
                              in="SvgjsFeComposite4778Out"
                            ></feOffset>
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur4780"
                              stdDeviation="3 "
                              result="SvgjsFeGaussianBlur4780Out"
                              in="SvgjsFeOffset4779Out"
                            ></feGaussianBlur>
                            <feMerge
                              id="SvgjsFeMerge4781"
                              result="SvgjsFeMerge4781Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode4782"
                                in="SvgjsFeGaussianBlur4780Out"
                              ></feMergeNode>
                              <feMergeNode
                                id="SvgjsFeMergeNode4783"
                                in="[object Arguments]"
                              ></feMergeNode>
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend4784"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge4781Out"
                              mode="normal"
                              result="SvgjsFeBlend4784Out"
                            ></feBlend>
                          </filter>
                        </defs>

                        <g id="SvgjsG4785" class="apexcharts-grid">
                          <g
                            id="SvgjsG4786"
                            class="apexcharts-gridlines-horizontal"
                            style={{ display: "none" }}
                          >
                            <line
                              id="SvgjsLine4790"
                              x1="0"
                              y1="8.333333333333334"
                              x2="559"
                              y2="8.333333333333334"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4791"
                              x1="0"
                              y1="16.666666666666668"
                              x2="559"
                              y2="16.666666666666668"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4792"
                              x1="0"
                              y1="25"
                              x2="559"
                              y2="25"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4793"
                              x1="0"
                              y1="33.333333333333336"
                              x2="559"
                              y2="33.333333333333336"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4794"
                              x1="0"
                              y1="41.66666666666667"
                              x2="559"
                              y2="41.66666666666667"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine4795"
                              x1="0"
                              y1="50.00000000000001"
                              x2="559"
                              y2="50.00000000000001"
                              stroke="#e0e0e0"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG4787"
                            class="apexcharts-gridlines-vertical"
                            style={{ display: "none" }}
                          ></g>
                          <line
                            id="SvgjsLine4797"
                            x1="0"
                            y1="50"
                            x2="559"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                          <line
                            id="SvgjsLine4796"
                            x1="0"
                            y1="1"
                            x2="0"
                            y2="50"
                            stroke="transparent"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG4788"
                          class="apexcharts-grid-borders"
                          style={{ display: "none" }}
                        ></g>
                        <g
                          id="SvgjsG4758"
                          class="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG4759"
                            class="apexcharts-series"
                            seriesName="series-1"
                            data:longestSeries="true"
                            rel="1"
                            data:realIndex="0"
                          >
                            <path
                              id="SvgjsPath4765"
                              d="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              fill="url(#SvgjsLinearGradient4762)"
                              fill-opacity="1"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="0"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4766)"
                              pathTo="M 0 50 L 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20 L 559 50M 559 20z"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                            ></path>
                            <path
                              id="SvgjsPath4775"
                              d="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              fill="none"
                              fill-opacity="1"
                              stroke="pink"
                              stroke-opacity="1"
                              stroke-linecap="butt"
                              stroke-width="1"
                              stroke-dasharray="0"
                              class="apexcharts-area"
                              index="0"
                              clip-path="url(#gridRectMaskvqtg49ax)"
                              filter="url(#SvgjsFilter4776)"
                              pathTo="M 0 19.166666666666664 L 24.304347826086957 20.833333333333336 L 48.608695652173914 13.333333333333336 L 72.91304347826087 26.666666666666668 L 97.21739130434783 11.666666666666664 L 121.52173913043478 38.333333333333336 L 145.82608695652175 4.166666666666664 L 170.1304347826087 32.5 L 194.43478260869566 27.5 L 218.73913043478262 25.833333333333336 L 243.04347826086956 6.666666666666664 L 267.3478260869565 15.833333333333336 L 291.6521739130435 29.166666666666668 L 315.95652173913044 24.166666666666664 L 340.2608695652174 29.166666666666668 L 364.5652173913044 35.833333333333336 L 388.8695652173913 14.166666666666664 L 413.17391304347825 14.166666666666664 L 437.47826086956525 7.5 L 461.7826086956522 35.833333333333336 L 486.0869565217391 13.333333333333336 L 510.3913043478261 22.5 L 534.695652173913 42.5 L 559 20"
                              pathFrom="M -1 58.333333333333336 L -1 58.333333333333336 L 24.304347826086957 58.333333333333336 L 48.608695652173914 58.333333333333336 L 72.91304347826087 58.333333333333336 L 97.21739130434783 58.333333333333336 L 121.52173913043478 58.333333333333336 L 145.82608695652175 58.333333333333336 L 170.1304347826087 58.333333333333336 L 194.43478260869566 58.333333333333336 L 218.73913043478262 58.333333333333336 L 243.04347826086956 58.333333333333336 L 267.3478260869565 58.333333333333336 L 291.6521739130435 58.333333333333336 L 315.95652173913044 58.333333333333336 L 340.2608695652174 58.333333333333336 L 364.5652173913044 58.333333333333336 L 388.8695652173913 58.333333333333336 L 413.17391304347825 58.333333333333336 L 437.47826086956525 58.333333333333336 L 461.7826086956522 58.333333333333336 L 486.0869565217391 58.333333333333336 L 510.3913043478261 58.333333333333336 L 534.695652173913 58.333333333333336 L 559 58.333333333333336"
                              fill-rule="evenodd"
                            ></path>
                            <g
                              id="SvgjsG4760"
                              class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                              data:realIndex="0"
                            >
                              <g class="apexcharts-series-markers">
                                <circle
                                  id="SvgjsCircle4830"
                                  r="0"
                                  cx="0"
                                  cy="0"
                                  class="apexcharts-marker wd9wexr0l no-pointer-events"
                                  stroke="#ffffff"
                                  fill="var(--primary-color)"
                                  fill-opacity="1"
                                  stroke-width="2"
                                  stroke-opacity="0.9"
                                  default-marker-size="0"
                                ></circle>
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG4761"
                            class="apexcharts-datalabels"
                            data:realIndex="0"
                          ></g>
                        </g>

                        <line
                          id="SvgjsLine4799"
                          x1="0"
                          y1="0"
                          x2="559"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          class="apexcharts-ycrosshairs-hidden"
                        ></line>
                        <g
                          id="SvgjsG4800"
                          class="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG4801"
                            class="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG4827"
                          class="apexcharts-yaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4828"
                          class="apexcharts-xaxis-annotations"
                        ></g>
                        <g
                          id="SvgjsG4829"
                          class="apexcharts-point-annotations"
                        ></g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-xl-8">
          <div className="card custom-card">
            <div className="card-body p-0">
              <div className="p-4 m-2 rounded-2 bg-primary text-fixed-white bg-crypto-balance">
                <div className="d-flex align-items-center gap-2 justify-content-between">
                  <div>
                    <div className="mb-1 op-9">Total Balance</div>
                    <h4 className="text-fixed-white mb-1 fw-medium me-2">
                      $ 0.00 USDT
                    </h4>
                  </div>
                  <div className="">
                    <div className="avatar avatar-lg bg-primary1 shadow">
                      <i className="ri-bank-line fs-4 lh-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  g-0">
                <div className="col ">
                  <div className="p-4">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <span className="avatar avatar-md bg-primary2">
                        <i className="ri-arrow-left-down-fill fs-20"></i>
                      </span>
                      <div>
                        <div className="fw-medium">Total Withdraw</div>
                        <h5 className="mb-0">$0.00 USDT</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="p-4">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <span className="avatar avatar-md bg-primary3">
                        <i className="ri-arrow-right-up-fill fs-20"></i>
                      </span>
                      <div>
                        <div className="fw-medium">Min.. Withdraw</div>
                        <h5 className="mb-0">$20 USDT</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              {/* <div class="d-flex gap-3 align-items-center buy-crypto w-100 flex-column">
                <div class="input-group d-flex flex-nowrap align-items-center">
                  <input
                    type="text"
                    class="form-control crypto-buy-sell-input"
                    aria-label="crypto buy select"
                    placeholder="Enter Amount"
                  />
                  <input
                    type="text"
                    class="form-control crypto-buy-sell-input crypto-123"
                    aria-label="crypto buy select"
                    placeholder="Withdraw From Fund Wallet"
                    readOnly
                  />
                </div>
              </div>
              <div class="bg-dark p-3 rounded mt-2 gap-3">
                <div class="pb-1">
                  <span class="text-default">Network Fee</span>
                  <span class="text-primary2 ms-2 fs-14 d-inline-block float-end">
                    $2.5 USDT
                  </span>
                </div>
                <div class="fs-14 py-1">
                  <span class="text-default ">Other Charges</span>
                  <span class="text-primary2 ms-2 fs-14 d-inline-block float-end">
                    $0.00
                  </span>
                </div>
                <div class="fw-semibold fs-14 pt-1">Total: $25,784.00</div>
              </div> */}
              <div class=" mt-2 pt-1 d-flex gap-1">
                <button
                  type="button"
                  class="btn btn-primary flex-fill"
                  onClick={withdrawFundWallet}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">
                Transfer Reward Wallet To Fund Wallet{" "}
              </div>
            </div>
            <div class="card-body">
              <div
                class="card custom-card flex-row"
                style={{ boxShadow: "0px 0px 5px gray" }}
              >
                <div class="card-body m-2 rounded-1">
                  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 flex-xl-nowrap">
                    <div className="d-flex align-items-center gap-3">
                      <span class="avatar avatar-md bg-primary svg-white mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path>
                          <circle cx="16" cy="12" r="1.5"></circle>
                        </svg>
                      </span>
                      <span>
                        <p class="mb-0 ">Total Reward</p>
                        <h5 class="fw-semibold mb-0">$ {}</h5>
                      </span>
                    </div>
                    <div class="">
                      <a href="#" class="btn btn-primary-gradient">
                        View Transactions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-dark p-3 rounded mt-2">
                <div class="pb-1">
                  <span class="text-default">Network Fee</span>
                  <span class=" ms-2 fs-14 d-inline-block float-end">
                    2.5 %
                  </span>
                </div>
                <div class="fs-14 py-1">
                  <span class="text-default">Transfer to Future Wallet</span>
                  <span class=" ms-2 fs-14 d-inline-block float-end">10 %</span>
                </div>
                <div class="fw-semibold fs-14 pt-1 d-flex gap-2">
                  <span class="fs-14 d-inline-block float-end">$25,784.00</span>
                  <span>Total Transfer</span>
                </div>
              </div>
              <div class=" mt-2 pt-1 d-flex ">
                <button
                  type="button"
                  class="btn btn-primary flex-fill"
                  onClick={transferToFundWallet}
                >
                  Transfer To Fund Wallet
                  <i class="ms-2 ti ti-arrow-narrow-right align-middle"></i>
                </button>
              </div>
            </div>
            <div className=" mt-2 pt-1">
              <ul>
                <li>
                  2.5% is deducted from the total amount as Network Fees.{" "}
                </li>
                <li>
                  10% of the remaining amount (after network fees) is
                  transferred to the Future Wallet.
                </li>
                <li>
                  90% of the remaining amount (after network fees) is
                  transferred to the Fund Wallet.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WidthdrawRow;
