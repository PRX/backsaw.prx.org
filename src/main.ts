import 'zone.js';
import 'reflect-metadata';


import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_BINDINGS} from '@angular/http';
import 'rxjs/Rx';

import {DovetailService} from './app/services/dovetail-api.service';
import {RssFeedService} from './app/services/rss-feed.service';
import {AdzerkNativeAdAPI} from './app/services/adzerk_native_ad_api_client';
import {BacksawAppComponent} from './app/backsaw/backsaw-app.component';

import {LOCAL_STORAGE_PROVIDERS} from './app/services/local-storage.service';

if (window.location.host !== 'localhost') {
  enableProdMode();
}

console.log('Bootstrapping...');
bootstrap(
  BacksawAppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    LOCAL_STORAGE_PROVIDERS,
    DovetailService,
    AdzerkNativeAdAPI,
    RssFeedService
  ]);
