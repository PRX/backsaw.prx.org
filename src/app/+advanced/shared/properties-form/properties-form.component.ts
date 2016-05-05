import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {Router} from '@angular/router';

import {TimestampSelectorComponent} from '../../';
import {Episode} from '../../../+programs';
import {
  AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest
} from '../../../shared';

@Component({
directives: [NgForm, TimestampSelectorComponent],
  selector: 'properties-form',
  styleUrls: ['app/advanced/properties-form.component.css'],
  templateUrl: 'app/advanced/properties-form.component.html'
})
export class PropertiesFormComponent implements OnInit {
  @Input() adzerkRequest: AdzerkNativeAdAPIRequest;
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() episode: Episode;

  propKeys: string[];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.propKeys = Object.keys(this.propOverrides);
  }

  onSubmit(): void {
    let properties = encodeURIComponent(JSON.stringify(this.propOverrides));
    let url = this.episode.paramURL();

    this.router.navigate(['Report', { properties: properties, url: url }]);
  }
}
