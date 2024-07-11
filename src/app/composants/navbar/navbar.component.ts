import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
menu : boolean = false;

togglemenu(){
  this.menu = true;
}
closemenu(){
  this.menu = false;
}
}
