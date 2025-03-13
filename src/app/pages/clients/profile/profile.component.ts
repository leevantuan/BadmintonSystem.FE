import { Component } from '@angular/core';
import { ProfileInfoComponent } from '../../../shared/components/clients/profile-info/profile-info.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfilePasswordComponent } from '../../../shared/components/clients/profile-password/profile-password.component';
import { ProfileMyBookComponent } from '../../../shared/components/clients/profile-my-book/profile-my-book.component';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileInfoComponent,
    FormsModule,
    CommonModule,
    ProfilePasswordComponent,
    ProfileMyBookComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  activeTab: string = 'info';
  navigateTo(tab: string) {
    this.activeTab = tab;
  }
}
