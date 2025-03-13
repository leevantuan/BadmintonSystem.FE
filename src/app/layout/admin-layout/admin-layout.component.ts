import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../shared/components/admins/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../shared/components/admins/admin-sidebar/admin-sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [
    AdminSidebarComponent,
    AdminHeaderComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {
  isCollapsed = false;

  toggleMenu(status: boolean) {
    this.isCollapsed = !this.isCollapsed;
  }

  clickSideBar() {
    if (this.isCollapsed) this.isCollapsed = false;
  }
}
