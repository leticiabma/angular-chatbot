import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-chat',
  templateUrl: './collapsible-chat.component.html',
  styleUrls: ['./collapsible-chat.component.scss']
})
export class CollapsibleChatComponent {
  public isOpen = false;

  public onClickOpenChat(): void {
    this.isOpen = !this.isOpen;
  }
}
