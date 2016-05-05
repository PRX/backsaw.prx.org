import {Component, OnInit, Input} from '@angular/core';

import {FlightedAd} from './slot-report-details.component';
import {
  AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPI
} from '../services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
  selector: 'flight-name',
  template: `
    <span *ngIf="!flightResponse">{{flightedAd.flightId}}</span>
    <span *ngIf="flightResponse">{{flightResponse.Name}}</span>
  `
})
export class FlightNameComponent implements OnInit {
  @Input() flightedAd: FlightedAd;

  flightResponse: AdzerkManagementAPIFlightResponse;

  constructor(private adzerk: AdzerkManagementAPI) {}

  ngOnInit(): void {
    if (this.flightedAd && this.flightedAd.flightId) {
      this.adzerk
        .getFlight(this.flightedAd.flightId)
        .subscribe((res: AdzerkManagementAPIFlightResponse) => {
          if (res.Id) {
            this.flightResponse = res;
          }
        });
    }
  }
}
