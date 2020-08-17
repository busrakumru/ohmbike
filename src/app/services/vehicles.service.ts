import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicles: any=[
    { title: 'Fahrzeug-1', image: 'assets/vehicle-qr-codes/qrcode-v1.png' },
    { title: 'Fahrzeug-2', image: 'assets/vehicle-qr-codes/qrcode-v2.png' },
    { title: 'Fahrzeug-3', image: 'assets/vehicle-qr-codes/qrcode-v3.png'}
  ];

  constructor() {}
}