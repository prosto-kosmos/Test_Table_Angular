import { Component } from '@angular/core';
import { Fec, Mode, TableData } from '../table.interface';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent {
  constructor() {
    this.updateTable();
  }
  mode = Mode;
  fec = Fec;
  lines = 5;
  dataSource: TableData[] = [];
  displayedColumns: string[] = [
    'interface',
    'status',
    'speed',
    'mode',
    'fec',
    'rxPower',
    'txPower',
    'txBias',
  ];

  onChangeLines($event: any): void {
    this.lines = +$event.target.value;
  }
  updateTable(): void {
    this.dataSource = [];
    for (let i = 0; i < this.lines; i++) {
      this.dataSource.push({
        interface: true,
        status: 'Up',
        speed: '10G',
        mode: Mode.normal,
        fec: Fec.none,
        rxPower: '10dBm',
        txPower: '10dBm',
        txBias: '10mA',
      });
    }
  }
}
