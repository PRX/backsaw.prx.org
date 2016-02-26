import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

export class Episode {
  constructor(
    public url: string,
    public title?: string
  ) {}

  paramURL() {
    return encodeURIComponent(this.url);
  }
}

@Injectable()
export class FeedService {
  constructor (private http: Http) {}

  getEpisodes (url: string) {
    return this.http.get(url).map(res => {
      var episodes: Episode[] = [];

      let xml = res.text();

      let parser = new DOMParser();
      var doc = parser.parseFromString(xml, 'application/xml');

      let elements = doc.querySelectorAll('item')

      for (var i = 0; i < elements.length; ++i) {
        let item = elements[i];

        let title = function (html) {
          var txt = document.createElement('textarea');
          txt.innerHTML = html;
          return txt.value;
        }(item.querySelector('title').innerHTML);

        let encUrl = item.querySelector('enclosure').getAttribute('url');

        episodes.push(new Episode(encUrl, title));
      }

      return episodes;
    });
  }
}
