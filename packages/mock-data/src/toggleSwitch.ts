// Simple scenario data of toggle switch and lamp.

export type SwitchState = "on" | "off";
export type WaitTime = number | "any";
export type LampState = "on" | "off";

export type SceneAction<T = boolean> = {
  name?: string;
  device: string;
  result: T;
  wait?: WaitTime;
}

export const ToggleSwitchData: SceneAction<SwitchState | LampState>[] = [
  { device: 'SW-A', result: "off" },
  { device: 'Lamp1', result: "off" },
  { device: 'SW-A', result: "on", wait: "any" },
  { device: 'SW-A', result: "off", wait: "any" },
  { device: 'Lamp1', result: "on", wait: 0 },
  { device: 'SW-A', result: "on", wait: "any" },
  { device: 'SW-A', result: "off", wait: "any" },
  { device: 'Lamp1', result: "off", wait: 0 },
]

export default ToggleSwitchData;
