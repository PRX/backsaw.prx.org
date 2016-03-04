import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {AuthenticationService} from '../services/authentication.service';

@Component({
  directives: [NgForm],
  providers: [AuthenticationService],
  selector: 'authentication-form',
  styleUrls: ['app/backsaw/authentication-form.component.css'],
  templateUrl: 'app/backsaw/authentication-form.component.html',
})
export class AuthenticationFormComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  onSubmit(apiKey: string): void {
    this.auth.setAdzerkAPIKey(apiKey);
  }
}
