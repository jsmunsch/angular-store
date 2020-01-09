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

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }
  all(): Observable<Projects> {
    return this.httpClient.get<Projects>(this.getUrl());
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }
}
