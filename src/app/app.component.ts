import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {AuthenticationFormComponent} from './shared';
import {ProgramsComponent} from '../+programs';
import {ReportComponent} from './+report';
import {AdvancedComponent} from './+advanced';

import {
  AuthenticationService,
  ToolbarComponent
} from './shared';

@Component({
  directives: [ROUTER_DIRECTIVES, AuthenticationFormComponent, ToolbarComponent],
  providers: [AuthenticationService, ROUTER_PROVIDERS],
  selector: 'backsaw-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
@Routes([
  {component: ProgramsComponent, path: ''},
  {component: ReportComponent, path: 'report'},
  {component: AdvancedComponent, path: 'advanced'}
 ])
export class AppComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  isAuthenticated(): boolean {
    return !!this.auth.getAdzerkAPIKey();
  }
}
