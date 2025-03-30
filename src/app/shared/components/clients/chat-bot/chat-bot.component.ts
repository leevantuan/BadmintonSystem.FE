import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ChatBotService } from './chat-bot.service';
import { FormsModule } from '@angular/forms';
import {
  MessageResponse,
  SendMessageRequest,
} from '../../../../core/models/chat-bot.model';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent {
  @Input() isOpen: boolean = false;
  @Output() clickOpenSupport = new EventEmitter<boolean>();
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  newMessage: string = '';
  chatList: { user: string; message: string }[] = [];

  constructor(private chatBotService: ChatBotService) {
    this.chatList = this.chatBotService.chatBotList;
  }

  handlerOpenSupport() {
    this.clickOpenSupport.emit(!this.isOpen);
  }

  sendMessage(message: string) {
    if (message.trim() === '') return;
    var mess: SendMessageRequest = {
      sender: 'User',
      message: message,
    };
    this.chatList.push({ user: 'User', message: message });
    this.chatBotService
      .sendMessage(mess)
      .subscribe((res: MessageResponse[]) => {
        res.forEach((msg: MessageResponse) => {
          this.chatList.push({
            user: 'Bot',
            message: msg.text,
          });
        });
      });
    this.newMessage = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }
}
