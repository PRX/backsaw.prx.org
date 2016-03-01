import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {AdReportDetailsComponent} from './ad-report-details.component';
import {NullAdReportDetailsComponent} from './null-ad-report-details.component';
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse,
} from '../../shared/services/adzerk_native_ad_api_client';

@Component({
  directives: [AdReportDetailsComponent, NullAdReportDetailsComponent],
  selector: 'slot-report-details',
  styleUrls: ['app/report/components/slot-report-details.component.css'],
  templateUrl: 'app/report/components/slot-report-details.component.html',
})
export class SlotReportDetailsComponent implements OnInit {
  @Input() slotId: string;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  adIds: number[] = [];

  ngOnInit(): void {
    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision: AdzerkNativeAdAPIResponseDecision = decisions[this.slotId];

          if (decision) {
            if (this.adIds.indexOf(decision.adId) === -1) {
              this.adIds.push(decision.adId);
            }
          }
        }
      });
  }
}
