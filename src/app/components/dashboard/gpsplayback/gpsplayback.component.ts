import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpsplayback',
  templateUrl: './gpsplayback.component.html',
  styleUrls: ['./gpsplayback.component.scss']
})
export class GpsplaybackComponent implements OnInit {
  arr = ['00','01','02','03','04','05','06','07','08','09','10'];
  constructor() { }

  ngOnInit() {
  }

}
