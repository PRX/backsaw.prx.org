import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

import {AdzerkNativeAdAPIRequest} from '../services/adzerk_native_ad_api_client';

@Injectable()
export class DovetailService {
  constructor (private http: Http) {}

  getAdzerkRequestBody(url: string): Observable<AdzerkNativeAdAPIRequest> {
    let result = /(dovetail\.prxu\.org\/.*)/.exec(url);
    let dovetailUrl = 'https://' + result[1];

    let headers = new Headers({ 'Accept': 'application/vnd.dovetail.v1+json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(dovetailUrl, options).map((res: Response) => {
      let body = <AdzerkNativeAdAPIRequest> JSON.parse(res.text()).request;
      return body;
    });
  }

  getAdzerkSlotOrder(url: string): Observable<string[]> {
    let result = /(dovetail\.prxu\.org\/.*)/.exec(url);
    let dovetailUrl = 'https://' + result[1];

    let headers = new Headers({ 'Accept': 'application/vnd.dovetail.v1+json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(dovetailUrl, options).map((res: Response) => {
      let obj: {id: string; type?: string}[] = JSON.parse(res.text()).program.placements;
      let output = new Array<string>();
      for (let placement of obj) {
        if (placement.type !== 'original') {
          output.push(placement.id);
        }
      }
      return output;
    });
  }
}
