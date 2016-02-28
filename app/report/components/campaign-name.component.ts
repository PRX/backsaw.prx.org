import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';

import {Ad} from './ad-report-details.component';
import {
  AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPI,
} from '../../shared/services/adzerk_management_api_client';

@Component({
  providers: [AdzerkManagementAPI],
  selector: 'campaign-name',
  styleUrls: ['app/report/components/campaign-name.component.css'],
  template: `
    <span (click)="toggleFilter()" [ngClass]="{'is-filter': isInFilter()}">
      <span *ngIf="!campaignResponse">{{ad.campaignId}}</span>
      <span *ngIf="campaignResponse">{{campaignResponse.Name}}</span>
    </span>
  `,
})
export class CampaignNameComponent implements OnInit {
  @Input() slotId: number;
  @Input() ad: Ad;
  @Input() filter: {};
  @Output() filterOnCampaign: EventEmitter<boolean> = new EventEmitter();

  campaignResponse: AdzerkManagementAPICampaignResponse;

  constructor(private adzerk: AdzerkManagementAPI) {}

  ngOnInit(): void {
    if (this.ad && this.ad.campaignId) {
      this.adzerk
        .getCampaign(this.ad.campaignId)
        .subscribe((res: AdzerkManagementAPICampaignResponse) => {
          if (res.Id) {
            this.campaignResponse = res;
          }
        });
    }
  }

  isInFilter(): boolean {
    return (this.filter
      && this.filter[this.slotId]
      && this.filter[this.slotId].campaignId
      && this.filter[this.slotId].campaignId === this.ad.campaignId);
  }

  toggleFilter(): void {
    this.filterOnCampaign.emit(!this.isInFilter());
  }
}
