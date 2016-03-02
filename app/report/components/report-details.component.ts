import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse,
} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';
import {ReportService} from '../../shared/services/report.service';

@Component({
  directives: [SlotReportDetailsComponent],
  selector: 'report-details',
  styleUrls: ['app/report/components/report-details.component.css'],
  templateUrl: 'app/report/components/report-details.component.html',
})
export class ReportDetailsComponent implements OnInit {
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  filteredAdzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  slotIds: string[] = [];

  constructor(
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.filteredAdzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.filteredAdzerkResponses = responses;
      });

    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.adzerkResponses = responses;

        let decisions: AdzerkNativeAdAPIResponseDecision[] = responses[0].decisions;
        this.slotIds = Object.keys(decisions);
      });
  }
}
