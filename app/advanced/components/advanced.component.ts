import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {PropertiesFormComponent} from './properties-form.component';
import {Episode} from '../../shared/services/feed_service';
import {DovetailService} from '../../shared/services/dovetail_service';
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
    private _routeParams: RouteParams,
    private _dovetailService: DovetailService
  ) {}

  ngOnInit(): void {
    if (this._routeParams.get('url')) {
      let url: string = decodeURIComponent(this._routeParams.get('url'));
      this.episode = new Episode(url);

      this._dovetailService
        .getAdzerkRequestBody(this.episode.url)
        .subscribe((request: AdzerkNativeAdAPIRequest) => {
          this.adzerkRequest = request;
          this._setupPropOverrides();
        });
    }
  }

  private _setupPropOverrides(): void {
    if (this._routeParams.get('properties')) {
      this.propOverrides = JSON.parse(decodeURIComponent(this._routeParams.get('properties')));
    } else {
      this.propOverrides = this.adzerkRequest.placements[0].properties;
    }

    for (let placement of this.adzerkRequest.placements) {
      placement.properties = this.propOverrides;
    }
  }
}
