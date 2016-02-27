import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'campaign-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="campaignResponse">{{ad.campaignId}}</span>
    <span *ngIf="campaignResponse">{{campaignResponse.Name}}</span>
  `
})
export class CampaignNameComponent implements OnInit {
  @Input() ad;

  campaignResponse: AdzerkManagementAPICampaignResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit() {
    if (this.ad && this.ad.campaignId) {
      this._adzerkService
        .getCampaign(this.ad.campaignId)
        .subscribe(res => {
          if (res.Id) {
            this.campaignResponse = res;
          }
        });
    }
  }
}
