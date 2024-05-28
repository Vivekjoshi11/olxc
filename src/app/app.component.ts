import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from "./header/header.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        ProductDetailsComponent, HeaderComponent, LoginpageComponent]
})
export class AppComponent {
  title = 'olxc';
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
