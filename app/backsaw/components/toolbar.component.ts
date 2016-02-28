import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationService} from '../../shared/services/authentication_service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthenticationService],
  selector: 'toolbar',
  styleUrls: ['app/backsaw/components/toolbar.component.css'],
  templateUrl: 'app/backsaw/components/toolbar.component.html',
})
export class ToolbarComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  onLogout(): void {
    alert('TODO');
    // TODO this._authService.unsetAdzerkAPIKey();
    // TODO this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
