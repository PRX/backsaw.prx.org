import {Component, OnInit, Input} from 'angular2/core';

import {Ad} from './ad-report-details.component';
import {
  AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPI,
} from '../../shared/services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
  selector: 'flight-name',
  template: `
    <span *ngIf="!flightResponse">{{ad.flightId}}</span>
    <span *ngIf="flightResponse">{{flightResponse.Name}}</span>
  `,
})
export class FlightNameComponent implements OnInit {
  @Input() ad: Ad;

  flightResponse: AdzerkManagementAPIFlightResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit(): void {
    if (this.ad && this.ad.flightId) {
      this._adzerkService
        .getFlight(this.ad.flightId)
        .subscribe((res: AdzerkManagementAPIFlightResponse) => {
          if (res.Id) {
            this.flightResponse = res;
          }
        });
    }
  }
}
