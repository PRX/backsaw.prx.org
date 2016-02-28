import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {FeedService, Episode} from '../../shared/services/feed_service';
import {Program} from '../../shared/services/program.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [FeedService],
  selector: 'search-results',
  styleUrls: ['app/search/components/search-results.component.css'],
  templateUrl: 'app/search/components/search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  @Input() program: Program;

  constructor (
    private feedService: FeedService
  ) {}

  episodes: Observable<Episode[]>;

  ngOnInit(): void {
    if (this.program) {
      this.episodes = this.feedService.getEpisodes(this.program.url);
    }
  }
}
