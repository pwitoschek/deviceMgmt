import { Injectable } from '@angular/core';
import { Device } from './device';
import { Observable, of } from 'rxjs';
import { DEVICES } from 'src/app/mock-devices';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceOverviewUrl = 'https://vbrzvsvga9.execute-api.eu-central-1.amazonaws.com/dev/device-management/api/devices';
  private deviceAddUrl = 'https://vbrzvsvga9.execute-api.eu-central-1.amazonaws.com/dev/device-management/api/devices';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    //return devices;
    return this.http.get<Device[]>(this.deviceOverviewUrl);
  }

  addDevice(device: Device) {
    console.log(device);

    this.http.post<Device>(this.deviceAddUrl, device).subscribe({
      next: data => {
        console.log(data);

      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }
}
