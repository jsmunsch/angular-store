import { Component, OnInit } from "@angular/core";
import { StoreService } from "../features/store.service";
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

  getPhones() {
    this.StoreService.getPhones().subscribe(
      (result: any) => (this.phones = result)
    );
  }

  getFilters(): void {
    this.filters = this.StoreService.getFilters();
  }
}
