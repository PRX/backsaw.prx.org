import {Component, OnInit,} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision} from '../../shared/services/adzerk_native_ad_api_client'


@Component({
  directives: [],
  providers: [DovetailService],
  templateUrl: 'app/advanced/components/advanced.html',
  styleUrls: ['app/advanced/components/advanced.css']
})
export class Advanced implements OnInit {
  url: string;
  adzerkRequest: AdzerkNativeAdAPIRequest;

  propOverrides: {
    guid?: string,
    publishedAt?: number,
    publishedAtPlus30?: number,
    duration?: number
  }

  constructor(
    private _routeParams: RouteParams,
    private _dovetailService: DovetailService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.url = decodeURIComponent(this._routeParams.get('url'));
    this._dovetailService
      .getAdzerkRequest(this.url)
      .subscribe(request => {
        this.adzerkRequest = request;

        if (this._routeParams.get('properties')) {
          this.propOverrides = JSON.parse(decodeURIComponent(this._routeParams.get('properties')));
        } else {
          this.propOverrides = this.adzerkRequest.placements[0].properties;
        }

        for (let placement of this.adzerkRequest.placements) {
          placement.properties = this.propOverrides;
        }
      });
  }

  onSubmit() {
    this._router.navigate(['Report', {
      properties: encodeURIComponent(JSON.stringify(this.propOverrides)),
      url: encodeURIComponent(this.url)
    }]);
  }
}
