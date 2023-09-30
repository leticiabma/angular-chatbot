import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

class Message {
  text?: string;
  type: MessageType;
}

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading'
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer: ElementRef;
  @Input() public display: string;

  public form: FormGroup;
  public messages: Array<Message> = [];
  private canSendMessage = true;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
    this.getBotMessage();
  }

  ngAfterViewChecked(): void {        
    this.scrollToBottom();        
  } 

  public onClickSendMessage(): void {
    const message = this.form.get('message').value;

    if (message && this.canSendMessage) {
      const userMessage: Message = {text: message, type: MessageType.User};
      this.messages.push(userMessage);

      this.form.get('message').setValue('');
      this.form.updateValueAndValidity();
      this.getBotMessage();
    }
  }

  private getBotMessage(): void {
    this.canSendMessage = false;
    const waitMessage: Message = {type: MessageType.Loading};
    this.messages.push(waitMessage);

    setTimeout(() => {
      this.messages.pop();
      const botMessage: Message = {text: 'Hello! How can I help you?', type: MessageType.Bot};
      this.messages.push(botMessage);
      this.canSendMessage = true;
   }, 2000);
  }

  public onClickEnter(event: KeyboardEvent): void {
    event.preventDefault();
    this.onClickSendMessage();
  }

  private scrollToBottom(): void {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;         
  }
}
