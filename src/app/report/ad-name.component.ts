import {Component, Input} from 'angular2/core';

import {FlightedAd} from './slot-report-details.component';

@Component({
  selector: 'ad-name',
  styleUrls: ['app/report/campaign-name.component.css'],
  template: `
    <span *ngIf="!campaignResponse">{{flightedAd.adId}}</span>
  `
})
export class AdNameComponent {
  @Input() flightedAd: FlightedAd;
}
