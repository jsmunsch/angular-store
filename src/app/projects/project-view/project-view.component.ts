import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Projects } from "src/app/features/projects";

@Component({
  selector: "app-project-view",
  templateUrl: "./project-view.component.html",
  styleUrls: ["./project-view.component.scss"]
})
export class ProjectViewComponent implements OnInit {
  @Input() project: Projects;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
