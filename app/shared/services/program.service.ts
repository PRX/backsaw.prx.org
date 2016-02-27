import {Injectable} from 'angular2/core';

export class Program {
  constructor(
    public name: string,
    public url: string
  ) {}

  paramURL() {
    return encodeURIComponent(this.url);
  }
}

@Injectable()
export class ProgramService {
  programs = [
    new Program('the memory palace', 'http://f.prxu.org/thememorypalace/feed-rss.xml'),
    new Program('Serial', 'http://f.prxu.org/serial/feed-rss.xml'),
    new Program('Criminal', 'http://f.prxu.org/criminal/feed-rss.xml'),
    new Program('Strangers', 'http://f.prxu.org/strangers/feed-rss.xml'),
  ]

  programFromURL(url: string) {
    return this.programs.find(p => p.url === url);
  }
}
