import {Component, Input, OnInit} from 'angular2/core';

import {AdReportDetailsComponent} from './ad-report-details.component';
import {NullAdReportDetailsComponent} from './null-ad-report-details.component';
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
// import {SlotReport} from '../../shared/services/report.service';

@Component({
  selector: 'slot-report-details',
  directives: [AdReportDetailsComponent, NullAdReportDetailsComponent],
  templateUrl: 'app/report/components/slot-report-details.component.html',
  styleUrls: ['app/report/components/slot-report-details.component.css']
})
export class SlotReportDetailsComponent implements OnInit {
  @Input() slotId: string;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter;

  adIds: string[] = [];

  ngOnInit() {
    this.adzerkResponses$
      .subscribe(responses => {
        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision = decisions[this.slotId];

          if (decision) {
            if (this.adIds.indexOf(decision.adId) == -1) {
              this.adIds.push(decision.adId);
            }
          }
        }
      });
  }
}
