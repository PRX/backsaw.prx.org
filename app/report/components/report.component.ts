import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {ReportDetailsComponent} from './report-details.component'
import {Episode} from '../../shared/services/feed_service';
import {ReportService} from '../../shared/services/report.service'

// This is to satisfy deps in the report service. Can they be injected there?
import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequestProperties} from '../../shared/services/adzerk_native_ad_api_client'

@Component({
  directives: [ReportDetailsComponent],
  providers: [ReportService, DovetailService, AdzerkNativeAdAPI],
  templateUrl: 'app/report/components/report.component.html',
  styleUrls: ['app/report/components/report.component.css']
})
export class ReportComponent implements OnInit {
  episode: Episode;
  propertyOverrides: AdzerkNativeAdAPIRequestProperties;

  constructor(
    private _routeParams: RouteParams,
    private _reportService: ReportService
  ) {}

  ngOnInit() {
    if (this._routeParams.get('url')) {
      let url = decodeURIComponent(this._routeParams.get('url'));
      this.episode = new Episode(url);

      if (this._routeParams.get('properties')) {
        let props = decodeURI(this._routeParams.get('properties'));
        this.propertyOverrides = props;
      }

      this._setupReportService();
    }
  }

  getAdzerkRequest() {
    return this._reportService.getAdzerkRequest();
  }

  getAdzerkResponses() {
    return this._reportService.getAdzerkResponses();
  }

  onRun() {
    if (this.getAdzerkRequest()) {
      this._reportService.run(10);
    }
  }

  private _setupReportService() {
    this._reportService.setEpisode(this.episode);
    this._reportService.setProperties(this.propertyOverrides);
    this._reportService.prime();
  }
}
