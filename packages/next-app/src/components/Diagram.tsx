import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ParentSize } from "@visx/responsive";
import { Text } from '@visx/text';
import { Group } from '@visx/group';
// import { LineChart, axisClasses } from '@mui/x-charts';
// import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
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

export default function Diagram(
  { width = 400, height = 400 }: { width?: number, height?: number }
) {
  const theme = useTheme();

  return (
    <ParentSize>
      {({ width, height }) => (
        <Group>
          <Text
            verticalAnchor="start"
            height={20}
          >
              {
                "width: " + width.toFixed(1) + ", "
                + "height: " + height.toFixed(1)
              }
          </Text>
          <TimingDiagram
              width={width}
              data={data}
              accessors={accessors}
          />
        </Group>
      )}
    </ParentSize>
  );
}
