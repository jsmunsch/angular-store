import { Injectable } from "@angular/core";
import { Phones } from "./phones";

@Injectable({
  providedIn: "root"
})
export class PhonesService {
  private phones = [
    {
      title: "iPhone 11 Pro",
      price: 139.99,
      color: "red",
      brand: "apple",
      description: "The new iPhone 11",
      capacity: "128GB",
      image_url:
        "https://cyberport.scene7.com/is/image/cyberport/190913115117300701900246T?$Zoom_500$"
    },
    {
      title: "iPhone 11 Pro",
      price: 139.99,
      color: "red",
      brand: "apple",
      description: "The new iPhone 11",
      capacity: "128GB",
      image_url:
        "https://cyberport.scene7.com/is/image/cyberport/190913115117300701900246T?$Zoom_500$"
    },
    {
      title: "iPhone 11 Pro",
      price: 139.9,
      color: "red",
      brand: "apple",
      description: "The new iPhone 11",
      capacity: "128GB",
      image_url:
        "https://cyberport.scene7.com/is/image/cyberport/190913115117300701900246T?$Zoom_500$"
    },
    {
      title: "iPhone 11 Pro",
      price: 139.99,
      color: "red",
      brand: "apple",
      description: "The new iPhone 11",
      capacity: "128GB",
      image_url:
        "https://cyberport.scene7.com/is/image/cyberport/190913115117300701900246T?$Zoom_500$"
    }
  ];

  constructor() {}

  all(): Phones[] {
    return this.phones;
  }
}
