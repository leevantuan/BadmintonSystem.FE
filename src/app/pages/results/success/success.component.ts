import { Component } from '@angular/core';
import { MessageComponent } from '../../../shared/components/results/message/message.component';

@Component({
  selector: 'app-success',
  imports: [MessageComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
})
export class SuccessComponent {
  title: string = 'Successfully Purchased Cloud Server ECS!';
  message: string =
    'Your purchase has been successful. You can now access the Cloud Server Console.';
  icon: string = 'fa-solid fa-check text-6xl';
}
