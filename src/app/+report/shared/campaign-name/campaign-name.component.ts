import {Component, OnInit, Input} from '@angular/core';

import {FlightedAd} from '../';
import {
  AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPIService
} from '../../../shared';

@Component({
  providers: [AdzerkManagementAPIService],
  selector: 'campaign-name',
  styleUrls: ['app/report/campaign-name.component.css'],
  template: `
    <span *ngIf="!campaignResponse">{{flightedAd.campaignId}}</span>
    <span *ngIf="campaignResponse">{{campaignResponse.Name}}</span>
  `
})
export class CampaignNameComponent implements OnInit {
  @Input() flightedAd: FlightedAd;

  campaignResponse: AdzerkManagementAPICampaignResponse;

  constructor(
    private adzerk: AdzerkManagementAPIService
  ) {}

  ngOnInit(): void {
    if (this.flightedAd && this.flightedAd.campaignId) {
      this.adzerk
        .getCampaign(this.flightedAd.campaignId)
        .subscribe((res: AdzerkManagementAPICampaignResponse) => {
          if (res.Id) {
            this.campaignResponse = res;
            this.flightedAd.advertiserId = res.AdvertiserId;
          }
        });
    }
  }
}
