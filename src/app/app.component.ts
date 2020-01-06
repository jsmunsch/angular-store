import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-store";

  links = [
    {
      path: "/",
      title: "Home",
      icon: "home"
    },
    {
      path: "/projects",
      title: "Projects",
      icon: "work"
    },
    {
      path: "/store",
      title: "Store",
      icon: "shopping_cart"
    }
  ];
}
