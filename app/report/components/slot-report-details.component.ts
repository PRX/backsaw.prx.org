import {Component, Input} from 'angular2/core';

import {AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';

@Component({
  selector: 'slot-report-details',
  providers: [],
  templateUrl: 'app/report/components/slot-report-details.component.html',
  styleUrls: ['app/report/components/slot-report-details.component.css']
})
export class SlotReportDetailsComponent {
  @Input() slot: string;
}
