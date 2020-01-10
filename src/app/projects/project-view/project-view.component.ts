import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Projects } from "src/app/features/projects";

@Component({
  selector: "app-project-view",
  templateUrl: "./project-view.component.html",
  styleUrls: ["./project-view.component.scss"]
})
export class ProjectViewComponent implements OnInit {
  currentProject: Projects;
  @Input() set project(value) {
    this.currentProject = Object.assign({}, value);
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
