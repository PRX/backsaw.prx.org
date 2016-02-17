import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Response}  from 'angular2/http';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

import {FeedService, Episode} from '../../shared/services/feed_service'

class SearchQuery {
  constructor(public url?: string) {}
}

@Component({
  directives: [],
  providers: [FeedService],
  template: `
    <form (ngSubmit)="onSubmit()" #searchForm="ngForm">
      Find episodes for:
      <select [(ngModel)]="query.url" required>
        <option></option>
        <option value="http://f.prxu.org/thememorypalace/feed-rss.xml">the memory palace</option>
        <option value="http://f.prxu.org/serial/feed-rss.xml">Serial</option>
        <option value="http://f.prxu.org/criminal/feed-rss.xml">Criminal</option>
        <option value="http://f.prxu.org/strangers/feed-rss.xml">Strangers</option>
      </select>
      <button type="submit" [disabled]="!searchForm.form.valid">Submit</button>
    </form>

    <ul>
      <li *ngFor="#episode of episodes | async" (click)="onSelect(episode)">
        <span>{{episode.url}}</span>
      </li>
    </ul>
  `
})
export class Search {
  constructor (
    private _feedService: FeedService,
    private _router: Router) {}

  query = new SearchQuery('http://f.prxu.org/criminal/feed-rss.xml')

  episodes: Observable<Episode[]>;

  onSubmit() {
    this.episodes = this._feedService.getEpisodes(this.query.url);
  }

  onSelect(episode: Episode) {
    this._router.navigate(['Report', { url: encodeURIComponent(episode.url) }]);
  }
}
