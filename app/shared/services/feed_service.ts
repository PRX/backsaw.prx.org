import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

export class Episode {
  constructor(public url: string) { }
}

@Injectable()
export class FeedService {
  constructor (private http: Http) {}

  getEpisodes (url: string) {
    return this.http.get(url).map(res => {
      var episodes: Episode[] = [];
      var regex = /url\=\"([a-zA-Z0-9\:\/\.\-\_]+)\"/gi, result;
      while ((result = regex.exec(res.text()))) {
        episodes.push(new Episode(result[1]));
      }

      return episodes;
    });
  }
}
