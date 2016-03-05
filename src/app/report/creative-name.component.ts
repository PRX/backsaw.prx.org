import {Component, OnInit, Input} from 'angular2/core';

import {FlightedAd} from './slot-report-details.component';
import {AdzerkManagementAPIAdResponse,
  AdzerkManagementAPI
} from '../services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
  selector: 'creative-name',
  template: `
    <span *ngIf="!adResponse">{{flightedAd.creativeId}}</span>
    <span *ngIf="adResponse">{{adResponse.Creative.Title}}</span>
  `
})
export class CreativeNameComponent implements OnInit {
  @Input() flightedAd: FlightedAd;

  adResponse: AdzerkManagementAPIAdResponse;

  constructor(
    private adzerk: AdzerkManagementAPI
  ) {}

  ngOnInit(): void {
    if (this.flightedAd && this.flightedAd.flightId && this.flightedAd.adId) {
      this.adzerk
        .getAd(this.flightedAd.flightId, this.flightedAd.adId)
        .subscribe((res: AdzerkManagementAPIAdResponse) => {
          if (res.Id) {
            this.adResponse = res;
          }
        });
    }
  }
}
