import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';
import {SearchFormComponent} from '../search/search-form.component';

@Component({
  directives: [ROUTER_DIRECTIVES, SearchFormComponent],
  providers: [AuthenticationService],
  selector: 'toolbar',
  styleUrls: ['app/backsaw/toolbar.component.css'],
  template: `
    <search-form></search-form>
    <button (click)="onLogout()">Logout</button>
  `
})
export class ToolbarComponent {
  constructor(
    private auth: AuthenticationService
  ) {}

  onLogout(): void {
    this.auth.unsetAdzerkAPIKey();
  }
}
