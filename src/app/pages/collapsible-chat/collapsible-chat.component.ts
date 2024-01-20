import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DisplayType } from 'src/app/shared/enums/display-type.enum';

@Component({
  selector: 'app-collapsible-chat',
  templateUrl: './collapsible-chat.component.html',
  styleUrls: ['./collapsible-chat.component.scss'],
  animations: [
    trigger('rotateAnimation', [
      state('rotated', style({ transform: 'rotate(0deg)' })),
      state('default', style({ transform: 'rotate(-360deg)' })),
      transition('default => rotated', animate('500ms ease-out')),
      transition('rotated => default', animate('500ms ease-out')),
    ]),
    trigger('fadeAnimation', [
      transition(":enter", [
        style({ opacity: 0 }), 
        animate(
          "150ms ease-in-out",
          style({ opacity: 1})
        )
      ]),
      transition(":leave", [
        style({ opacity: 1}), 
        animate(
          "150ms ease-in-out",
          style({ opacity: 0,})
        )
      ])
    ]),
  ]
})
export class CollapsibleChatComponent {
  private readonly botIconPath = './assets/bot.png';
  private readonly chatIconPath = './assets/chat.png';

  public isOpen = false;
  public iconSrc = this.botIconPath;
  public iconState = 'default';

  public displayType = DisplayType;
  
  public onChangeChatState(): void {
    this.isOpen = !this.isOpen;
    this.iconState = (this.iconState === 'default' ? 'rotated' : 'default');

    if (this.isOpen) this.iconSrc = this.chatIconPath;
    else this.iconSrc = this.botIconPath;
  }
}
