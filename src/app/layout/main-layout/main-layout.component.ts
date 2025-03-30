import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/clients/header/header.component';
import { RouterModule } from '@angular/router';
import { ChatBotComponent } from '../../shared/components/clients/chat-bot/chat-bot.component';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, RouterModule, ChatBotComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  isSupported: boolean = false;

  onClickOpenSupport(event: boolean) {
    this.isSupported = event;
  }
}
