import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Response} from 'angular2/http';
import {Router, RouteParams} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {FeedService, Episode} from '../../shared/services/feed_service'

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [],
  providers: [FeedService],
  styleUrls: ['app/search/components/search.css'],
  templateUrl: 'app/search/components/search.html'
})
export class Search {
  constructor (
    private _feedService: FeedService,
    private _router: Router,
    private _routeParams: RouteParams) {}

  query = new SearchQuery('http://f.prxu.org/criminal/feed-rss.xml')

  episodes: Observable<Episode[]>;

  ngOnInit() {
    if (this._routeParams.get('url')) {
      let url = decodeURIComponent(this._routeParams.get('url'))
      this.episodes = this._feedService.getEpisodes(url);
    }
  }

  onSubmit() {
    this._router.navigate(['Search', { url: encodeURIComponent(this.query.url) }]);
  }

  onSelect(episode: Episode) {
    this._router.navigate(['Report', { url: encodeURIComponent(episode.url) }]);
  }

  onAdvanced(episode: Episode) {
    this._router.navigate(['Advanced', { url: encodeURIComponent(episode.url) }]);
  }
}
