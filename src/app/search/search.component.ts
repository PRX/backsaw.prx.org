import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SearchFormComponent} from './search-form.component';
import {SearchResultsComponent} from './search-results.component';
import {ProgramService, Program} from '../services/program.service';

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [SearchFormComponent, SearchResultsComponent],
  providers: [ProgramService],
  styleUrls: ['app/search/search.component.css'],
  template: `
    <search-results [program]="program"></search-results>
  `
})
export class SearchComponent implements OnInit {
  program: Program;

  constructor (
    private routeParams: RouteParams,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
    if (this.routeParams.get('url')) {
      let url = decodeURIComponent(this.routeParams.get('url'));
      this.program = this.programService.programFromURL(url);
    }
  }
}
