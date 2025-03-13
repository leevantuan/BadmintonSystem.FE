import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css',
})
export class AdminSidebarComponent {
  @Input() isCollapsed = false;

  submenuOpen: { [key: string]: boolean } = {};
  activeMenu: string = 'Home';
  activeSubmenu: string | null = null;

  menus: { key: string; icon: string; subMenus: string[] }[] = [
    {
      key: 'Home',
      icon: 'fa-solid fa-house',
      subMenus: [],
    },
    {
      key: 'Dashboard',
      icon: 'fa-solid fa-layer-group',
      subMenus: [],
    },
    {
      key: 'Management',
      icon: 'fa-solid fa-server',
      subMenus: ['Yard', 'Yard Type', 'Price', 'Day Off', 'Schedule'],
    },
    {
      key: 'Services',
      icon: 'fa-solid fa-database',
      subMenus: ['Booking', 'Service', 'Bill', 'Sale'],
    },
    {
      key: 'Other Services',
      icon: 'fa-solid fa-coins',
      subMenus: ['Inventory Receipt', 'Provider', 'Category'],
    },
    {
      key: 'Support',
      icon: 'fa-solid fa-headphones-simple',
      subMenus: [],
    },
    {
      key: 'Users',
      icon: 'fa-solid fa-user',
      subMenus: ['User Management', 'Roles'],
    },
    {
      key: 'Settings',
      icon: 'fa-solid fa-gear',
      subMenus: ['My Club', 'Review'],
    },
  ];

  // menus: {
  //   key: string;
  //   icon: string;
  //   path: string;
  //   subMenus: { key: string; path: string }[];
  // }[] = [
  //   {
  //     key: 'Home',
  //     icon: 'fa-solid fa-house',
  //     path: '/home',
  //     subMenus: [],
  //   },
  //   {
  //     key: 'Dashboard',
  //     icon: 'fa-solid fa-layer-group',
  //     path: '/dashboard',
  //     subMenus: [],
  //   },
  //   {
  //     key: 'Management',
  //     icon: 'fa-solid fa-server',
  //     path: '',
  //     subMenus: [
  //       { key: 'Yard', path: '/management/yard' },
  //       { key: 'Yard Type', path: '/management/yard-type' },
  //       { key: 'Price', path: '/management/price' },
  //       { key: 'Day Off', path: '/management/day-off' },
  //       { key: 'Schedule', path: '/management/schedule' },
  //     ],
  //   },
  //   {
  //     key: 'Services',
  //     icon: 'fa-solid fa-database',
  //     path: '',
  //     subMenus: [
  //       { key: 'Booking', path: '/services/booking' },
  //       { key: 'Service', path: '/services/service' },
  //       { key: 'Bill', path: '/services/bill' },
  //       { key: 'Sale', path: '/services/sale' },
  //     ],
  //   },
  //   {
  //     key: 'Other Services',
  //     icon: 'fa-solid fa-coins',
  //     path: '',
  //     subMenus: [
  //       { key: 'Inventory Receipt', path: '/other-services/inventory-receipt' },
  //       { key: 'Provider', path: '/other-services/provider' },
  //       { key: 'Category', path: '/other-services/category' },
  //     ],
  //   },
  //   {
  //     key: 'Support',
  //     icon: 'fa-solid fa-headphones-simple',
  //     path: '/support',
  //     subMenus: [],
  //   },
  //   {
  //     key: 'Users',
  //     icon: 'fa-solid fa-user',
  //     path: '',
  //     subMenus: [
  //       { key: 'User Management', path: '/users/user-management' },
  //       { key: 'Roles', path: '/users/roles' },
  //     ],
  //   },
  //   {
  //     key: 'Settings',
  //     icon: 'fa-solid fa-gear',
  //     path: '',
  //     subMenus: [
  //       { key: 'My Club', path: '/settings/my-club' },
  //       { key: 'Review', path: '/settings/review' },
  //     ],
  //   },
  // ];

  constructor(private router: Router) {}
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(menu: { key: string; subMenus: string[] }): void {
    if (menu.subMenus.length > 0) {
      this.submenuOpen[menu.key] = !this.submenuOpen[menu.key];
    } else {
      this.activeMenu = menu.key;
      this.activeSubmenu = null;
    }
  }

  setActiveSubmenu(menuKey: string, submenu: string): void {
    this.activeSubmenu = submenu;
    this.activeMenu = menuKey;
  }

  isMenuActive(menuKey: string): boolean {
    if (
      this.activeMenu === menuKey &&
      (this.activeSubmenu ||
        this.menus.find((m) => m.key === menuKey)?.subMenus.length === 0)
    ) {
      return true;
    }
    return false;
  }
}
