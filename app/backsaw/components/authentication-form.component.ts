import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {
  AuthenticationService,
  AuthenticationRequest} from '../../shared/services/authentication_service';

@Component({
  selector: 'authentication-form',
  directives: [NgForm],
  providers: [AuthenticationService],
  templateUrl: 'app/backsaw/components/authentication-form.component.html',
  styleUrls: ['app/backsaw/components/authentication-form.component.css']
})
export class AuthenticationFormComponent {
  constructor(
    private _authService: AuthenticationService
  ) {}

  request = new AuthenticationRequest();

  onSubmit() {
    this._authService.setAdzerkAPIKey(this.request.adzkerkAPIKey);
    alert('Refresh page to log in :-/');
    // this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
