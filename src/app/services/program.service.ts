import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

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
export class Program {
  constructor(
    public name: string,
    public url: string
  ) {}

  paramURL(): string {
    return encodeURIComponent(this.url);
  }
}

@Injectable()
export class ProgramService {
  constructor (private http: Http) {}

  getPrograms(): Observable<Program[]> {
    let feederUrl = 'https://feeder.prx.org/api/v1/podcasts?per=1000'
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(feederUrl, options).map((res: Response) => {
      let feederPodcasts = JSON.parse(res.text())['_embedded']['prx:items'];
      let programs = <Program[]>[];

      for (let podcast of feederPodcasts) {
        programs.push(new Program(podcast.id + ': ' + podcast.title, podcast.publishedUrl));
      }

      return programs;
    });
  }

  programFromURL(url: string): Observable<Program> {
    return this.getPrograms().map((programs: Program[]) => {
      for (let program of programs) {
        if (program.url === url) {
          return program;
        }
      }
    }).first();
  }
}
