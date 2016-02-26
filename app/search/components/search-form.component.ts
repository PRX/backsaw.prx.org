import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';

import {ProgramService} from '../../shared/services/program.service';

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  selector: 'search-form',
  directives: [NgForm],
  providers: [ProgramService],
  styleUrls: ['app/search/components/search-form.component.css'],
  templateUrl: 'app/search/components/search-form.component.html'
})
export class SearchFormComponent implements OnInit {
  constructor (
    private _router: Router,
    private _routeParams: RouteParams,
    private _programService: ProgramService) {}

  query = new SearchQuery('');

  ngOnInit() {
    if (this._routeParams.get('url')) {
      this.query.url = decodeURIComponent(this._routeParams.get('url'));
    }
  }

  programs() {
    return this._programService.programs;
  }

  onSubmit() {
    this._router.navigate(['Search', { url: encodeURIComponent(this.query.url) }]);
  }
}
