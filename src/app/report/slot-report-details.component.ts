import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {AdReportDetailsComponent} from './ad-report-details.component';
import {NullAdReportDetailsComponent} from './null-ad-report-details.component';
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse,
} from '../services/adzerk_native_ad_api_client';

// TODO This isn't a great name because it's also used to represent a no-ad
///decision, when only a `slotId` is provided
export class FlightedAd {
  constructor(
    public slotId: string,
    public campaignId?: number,
    public flightId?: number,
    public creativeId?: number,
    public adId?: number,
    public advertiserId?: number
  ) {}
}

@Component({
  directives: [AdReportDetailsComponent, NullAdReportDetailsComponent],
  selector: 'slot-report-details',
  styleUrls: ['app/report/slot-report-details.component.css'],
  templateUrl: 'app/report/slot-report-details.component.html',
})
export class SlotReportDetailsComponent implements OnInit {
  @Input() slotId: string;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  flightedAds: FlightedAd[] = [];
  nullAd: FlightedAd;

  ngOnInit(): void {
    this.nullAd = new FlightedAd(this.slotId);

    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision: AdzerkNativeAdAPIResponseDecision = decisions[this.slotId];

          if (decision
            && !this.flightedAds.find((ad: FlightedAd) => ad.adId === decision.adId)) {
              this.flightedAds.push(new FlightedAd(
                this.slotId,
                decision.campaignId,
                decision.flightId,
                decision.creativeId,
                decision.adId
              ));
            }
        }
      });
  }
}
