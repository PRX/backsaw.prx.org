import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

interface AdzerkNativeAdAPIRequestPlacement {
  divName: string;
  networkId: number;
  siteId: number;
  adTypes: number[];
  zoneIds?: number[];
  campaignId?: number;
  flightId?: number;
  adId?: number;
  clickUrl?: string;
  eventIds?: number[];
  properties?: {};
  contentKeys?: {};
}

interface AdzerkNativeAdAPIRequestUser {
  key: string;
}

export interface AdzerkNativeAdAPIRequestProperties {
  guid?: string;
  publishedAt?: number;
  publishedAtPlus30?: number;
  duration?: number;
  backsaw?: boolean;
}

export interface AdzerkNativeAdAPIRequest {
  placements: AdzerkNativeAdAPIRequestPlacement[];
  user?: AdzerkNativeAdAPIRequestUser;
  keywords?: string[];
  referer?: string;
  url?: string;
  time?: number;
  ip?: string;
  blockedCreatives?: number[];
  flightViewTimes?: {};
  isMobile?: boolean;
  properties?: AdzerkNativeAdAPIRequestProperties;
}

export interface AdzerkNativeAdAPIResponseDecision {
  adId: number;
  creativeId: number;
  flightId: number;
  campaignId: number;
  clickUrl: string;
  contents: {}[];
  impressionUrl: string;
  events: {}[];
}

interface AdzerkNativeAdAPIResponseUser {
  key: string;
}

export interface AdzerkNativeAdAPIResponse {
  decisions: AdzerkNativeAdAPIResponseDecision[];
  user?: AdzerkNativeAdAPIResponseUser;
}

@Injectable()
export class AdzerkNativeAdAPI {
  constructor(private http: Http) {}

  request(request: AdzerkNativeAdAPIRequest): Observable<AdzerkNativeAdAPIResponse> {
    return this.http
      .post('https://engine.adzerk.net/api/v2', JSON.stringify(request))
      .map((res: Response) => {
        return <AdzerkNativeAdAPIResponse> JSON.parse(res.text());
      });
  }
}
