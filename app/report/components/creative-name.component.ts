import {Component, OnInit, Input} from 'angular2/core';

import {Ad} from './ad-report-details.component';
import {AdzerkManagementAPIAdResponse,
  AdzerkManagementAPI,
} from '../../shared/services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
  selector: 'creative-name',
  template: `
    <span *ngIf="!adResponse">{{ad.creativeId}}</span>
    <span *ngIf="adResponse">{{adResponse.Creative.Title}}</span>
  `,
})
export class CreativeNameComponent implements OnInit {
  @Input() ad: Ad;

  adResponse: AdzerkManagementAPIAdResponse;

  constructor(
    private _adzerkService: AdzerkManagementAPI
  ) {}

  ngOnInit(): void {
    if (this.ad && this.ad.flightId && this.ad.adId) {
      this._adzerkService
        .getAd(this.ad.flightId, this.ad.adId)
        .subscribe((res: AdzerkManagementAPIAdResponse) => {
          if (res.Id) {
            this.adResponse = res;
          }
        });
    }
  }
}
