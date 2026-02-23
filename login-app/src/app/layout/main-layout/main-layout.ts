import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidenav } from '../sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    Header,
    Sidenav],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
 isMobile = false;
  isSidebarOpen = true;
  isCollapsed: boolean = false;
  drawer: any;

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768;

    // On mobile sidebar should be closed initially
    this.isSidebarOpen = !this.isMobile;
  }

  toggleSidenav() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;

  setTimeout(() => {
    this.drawer.updateContentMargins();
  });
}
}
