import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationService} from '../../shared/services/authentication.service';

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
    this.auth.unsetAdzerkAPIKey();
  }
}
