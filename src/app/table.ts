import { Fec, Mode, TableData } from "./table.interface";

export const tableData: TableData[] = [
  {
    "interface": true,
    "status": "Up",
    "speed": "10G",
    "mode": Mode.normal,
    "fec": Fec.none,
    "rxPower": "10dBm",
    "txPower": "10dBm",
    "txBias": "10mA"
  },
  {
    "interface": false,
    "status": "Down",
    "speed": "20G",
    "mode": Mode.forceUp,
    "fec": Fec.none,
    "rxPower": "20dBm",
    "txPower": "20dBm",
    "txBias": "20mA"
  },
  {
    "interface": false,
    "status": "Down",
    "speed": "30G",
    "mode": Mode.loopback,
    "fec": Fec.rs,
    "rxPower": "30dBm",
    "txPower": "30dBm",
    "txBias": "30mA"
  },
  {
    "interface": true,
    "status": "Down",
    "speed": "40G",
    "mode": Mode.normal,
    "fec": Fec.fc,
    "rxPower": "40dBm",
    "txPower": "40dBm",
    "txBias": "40mA"
  }
];
