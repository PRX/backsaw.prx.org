import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPIAdResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client';

@Component({
  selector: 'creative-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="!adResponse">{{ad.creativeId}}</span>
    <span *ngIf="adResponse">{{adResponse.Creative.Title}}</span>
  `
})
export class CreativeNameComponent implements OnInit {
  @Input() ad;

  adResponse: AdzerkManagementAPIAdResponse;

  constructor(
    private _adzerkService: AdzerkManagementAPI
  ) {}

  ngOnInit() {
    if (this.ad && this.ad.flightId && this.ad.adId) {
      this._adzerkService
        .getAd(this.ad.flightId, this.ad.adId)
        .subscribe(res => {
          if (res.Id) {
            this.adResponse = res;
          }
        });
    }
  }
}
