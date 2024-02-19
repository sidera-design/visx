// import * as React from "react";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
} from "@visx/xychart";
import { curveStepBefore } from '@visx/curve';
// import { XYChartProps } from '@visx/xychart/lib/components/XYChart';
// import { LinearScaleConfig } from '@visx/scale';

// export type TimingDiagramProps<Datum extends object> = XYChartProps<
//   LinearScaleConfig<number>,
//   LinearScaleConfig<number>,
//   Datum
// >;

type TimingDiagramProps = {
  width: number,
  height: number,
  data: { device: string, x: string, y: number }[],
  accessors: {
    xAccessor: (d: { x: string }) => string,
    yAccessor: (d: { y: number }) => number
  }
}

export default function TimingDiagram(
  { width, height, data, accessors }: TimingDiagramProps
) {
  const data1 = data.filter(d => d.device === "A");
  const data2 = data.filter(d => d.device === "B");

  return (
    <XYChart
      width={width} height={height}
      xScale={{ type: "band" }} yScale={{ type: "linear" }}
    >
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid columns={false} numTicks={4} />
      <AnimatedLineSeries dataKey="Line 1" data={data1} {...accessors} curve={curveStepBefore}/>
      <AnimatedLineSeries dataKey="Line 2" data={data2} {...accessors} curve={curveStepBefore}/>
    </XYChart>
  )
}
