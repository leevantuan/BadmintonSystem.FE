import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SessionStorageService } from '../../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isTenant: boolean = false;
  isMenuOpen = false;
  isActiveMenu: string = '/home';
  isLogin = false;
  userName: string | null = '';
  userAvatar: string | null = '';
  isDropdownOpen = false;

  menuItems = [
    { label: 'HOME', path: '/home' },
    { label: 'SHOP', path: '/shop' },
    { label: 'BOOK', path: '/book' },
    { label: 'SUPPORT', path: '/support' },
  ];

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isActiveMenu = event.urlAfterRedirects;
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isPageTenant = event.urlAfterRedirects === '/';
        if (isPageTenant) {
          this.isTenant = false;
          this.sessionStorageService.removeItem('tenantCode');
        } else {
          this.isTenant = true;
        }
      }
    });
  }
  ngOnInit(): void {
    if (this.sessionStorageService.getItem('tenantCode') !== null) {
      this.isTenant = true;
    }

    if (typeof localStorage !== 'undefined') {
      const loginStatus = localStorage.getItem('isLogin');
      if (loginStatus === 'true') {
        this.isLogin = true;
        this.userName = localStorage.getItem('userName');
        this.userAvatar = localStorage.getItem('userAvatar');
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin) {
          this.isAdmin();
        }
      } else {
        this.isLogin = false;
      }
    } else {
      this.isLogin = false;
    }
  }

  date = new Date();
  formattedDate = this.date.toLocaleDateString('vi-VN', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  handleClickLogo() {
    this.router.navigate(['/']);
  }

  isAdmin() {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin && isAdmin == 'true') {
      this.menuItems.push({ label: 'MANAGER', path: '/admin/home' });
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  logout(): void {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('isAdmin');
    this.isLogin = false;
    this.isDropdownOpen = false;
    this.router.navigate(['/auth']);
  }

  public UIResource = {
    logo: 'Badminton Chill',
    profile: 'Profile',
    settings: 'Settings',
    support: 'Support',
    logout: 'Logout',
    login: 'Login',
    signUp: 'Sign Up',
  };
}
