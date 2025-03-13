import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  emailInfo = ' contact@badmintonchill.com';
  addressInfo = ' 123 Đường Cầu Lông, TP.Biên Hoà, Đồng Nai';
  phoneInfo = ' (012) 345-6789';
}
