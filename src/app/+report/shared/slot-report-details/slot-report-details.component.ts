import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {
  AdReportDetailsComponent,
  FlightedAd,
  NullAdReportDetailsComponent
} from '../../';
import {AdzerkNativeAdAPIResponse} from '../../../shared';

@Component({
  directives: [AdReportDetailsComponent, NullAdReportDetailsComponent],
  selector: 'slot-report-details',
  styleUrls: ['app/report/slot-report-details.component.css'],
  templateUrl: 'app/report/slot-report-details.component.html'
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
          let decisions = response.decisions;
          let decision = decisions[this.slotId];

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
