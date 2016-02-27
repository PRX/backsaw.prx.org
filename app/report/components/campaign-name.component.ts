import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';

import {AdzerkManagementAPICampaignResponse,
  AdzerkManagementAPI} from '../../shared/services/adzerk_management_api_client'

@Component({
  selector: 'campaign-name',
  providers: [AdzerkManagementAPI],
  styleUrls: ['app/report/components/campaign-name.component.css'],
  template: `
    <span (click)="toggleFilter()" [ngClass]="{'is-filter': isInFilter()}">
      <span *ngIf="!campaignResponse">{{ad.campaignId}}</span>
      <span *ngIf="campaignResponse">{{campaignResponse.Name}}</span>
    </span>
  `
})
export class CampaignNameComponent implements OnInit {
  @Input() slotId: number;
  @Input() ad;
  @Input() filter;
  @Output() filterOnCampaign = new EventEmitter();

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

  isInFilter() {
    return (this.filter
      && this.filter[this.slotId]
      && this.filter[this.slotId]['campaignId']
      && this.filter[this.slotId]['campaignId'] == this.ad.campaignId)
  }

  toggleFilter() {
    this.filterOnCampaign.emit(!this.isInFilter());
  }
}
