import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StoreComponent } from "./store/store.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "store", component: StoreComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
