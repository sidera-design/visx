import * as React from "react";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
} from "@visx/xychart";
import { XYChartProps } from '@visx/xychart/lib/components/XYChart';
import { LinearScaleConfig } from '@visx/scale';

export type TimingDiagramProps<Datum extends object> = XYChartProps<
  LinearScaleConfig<number>,
  LinearScaleConfig<number>,
  Datum
>;

// ==============
const data1 = [
  { x: "2020-01-01", y: 50 },
  { x: "2020-01-02", y: 10 },
  { x: "2020-01-03", y: 20 }
];

const data2 = [
  { x: "2020-01-01", y: 30 },
  { x: "2020-01-02", y: 40 },
  { x: "2020-01-03", y: 80 }
];

const accessors = {
  xAccessor: (d: { x: string }) => d.x,
  yAccessor: (d: { y: number }) => d.y
};
// ==============


export default function TimingDiagram(
  props: TimingDiagramProps<{x: string, y: number}>
): React.JSX.Element {
  return (
    <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid columns={false} numTicks={4} />
      <AnimatedLineSeries dataKey="Line 1" data={data1} {...accessors} />
      <AnimatedLineSeries dataKey="Line 2" data={data2} {...accessors} />
    </XYChart>
  )
}
