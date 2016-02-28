import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router} from 'angular2/router';

import {
  AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest,
} from '../../shared/services/adzerk_native_ad_api_client';
import {Episode} from '../../shared/services/feed_service';
import {TimestampSelectorComponent} from './timestamp-selector.component';

@Component({
directives: [NgForm, TimestampSelectorComponent],
  selector: 'properties-form',
  styleUrls: ['app/advanced/components/properties-form.component.css'],
  templateUrl: 'app/advanced/components/properties-form.component.html',
})
export class PropertiesFormComponent {
  @Input() adzerkRequest: AdzerkNativeAdAPIRequest;
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() episode: Episode;

  constructor(
    private router: Router
  ) {}

  onSubmit(): void {
    let properties: string = encodeURIComponent(JSON.stringify(this.propOverrides));
    let url: string = this.episode.paramURL();

    this.router.navigate(['Report', { properties: properties, url: url }]);
  }
}
