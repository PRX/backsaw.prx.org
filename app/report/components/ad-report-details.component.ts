import {Component, Input} from 'angular2/core';

import {ReportService, AdReport} from '../../shared/services/report.service';

@Component({
  selector: 'ad-report-details',
  templateUrl: 'app/report/components/ad-report-details.component.html',
  styleUrls: ['app/report/components/ad-report-details.component.css']
})
export class AdReportDetailsComponent {
  @Input() adReport: AdReport;

  constructor(
    private _reportService: ReportService
  ) {}

  getResponseCount() {
    return this._reportService.getAdzerkResponses().length;
  }
}
