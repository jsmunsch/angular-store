import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red";
  selectedProject;

  constructor() {}

  ngOnInit() {}

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }
}
