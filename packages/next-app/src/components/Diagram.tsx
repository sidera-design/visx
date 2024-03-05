import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ParentSize } from "@visx/responsive";
import { Text } from '@visx/text';
// import { LineChart, axisClasses } from '@mui/x-charts';
// import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import Title from './Title';
import TimingDiagram from '@sidera/timing-diagram/src';
import Box from '@mui/material/Box';


// ==============
const data = [
  { device: "A", x: "2020-01-01", y: 50 },
  { device: "A", x: "2020-01-02", y: 10 },
  { device: "A", x: "2020-01-03", y: 20 },
  { device: "B", x: "2020-01-01", y: 30 },
  { device: "B", x: "2020-01-02", y: 40 },
  { device: "B", x: "2020-01-03", y: 80 }
];

const accessors = {
  xAccessor: (d: { x: string }) => d.x,
  yAccessor: (d: { y: number }) => d.y
};
// ==============

export default function Diagram(
  { width, height }: { width: number, height: number }
) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <svg width={width} height={height}>
        <Text
          verticalAnchor="start">{
          "width: " + width.toFixed(1) + ", "
          + "height: " + height.toFixed(1)
        }</Text>
          <TimingDiagram
            width={width}
            height={height}
            data={data}
            accessors={accessors}
          />
      </svg>
    </React.Fragment>
  );
}
