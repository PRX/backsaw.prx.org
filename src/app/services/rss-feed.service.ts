import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

import {Program, Episode} from './program.service';

@Injectable()
export class RssFeedService {
  constructor (
    private http: Http
  ) {}

  episodesForProgram(program: Program): Observable<Episode[]> {
    return this.http.get(program.url).map((res: Response) => {
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