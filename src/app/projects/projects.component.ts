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
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  deleteProject(project) {
    this.ProjectsService.delete(project.id).subscribe(() => this.getProjects());
  }

  createProject(project) {
    this.ProjectsService.create(project).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project) {
    this.ProjectsService.update(project).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
  }

  cancel() {
    this.selectProject(null);
    this.resetProject();
  }
}
