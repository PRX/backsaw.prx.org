import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

export class Episode {
  constructor(
    public url: string,
    public title?: string
  ) {}

  paramURL(): string {
    return encodeURIComponent(this.url);
  }
}

@Injectable()
export class FeedService {
  constructor (
    private http: Http
  ) {}

  getEpisodes (url: string): Observable<Episode[]> {
    return this.http.get(url).map((res: Response) => {
      let episodes: Episode[] = [];

      let xml: string = res.text();

      let parser: DOMParser = new DOMParser();
      let doc: XMLDocument = parser.parseFromString(xml, 'application/xml');

      let elements: NodeList = doc.querySelectorAll('item');

      let i: number;
      for (i = 0; i < elements.length; ++i) {
        let item: Element = <Element> elements[i];

        let title: string = function (html: string): string {
          let txt: HTMLTextAreaElement = document.createElement('textarea');
          txt.innerHTML = html;
          return txt.value;
        }(item.querySelector('title').innerHTML);

        let encUrl: string = item.querySelector('enclosure').getAttribute('url');

        episodes.push(new Episode(encUrl, title));
      }

      return episodes;
    });
  }
}
