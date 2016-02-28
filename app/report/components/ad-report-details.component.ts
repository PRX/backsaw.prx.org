import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {CampaignNameComponent} from './campaign-name.component';
import {FlightNameComponent} from './flight-name.component';
import {CreativeNameComponent} from './creative-name.component';
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse,
} from '../../shared/services/adzerk_native_ad_api_client';
import {ReportService} from '../../shared/services/report.service';

export class Ad {
  constructor(
    public campaignId: number,
    public flightId: number,
    public creativeId: number,
    public adId: number
  ) {}
}

@Component({
  directives: [CampaignNameComponent, FlightNameComponent, CreativeNameComponent],
  selector: 'ad-report-details',
  styleUrls: ['app/report/components/ad-report-details.component.css'],
  templateUrl: 'app/report/components/ad-report-details.component.html',
})
export class AdReportDetailsComponent implements OnInit {
  @Input() slotId: number;
  @Input() adId: number;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  count: number = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  ad: Ad;

  constructor(
    private reportService: ReportService
  ) {}

  isInFilter(): boolean {
    return (this.filter
      && this.filter[this.slotId]
      && this.filter[this.slotId].adId
      && this.filter[this.slotId].adId === this.adId);
  }

  toggleAdFilter(): void {
    if (this.isInFilter()) {
      this.reportService.removeFilter(this.slotId, 'adId', this.adId);
    } else {
      this.reportService.addFilter(this.slotId, 'adId', this.adId);
    }
  }

  setCampaignFilter(add: boolean): void {
    if (add) {
      this.reportService.addFilter(this.slotId, 'campaignId', this.ad.campaignId);
    } else {
      this.reportService.removeFilter(this.slotId, 'campaignId', this.ad.campaignId);
    }
  }

  ngOnInit(): void {
    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.adzerkResponses = responses;
        this.count = 0;

        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision: AdzerkNativeAdAPIResponseDecision = decisions[this.slotId];

          if (decision
            && decision.adId === this.adId
            && this.reportService.doesResponseSatisfyFilter(response)) {
            this.count += 1;

            if (!this.ad) {
              this.ad = new Ad(
                decision.campaignId,
                decision.flightId,
                decision.creativeId,
                decision.adId
              );
            }
          }
        }
      });
  }
}
