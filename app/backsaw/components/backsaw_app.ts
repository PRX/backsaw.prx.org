import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Search} from '../../search/components/search';
import {Report} from '../../report/components/report';
import {Advanced} from '../../advanced/components/advanced';
import {AuthenticationService} from '../../shared/services/authentication_service';

@Component({
  selector: 'backsaw-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthenticationService],
  templateUrl: 'app/backsaw/components/backsaw_app.html'
})
@RouteConfig([
  { path: '/', name: 'Search', component: Search },
  { path: '/report', name: 'Report', component: Report },
  { path: '/advanced', name: 'Advanced', component: Advanced }
])
export class BacksawApp implements OnInit {
  constructor(private _authService: AuthenticationService) {}

  authData: {adzkerkAPIKey?: string} = {};
  adzkerkAPIKey: string;

  ngOnInit() {
    if (this._authService.getAdzerkAPIKey()) {
      this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
    }
  }

  isAuthenticated() {
    return !!this.adzkerkAPIKey;
  }

  onLogout() {
    this._authService.unsetAdzerkAPIKey();
    this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }

  onSubmit() {
    this._authService.setAdzerkAPIKey(this.authData.adzkerkAPIKey);
    this.adzkerkAPIKey = this._authService.getAdzerkAPIKey();
  }
}
