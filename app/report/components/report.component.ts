import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {ReportDetailsComponent} from './report-details.component'
import {Episode} from '../../shared/services/feed_service';
import {ReportService2} from '../../shared/services/report.service'

// This is to satisfy deps in the report service. Can they be injected there?
import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequestProperties} from '../../shared/services/adzerk_native_ad_api_client'

@Component({
  directives: [ReportDetailsComponent],
  providers: [ReportService2, DovetailService, AdzerkNativeAdAPI],
  templateUrl: 'app/report/components/report.component.html',
  styleUrls: ['app/report/components/report.component.css']
})
export class ReportComponent implements OnInit {
  episode: Episode;
  propertyOverrides: AdzerkNativeAdAPIRequestProperties;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    public report: ReportService2
  ) {}

  ngOnInit() {
    if (this._routeParams.get('url')) {
      let url = decodeURIComponent(this._routeParams.get('url'));
      this.episode = new Episode(url);

      if (this._routeParams.get('properties')) {
        let props = decodeURI(this._routeParams.get('properties'));
        this.propertyOverrides = props;
      }

      this.report.setEpisode(this.episode);
      this.report.setProperties(this.propertyOverrides);
    }
  }

  onRunReport() {
    this.report.fetchResponses(10);
  }

  onEdit() {
    // this._router.navigate(['Advanced', {
    //   properties: this._routeParams.get('properties'),
    //   url: this._routeParams.get('url')
    // }]);
  }
}
