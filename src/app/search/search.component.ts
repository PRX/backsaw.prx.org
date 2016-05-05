import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router';

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
    <h1>hi</h1>
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
