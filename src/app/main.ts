import 'zone.js';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_BINDINGS} from '@angular/http';
import 'rxjs/Rx';

import {
  AdzerkNativeAdAPIService,
  DovetailService,
  FeedParserService,
  LOCAL_STORAGE_PROVIDERS
} from './shared';
import {AppComponent} from './app.component';

if (window.location.host !== 'localhost') {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    LOCAL_STORAGE_PROVIDERS,
    DovetailService,
    AdzerkNativeAdAPIService,
    FeedParserService
  ]);
