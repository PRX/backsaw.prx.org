import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

import {Episode} from './feed_service';
import {AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPI,
} from './adzerk_native_ad_api_client';
import {DovetailService} from './dovetail_service';

@Injectable()
export class ReportService {
  public adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  public filter: {} = {};

  private _episode: Episode;
  private _adzerkRequest: AdzerkNativeAdAPIRequest;
  private _adzerkRequestProperties: AdzerkNativeAdAPIRequestProperties;
  private _adzerkResponses: AdzerkNativeAdAPIResponse[];
  private _adzerkResponsesObserver: Observer<AdzerkNativeAdAPIResponse[]>;

  constructor(
    private _dovetailService: DovetailService,
    private _azerkService: AdzerkNativeAdAPI
  ) {
    this._adzerkResponses = [];
    this.adzerkResponses$ = new Observable((observer: Observer<AdzerkNativeAdAPIResponse[]>) => {
      this._adzerkResponsesObserver = observer;
    }).share();
  }

  // Filters

  clearFilter(): void {
    this.filter = {};

    if (this._adzerkResponsesObserver) {
      this._adzerkResponsesObserver.next(this._adzerkResponses);
    }
  }

  addFilter(slotId: number, key: string, value: number): void {
    if (!this.filter[slotId]) {
      this.filter[slotId] = {};
    }

    this.filter[slotId][key] = value;

    if (this._adzerkResponsesObserver) {
      this._adzerkResponsesObserver.next(this._adzerkResponses);
    }
  }

  removeFilter(slotId: number, key: string, value: number): void {
    if (this.filter[slotId] && this.filter[slotId][key]) {
      delete this.filter[slotId][key];

      if (this._adzerkResponsesObserver) {
        this._adzerkResponsesObserver.next(this._adzerkResponses);
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
    return !!this._adzerkRequest;
  }

  propertyOverrides(): AdzerkNativeAdAPIRequestProperties {
    return this._adzerkRequestProperties;
  }

  // Setup

  setEpisode(episode: Episode): void {
    // Reset the service
    this._episode = undefined;
    this._adzerkRequest = undefined;
    this._adzerkRequestProperties = undefined;
    this._adzerkResponses = [];

    this._episode = episode;

    this._dovetailService
      .getAdzerkRequestBody(this._episode.url)
      .subscribe((request: AdzerkNativeAdAPIRequest) => {
        this._adzerkRequest = request;
      });
  }

  setProperties(properties: AdzerkNativeAdAPIRequestProperties): void {
    if (this._adzerkResponses.length > 0) {
      console.error('Cannot set properties after report has run.');
    } else {
      this._adzerkRequestProperties = properties;
    }
  }

  // Execute

  fetchResponses(times: number): void {
    this._applyProperties();

    let i: number;
    for (i = 0; i < times; i++) {
      this._fetchResponse();
    }
  }

  private _fetchResponse(): void {
    this._azerkService
      .request(this._adzerkRequest)
      .subscribe((response: AdzerkNativeAdAPIResponse) => {
        this._adzerkResponses.push(response);

        if (this._adzerkResponsesObserver) {
          this._adzerkResponsesObserver.next(this._adzerkResponses);
        }
      });
  }

  private _applyProperties(): void {
    if (this._adzerkRequestProperties) {
      for (let placement of this._adzerkRequest.placements) {
        placement.properties = this._adzerkRequestProperties;
      }
    }
  }
}
