import {Component, Input, OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {
  AdzerkNativeAdAPIRequestProperties,
} from '../../shared/services/adzerk_native_ad_api_client';

@Component({
  directives: [NgForm],
  selector: 'timestamp-selector',
  styleUrls: ['app/advanced/components/timestamp-selector.component.css'],
  templateUrl: 'app/advanced/components/timestamp-selector.component.html',
})
export class TimestampSelectorComponent implements OnInit, OnChanges {
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() prop: string;

  date: {year: number, month: number, day: number} = { day: 1, month: 1, year: 2016 };

  ngOnInit(): void {
    this.setControls();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    this.setControls();
  }

  updateTimestampYear(year: number): void {
    let d: Date = new Date(year, this.date.month, this.date.day);
    this.propOverrides[this.prop] = d.getTime();
  }

  updateTimestampMonth(month: number): void {
    let d: Date = new Date(this.date.year, month, this.date.day);
    this.propOverrides[this.prop] = d.getTime();
  }

  updateTimestampDay(day: number): void {
    let d: Date = new Date(this.date.year, this.date.month, day);
    this.propOverrides[this.prop] = d.getTime();
  }

  private setControls(): void {
    if (this.propOverrides[this.prop]) {
      let d: Date = new Date(Number(this.propOverrides[this.prop]));

      this.date.year = d.getUTCFullYear();
      this.date.month = (d.getUTCMonth() + 1);
      this.date.day = d.getUTCDate();
    }
  }
}
