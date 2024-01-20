import { Component } from '@angular/core';
import { DisplayType } from 'src/app/shared/enums/display-type.enum';

@Component({
  selector: 'app-fixed-chat',
  templateUrl: './fixed-chat.component.html',
  styleUrls: ['./fixed-chat.component.scss']
})
export class FixedChatComponent {
  public displayType = DisplayType;
}
