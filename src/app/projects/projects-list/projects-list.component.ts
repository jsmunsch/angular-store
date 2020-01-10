import { Component, OnInit, Input } from "@angular/core";
import { Projects } from "src/app/features/projects";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"]
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Projects[];

  constructor() {}

  ngOnInit() {}
}
