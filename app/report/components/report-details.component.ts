import {Component, Input} from 'angular2/core';

import {AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';

@Component({
  selector: 'report-details',
  directives: [SlotReportDetailsComponent],
  templateUrl: 'app/report/components/report-details.component.html',
  styleUrls: ['app/report/components/report-details.component.css']
})
export class ReportDetailsComponent {
  constructor(

  ) {}

  // getSlots() {
  //   if (this.adzerkResponses.length > 0) {
  //     return Object.keys(this.adzerkResponses[0].decisions);
  //   } else {
  //     return [];
  //   }
  // }
}
