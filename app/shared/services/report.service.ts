import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable'

import {Episode} from './feed_service';
import {AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest,
  AdzerkNativeAdAPIResponse,
  AdzerkNativeAdAPI} from './adzerk_native_ad_api_client';
import {DovetailService} from './dovetail_service'

export class EpisodeReport {
  private _slotReportsMap: {};

  constructor() {
    this._slotReportsMap = {};
  }

  slotReports() {
    var x = [];

    for (var key in this._slotReportsMap) {
      if (this._slotReportsMap.hasOwnProperty(key)) {
        x.push(this._slotReportsMap[key]);
      }
    }

    return x;
  }

  addResponse(response: AdzerkNativeAdAPIResponse) {
    let decisions: AdzerkNativeAdAPIResponseDecision[] = response.decisions;

    for (var key in decisions) {
      if (decisions.hasOwnProperty(key)) {
        if (decisions[key]) {
          let slot = new Slot(key)
          let decision: AdzerkNativeAdAPIResponseDecision = decisions[key];
          this.addDecision(slot, decision);
        }
      }
    }
  }

  addDecision(slot: Slot, decision: AdzerkNativeAdAPIResponseDecision) {
    if (!this._slotReportsMap[slot.name]) {
      let slotReport = new SlotReport(slot, []);
      this._slotReportsMap[slot.name] = slotReport;
    }

    let slotReport = this._slotReportsMap[slot.name];
    slotReport.addDecision(decision);
  }
}

export class Slot {
  constructor(
    public name: string
  ) {}
}

export class SlotReport {
  private _adReportsMap: {};

  constructor(
    public slot: Slot
  ) {
    this._adReportsMap = {};
  }

  adReports() {
    var x = [];

    for (var key in this._adReportsMap) {
      if (this._adReportsMap.hasOwnProperty(key)) {
        x.push(this._adReportsMap[key]);
      }
    }

    return x;
  }

  addDecision(decision: AdzerkNativeAdAPIResponseDecision) {
    if (!this._adReportsMap[decision.adId]) {
      let ad = new Ad(
        decision.campaignId,
        decision.flightId,
        decision.creativeId,
        decision.adId
      );

      let adReport = new AdReport(ad);
      this._adReportsMap[ad.adId] = adReport;
    }

    let adReport = this._adReportsMap[decision.adId];
    adReport.count += 1;
  }
}

export class Ad {
  constructor(
    public campaignId: number,
    public flightId: number,
    public creativeId: number,
    public adId: number
  ) {}
}

export class AdReport {
  constructor(
    public ad: Ad,
    public count?: number
  ) {
    this.count = 0;
  }
}

@Injectable()
export class ReportService {
  private episode: Episode;
  private adzerkRequest: AdzerkNativeAdAPIRequest;
  private adzerkRequestProperties: AdzerkNativeAdAPIRequestProperties;
  private adzerkResponses: AdzerkNativeAdAPIResponse[];

  private _episodeReport: EpisodeReport;
  private _episodeReportObserver;
  private _observableEpisodeReport: Observable;

  constructor(
    private _dovetailService: DovetailService,
    private _azerkService: AdzerkNativeAdAPI
  ) {}

  getEpisodeReport() {
    return this._observableEpisodeReport;
  }

  getAdzerkRequest() {
    return this.adzerkRequest;
  }

  getAdzerkResponses() {
    return this.adzerkResponses;
  }

  setEpisode(episode: Episode) {
    this._reset();

    this.episode = episode;
  }

  setProperties(properties: AdzerkNativeAdAPIRequestProperties) {
    if (this.adzerkResponses.length > 0) {
      console.error('Cannot set properties after report has run.')
    } else {
      this.adzerkRequestProperties = properties;
    }
  }

  private _applyProperties() {
    if (this.adzerkRequestProperties) {
      for (let placement of this.adzerkRequest.placements) {
        placement.properties = this.adzerkRequestProperties;
      }
    }
  }

  private _reset() {
    this.episode = null;
    this.adzerkRequest = null;
    this.adzerkRequestProperties = null;
    this.adzerkResponses = [];
    this._episodeReport = new EpisodeReport();
    this._observableEpisodeReport = new Observable(observer => {
      this._episodeReportObserver = observer;
    });
  }

  prime() {
    this._dovetailService
      .getAdzerkRequestBody(this.episode.url)
      .subscribe(request => {
        this.adzerkRequest = request;
      });
  }

  run(times: number) {
    this._applyProperties();

    for (var i = 0; i < times; i++) {
      this._runOnce();
    }
  }

  private _runOnce() {
    this._azerkService
      .request(this.adzerkRequest)
      .subscribe(response => {
        this.adzerkResponses.push(response);
        this._episodeReport.addResponse(response);
        this._episodeReportObserver.next(this._episodeReport);
      });
  }
}
