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
    return this.http.get(this.cacheBust(program.url)).map((res: Response) => {
      let episodes: Episode[] = [];

      let xml = res.text();

      let parser = new DOMParser();
      let doc = <XMLDocument> parser.parseFromString(xml, 'application/xml');

      let elements = doc.querySelectorAll('item');

      for (let i = 0; i < elements.length; ++i) {
        let item = <Element> elements[i];

        let title = function (html: string) {
          let txt = <HTMLTextAreaElement> document.createElement('textarea');
          txt.innerHTML = html;
          return txt.value;
        }(item.querySelector('title').innerHTML);

        let categoryTags = item.querySelectorAll('category');
        let categories: string[] = [];
        for (let j = 0; j < categoryTags.length; ++j) {
          // Get the value of the category tag
          let category = function (html: string) {
            let txt = <HTMLTextAreaElement> document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
          }(categoryTags[j].innerHTML);

          categories.push(category);
        }

        let enclosure = item.querySelector('enclosure');
        if (enclosure) {
          let encUrl = enclosure.getAttribute('url');
          episodes.push(new Episode(encUrl, title, null, null, null, null, categories));
        } else {
          console.warn(`Episode ${title} has no enclosure!`);
        }
      }

      return episodes;
    });
  }

  cacheBust(url: string): string {
    let ts = Math.floor(Date.now() / 1000);
    if (url.indexOf('?') > -1) {
      return `${url}&_ts=${ts}`;
    } else {
      return `${url}?_ts=${ts}`;
    }
  }
}
