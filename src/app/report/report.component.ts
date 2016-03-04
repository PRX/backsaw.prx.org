import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {ReportDetailsComponent} from './report-details.component';
import {Episode} from '../services/program.service';
import {ReportService} from '../services/report.service';
import {
  AdzerkNativeAdAPIRequestProperties,
} from '../services/adzerk_native_ad_api_client';

@Component({
  directives: [ReportDetailsComponent, ROUTER_DIRECTIVES],
  providers: [ReportService],
  styleUrls: ['app/report/report.component.css'],
  templateUrl: 'app/report/report.component.html',
})
export class ReportComponent implements OnInit {
  episode: Episode;

  constructor(
    private routeParams: RouteParams,
    public report: ReportService
  ) {}

  ngOnInit(): void {
    if (this.routeParams.get('url')) {
      let url: string = decodeURIComponent(this.routeParams.get('url'));

      this.episode = new Episode(url);
      this.report.setEpisode(this.episode);

      if (this.routeParams.get('properties')) {
        let decodedProperties: string = decodeURIComponent(this.routeParams.get('properties'));
        let propertyOverrides: AdzerkNativeAdAPIRequestProperties = JSON.parse(decodedProperties);

        this.report.setProperties(propertyOverrides);
      }
    }
  }

  encodedPropertyOverrides(): string {
    if (this.report.propertyOverrides()) {
      return encodeURIComponent(JSON.stringify(this.report.propertyOverrides()));
    } else {
      return '';
    }
  }

  fetchResponses(times: number, event: KeyboardEvent): void {
    if (!event || event.code === 'Enter') {
      this.report.fetchResponses(times);
    }
  }

  clearFilter(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.report.clearFilter();
    }
  }
}
