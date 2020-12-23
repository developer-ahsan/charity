import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-devicedetail',
  templateUrl: './devicedetail.component.html',
  styleUrls: ['./devicedetail.component.css']
})
export class DevicedetailComponent implements OnInit {
  data: any;
  @ViewChild('map', {static: true}) mapElement: any;
  display = true;
  map: google.maps.Map;
  isLoading = true;
  counters: any;
  centerCords = {
    lat: null,
    lng: null
    };
    locations: any;
    markersOnMap: any;
    options = {
      minValue: 0,
      maxValue: 240,
      animationRule: 'elastic',
      animationDuration: 500
   };
   speed: any;
   angle: any;
  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    console.log(this.api.deviceData);
    this.markersOnMap = this.api.deviceData;
    this.initMap();
  }
  initMap() {
    const uluru = { lat: this.api.deviceData.gpsdata.lat, lng: this.api.deviceData.gpsdata.lng };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 10,
        center: uluru,
      }
    );
    this.addMarker();
  }
  addMarker() {
    const InforObj = [];
    // tslint:disable-next-line: prefer-for-of
    const contentString = this.markersOnMap.drivername;
    const image = '../../../../assets/app/img/car.svg';
    const marker = new google.maps.Marker({
      position: {lat: this.markersOnMap.gpsdata.lat, lng: this.markersOnMap.gpsdata.lng},
      map: this.map,
      icon: image,
    });
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    });
    marker.addListener('click', () => {
      this.display = false;
      this.speed = this.markersOnMap.gpsdata.speedInKmh;
      this.angle = this.markersOnMap.gpsdata.trackingAngle;
      document.getElementById('speed').setAttribute('data-value', this.speed);
      document.getElementById('angle').setAttribute('data-value', this.angle);
    });
    marker.addListener('mouseover', () => {
      if (InforObj.length > 0) {
        console.log(InforObj.length);
        InforObj[0].set('marker', null);
      }
      infowindow.open(marker.get('map'), marker);
    });
    marker.addListener('mouseout', () => {
      infowindow.close();
    });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = '../../assets/app/js/gauge.min.js';
    document.body.appendChild(script);
  }
}
