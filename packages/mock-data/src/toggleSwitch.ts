// Simple scenario data of toggle switch and lamp.

export const switchState = ["on", "off"] as const;
export type SwitchState = typeof switchState[number];
export type WaitTime = number | "any";
export const lampState = ["on", "off"] as const;
export type LampState = typeof lampState[number];

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
