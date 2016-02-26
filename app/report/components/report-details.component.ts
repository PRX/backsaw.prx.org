import {Component, Input, OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import {AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';
import {SlotReportDetailsComponent} from './slot-report-details.component';
import {EpisodeReport, ReportService} from '../../shared/services/report.service'

@Component({
  selector: 'report-details',
  directives: [SlotReportDetailsComponent],
  templateUrl: 'app/report/components/report-details.component.html',
  styleUrls: ['app/report/components/report-details.component.css']
})
export class ReportDetailsComponent {
  @Input() episodeReport: Observable<EpisodeReport>;

  slotReports;

  constructor(
    private _reportService: ReportService
  ) {}

  ngOnInit() {
    this.slotReports = this.episodeReport.map(report => report.slotReports());
  }

  getAdzerkResponses() {
    return this._reportService.getAdzerkResponses();
  }
}
