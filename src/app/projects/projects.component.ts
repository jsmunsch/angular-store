import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../features/projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red";
  projects$;
  selectedProject;

  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.ProjectsService.all().subscribe((result: any) => {
      this.projects$ = result;
    });
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }
}
