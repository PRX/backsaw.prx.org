import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationFormComponent} from './authentication-form.component';
import {ToolbarComponent} from './toolbar.component';

import {SearchComponent} from '../search/search.component';
import {ReportComponent} from '../report/report.component';
import {AdvancedComponent} from '../advanced/advanced.component';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  directives: [ROUTER_DIRECTIVES, AuthenticationFormComponent, ToolbarComponent],
  providers: [AuthenticationService],
  selector: 'backsaw-app',
  styleUrls: ['app/backsaw/backsaw-app.component.css'],
  templateUrl: 'app/backsaw/backsaw-app.component.html',
})
@RouteConfig([
  { component: SearchComponent, name: 'Search', path: '/' },
  { component: ReportComponent, name: 'Report', path: '/report' },
  { component: AdvancedComponent, name: 'Advanced', path: '/advanced' },
])
export class BacksawAppComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  isAuthenticated(): boolean {
    return !!this.auth.getAdzerkAPIKey();
  }
}
