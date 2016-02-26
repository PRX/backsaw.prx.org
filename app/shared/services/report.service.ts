import {Injectable} from 'angular2/core';

import {Episode} from './feed_service';
import {AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPI} from './adzerk_native_ad_api_client';
import {DovetailService} from './dovetail_service'

@Injectable()
export class ReportService {
  private episode: Episode;
  private adzerkRequest: AdzerkNativeAdAPIRequest;
  private adzerkRequestProperties: AdzerkNativeAdAPIRequestProperties;
  private adzerkResponses: AdzerkNativeAdAPIResponse[];

  constructor(
    private _dovetailService: DovetailService,
    private _azerkService: AdzerkNativeAdAPI
  ) {}

  getAdzerkRequest() {
    return this.adzerkRequest;
  }

  getAdzerkResponses() {
    return this.adzerkResponses;
  }

  getAdSlots() {
    return [];
  }

  setEpisode(episode: Episode) {
    this._reset();

    this.episode = episode;
  }

  setProperties(properties: AdzerkNativeAdAPIRequestProperties) {
    if (this.adzerkResponses.length > 0) {
      console.error('Cannot set properties after report has run.')
    } else {
      this.adzerkRequestProperties = properties;
    }
  }

  private _applyProperties() {
    if (this.adzerkRequestProperties) {
      for (let placement of this.adzerkRequest.placements) {
        placement.properties = this.adzerkRequestProperties;
      }
    }
  }

  private _reset() {
    this.episode = null;
    this.adzerkRequest = null;
    this.adzerkRequestProperties = null;
    this.adzerkResponses = [];
  }

  prime() {
    this._dovetailService
      .getAdzerkRequestBody(this.episode.url)
      .subscribe(request => {
        this.adzerkRequest = request;
      });
  }

  run(times: number) {
    this._applyProperties();

    for (var i = 0; i < times; i++) {
      this._runOnce();
    }
  }

  private _runOnce() {
    this._azerkService
      .request(this.adzerkRequest)
      .subscribe(response => {
        this.adzerkResponses.push(response);
      });
  }
}
