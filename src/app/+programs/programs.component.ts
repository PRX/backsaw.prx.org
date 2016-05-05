import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ProgramService, Program} from './';
import {SearchFormComponent} from './search-form.component';
import {SearchResultsComponent} from './search-results.component';

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
export class ProgramsComponent implements OnInit {
  program: Program;

  constructor (
    // private routeParams: RouteParams,
    private programService: ProgramService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.router.routeTree);
  //   if (this.routeParams.get('url')) {
  //     let url = decodeURIComponent(this.routeParams.get('url'));
  //     this.program = this.programService.programFromURL(url);
  //   }
  }
}
