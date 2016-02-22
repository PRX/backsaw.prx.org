import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {DovetailService} from '../../shared/services/dovetail_service'
import {AdzerkNativeAdAPI,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPIResponseDecision} from '../../shared/services/adzerk_native_ad_api_client'

@Injectable()
export class ReportService {
  decisions: AdzerkNativeAdAPIResponseDecision[];
}
