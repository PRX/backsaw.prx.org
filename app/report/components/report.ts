import {Component, OnInit, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {CampaignName} from './campaign-name'
import {FlightName} from './flight-name'
import {CreativeName} from './creative-name'

import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision} from '../../shared/services/adzerk_native_ad_api_client'

@Component({
  directives: [CampaignName, FlightName, CreativeName],
  providers: [DovetailService, AdzerkNativeAdAPI],
  templateUrl: 'app/report/components/report.html',
  styleUrls: ['app/report/components/report.css']
})
export class Report implements OnInit {
  constructor(
    private _routeParams: RouteParams,
    private _dovetailService: DovetailService,
    private _azerkService: AdzerkNativeAdAPI
  ) {}

  url: string;
  adzerkRequest: AdzerkNativeAdAPIRequest;
  adzerkResponse: AdzerkNativeAdAPIResponse;

  runner = { iterations: 100, completed: 0 };
  report = { placements: [] };

  ngOnInit() {
    this.url = decodeURIComponent(this._routeParams.get('url'));
    this._dovetailService
      .getAdzerkRequest(this.url)
      .subscribe(request => this.adzerkRequest = request);
  }

  placementAdIds(placementIndex): Array<string>  {
    return Object.keys(this.report.placements[placementIndex].ads);
  }

  onRun() {
    for (var j = 0; j < this.runner.iterations; j++) {
      this.runner.completed += 1;
      this._azerkService
        .request(this.adzerkRequest)
        .subscribe(response => {
          this.adzerkResponse = response

          let decisions: AdzerkNativeAdAPIResponseDecision[] = this.adzerkResponse.decisions;

          var i = 0;

          for (var key in decisions) {
            if (decisions.hasOwnProperty(key)) {

              if (!this.report.placements[i]) {
                this.report.placements[i] = {
                  name: key,
                  ads: {
                    null: {
                      adId: null,
                      creativeId: null,
                      flightId: null,
                      campaignId: null,
                      count: 0
                    }
                  }
                };
              }

              if (!decisions[key]) {
                this.report.placements[i]['ads']['null']['count'] += 1;
              } else {
                let decision: AdzerkNativeAdAPIResponseDecision = decisions[key];

                if (!this.report.placements[i]['ads'][decision.adId]) {
                  this.report.placements[i]['ads'][decision.adId] = {};
                  this.report.placements[i]['ads'][decision.adId]['adId'] = decision.adId;
                  this.report.placements[i]['ads'][decision.adId]['creativeId'] = decision.creativeId;
                  this.report.placements[i]['ads'][decision.adId]['flightId'] = decision.flightId;
                  this.report.placements[i]['ads'][decision.adId]['campaignId'] = decision.campaignId;
                  this.report.placements[i]['ads'][decision.adId]['count'] = 0;
                }

                this.report.placements[i]['ads'][decision.adId]['count'] += 1;
              }

              i += 1;
            }
          }
        });
    };
  }
}
