import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Projects } from "src/app/features/projects";

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"]
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Projects[];
  @Input() readonly: false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
