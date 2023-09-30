import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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
  public isOpen = false;
  public iconSrc = 'assets/bot.png';
  public iconState = 'default';

  public onChangeChatState(): void {
    this.isOpen = !this.isOpen;
    this.iconState = (this.iconState === 'default' ? 'rotated' : 'default');

    if (this.isOpen) this.iconSrc = 'assets/chat.png';
    else this.iconSrc = 'assets/bot.png';
  }
}
