import * as React from "react";
import { XYChartProps } from '@visx/xychart/lib/components/XYChart';
import { LinearScaleConfig } from '@visx/scale';
export type TimingDiagramProps<Datum extends object> = XYChartProps<LinearScaleConfig<number>, LinearScaleConfig<number>, Datum>;
export default function TimingDiagram(): React.JSX.Element;
