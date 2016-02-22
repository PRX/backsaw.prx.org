import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPIAdResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'creative-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="!adResponse">{{adData.creativeId}}</span>
    <span *ngIf="adResponse">{{adResponse.Creative.Title}}</span>
  `
})
export class CreativeName implements OnInit {
  @Input() adData;

  adResponse: AdzerkManagementAPIAdResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit() {
    if (this.adData && this.adData.flightId && this.adData.adId) {
      this._adzerkService
        .getAd(this.adData.flightId, this.adData.adId)
        .subscribe(res => {
          if (res.Id) {
            this.adResponse = res;
          }
        });
    }
  }
}
