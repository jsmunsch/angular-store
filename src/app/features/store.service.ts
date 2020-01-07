import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: "root"
})
export class StoreService {
  modelPhones = "phones";
  modelFilters = "filters";

  constructor(private httpClient: HttpClient) {}

  getPhones() {
    return this.httpClient.get(`${BASE_URL}${this.modelPhones}`);
  }

  getFilters() {
    return this.httpClient.get(`${BASE_URL}${this.modelFilters}`);
  }
}
