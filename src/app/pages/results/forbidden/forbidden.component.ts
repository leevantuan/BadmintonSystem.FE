import { Component } from '@angular/core';
import { StatusCodeComponent } from '../../../shared/components/results/status-code/status-code.component';

@Component({
  selector: 'app-forbidden',
  imports: [StatusCodeComponent],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.css',
})
export class ForbiddenComponent {
  statusCode: string = '403';
  description: string = 'Sorry, you are not authorized to access this page.';
  htmlIcon: string = 'fa-solid fa-lock text-2xl';
  colorIcon: string = 'bg-purple-600';
}
