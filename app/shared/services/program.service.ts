import {Injectable} from 'angular2/core';

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
  programs: Program[] = [
    new Program('99% Invisible', 'http://f.prxu.org/99pi/feed-rss.xml'),
    new Program('Criminal', 'http://f.prxu.org/criminal/feed-rss.xml'),
    new Program('The Heart', 'http://f.prxu.org/theheart/feed-rss.xml'),
    new Program('Love+Radio', 'http://f.prxu.org/loveandradio/feed-rss.xml'),
    new Program('the memory palace', 'http://f.prxu.org/thememorypalace/feed-rss.xml'),
    new Program('The Moth', 'http://f.prxu.org/themoth/feed-rss.xml'),
    new Program('Serial', 'http://f.prxu.org/serial/feed-rss.xml'),
    new Program('Strangers', 'http://f.prxu.org/strangers/feed-rss.xml'),
  ];

  programFromURL(url: string): Program {
    return this.programs.find((p: Program) => p.url === url);
  }
}
