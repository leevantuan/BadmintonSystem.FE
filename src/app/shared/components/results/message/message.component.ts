import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  @Input() title: string = 'Successfully Purchased Cloud Server ECS!';
  @Input() message: string =
    'Your purchase has been successful. You can now access the Cloud Server Console.';
  @Input() icon: string = 'fa-solid fa-check text-6xl';

  goToConsole() {
    console.log('Redirecting to Console...');
  }

  buyAgain() {
    console.log('Buying Again...');
  }
}
