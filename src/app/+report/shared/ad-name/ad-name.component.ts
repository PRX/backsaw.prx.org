import {Component, Input} from '@angular/core';

import {FlightedAd} from '../../';

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
