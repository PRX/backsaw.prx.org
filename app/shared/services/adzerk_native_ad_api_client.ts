import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

interface AdzerkNativeAdAPIRequestPlacement {
  divName: string,
  networkId: number,
  siteId: number,
  adTypes: number[],
  zoneIds?: number[],
  campaignId?: number,
  flightId?: number,
  adId?: number,
  clickUrl?: string,
  eventIds?: number[],
  properties?: {},
  contentKeys?: {}
}

interface AdzerkNativeAdAPIRequestUser {
  key: string
}

export interface AdzerkNativeAdAPIRequest {
  placements: AdzerkNativeAdAPIRequestPlacement[],
  user?: AdzerkNativeAdAPIRequestUser,
  keywords?: string[],
  referer?: string,
  url?: string,
  time?: number,
  ip?: string,
  blockedCreatives?: number[],
  flightViewTimes?: {},
  isMobile?: boolean
}

export interface AdzerkNativeAdAPIResponseDecision {
  adId: number,
  creativeId: number,
  flightId: number,
  campaignId: number,
  clickUrl: string,
  contents: any[],
  impressionUrl: string,
  events: any[]
}

interface AdzerkNativeAdAPIResponseUser {
  key: string
}

export interface AdzerkNativeAdAPIResponse {
  decisions: AdzerkNativeAdAPIResponseDecision[],
  user?: AdzerkNativeAdAPIResponseUser
}

@Injectable()
export class AdzerkNativeAdAPI {
  constructor(private http: Http) {}

  request(request: AdzerkNativeAdAPIRequest) {
    return this.http
      .post('https://engine.adzerk.net/api/v2', JSON.stringify(request))
      .map(res => {
        return <AdzerkNativeAdAPIResponse> JSON.parse(res.text());
      });
  }
}
