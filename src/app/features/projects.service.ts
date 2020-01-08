import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Projects } from "./projects";

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  model = "projects";
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<Projects> {
    return this.httpClient.get<Projects>(`${BASE_URL}${this.model}`);
  }
}
