import * as React from 'react';
import { ParentSize } from "@visx/responsive";
import { Text } from '@visx/text';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { curveStepAfter } from '@visx/curve';
import { scaleLinear, scaleBand, StringLike } from '@visx/scale';
import { ScaleBand } from '@visx/vendor/d3-scale';
import { max } from '@visx/vendor/d3-array';
import { AxisLeft, AxisBottom } from "@visx/axis";
// import TimingDiagram from '@sidera/timing-diagram/src';
import ToggleSwitchData, { switchState } from '@sidera/mock-data/src/toggleSwitch';
import getDeviceSignal, { SignalPoint } from './getDeviceSignal';

const diagramHeight = 100;
const axisHeight = 20;
const padding = 10;
const titleHeight = 20;
const devices = ["SW-A", "Lamp1"];
const defaultMargin = { top: 30, right: 20, bottom: 20, left: 30 };

export default function Diagram(){
  const switchSignals = getDeviceSignal("SW-A", ToggleSwitchData);
  const lampSignals = getDeviceSignal("SW-A", ToggleSwitchData);
  console.log(switchSignals);
  console.log(switchSignals.map(d => d.x));

  const outerHeight = (diagramHeight + padding) * devices.length - padding + axisHeight + defaultMargin.top + defaultMargin.bottom;

  return (
    <ParentSize>
      {({ width, height }) => (
        <svg
          width={width}
          height={outerHeight}
        >
          <TimingDiagram
            name= "SW-A"
            data={switchSignals}
            // domain={switchState}
            width={width - defaultMargin.left - defaultMargin.right}
            height={diagramHeight}
            margin={defaultMargin}
          />
        </svg>
      )}
    </ParentSize>
  );
}

export type TimingDiagramProps<T extends StringLike = boolean> = {
  name?: string;
  data: SignalPoint<T>[];
  // domain: StringLike[];
  width: number;
  height: number;
  margin?: typeof defaultMargin;
}

function getValue<T extends StringLike>(
  d: SignalPoint<T>, scale: ScaleBand<T>
) {
  return scale(d.y);
}

function TimingDiagram<T extends StringLike = boolean>(
  { name = "Device", data, width, height, margin = defaultMargin }: TimingDiagramProps<T>
) {

  // scales
  const maxTime = max(data, (d) => d.x) ?? 0;
  const timeScale = scaleLinear<number>({
    domain: [0, maxTime],
    range: [0, width],
  });
  const valueScale = scaleBand<T>({

    domain: data.map(d => d.y),
    range: [height + titleHeight, titleHeight],
    paddingInner: 1.0,
    paddingOuter: 0.2,
    align: 0.5,
  });

  return (
    <Group left={margin.left} top={margin.top}>
    <Text
      verticalAnchor="start"
      height={titleHeight}
      x={0} y={0}
    >
        {
          `<${name}>` + " width: " + width.toFixed(1) + ", "
          + "height: " + height.toFixed(1)
        }
    </Text>
    <AxisBottom top={titleHeight + diagramHeight} scale={timeScale} />
    <AxisLeft scale={valueScale} />
    <LinePath
      data={data}
      x={d => timeScale(d.x) ?? 0}
      y={d => valueScale(d.y) ?? 0 }
      curve={curveStepAfter}
      stroke="#222"
      strokeWidth={1.5}
      strokeOpacity={0.8}
      strokeDasharray="1,2"
    />
    {/* {devices.map((device, i) => (
      <TimingDiagram
          y={titleHeight + (diagramHeight + padding) * i}
          key={`diagram-${i}`}
          height={diagramHeight}
          width={width}
          data={dataSwitch}
          device={device}
          accessors={accessors}
      />
    ))} */}
    </Group>
  )
}