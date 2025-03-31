import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-code',
  imports: [CommonModule],
  templateUrl: './status-code.component.html',
  styleUrl: './status-code.component.css',
})
export class StatusCodeComponent {
  @Input() statusCode: string = '403';
  @Input() description: string =
    'Sorry, you are not authorized to access this page.';
  @Input() htmlIcon: string = 'fa-solid fa-lock text-2xl';
  @Input() colorIcon: string = 'bg-blue-600';

  imageLink =
    'https://khothietke.net/wp-content/uploads/2021/03/taive-freepng-02116-tho-sua-chua-va-chiec-co-le-do-300x300.png';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
