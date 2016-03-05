import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PropertiesFormComponent} from './properties-form.component';
import {Episode} from '../services/program.service';
import {DovetailService} from '../services/dovetail-api.service';
import {
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIRequestProperties
} from '../services/adzerk_native_ad_api_client';

@Component({
  directives: [PropertiesFormComponent],
  providers: [DovetailService],
  styleUrls: ['app/advanced/advanced.component.css'],
  templateUrl: 'app/advanced/advanced.component.html'
})
export class AdvancedComponent implements OnInit {
  episode: Episode;
  adzerkRequest: AdzerkNativeAdAPIRequest;
  propOverrides: AdzerkNativeAdAPIRequestProperties;

  constructor(
    private routeParams: RouteParams,
    private dovetailService: DovetailService
  ) {}

  ngOnInit(): void {
    if (this.routeParams.get('url')) {
      let url = decodeURIComponent(this.routeParams.get('url'));
      this.episode = new Episode(url);

      this.dovetailService
        .getAdzerkRequestBody(this.episode.url)
        .subscribe((request: AdzerkNativeAdAPIRequest) => {
          this.adzerkRequest = request;
          this.setupPropOverrides();
        });
    }
  }

  private setupPropOverrides(): void {
    if (this.routeParams.get('properties')) {
      this.propOverrides = JSON.parse(decodeURIComponent(this.routeParams.get('properties')));
    } else {
      this.propOverrides = this.adzerkRequest.placements[0].properties;
    }

    for (let placement of this.adzerkRequest.placements) {
      placement.properties = this.propOverrides;
    }
  }
}
