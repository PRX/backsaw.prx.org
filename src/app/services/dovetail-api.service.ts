import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

import {AdzerkNativeAdAPIRequest} from '../services/adzerk_native_ad_api_client';

export interface DovetailArrangementEntry {
  id: string;
  type: string;
}

export interface DovetailDebugResponse {
  arrangement: DovetailArrangementEntry[];
  program: {id: string};
  request: AdzerkNativeAdAPIRequest;
  warning: string;
  error: string;
}

@Injectable()
export class DovetailService {
  constructor (private http: Http) {}

  getDebugResponse(url: string): Observable<DovetailDebugResponse> {
    let result = /(dovetail\.prxu\.org\/.*)/.exec(url);
    let dovetailUrl = 'https://' + result[1];

    let headers = new Headers({ 'Accept': 'application/vnd.dovetail.v1+json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(dovetailUrl, options).map((res: Response) => {
      let body = <DovetailDebugResponse> JSON.parse(res.text());
      return body;
    });
  }
}
