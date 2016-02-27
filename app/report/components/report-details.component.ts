import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';

@Component({
  selector: 'report-details',
  directives: [SlotReportDetailsComponent],
  templateUrl: 'app/report/components/report-details.component.html',
  styleUrls: ['app/report/components/report-details.component.css']
})
export class ReportDetailsComponent {
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter;

  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  slotIds: string[] = [];

  ngOnInit() {
    this.adzerkResponses$
      .subscribe(responses => {
        this.adzerkResponses = responses;

        let decisions: AdzerkNativeAdAPIResponseDecision[] = responses[0].decisions;
        this.slotIds = Object.keys(decisions);
      });
  }
}
