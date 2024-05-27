import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ProductDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'olxc';
}
document.addEventListener('DOMContentLoaded', function () {
  var sellButton = document.getElementById('sell-button');
  sellButton === null || sellButton === void 0 ? void 0 : sellButton.addEventListener('click', function () {
      alert('Sell button clicked!');
      // Add your sell button click logic here
  });
});
