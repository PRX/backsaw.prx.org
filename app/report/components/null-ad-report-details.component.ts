import {Component, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'null-ad-report-details',
  templateUrl: 'app/report/components/null-ad-report-details.component.html',
  styleUrls: ['app/report/components/null-ad-report-details.component.css']
})
export class NullAdReportDetailsComponent implements OnInit {
  @Input() slotId: number;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;

  count = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];

  ngOnInit() {
    this.adzerkResponses$
      .subscribe(responses => {
        this.adzerkResponses = responses;
        this.count = 0;

        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision = decisions[this.slotId];

          if (!decision) {
            this.count += 1;
          }
        }
      });
  }
}
