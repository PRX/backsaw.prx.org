import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {Program, Episode} from '../services/program.service';
import {RssFeedService} from '../services/rss-feed.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'search-results',
  styleUrls: ['app/search/search-results.component.css'],
  templateUrl: 'app/search/search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  @Input() program: Observable<Program>;

  episodes: Observable<Episode[]>;

  constructor(
    private feeds: RssFeedService
  ) {}

  ngOnInit(): void {
    this.program.subscribe((program: Program) => {
      this.episodes = this.feeds.episodesForProgram(program);
    });
  }
}
