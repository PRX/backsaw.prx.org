import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SearchFormComponent} from './search-form.component';
import {SearchResultsComponent} from './search-results.component';
import {ProgramService, Program} from '../../shared/services/program.service';

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [SearchFormComponent, SearchResultsComponent],
  providers: [ProgramService],
  styleUrls: ['app/search/components/search.component.css'],
  templateUrl: 'app/search/components/search.component.html',
})
export class SearchComponent implements OnInit {
  program: Program;

  constructor (
    private _routeParams: RouteParams,
    private _programService: ProgramService
  ) {}

  ngOnInit(): void {
    if (this._routeParams.get('url')) {
      let url: string = decodeURIComponent(this._routeParams.get('url'));
      this.program = this._programService.programFromURL(url);
    }
  }
}
