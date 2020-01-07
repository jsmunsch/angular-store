import { Component, OnInit } from "@angular/core";
import { PhonesService } from "../features/phones.service";
import { Phones } from "../features/phones";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  phones;
  filters = [
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

  constructor(private phonesService: PhonesService) {}

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void {
    this.phones = this.phonesService.all();
  }
}
