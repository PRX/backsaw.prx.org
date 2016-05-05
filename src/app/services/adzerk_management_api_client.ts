import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {AuthenticationService} from './authentication.service';

export interface AdzerkManagementAPIAdvertiserResponse {
  Id: number;
  Title: string;
  IsActive: boolean;
  IsDeleted: boolean;
}

export interface AdzerkManagementAPICampaignResponse {
  Id: number;
  Name: string;
  IsActive: boolean;
  AdvertiserId: number;
  IsDeleted: boolean;
  IsArchived: boolean;
}

export interface AdzerkManagementAPIFlightResponse {
  Id: number;
  CampaignId: number;
  Name: string;
  IsDeleted: boolean;
  IsActive: boolean;
}

interface AdzerkManagementAPIAdResponseCreative {
  Id: number;
  Title: string;
  ImageName: string;
  Url: string;
  Body: string;
  AdvertiserId: number;
  IsActive: boolean;
  IsDeleted: boolean;
  IsSync: boolean;
}

export interface AdzerkManagementAPIAdResponse {
  Id: number;
  CampaignId: number;
  FlightId: number;
  ZoneId: number;
  SiteId: number;
  IsDeleted: boolean;
  IsActive: boolean;
  Creative: AdzerkManagementAPIAdResponseCreative;
}

@Injectable()
export class AdzerkManagementAPI {
  headers: Headers = new Headers({
    'X-Adzerk-ApiKey': this.auth.getAdzerkAPIKey()
  });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  // TODO https://api.adzerk.net/v1/flight/;
  private baseURL: string = 'https://' +
    '62y4dsxai6.execute-api.us-east-1.amazonaws.com/prod/management/v1/';

  constructor(
    private http: Http,
    private auth: AuthenticationService
  ) {}

  getAdvertiser(advertiserId: number): Observable<AdzerkManagementAPIAdvertiserResponse> {
    let url = this.baseURL + 'advertiser/' + advertiserId;

    return this.http
      .get(url, this.options)
      .map((res: Response) => {
        return <AdzerkManagementAPIAdvertiserResponse> JSON.parse(res.text());
      });
  }

  getCampaign(campaignId: number): Observable<AdzerkManagementAPICampaignResponse> {
    let url = this.baseURL + 'campaign/' + campaignId;

    return this.http
      .get(url, this.options)
      .map((res: Response) => {
        return <AdzerkManagementAPICampaignResponse> JSON.parse(res.text());
      });
  }

  getFlight(flightId: number): Observable<AdzerkManagementAPIFlightResponse> {
    let url = this.baseURL + 'flight/' + flightId;

    return this.http
      .get(url, this.options)
      .map((res: Response) => {
        return <AdzerkManagementAPIFlightResponse> JSON.parse(res.text());
      });
  }

  getAd(flightId: number, adId: number): Observable<AdzerkManagementAPIAdResponse> {
    let url = this.baseURL + 'flight/' + flightId + '/creative/' + adId;

    return this.http
      .get(url, this.options)
      .map((res: Response) => {
        return <AdzerkManagementAPIAdResponse> JSON.parse(res.text());
      });
  }
}
