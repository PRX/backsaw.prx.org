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
    private routeParams: RouteParams,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
    if (this.routeParams.get('url')) {
      let url: string = decodeURIComponent(this.routeParams.get('url'));
      this.program = this.programService.programFromURL(url);
    }
  }
}
