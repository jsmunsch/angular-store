import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../features/projects.service";
import { ThrowStmt } from "@angular/compiler";
import { Projects } from "../features/projects";
import { stringify } from "querystring";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  primaryColor = "red";
  projects$;
  selectedProject: Projects;

  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  getProjects() {
    this.ProjectsService.all().subscribe((result: any) => {
      this.projects$ = result;
    });
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Projects = {
      id: null,
      title: "",
      details: "",
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }

  saveProject(project) {
    console.log("SAVING PROJECT", project);
  }

  deleteProject(project) {
    this.ProjectsService.delete(project.id).subscribe(() => this.getProjects());
  }

  cancel() {
    this.selectProject(null);
    this.resetProject();
  }
}
