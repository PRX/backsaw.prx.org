import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import 'rxjs/Rx';

import {DovetailService} from './shared/services/dovetail-api.service';
import {RssFeedService} from './shared/services/rss-feed.service';
import {AdzerkNativeAdAPI} from './shared/services/adzerk_native_ad_api_client';
import {BacksawAppComponent} from './backsaw/components/backsaw-app.component';

import {LOCAL_STORAGE_PROVIDERS} from './shared/services/local-storage.service';

bootstrap(
  BacksawAppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    LOCAL_STORAGE_PROVIDERS,
    DovetailService,
    AdzerkNativeAdAPI,
    RssFeedService,
  ]);
