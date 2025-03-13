import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',
})
export class AdminHeaderComponent {
  @Output() toggleMenu = new EventEmitter<boolean>();

  isToggleMenu = false;
  toggleMenuClick() {
    this.isToggleMenu = !this.isToggleMenu;
    this.toggleMenu.emit(this.isToggleMenu);
  }
}
