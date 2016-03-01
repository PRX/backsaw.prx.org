import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision,
} from '../../shared/services/adzerk_native_ad_api_client';

@Component({
  selector: 'null-ad-report-details',
  styleUrls: ['app/report/components/null-ad-report-details.component.css'],
  templateUrl: 'app/report/components/null-ad-report-details.component.html',
})
export class NullAdReportDetailsComponent implements OnInit {
  @Input() slotId: number;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;

  count: number = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  filteredAdzerkResponses: AdzerkNativeAdAPIResponse[] = [];

  ngOnInit(): void {
    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.adzerkResponses = responses;
      });

    this.filteredAdzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.filteredAdzerkResponses = responses;
        this.count = 0;

        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision: AdzerkNativeAdAPIResponseDecision = decisions[this.slotId];

          if (!decision) {
            this.count += 1;
          }
        }
      });
  }
}
