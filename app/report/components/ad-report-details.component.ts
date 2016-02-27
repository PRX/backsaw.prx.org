import {Component, Input, OnInit} from 'angular2/core';

import {CampaignNameComponent} from './campaign-name.component'
import {FlightNameComponent} from './flight-name.component'
import {CreativeNameComponent} from './creative-name.component'
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
import {ReportService} from '../../shared/services/report.service'

export class Ad {
  constructor(
    public campaignId: number,
    public flightId: number,
    public creativeId: number,
    public adId: number
  ) {}
}

@Component({
  selector: 'ad-report-details',
  directives: [CampaignNameComponent, FlightNameComponent, CreativeNameComponent],
  templateUrl: 'app/report/components/ad-report-details.component.html',
  styleUrls: ['app/report/components/ad-report-details.component.css']
})
export class AdReportDetailsComponent implements OnInit {
  @Input() slotId: number;
  @Input() adId: number;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter;

  count = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  ad: Ad;

  constructor(
    private _reportService: ReportService
  ) {}

  isInFilter() {
    return (this.filter
      && this.filter[this.slotId]
      && this.filter[this.slotId]['adId']
      && this.filter[this.slotId]['adId'] == this.adId)
  }

  toggleAdFilter() {
    if (this.isInFilter()) {
      this._reportService.removeFilter(this.slotId, 'adId', this.adId);
    } else {
      this._reportService.addFilter(this.slotId, 'adId', this.adId);
    }
  }

  setCampaignFilter(add) {
    if (add) {
      this._reportService.addFilter(this.slotId, 'campaignId', this.ad.campaignId);
    } else {
      this._reportService.removeFilter(this.slotId, 'campaignId', this.ad.campaignId);
    }
  }

  ngOnInit() {
    this.adzerkResponses$
      .subscribe(responses => {
        this.adzerkResponses = responses;
        this.count = 0;

        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision = decisions[this.slotId];

          if (decision && decision.adId == this.adId && this._reportService.doesResponseSatisfyFilter(response)) {
            this.count += 1;

            if (!this.ad) {
              this.ad = new Ad(
                decision.campaignId,
                decision.flightId,
                decision.creativeId,
                decision.adId
              )
            }
          }
        }
      });
  }
}
