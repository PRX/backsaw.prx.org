import {Component, Input, OnInit, ElementRef} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision,
} from '../../shared/services/adzerk_native_ad_api_client';
import {FlightedAd} from './slot-report-details.component';

@Component({
  selector: 'null-ad-report-details',
  styleUrls: ['app/report/components/null-ad-report-details.component.css'],
  templateUrl: 'app/report/components/null-ad-report-details.component.html',
})
export class NullAdReportDetailsComponent implements OnInit {
  @Input() flightedAd: FlightedAd;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;

  count: number = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  filteredAdzerkResponses: AdzerkNativeAdAPIResponse[] = [];

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.adzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.adzerkResponses = responses;
      });

    this.filteredAdzerkResponses$
      .subscribe((responses: AdzerkNativeAdAPIResponse[]) => {
        this.filteredAdzerkResponses = responses;

        this.calculateCount();
        this.toggleVisibility();
      });
  }

  private calculateCount() {
    this.count = 0;

    for (let response of this.filteredAdzerkResponses) {
      let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
      let decision: AdzerkNativeAdAPIResponseDecision = decisions[this.flightedAd.slotId];

      if (!decision) {
        this.count += 1;
      }
    }
  }

  private toggleVisibility() {
    if (this.count === 0) {
      this.el.nativeElement.style.display = 'none';
    } else {
      this.el.nativeElement.style.display = 'table-row';
    }
  }
}
