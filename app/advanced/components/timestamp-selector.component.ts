import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {
  AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest} from '../../shared/services/adzerk_native_ad_api_client';
import {Episode} from '../../shared/services/feed_service';

@Component({
  selector: 'timestamp-selector',
  directives: [NgForm],
  templateUrl: 'app/advanced/components/timestamp-selector.component.html',
  styleUrls: ['app/advanced/components/timestamp-selector.component.css']
})
export class TimestampSelectorComponent implements OnInit, OnChanges {
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() prop: string;

  date = { year: 2016, month: 1, day: 1 }

  ngOnInit() {
    this._setControls();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this._setControls();
  }

  updateTimestampYear(year) {
    let d = new Date(year, this.date.month, this.date.day);
    this.propOverrides[this.prop] = d.getTime();
  }

  updateTimestampMonth(month) {
    let d = new Date(this.date.year, month, this.date.day);
    this.propOverrides[this.prop] = d.getTime();
  }

  updateTimestampDay(day) {
    let d = new Date(this.date.year, this.date.month, day);
    this.propOverrides[this.prop] = d.getTime();
  }

  private _setControls() {
    if (this.propOverrides[this.prop]) {
      let d = new Date(Number(this.propOverrides[this.prop]));

      this.date.year = d.getUTCFullYear();
      this.date.month = (d.getUTCMonth() + 1);
      this.date.day = d.getUTCDate();
    }
  }
}
