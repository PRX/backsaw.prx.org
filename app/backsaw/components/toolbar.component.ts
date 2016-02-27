import {Component} from 'angular2/core';
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
    alert('TODO');
    // this._authService.unsetAdzerkAPIKey();
    // this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
