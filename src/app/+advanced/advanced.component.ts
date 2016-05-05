import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router';

import {PropertiesFormComponent} from './';
import {Episode} from '../+programs';
import {
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIRequestProperties,
  DovetailService
} from '../shared';

@Component({
  directives: [PropertiesFormComponent],
  providers: [DovetailService],
  styleUrls: ['./advanced.component.css'],
  templateUrl: './advanced.component.html'
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
