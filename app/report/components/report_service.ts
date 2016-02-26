import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision} from '../../shared/services/adzerk_native_ad_api_client'

@Injectable()
export class ReportService {
  adzerkRequest: AdzerkNativeAdAPIRequest;
  decisions: AdzerkNativeAdAPIResponseDecision[];
  slots: string[] = [];

  iterations() {
    return this.decisions.length;
  }

  private reset() {

  }

  setRequest(request: AdzerkNativeAdAPIRequest) {
    this.reset();

    this.adzerkRequest = request;
    this.slots = this.adzerkRequest.placements.map(p => p.divName);
  }

  run(iterations: number) {
    if (this.adzerkRequest) {

    } else {
      console.error('Adzerk Request must be set before running report.');
    }
  }
}
