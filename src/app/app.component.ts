import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email = environment.email;
  public copyEmail = false;
  public display = 'fixed-chat';

  constructor(private location: Location) {
    this.display = this.location.path().split('/')[1];
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
