import React from "react";
import {
  XYPlot,
  XAxis, // Shows the values on x axis
  YAxis, // Shows the values on y axis
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";
import data from "./data.json";

class ChartsPage2 extends React.Component {
  render() {
    const data = this.props.data;
    const chartWidth = 800;
    const chartHeight = 250;
    const chartDomain = [0, chartHeight];

    return (
      <XYPlot
        xType="ordinal"
        width={chartWidth}
        height={chartHeight}
        yDomain={chartDomain}
      >
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
        <LabelSeries
          data={data.map((obj) => {
            return { ...obj, label: obj.y.toString() };
          })}
          labelAnchorX="middle"
          labelAnchorY="text-after-edge"
        />
      </XYPlot>
    );
  }
}

export default ChartsPage2;
