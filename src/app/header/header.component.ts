import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var sellButton = document.getElementById('sell-button');
  sellButton === null || sellButton === void 0 ? void 0 : sellButton.addEventListener('click', function () {
      alert('Sell button clicked!');
      // Add your sell button click logic here
  });
});
