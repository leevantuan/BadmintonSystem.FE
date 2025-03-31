import { Component } from '@angular/core';
import { StatusCodeComponent } from '../../../shared/components/results/status-code/status-code.component';

@Component({
  selector: 'app-not-found',
  imports: [StatusCodeComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  statusCode: string = '404';
  description: string = 'Sorry, the page you visited does not exist.';
  htmlIcon: string = 'fa-solid fa-question text-2xl';
  colorIcon: string = 'bg-blue-600';
}
