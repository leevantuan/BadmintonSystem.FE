import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css',
})
export class AdminSidebarComponent implements OnInit {
  @Input() isCollapsed = false;

  submenuOpen: { [key: string]: boolean } = {};
  activeMenu: string = 'Home';
  activeSubmenu: string | null = null;

  menus: {
    key: string;
    icon: string;
    path: string;
    subMenus: { key: string; path: string }[];
  }[] = [
    {
      key: 'Home',
      icon: 'fa-solid fa-house',
      path: 'admin/home',
      subMenus: [],
    },
    {
      key: 'Dashboard',
      icon: 'fa-solid fa-layer-group',
      path: 'admin/dashboard',
      subMenus: [],
    },
    {
      key: 'Management',
      icon: 'fa-solid fa-server',
      path: '',
      subMenus: [
        { key: 'Yard', path: 'admin/management/yard' },
        { key: 'Yard Type', path: 'admin/management/yard-type' },
        { key: 'Price', path: 'admin/management/price' },
        { key: 'Day Off', path: 'admin/management/day-off' },
        { key: 'Schedule', path: 'admin/management/schedule' },
      ],
    },
    {
      key: 'Services',
      icon: 'fa-solid fa-database',
      path: '',
      subMenus: [
        { key: 'Booking', path: 'admin/services/booking' },
        { key: 'Service', path: 'admin/services/service' },
        { key: 'Bill', path: 'admin/services/bill' },
        { key: 'Sale', path: 'admin/services/sale' },
      ],
    },
    {
      key: 'Other Services',
      icon: 'fa-solid fa-coins',
      path: '',
      subMenus: [
        {
          key: 'Inventory Receipt',
          path: 'admin/other-services/inventory-receipt',
        },
        { key: 'Provider', path: 'admin/other-services/provider' },
        { key: 'Category', path: 'admin/other-services/category' },
      ],
    },
    {
      key: 'Support',
      icon: 'fa-solid fa-headphones-simple',
      path: 'admin/support',
      subMenus: [],
    },
    {
      key: 'Users',
      icon: 'fa-solid fa-user',
      path: '',
      subMenus: [
        { key: 'User Management', path: 'admin/users/user-manager' },
        { key: 'Roles', path: 'admin/users/role' },
      ],
    },
    {
      key: 'Settings',
      icon: 'fa-solid fa-gear',
      path: '',
      subMenus: [
        { key: 'My Club', path: 'admin/settings/my-club' },
        { key: 'Review', path: 'admin/settings/review' },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateActiveMenu(this.router.url);
    this.router.events.subscribe(() => {
      this.updateActiveMenu(this.router.url);
    });
  }

  updateActiveMenu(currentPath: string) {
    this.activeMenu = 'Home';
    this.activeSubmenu = null;

    let matchedMenu: string | null = null;
    let matchedSubmenu: string | null = null;
    let maxMatchLength = 0;

    for (const menu of this.menus) {
      if (menu.path && currentPath === '/' + menu.path) {
        this.activeMenu = menu.key;
        return;
      }

      for (const sub of menu.subMenus) {
        if (currentPath === '/' + sub.path) {
          this.activeMenu = menu.key;
          this.activeSubmenu = sub.key;
          return;
        }

        // Kiểm tra path dài nhất khớp với URL hiện tại
        if (
          currentPath.startsWith('/' + sub.path) &&
          sub.path.length > maxMatchLength
        ) {
          matchedMenu = menu.key;
          matchedSubmenu = sub.key;
          maxMatchLength = sub.path.length;
        }
      }
    }

    if (matchedMenu) {
      this.activeMenu = matchedMenu;
      this.activeSubmenu = matchedSubmenu;
    }
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(menu: any): void {
    if (menu.subMenus.length > 0) {
      this.submenuOpen[menu.key] = !this.submenuOpen[menu.key];
    } else {
      this.activeMenu = menu.key;
      this.activeSubmenu = null;
    }
    if (menu.path !== '') {
      this.router.navigate([menu.path]);
    }
  }

  setActiveSubmenu(menuKey: string, submenu: string, path: string): void {
    this.activeSubmenu = submenu;
    this.activeMenu = menuKey;
    this.router.navigate([path]);
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
