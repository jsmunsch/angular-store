import { Injectable } from "@angular/core";
import { Phones } from "./phones";
import { Filters } from "./filters";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StoreService {
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

  private filters = [
    {
      title: "Brand",
      options: ["Apple", "Huawei", "Nokia"]
    },
    {
      title: "Color",
      options: ["red", "black", "white"]
    },
    {
      title: "Display",
      options: ["mat", "shiny", "super-sparkle"]
    },
    {
      title: "Capacity",
      options: ["64GB", "128GB", "256GB"]
    }
  ];

  constructor() {}

  getFilters(): Filters[] {
    return this.filters;
  }

  getPhones(): Phones[] {
    return this.phones;
  }
}
