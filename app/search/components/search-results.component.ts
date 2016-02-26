import {Component, Input, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Router, RouteParams} from 'angular2/router';

import {FeedService, Episode} from '../../shared/services/feed_service'

@Component({
  selector: 'search-results',
  directives: [],
  providers: [FeedService],
  styleUrls: ['app/search/components/search-results.component.css'],
  templateUrl: 'app/search/components/search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  @Input() program;

  constructor (
    private _router: Router,
    private _feedService: FeedService
  ) {}

  episodes: Observable<Episode[]>;

  ngOnInit() {
    if (this.program) {
      this.episodes = this._feedService.getEpisodes(this.program.url);
    }
  }

  onSelect(episode: Episode) {
    this._router.navigate(['Report', { url: episode.paramURL() }]);
  }

  onAdvanced(episode: Episode) {
    this._router.navigate(['Advanced', { url: episode.paramURL() }]);
  }
}
