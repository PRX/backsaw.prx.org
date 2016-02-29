import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {
  Program,
  Episode,
} from '../../shared/services/program.service';
import {RssFeedService} from '../../shared/services/rss-feed.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'search-results',
  styleUrls: ['app/search/components/search-results.component.css'],
  templateUrl: 'app/search/components/search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  @Input() program: Program;

  episodes: Observable<Episode[]>;

  constructor(
    private feeds: RssFeedService
  ) {}

  ngOnInit(): void {
    if (this.program) {
      this.episodes = this.feeds.episodesForProgram(this.program);
    }
  }
}
