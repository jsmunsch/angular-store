import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreComponent } from "./store.component";
import { AppMaterialModule } from "../app-material/app-material.module";

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, StoreRoutingModule, AppMaterialModule]
})
export class StoreModule {}
