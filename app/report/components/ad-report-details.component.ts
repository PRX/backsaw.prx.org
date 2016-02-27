import {Component, Input, OnInit} from 'angular2/core';

import {CampaignNameComponent} from './campaign-name.component'
import {FlightNameComponent} from './flight-name.component'
import {CreativeNameComponent} from './creative-name.component'
import {
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIResponse} from '../../shared/services/adzerk_native_ad_api_client';

export class Ad {
  constructor(
    public campaignId: number,
    public flightId: number,
    public creativeId: number,
    public adId: number
  ) {}
}

@Component({
  selector: 'ad-report-details',
  directives: [CampaignNameComponent, FlightNameComponent, CreativeNameComponent],
  templateUrl: 'app/report/components/ad-report-details.component.html',
  styleUrls: ['app/report/components/ad-report-details.component.css']
})
export class AdReportDetailsComponent implements OnInit {
  @Input() slotId: number;
  @Input() adId: number;
  @Input() adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;

  count = 0;
  adzerkResponses: AdzerkNativeAdAPIResponse[] = [];
  ad: Ad;

  responseIncludes(response, filters) {
    return true;

    var failed = false;

    for (var slotId in filters) {
      if (filters.hasOwnProperty(slotId)) {
        // Get the decision from the response for the slot that matches the slot
        // the filter that's being checked
        let decision = response.decisions[slotId];

        // If this response had a null decision (no ad) for this slot, it should
        // fail the test (this could be improved)
        if (!decision) {
          failed = true;
        } else {
          // Make sure all the values for this decision pass the filter

          // Only need the filter for this particular slot
          let filter = filters[slotId];

          // For each property defined in the filter...
          for (var adProp in filter) {
            if (filter.hasOwnProperty(adProp)) {
              // ...check to make sure the decision passes
              if (filter[adProp] !== decision[adProp]) {
                failed = true;
              }
            }
          }
        }
      }
    }

    return !failed;
  }

  ngOnInit() {
    this.adzerkResponses$
      .subscribe(responses => {
        this.adzerkResponses = responses;
        this.count = 0;

        for (let response of responses) {
          let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;
          let decision = decisions[this.slotId];

          let filter = {
            'strangers_pre_1': {
              adId: 1488152
            }
          };

          if (decision && decision.adId == this.adId && this.responseIncludes(response, filter)) {
            this.count += 1;

            if (!this.ad) {
              this.ad = new Ad(
                decision.campaignId,
                decision.flightId,
                decision.creativeId,
                decision.adId
              )
            }
          }
        }
      });
  }
}
