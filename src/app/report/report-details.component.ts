import {Component, Input, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {AdzerkNativeAdAPIResponse} from '../services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';
import {ReportService} from '../services/report.service';

@Component({
  directives: [SlotReportDetailsComponent],
  selector: 'report-details',
  styleUrls: ['app/report/report-details.component.css'],
  templateUrl: 'app/report/report-details.component.html'
})
export class ReportDetailsComponent implements OnInit {
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  filteredAdzerkResponses: AdzerkNativeAdAPIResponse[] = [];

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
      });
  }

  get slotIds(): string[] {
    return this.reportService.slotOrder;
  }
}
