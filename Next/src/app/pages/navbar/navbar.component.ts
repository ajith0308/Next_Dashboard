import { Component } from '@angular/core';
import { Routconst } from 'src/app/constants/routconstant';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  Routes = Routconst;
}
