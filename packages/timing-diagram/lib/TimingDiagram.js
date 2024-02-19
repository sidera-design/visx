"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const xychart_1 = require("@visx/xychart");
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
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y
};
// ==============
function TimingDiagram() {
    return ((0, jsx_runtime_1.jsxs)(xychart_1.XYChart, { height: 300, xScale: { type: "band" }, yScale: { type: "linear" }, children: [(0, jsx_runtime_1.jsx)(xychart_1.AnimatedAxis, { orientation: "bottom" }), (0, jsx_runtime_1.jsx)(xychart_1.AnimatedGrid, { columns: false, numTicks: 4 }), (0, jsx_runtime_1.jsx)(xychart_1.AnimatedLineSeries, Object.assign({ dataKey: "Line 1", data: data1 }, accessors)), (0, jsx_runtime_1.jsx)(xychart_1.AnimatedLineSeries, Object.assign({ dataKey: "Line 2", data: data2 }, accessors))] }));
}
exports.default = TimingDiagram;
