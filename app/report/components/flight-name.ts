import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPIFlightResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'flight-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="!flightResponse">{{adData.flightId}}</span>
    <span *ngIf="flightResponse">{{flightResponse.Name}}</span>
  `
})
export class FlightName {
  @Input() adData;

  flightResponse: AdzerkManagementAPIFlightResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit() {
    if (this.adData && this.adData.flightId) {
      this._adzerkService
        .getFlight(this.adData.flightId)
        .subscribe(res => this.flightResponse = res);
    }
  }
}
