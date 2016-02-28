import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';

import {
  Program,
  ProgramService,
} from '../../shared/services/program.service';

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [NgForm],
  providers: [ProgramService],
  selector: 'search-form',
  styleUrls: ['app/search/components/search-form.component.css'],
  templateUrl: 'app/search/components/search-form.component.html',
})
export class SearchFormComponent implements OnInit {
  constructor (
    private router: Router,
    private routeParams: RouteParams,
    private programService: ProgramService
  ) {}

  query: SearchQuery = new SearchQuery('');

  ngOnInit(): void {
    if (this.routeParams.get('url')) {
      this.query.url = decodeURIComponent(this.routeParams.get('url'));
    }
  }

  programs(): Program[] {
    return this.programService.programs;
  }

  onSubmit(): void {
    this.router.navigate(['Search', { url: encodeURIComponent(this.query.url) }]);
  }
}
