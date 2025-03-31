import { Component } from '@angular/core';
import { StatusCodeComponent } from '../../../shared/components/results/status-code/status-code.component';

@Component({
  selector: 'app-internal-server-error',
  imports: [StatusCodeComponent],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.css',
})
export class InternalServerErrorComponent {
  statusCode: string = '500';
  description: string = 'Sorry, something went wrong.';
  htmlIcon: string = 'fa-solid fa-exclamation text-2xl';
  colorIcon: string = 'bg-orange-600';
}
