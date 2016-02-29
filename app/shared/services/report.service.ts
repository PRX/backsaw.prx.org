import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

import {Episode} from './program.service';
import {AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPI,
} from './adzerk_native_ad_api_client';
import {DovetailService} from './dovetail-api.service';

@Injectable()
export class ReportService {
  public adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  public filter: {} = {};

  private episode: Episode;
  private adzerkRequest: AdzerkNativeAdAPIRequest;
  private adzerkRequestProperties: AdzerkNativeAdAPIRequestProperties;
  private adzerkResponses: AdzerkNativeAdAPIResponse[];
  private adzerkResponsesObserver: Observer<AdzerkNativeAdAPIResponse[]>;

  constructor(
    private dovetailService: DovetailService,
    private azerkService: AdzerkNativeAdAPI
  ) {
    this.adzerkResponses = [];
    this.adzerkResponses$ = new Observable((observer: Observer<AdzerkNativeAdAPIResponse[]>) => {
      this.adzerkResponsesObserver = observer;
    }).share();
  }

  // Filters

  clearFilter(): void {
    this.filter = {};

    if (this.adzerkResponsesObserver) {
      this.adzerkResponsesObserver.next(this.adzerkResponses);
    }
  }

  addFilter(slotId: number, key: string, value: number): void {
    if (!this.filter[slotId]) {
      this.filter[slotId] = {};
    }

    this.filter[slotId][key] = value;

    if (this.adzerkResponsesObserver) {
      this.adzerkResponsesObserver.next(this.adzerkResponses);
    }
  }

  removeFilter(slotId: number, key: string, value: number): void {
    if (this.filter[slotId] && this.filter[slotId][key]) {
      delete this.filter[slotId][key];

      if (this.adzerkResponsesObserver) {
        this.adzerkResponsesObserver.next(this.adzerkResponses);
      }
    }
  }

  doesResponseSatisfyFilter(response: AdzerkNativeAdAPIResponse): boolean {
    if (Object.keys(this.filter).length === 0) {
      return true;
    }

    let failed: boolean;
    failed = false;

    for (let slotId in this.filter) {
      if (this.filter.hasOwnProperty(slotId)) {
        // Get the decision from the response for the slot that matches the slot
        ///the filter that's being checked
        let decision: AdzerkNativeAdAPIRequestProperties = response.decisions[slotId];

        // If this response had a null decision (no ad) for this slot, it should
        ///fail the test (this could be improved)
        if (!decision) {
          failed = true;
        } else {
          // Make sure all the values for this decision pass the filter

          // Only need the filter for this particular slot
          let slotFilter: {} = this.filter[slotId];

          // For each property defined in the filter...
          for (let adProp in slotFilter) {
            if (slotFilter.hasOwnProperty(adProp)) {
              // ...check to make sure the decision passes
              if (slotFilter[adProp] !== decision[adProp]) {
                failed = true;
              }
            }
          }
        }
      }
    }

    return !failed;
  }

  // State

  canFetchResponses(): boolean {
    return !!this.adzerkRequest;
  }

  propertyOverrides(): AdzerkNativeAdAPIRequestProperties {
    return this.adzerkRequestProperties;
  }

  // Setup

  setEpisode(episode: Episode): void {
    // Reset the service
    this.episode = undefined;
    this.adzerkRequest = undefined;
    this.adzerkRequestProperties = undefined;
    this.adzerkResponses = [];

    this.episode = episode;

    this.dovetailService
      .getAdzerkRequestBody(this.episode.url)
      .subscribe((request: AdzerkNativeAdAPIRequest) => {
        this.adzerkRequest = request;
      });
  }

  setProperties(properties: AdzerkNativeAdAPIRequestProperties): void {
    if (this.adzerkResponses.length > 0) {
      console.error('Cannot set properties after report has run.');
    } else {
      this.adzerkRequestProperties = properties;
    }
  }

  // Execute

  fetchResponses(times: number): void {
    this.applyProperties();

    let i: number;
    for (i = 0; i < times; i++) {
      this.fetchResponse();
    }
  }

  private fetchResponse(): void {
    this.azerkService
      .request(this.adzerkRequest)
      .subscribe((response: AdzerkNativeAdAPIResponse) => {
        this.adzerkResponses.push(response);

        if (this.adzerkResponsesObserver) {
          this.adzerkResponsesObserver.next(this.adzerkResponses);
        }
      });
  }

  private applyProperties(): void {
    if (this.adzerkRequestProperties) {
      for (let placement of this.adzerkRequest.placements) {
        placement.properties = this.adzerkRequestProperties;
      }
    }
  }
}
