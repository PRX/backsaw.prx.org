import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import {AuthenticationService} from './authentication_service';

export interface AdzerkManagementAPIAdvertiserResponse {
  Id: number,
  Title: string,
  IsActive: boolean,
  IsDeleted: boolean
}

export interface AdzerkManagementAPICampaignResponse {
  Id: number,
  Name: string,
  IsActive: boolean,
  AdvertiserId: number,
  IsDeleted: boolean,
  IsArchived: boolean
}

export interface AdzerkManagementAPIFlightResponse {
  Id: number,
  CampaignId: number,
  Name: string,
  IsDeleted: boolean,
  IsActive: boolean
}

interface AdzerkManagementAPIAdResponseCreative {
  Id: number,
  Title: string,
  ImageName: string,
  Url: string,
  Body: string,
  AdvertiserId: number,
  IsActive: boolean,
  IsDeleted: boolean,
  IsSync: boolean
}

export interface AdzerkManagementAPIAdResponse {
  Id: number,
  CampaignId: number,
  FlightId: number,
  ZoneId: number,
  SiteId: number,
  IsDeleted: boolean,
  IsActive: boolean,
  Creative: AdzerkManagementAPIAdResponseCreative
}

@Injectable()
export class AdzerkManagementAPI {
  constructor(
    private http: Http,
    private _authService: AuthenticationService
  ) {}

  headers = new Headers({
    'X-Adzerk-ApiKey': this._authService.getAdzerkAPIKey()
  });
  options = new RequestOptions({ headers: this.headers });

  getAdvertiser(advertiserId: number) {
    // let url = 'https://api.adzerk.net/v1/advertiser/' + flightId;
    let url = 'https://62y4dsxai6.execute-api.us-east-1.amazonaws.com/prod/management/v1/advertiser/' + advertiserId;

    return this.http
      .get(url, this.options)
      .map(res => {
        return <AdzerkManagementAPIAdvertiserResponse> JSON.parse(res.text());
      });
  }

  getCampaign(campaignId: number) {
    // let url = 'https://api.adzerk.net/v1/campaign/' + flightId;
    let url = 'https://62y4dsxai6.execute-api.us-east-1.amazonaws.com/prod/management/v1/campaign/' + campaignId;

    return this.http
      .get(url, this.options)
      .map(res => {
        return <AdzerkManagementAPICampaignResponse> JSON.parse(res.text());
      });
  }

  getFlight(flightId: number) {
    // let url = 'https://api.adzerk.net/v1/flight/' + flightId;
    let url = 'https://62y4dsxai6.execute-api.us-east-1.amazonaws.com/prod/management/v1/flight/' + flightId;

    return this.http
      .get(url, this.options)
      .map(res => {
        return <AdzerkManagementAPIFlightResponse> JSON.parse(res.text());
      });
  }

  getAd(flightId: number, adId: number) {
    // let url = 'https://api.adzerk.net/v1/flight/' + flightId + '/creative/' + adId;
    let url = 'https://62y4dsxai6.execute-api.us-east-1.amazonaws.com/prod/management/v1/flight/' + flightId + '/creative/' + adId

    return this.http
      .get(url, this.options)
      .map(res => {
        return <AdzerkManagementAPIAdResponse> JSON.parse(res.text());
      });
  }
}
