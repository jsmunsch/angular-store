import { Component, OnInit } from "@angular/core";
import { StoreService } from "../features/phones.service";
import { Phones } from "../features/phones";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  phones;
  filters;

  constructor(private StoreService: StoreService) {}

  ngOnInit() {
    this.getPhones();
    this.getFilters();
  }

  getPhones(): void {
    this.phones = this.StoreService.getPhones();
  }

  getFilters(): void {
    this.filters = this.StoreService.getFilters();
  }
}
