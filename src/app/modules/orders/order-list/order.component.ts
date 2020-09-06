import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [],
})
export class OrderComponent {
  constructor(authService: AuthenticationService) {
    console.log(authService);
  }
}
