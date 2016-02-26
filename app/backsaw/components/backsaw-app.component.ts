import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationFormComponent} from './authentication-form.component';
import {ToolbarComponent} from './toolbar.component';

import {SearchComponent} from '../../search/components/search.component';
import {ReportComponent} from '../../report/components/report.component';
import {AdvancedComponent} from '../../advanced/components/advanced.component';
import {
  AuthenticationService,
  AuthenticationRequest} from '../../shared/services/authentication_service';

@Component({
  selector: 'backsaw-app',
  directives: [ROUTER_DIRECTIVES, AuthenticationFormComponent, ToolbarComponent],
  providers: [AuthenticationService],
  templateUrl: 'app/backsaw/components/backsaw-app.component.html',
  styleUrls: ['app/backsaw/components/backsaw-app.component.css']
})
@RouteConfig([
  { path: '/', name: 'Search', component: SearchComponent },
  { path: '/report', name: 'Report', component: ReportComponent },
  { path: '/advanced', name: 'Advanced', component: AdvancedComponent }
])
export class BacksawAppComponent implements OnInit {
  constructor(
    private _authService: AuthenticationService
  ) {}

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
}
