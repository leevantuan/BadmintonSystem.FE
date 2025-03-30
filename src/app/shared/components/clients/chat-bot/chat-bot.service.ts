import { EventEmitter, Injectable } from '@angular/core';
import {
  MessageResponse,
  SendMessageRequest,
} from '../../../../core/models/chat-bot.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatBotService {
  chatBotUrl = environment.chatBotHubUrl;
  chatBotList: { user: string; message: string }[] = [
    {
      user: 'Bot',
      message:
        'Xin chào! 🏸 Bạn muốn đặt sân cầu lông phải không? Hãy cho mình biết thời gian, địa điểm, và số lượng người chơi để mình hỗ trợ bạn tốt nhất nhé! 😊🎾',
    },
  ];
  changeMessagedEmitter = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  sendMessage(req: SendMessageRequest) {
    return this.httpClient.post<MessageResponse[]>(this.chatBotUrl, req);
  }
}
