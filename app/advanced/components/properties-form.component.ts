import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router} from 'angular2/router';

import {
  AdzerkNativeAdAPIRequestProperties,
  AdzerkNativeAdAPIRequest} from '../../shared/services/adzerk_native_ad_api_client';
import {Episode} from '../../shared/services/feed_service';
import {TimestampSelectorComponent} from './timestamp-selector.component';

@Component({
  selector: 'properties-form',
  directives: [NgForm, TimestampSelectorComponent],
  templateUrl: 'app/advanced/components/properties-form.component.html',
  styleUrls: ['app/advanced/components/properties-form.component.css']
})
export class PropertiesFormComponent {
  @Input() adzerkRequest: AdzerkNativeAdAPIRequest;
  @Input() propOverrides: AdzerkNativeAdAPIRequestProperties;
  @Input() episode: Episode;

  constructor(
    private _router: Router
  ) {}

  onSubmit() {
    let properties = encodeURIComponent(JSON.stringify(this.propOverrides));
    let url = this.episode.paramURL();

    this._router.navigate(['Report', { properties: properties, url: url }]);
  }
}
