import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {FeedService, Episode} from '../../shared/services/feed_service';

@Component({
  selector: 'search-results',
  directives: [ROUTER_DIRECTIVES],
  providers: [FeedService],
  styleUrls: ['app/search/components/search-results.component.css'],
  templateUrl: 'app/search/components/search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  @Input() program;

  constructor (
    private _feedService: FeedService
  ) {}

  episodes: Observable<Episode[]>;

  ngOnInit() {
    if (this.program) {
      this.episodes = this._feedService.getEpisodes(this.program.url);
    }
  }
}
