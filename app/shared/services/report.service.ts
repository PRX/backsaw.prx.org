import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import {Episode} from './feed_service';
import {AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIResponseDecision,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPI} from './adzerk_native_ad_api_client';
import {DovetailService} from './dovetail_service';

@Injectable()
export class ReportService2 {
  private _episode: Episode;

  private _adzerkRequest: AdzerkNativeAdAPIRequest;
  private _adzerkRequestProperties: AdzerkNativeAdAPIRequestProperties;

  public adzerkResponses$: Observable<AdzerkNativeAdAPIResponse[]>;
  private _adzerkResponses: AdzerkNativeAdAPIResponse[];

  private _adzerkResponsesObserver: any;

  constructor(
    private _dovetailService: DovetailService,
    private _azerkService: AdzerkNativeAdAPI
  ) {
    this._adzerkResponses = [];
    this.adzerkResponses$ = new Observable(observer => {
      this._adzerkResponsesObserver = observer;
    }).share();
  }

  // State

  canFetchResponses() {
    return !!this._adzerkRequest;
  }

  // Setup

  setEpisode(episode: Episode) {
    // Reset the service
    this._episode = null;
    this._adzerkRequest = null;
    this._adzerkRequestProperties = null;
    this._adzerkResponses = [];

    this._episode = episode;

    this._dovetailService
      .getAdzerkRequestBody(this._episode.url)
      .subscribe(request => {
        this._adzerkRequest = request;
      });
  }

  setProperties(properties: AdzerkNativeAdAPIRequestProperties) {
    if (this._adzerkResponses.length > 0) {
      console.error('Cannot set properties after report has run.')
    } else {
      this._adzerkRequestProperties = properties;
    }
  }

  fetchResponses(times: number) {
    for (var i = 0; i < times; i++) {
      this._fetchResponse();
    }
  }

  private _fetchResponse() {
    this._azerkService
      .request(this._adzerkRequest)
      .subscribe(response => {
        this._adzerkResponses.push(response);

        if (this._adzerkResponsesObserver) {
          this._adzerkResponsesObserver.next(this._adzerkResponses);
        }
      });
  }
}
