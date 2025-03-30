export class SendMessageRequest {
  sender: string;
  message: string;

  constructor(sender: string = '', message: string = '') {
    this.sender = sender;
    this.message = message;
  }
}

export class MessageResponse {
  recipient_id: string;
  text: string;

  constructor(recipient_id: string = '', text: string = '') {
    this.recipient_id = recipient_id;
    this.text = text;
  }
}
