import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { AppMaterialModule } from "../app-material/app-material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, AppMaterialModule]
})
export class ProjectsModule {}
