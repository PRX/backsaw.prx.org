import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PropertiesFormComponent} from './properties-form.component';
import {Episode} from '../../shared/services/program.service';
import {DovetailService} from '../../shared/services/dovetail-api.service';
import {
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIRequestProperties,
} from '../../shared/services/adzerk_native_ad_api_client';

@Component({
  directives: [PropertiesFormComponent],
  providers: [DovetailService],
  styleUrls: ['app/advanced/components/advanced.component.css'],
  templateUrl: 'app/advanced/components/advanced.component.html',
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
      let url: string = decodeURIComponent(this.routeParams.get('url'));
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
