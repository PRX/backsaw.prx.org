import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationService} from '../../shared/services/authentication_service';

@Component({
  selector: 'toolbar',
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthenticationService],
  templateUrl: 'app/backsaw/components/toolbar.component.html',
  styleUrls: ['app/backsaw/components/toolbar.component.css']
})
export class ToolbarComponent {
  constructor(
    private _authService: AuthenticationService
  ) {}

  onLogout() {
    // this._authService.unsetAdzerkAPIKey();
    // this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
