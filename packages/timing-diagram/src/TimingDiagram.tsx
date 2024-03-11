// import * as React from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import {
  Axis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
} from "@visx/xychart";
import { scaleLinear } from "@visx/scale";
import { curveStepBefore, curveStepAfter } from '@visx/curve';
// import { XYChartProps } from '@visx/xychart/lib/components/XYChart';
// import { LinearScaleConfig } from '@visx/scale';

// export type TimingDiagramProps<Datum extends object> = XYChartProps<
//   LinearScaleConfig<number>,
//   LinearScaleConfig<number>,
//   Datum
// >;

type TimingDiagramProps = {
  y?: number,
  x?: number,
  width?: number,
  height?: number,
  data: { device: string, x: number, y: boolean }[],
  accessors: {
    xAccessor: (d: { x: number }) => number,
    yAccessor: (d: { y: boolean }) => string
  },
  device: string
}

export default function TimingDiagram(
  { x, y, width = 400, height = 200, data, accessors, device }: TimingDiagramProps
) {
  const deviceData = data.filter(d => d.device === device);
  const xScale = scaleLinear({
    domain: [100, 0],
    range: [
      0,
      Math.max(...deviceData.map(obj => obj.x)) * 1.1
    ]
  });

  return (
    <Group
      top={y} left={x}
    >
      <Bar // DEBUG: to check positioning
        width={width} height={height} rx={10}
        style={{ fill: "rgba(0, 255, 0, 0.05)" }}
      />
      <XYChart
        width={width} height={height}
        xScale={{ type: "linear" }} yScale={{ type: "band" }}
        margin={{ top: 0, right: 50, bottom: 10, left: 50 }}
      >
        <Axis key={`Y-Axis ${device}`} orientation="left" />
        <Axis
          key={`X-Axis ${device}`}
          orientation="bottom"
          tickLength={1}
          top={height - 25}
        />
        <AnimatedGrid columns={false} numTicks={2} />
        <AnimatedLineSeries
          dataKey={`Line ${device}`} data={deviceData}
          {...accessors}
          curve={curveStepAfter}
        />
      </XYChart>
    </Group>
  )
}
