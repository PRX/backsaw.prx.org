import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

import { AdzerkNativeAdAPIRequest } from '../services/adzerk_native_ad_api_client';

@Injectable()
export class DovetailService {
  constructor (private http: Http) {}

  getAdzerkRequestBody(url: string): Observable<AdzerkNativeAdAPIRequest> {
    let result: RegExpExecArray = /(dovetail\.prxu\.org\/.*)/.exec(url);
    let dovetailUrl: string = 'https://' + result[1];

    let headers: Headers = new Headers({ 'Accept': 'application/vnd.dovetail.v1+json' });
    let options: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.get(dovetailUrl, options).map((res: Response) => {
      let body: AdzerkNativeAdAPIRequest = JSON.parse(res.text()).request;
      return body;
    });
  }
}
