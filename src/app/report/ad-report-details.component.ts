import {Component, Input, OnInit, ElementRef} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {FlightedAd} from './slot-report-details.component';
import {CampaignNameComponent} from './campaign-name.component';
import {FlightNameComponent} from './flight-name.component';
import {CreativeNameComponent} from './creative-name.component';
import {AdNameComponent} from './ad-name.component';
import {AdzerkNativeAdAPIResponse} from '../services/adzerk_native_ad_api_client';
import {ReportService} from '../services/report.service';

@Component({
  directives: [CampaignNameComponent, FlightNameComponent, CreativeNameComponent, AdNameComponent],
  selector: 'ad-report-details',
  styleUrls: ['app/report/ad-report-details.component.css'],
  templateUrl: 'app/report/ad-report-details.component.html'
})
export class AdReportDetailsComponent implements OnInit {
  @Input() flightedAd: FlightedAd;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filteredAdzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  @Input() filter: {};

  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  filteredAdzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  count: number = 0;

  constructor(
    private reportService: ReportService,
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
        this.setHighlight();
        this.setVisibility();
      });
  }

  setFilter(type: string, add: boolean): void {
    if (this.count === 0) {
        if (this.filter[this.flightedAd.slotId]
          && this.filter[this.flightedAd.slotId][type]) {
          // Continue
        } else {
          return;
        }
    }

    if (add) {
      this.reportService.addFilter(this.flightedAd.slotId, type, this.flightedAd[type]);
    } else {
      this.reportService.removeFilter(this.flightedAd.slotId, type, this.flightedAd[type]);
    }
  }

  isFilter(type: string): boolean {
    return (this.filter
      && this.filter[this.flightedAd.slotId]
      && this.filter[this.flightedAd.slotId][type]
      && this.filter[this.flightedAd.slotId][type] === this.flightedAd[type]
    );
  }

  private isRelatedToFilter(): boolean {
    let isRelated = false;

    for (let slotId in this.filter) {
      if (this.filter.hasOwnProperty(slotId)) {
        if (this.filter[slotId].campaignId
          && this.flightedAd.slotId !== slotId
          && this.flightedAd
          && this.filter[slotId].campaignId === this.flightedAd.campaignId) {
          isRelated = true;
        }
      }
    }

    return isRelated;
  }

  private setHighlight(): void {
    if (this.isFilter('campaignId') || this.isFilter('adId')) {
      this.el.nativeElement.style.backgroundColor = 'rgb(197, 232, 174)';
    } else if (this.isRelatedToFilter()) {
      this.el.nativeElement.style.backgroundColor = 'rgb(150, 231, 231)';
    } else {
      this.el.nativeElement.style.backgroundColor = '#fff';
    }
  }

  private setVisibility(): void {
    if (this.count === 0) {
        this.el.nativeElement.style.opacity = '0.3';
    } else {
      this.el.nativeElement.style.opacity = '1.0';
    }
  }

  private calculateCount(): void {
    this.count = 0;

    for (let response of this.filteredAdzerkResponses) {
      let decisions = response.decisions;
      let decision = decisions[this.flightedAd.slotId];

      if (decision
        && decision.adId === this.flightedAd.adId
        && this.reportService.doesResponseSatisfyFilter(response)) {
        this.count += 1;
      }
    }
  }
}
