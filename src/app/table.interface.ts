export interface TableData {
  interface: boolean;
  status: string;
  speed: string;
  mode: Mode;
  fec: Fec;
  rxPower: string;
  txPower: string;
  txBias: string;
}

export enum Mode {
  normal = 'normal',
  forceUp = 'forceUp',
  loopback = 'loopback',
}

export enum Fec {
  none = 'none',
  rs = 'rs',
  fc = 'fc',
}
