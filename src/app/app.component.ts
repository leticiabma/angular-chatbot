import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DisplayType } from './shared/enums/display-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email = environment.email;
  public copyEmail = false;
  public displayType = DisplayType;
  public display = DisplayType.Fixed;

  constructor(private location: Location) {
    const path = this.location.path().split('/')[1];
    this.display =  path ? path as DisplayType : this.display;
  }

  public onClickCopyEmail(): void {
    this.copyEmail = true;

    setTimeout(() => {
      this.copyEmail = false;
   }, 2000);
  }

  public onClickRedirectGithub(): void {
    window.open(environment.githubUrl,'_blank');
  }
}
