import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserResponseModel {
  userName: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  gender: number;
  avatarUrl: string;
  id: string;
}

interface ChatMessageModel {
  content: string;
  isAdmin: boolean;
  isRead: boolean;
  chatRoomId: string;
  createdDate: string;
}

interface ChatRoomModel {
  user: UserResponseModel;
  chatMessage: ChatMessageModel;
}

@Component({
  selector: 'app-support',
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent implements AfterViewChecked, OnInit {
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  @ViewChild('inputFocus') inputFocus!: ElementRef;

  newMessage = '';
  searchQuery = '';
  selectedUser: UserResponseModel = {
    userName: 'John Doe',
    email: 'john@example.com',
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
    phoneNumber: '123456789',
    gender: 1,
    avatarUrl:
      'https://cdn.iconscout.com/icon/free/png-256/free-boy-avatar-icon-download-in-svg-png-gif-file-formats--male-schoolboy-guy-youngster-avatars-flat-circle-pack-people-icons-1129037.png',
    id: '1',
  };
  listRoomChat: ChatRoomModel[] = [];
  listMessChat: ChatMessageModel[] = [];

  chatRoomId: string = 'room1';

  constructor() {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit() {
    this.listRoomChat = [
      {
        user: { ...this.selectedUser, userName: 'Alice', id: '2' },
        chatMessage: {
          content: 'Hello!',
          isAdmin: false,
          isRead: true,
          chatRoomId: 'room2',
          createdDate: new Date().toISOString(),
        },
      },
      {
        user: { ...this.selectedUser, userName: 'Bob', id: '3' },
        chatMessage: {
          content: 'Hey there!',
          isAdmin: true,
          isRead: true,
          chatRoomId: 'room3',
          createdDate: new Date().toISOString(),
        },
      },
    ];
  }

  selectChat(chat: ChatRoomModel) {
    if (!chat) return;
    this.selectedUser = chat.user;
    this.chatRoomId = chat.chatMessage.chatRoomId;
    this.listMessChat = [
      {
        content: 'Hi!',
        isAdmin: false,
        isRead: true,
        chatRoomId: chat.chatMessage.chatRoomId,
        createdDate: new Date().toISOString(),
      },
      {
        content: 'How are you?',
        isAdmin: true,
        isRead: true,
        chatRoomId: chat.chatMessage.chatRoomId,
        createdDate: new Date().toISOString(),
      },
    ];
    this.focusInput();
  }

  sendMessage(newMessage: string) {
    if (newMessage.trim() === '') return;
    this.listMessChat.push({
      content: newMessage,
      isAdmin: true,
      isRead: true,
      chatRoomId: this.chatRoomId,
      createdDate: new Date().toISOString(),
    });
    this.newMessage = '';
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }

  focusInput() {
    this.inputFocus.nativeElement.focus();
  }

  isAdmin(message: ChatMessageModel): boolean {
    return message.isAdmin;
  }

  isImage(): boolean {
    return !this.selectedUser || !this.selectedUser.avatarUrl?.trim();
  }

  isNotificationForYou(isAdmin: any, isRead: any, content: any) {
    if (!content) return true;
    if (!isAdmin && !isRead) return false;
    return true;
  }

  isMe(chat: any) {
    if (chat.chatMessage.isAdmin) return false;
    return true;
  }

  searchUsers() {}
}
