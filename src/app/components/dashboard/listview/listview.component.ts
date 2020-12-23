import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  devicesList: any;
  constructor(
    public http: HttpClient,
    public spinner: NgxSpinnerService,
    public router: Router,
    public api: ApiService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.gpsdevices();
  }
  gpsdevices() {
    const params = {
      username: 'BBits',
      password: 'CBD9FBC749F25D3A61A1620D18A7FC97E5897A758839C2E4BBE7863F286EF96F'
    };
    this.http.post('https://www.ventracloud.com/gkdevice/alllist', params).subscribe((data) => {
      this.spinner.hide();
      this.devicesList = data;
    });
  }
  deviceDetail(value) {
    this.api.deviceData = value;
    this.router.navigate(['dashboard/devicedetails']);
  }
}
