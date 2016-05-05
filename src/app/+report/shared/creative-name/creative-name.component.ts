import {Component, OnInit, Input} from '@angular/core';

import {FlightedAd} from '../../';
import {
  AdzerkManagementAPIAdResponse,
  AdzerkManagementAPIService
} from '../../../shared';

@Component({
  providers: [AdzerkManagementAPIService],
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
    private adzerk: AdzerkManagementAPIService
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
