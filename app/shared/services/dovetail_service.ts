import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import { AdzerkNativeAdAPIRequest } from '../../shared/services/adzerk_native_ad_api_client'

@Injectable()
export class DovetailService {
  constructor (private http: Http) {}

  getAdzerkRequest (url: string) {
    let result = /(dovetail\.prxu\.org\/.*)/.exec(url);
    let dovetail_url = 'https://' + result[1];

    let headers = new Headers({ 'Accept': 'application/vnd.dovetail.v1+json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(dovetail_url, options).map(res => {
      let body: AdzerkNativeAdAPIRequest = JSON.parse(res.text()).request;
      return body;
    });
  }
}
