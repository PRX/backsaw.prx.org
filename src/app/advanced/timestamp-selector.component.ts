import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {AdzerkNativeAdAPIRequestProperties} from '../services/adzerk_native_ad_api_client';

@Component({
  directives: [NgForm],
  selector: 'timestamp-selector',
  styleUrls: ['app/advanced/timestamp-selector.component.css'],
  templateUrl: 'app/advanced/timestamp-selector.component.html'
})
export class TimestampSelectorComponent implements OnInit, OnChanges {
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() prop: string;

  private initPropDateString: string;

  private changeDatetime(value: string) {
    this.propOverrides[this.prop] = `${Date.parse(value)}`;
  }

  private get propDate() {
    return (new Date(+this.propOverrides[this.prop]));
  }

  private get propDateString() {
    const d = this.propDate;
    return `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()} UTC`;
  }
}
