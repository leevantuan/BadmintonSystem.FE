import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
})
export class ProfileInfoComponent {
  profileForm: FormGroup;
  email = 'tuan@gmail.com';
  userName = 'Tuan Lee';

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      firstName: ['Lee', Validators.required],
      lastName: ['Tuan', Validators.required],
      userName: ['TuanLee', Validators.required],
      email: ['tuan@gmail.com', [Validators.required, Validators.email]],
      phone: ['+123 456789', Validators.required],
      gender: ['Male', Validators.required],
    });
  }

  updateProfile() {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
