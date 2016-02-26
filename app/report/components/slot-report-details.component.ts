import {Component, Input, OnInit} from 'angular2/core';

import {AdReportDetailsComponent} from './ad-report-details.component';
import {NullAdReportDetailsComponent} from './null-ad-report-details.component';
import {AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReport} from '../../shared/services/report.service';

@Component({
  selector: 'slot-report-details',
  directives: [AdReportDetailsComponent, NullAdReportDetailsComponent],
  templateUrl: 'app/report/components/slot-report-details.component.html',
  styleUrls: ['app/report/components/slot-report-details.component.css']
})
export class SlotReportDetailsComponent implements OnInit {
  @Input() slotReport: SlotReport;
}
