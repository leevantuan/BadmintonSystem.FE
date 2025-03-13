import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isActiveMenu: string = '/';
  isLogin = false;
  userName: string | null = '';
  userAvatar: string | null = '';
  isDropdownOpen = false;

  menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'SHOP', path: '/shop' },
    { label: 'BOOK', path: '/book' },
    { label: 'SUPPORT', path: '/support' },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isActiveMenu = event.urlAfterRedirects;
      }
    });
  }
  ngOnInit(): void {
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

  isAdmin() {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin && isAdmin == 'true') {
      this.menuItems.push({ label: 'MANAGER', path: '/admin' });
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
}
