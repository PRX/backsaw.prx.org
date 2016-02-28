import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationFormComponent} from './authentication-form.component';
import {ToolbarComponent} from './toolbar.component';

import {SearchComponent} from '../../search/components/search.component';
import {ReportComponent} from '../../report/components/report.component';
import {AdvancedComponent} from '../../advanced/components/advanced.component';
import {AuthenticationService} from '../../shared/services/authentication_service';

@Component({
  directives: [ROUTER_DIRECTIVES, AuthenticationFormComponent, ToolbarComponent],
  providers: [AuthenticationService],
  selector: 'backsaw-app',
  styleUrls: ['app/backsaw/components/backsaw-app.component.css'],
  templateUrl: 'app/backsaw/components/backsaw-app.component.html',
})
@RouteConfig([
  { component: SearchComponent, name: 'Search', path: '/' },
  { component: ReportComponent, name: 'Report', path: '/report' },
  { component: AdvancedComponent, name: 'Advanced', path: '/advanced' },
])
export class BacksawAppComponent implements OnInit {
  constructor(
    private auth: AuthenticationService
  ) {}

  authData: {adzkerkAPIKey?: string} = {};
  adzkerkAPIKey: string;

  ngOnInit(): void {
    if (this.auth.getAdzerkAPIKey()) {
      this.adzkerkAPIKey = this.auth.getAdzerkAPIKey();
    }
  }

  isAuthenticated(): boolean {
    return !!this.adzkerkAPIKey;
  }
}
