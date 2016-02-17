import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Search} from '../../search/components/search';
import {Report} from '../../report/components/report';
import {AuthenticationService} from '../../shared/services/authentication_service';

@Component({
  selector: 'backsaw-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthenticationService],
  template: `
    <div [ngSwitch]="isAuthenticated()">
      <div *ngSwitchWhen="true">
        <button (click)="onLogout()">Logout</button>
        <router-outlet></router-outlet>
      </div>
      <form *ngSwitchDefault (ngSubmit)="onSubmit()" #authForm="ngForm">
        <p>Adzerk API Key</p>
        <input required [(ngModel)]="authData.adzkerkAPIKey">
        <button type="submit" [disabled]="!authForm.form.valid">Submit</button>
      </form>
    </div>

  `
})
@RouteConfig([
  { path: '/', name: 'Search', component: Search },
  { path: '/:url', name: 'Report', component: Report }
])
export class BacksawApp {
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
