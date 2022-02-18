import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service'

@Component({
  selector: 'app-device-creation',
  templateUrl: './device-creation.component.html',
  styleUrls: ['./device-creation.component.css']
})
export class DeviceCreationComponent implements OnInit {

  device: Device = { assetTag: "1", deviceName: 'Dr Nice', deviceType: "type1", dateReceived: "2022/02/18", dateReturned: "2023/02/19", receivedBy: "ap420", deviceStatus: "kaputt", os: "ios" };

  constructor(private deviceSerice: DeviceService) { }

  ngOnInit() {
  }

  onClick(device: Device): void {
    this.deviceSerice.addDevice(device);
  }

}
