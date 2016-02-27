import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'flight-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="!flightResponse">{{ad.flightId}}</span>
    <span *ngIf="flightResponse">{{flightResponse.Name}}</span>
  `
})
export class FlightNameComponent implements OnInit {
  @Input() ad;

  flightResponse: AdzerkManagementAPIFlightResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit() {
    if (this.ad && this.ad.flightId) {
      this._adzerkService
        .getFlight(this.ad.flightId)
        .subscribe(res => {
          if (res.Id) {
            this.flightResponse = res;
          }
        });
    }
  }
}
