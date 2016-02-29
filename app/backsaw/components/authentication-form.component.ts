import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {
  AuthenticationService,
  AuthenticationRequest,
} from '../../shared/services/authentication.service';

@Component({
  directives: [NgForm],
  providers: [AuthenticationService],
  selector: 'authentication-form',
  styleUrls: ['app/backsaw/components/authentication-form.component.css'],
  templateUrl: 'app/backsaw/components/authentication-form.component.html',
})
export class AuthenticationFormComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  request: AuthenticationRequest = new AuthenticationRequest();

  onSubmit(): void {
    this.auth.setAdzerkAPIKey(this.request.adzkerkAPIKey);
    alert('Refresh page to log in :-/');
    // TODO this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
