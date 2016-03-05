import {Component, OnInit, Input} from 'angular2/core';

import {FlightedAd} from './slot-report-details.component';
import {
  AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPI
} from '../services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
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
    private adzerk: AdzerkManagementAPI
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
