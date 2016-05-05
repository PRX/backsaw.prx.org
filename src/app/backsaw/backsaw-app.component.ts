import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {AuthenticationFormComponent} from './authentication-form.component';
import {ToolbarComponent} from './toolbar.component';

import {SearchComponent} from '../search/search.component';
import {ReportComponent} from '../report/report.component';
import {AdvancedComponent} from '../advanced/advanced.component';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  directives: [ROUTER_DIRECTIVES, AuthenticationFormComponent, ToolbarComponent],
  providers: [AuthenticationService, ROUTER_PROVIDERS],
  selector: 'backsaw-app',
  styleUrls: ['app/backsaw/backsaw-app.component.css'],
  templateUrl: 'app/backsaw/backsaw-app.component.html'
})
@Routes([
  {path: 'home', component: SearchComponent},
  {path: 'report', component: ReportComponent},
  {path: 'advanced', component: AdvancedComponent}
 ])
export class BacksawAppComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  isAuthenticated(): boolean {
    return !!this.auth.getAdzerkAPIKey();
  }
}
