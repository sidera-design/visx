import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ParentSize } from "@visx/responsive";
// import { LineChart, axisClasses } from '@mui/x-charts';
// import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import Title from './Title';
import TimingDiagram from '@sidera/timing-diagram/src';


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

export default function Diagram() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>TimingDiagram</Title>
      <ParentSize>
        {(parent) => (
          <>
            <TimingDiagram
              width={parent.width}
              height={parent.height}
              data={data}
              accessors={accessors}
            />
          </>
        )}
      </ParentSize>
    </React.Fragment>
  );
}
