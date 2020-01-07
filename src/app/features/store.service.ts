import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Phones } from "./phones";
import { Filters } from "./filters";

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: "root"
})
export class StoreService {
  modelPhones = "phones";
  modelFilters = "filters";

  constructor(private httpClient: HttpClient) {}

  getPhones(): Observable<Phones[]> {
    return this.httpClient.get<Phones[]>(`${BASE_URL}${this.modelPhones}`);
  }

  getFilters(): Observable<Filters[]> {
    return this.httpClient.get<Filters[]>(`${BASE_URL}${this.modelFilters}`);
  }
}
