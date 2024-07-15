import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Correction de 'styleUrl' en 'styleUrls'
})
export class NavbarComponent {
  menu: boolean = false;
  scrolled: boolean = false;

  togglemenu() {
    this.menu = true;
  }

  closemenu() {
    this.menu = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }
}
