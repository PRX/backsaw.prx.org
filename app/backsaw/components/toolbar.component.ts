import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthenticationService} from '../../shared/services/authentication.service';
import {SearchFormComponent} from '../../search/components/search-form.component';

@Component({
  directives: [ROUTER_DIRECTIVES, SearchFormComponent],
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
