import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// import { LineChart, axisClasses } from '@mui/x-charts';
// import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import Title from './Title';
import TimingDiagram from '@sidera/timing-diagram';

function Test() {
  return (
    <div>
      Test
    </div>
  );
}

export default function Diagram() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>TimingDiagram</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <Test />
        <TimingDiagram />
      </div>
    </React.Fragment>
  );
}
