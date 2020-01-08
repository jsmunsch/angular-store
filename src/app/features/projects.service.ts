import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  model = "projects";
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<any> {
    return this.httpClient.get<any>(`${BASE_URL}${this.model}`);
  }
}
