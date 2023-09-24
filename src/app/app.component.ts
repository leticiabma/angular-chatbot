import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public email = environment.email;
  public copyEmail = false;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) {
    const display = this.location.path().split('/')[1];
    this.form = this.formBuilder.group({
      display: [display ?? 'fixed-chat']
    });
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
