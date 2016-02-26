import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_BINDINGS} from 'angular2/http';

import 'rxjs/Rx';

import {BacksawAppComponent} from './backsaw/components/backsaw-app.component';

import {LOCAL_STORAGE_PROVIDERS} from './shared/services/local_storage';

bootstrap(BacksawAppComponent, [ROUTER_PROVIDERS, HTTP_BINDINGS, LOCAL_STORAGE_PROVIDERS]);
