import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {ReportDetailsComponent} from './report-details.component'
import {Episode} from '../../shared/services/feed_service';
import {ReportService} from '../../shared/services/report.service'

// This is to satisfy deps in the report service. Can they be injected there?
import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI} from '../../shared/services/adzerk_native_ad_api_client'

@Component({
  directives: [ReportDetailsComponent, ROUTER_DIRECTIVES],
  providers: [ReportService, DovetailService, AdzerkNativeAdAPI],
  templateUrl: 'app/report/components/report.component.html',
  styleUrls: ['app/report/components/report.component.css']
})
export class ReportComponent implements OnInit {
  episode: Episode;

  constructor(
    private _routeParams: RouteParams,
    public report: ReportService
  ) {}

  ngOnInit() {
    if (this._routeParams.get('url')) {
      let url = decodeURIComponent(this._routeParams.get('url'));

      this.episode = new Episode(url);
      this.report.setEpisode(this.episode);

      if (this._routeParams.get('properties')) {
        let decodedProperties = decodeURIComponent(this._routeParams.get('properties'));
        let propertyOverrides = JSON.parse(decodedProperties);

        this.report.setProperties(propertyOverrides);
      }
    }
  }

  encodedPropertyOverrides() {
    return encodeURIComponent(JSON.stringify(this.report.propertyOverrides()));
  }

  fetchResponses(times: number) {
    this.report.fetchResponses(times);
  }
}
