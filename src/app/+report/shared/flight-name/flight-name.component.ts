import {Component, OnInit, Input} from '@angular/core';

import {FlightedAd} from '../../';
import {
  AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPIService
} from '../../../shared';

@Component({
  providers: [AdzerkManagementAPIService],
  selector: 'flight-name',
  template: `
    <span *ngIf="!flightResponse">{{flightedAd.flightId}}</span>
    <span *ngIf="flightResponse">{{flightResponse.Name}}</span>
  `
})
export class FlightNameComponent implements OnInit {
  @Input() flightedAd: FlightedAd;

  flightResponse: AdzerkManagementAPIFlightResponse;

  constructor(private adzerk: AdzerkManagementAPIService) {}

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
