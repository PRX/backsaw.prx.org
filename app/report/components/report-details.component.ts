import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse,
} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';

@Component({
  directives: [SlotReportDetailsComponent],
  selector: 'report-details',
  styleUrls: ['app/report/components/report-details.component.css'],
  templateUrl: 'app/report/components/report-details.component.html',
})
export class ReportDetailsComponent implements OnInit {
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  slotIds: string[] = [];

  ngOnInit(): void {
    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.adzerkResponses = responses;

        let decisions: AdzerkNativeAdAPIResponseDecision[] = responses[0].decisions;
        this.slotIds = Object.keys(decisions);
      });
  }
}
