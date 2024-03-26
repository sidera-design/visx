import { LineStyle } from '@mui/icons-material';
import { SceneAction } from '@sidera/mock-data/src/toggleSwitch';
import { StringLike } from '@visx/scale';

const lineStyle = ["undefined", "normal", "skipped", "focussed"] as const;
type LineStyle = typeof lineStyle[number];


export type SignalPoint<T extends StringLike = StringLike> = {
  x: number;
  y: T;
  style?: LineStyle;
}

// ToDo: temporary display values
const PRE_SKIP_TIME = 100;
const SKIP_TIME = 50;
const POST_SKIP_TIME = 100;

const LAST_KEEP_TIME = 200;

export default function getDeviceSignal<T extends StringLike = boolean>(
  device: string, data: SceneAction<T>[]
): SignalPoint<T>[] {
  const signalData: SignalPoint<T>[] = [];
  const initialValue = data.find(d => d.device === device);

  // If the device is not in the data, return an empty array.
  if (initialValue === undefined) {
    return [];
  }

  let prevPoint: SignalPoint<T> = { x: 0, y: initialValue.result, style: "undefined"};
  signalData.push(prevPoint);

  function pushPoint(point: SignalPoint<T>) {
    if (
      prevPoint.x === point.x &&
      prevPoint.y === point.y &&
      prevPoint.style === point.style
    ) {
      return;
    }
    signalData.push(point);
    prevPoint = point;
  }

  data.forEach((d) => {
    const waitTime = typeof d.wait === "number" ? d.wait : 0;
    // const value = d.device === device ? d.result : prevPoint.y
    const prevLineStyle = prevPoint.style;

    if (d.wait === "any" && prevLineStyle !== "undefined") {
      pushPoint({...prevPoint, x: prevPoint.x + PRE_SKIP_TIME});
      pushPoint({...prevPoint, x: prevPoint.x + SKIP_TIME, style: "skipped"});
      pushPoint({...prevPoint, x: prevPoint.x + POST_SKIP_TIME, style: prevLineStyle});
    }

    if (d.device === device) {
      pushPoint({x: prevPoint.x + waitTime, y: d.result, style: "normal"});
    }
    else {
      pushPoint({...prevPoint, x: prevPoint.x + waitTime});
    }
  });
  pushPoint({...prevPoint, x: prevPoint.x + LAST_KEEP_TIME});

  return signalData;
}
