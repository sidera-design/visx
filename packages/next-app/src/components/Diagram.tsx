import * as React from 'react';
import { ParentSize } from "@visx/responsive";
import { Text } from '@visx/text';
import { Group } from '@visx/group';
// import { LineChart, axisClasses } from '@mui/x-charts';
// import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import TimingDiagram from '@sidera/timing-diagram/src';


// ==============
const data = [
  { device: "A", x: 0, y: false },
  { device: "B", x: 0, y: false },
  { device: "A", x: 100, y: true },
  { device: "B", x: 200, y: true },
  { device: "A", x: 300, y: false },
  { device: "B", x: 400, y: false },
  { device: "A", x: 600, y: false },
  { device: "B", x: 600, y: false },
];

const accessors = {
  xAccessor: (d: { x: number }) => d.x,
  yAccessor: (d: { y: boolean }) => d.y ? "ON" : "OFF"
};
// ==============

const diagramHeight = 100;
const axisHeight = 20;
const padding = 10;
const titleHeight = 20;
const devices = ["A", "B"];
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

export default function Diagram(){
  const outerHeight = (diagramHeight + padding) * devices.length - padding + axisHeight + margin.top + margin.bottom;

  return (
    <ParentSize>
      {({ width, height }) => (
        <svg
          width={width}
          height={outerHeight}
        >
        <Group>
          <Text
            verticalAnchor="start"
            height={titleHeight}
            x={0} y={0}
          >
              {
                "width: " + width.toFixed(1) + ", "
                + "height: " + height.toFixed(1)
              }
          </Text>
          {devices.map((device, i) => (
            <TimingDiagram
                y={titleHeight + (diagramHeight + padding) * i}
                key={`diagram-${i}`}
                height={diagramHeight}
                width={width}
                data={data}
                device={device}
                accessors={accessors}
            />
          ))}
        </Group>
        </svg>
      )}
    </ParentSize>
  );
}
