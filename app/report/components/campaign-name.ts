import {Component, OnInit, Input} from 'angular2/core';

import {AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'campaign-name',
  providers: [AdzerkManagementAPI],
  template: `
    <span *ngIf="!campaignResponse">{{adData.campaignId}}</span>
    <span *ngIf="campaignResponse">{{campaignResponse.Name}}</span>
  `
})
export class CampaignName implements OnInit {
  @Input() adData;

  campaignResponse: AdzerkManagementAPICampaignResponse;

  constructor(private _adzerkService: AdzerkManagementAPI) {}

  ngOnInit() {
    if (this.adData && this.adData.campaignId) {
      this._adzerkService
        .getCampaign(this.adData.campaignId)
        .subscribe(res => {
          if (res.Id) {
            this.campaignResponse = res;
          }
        });
    }
  }
}
