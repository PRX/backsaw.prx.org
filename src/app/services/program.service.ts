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
    new Program('99% Invisible', 'https://prx-feed.s3.amazonaws.com/99pi/feed-rss.xml'),
    new Program('Criminal', 'https://prx-feed.s3.amazonaws.com/criminal/feed-rss.xml'),
    new Program('The Heart', 'https://prx-feed.s3.amazonaws.com/theheart/feed-rss.xml'),
    new Program('Love+Radio', 'https://prx-feed.s3.amazonaws.com/loveandradio/feed-rss.xml'),
    new Program(
      'the memory palace',
      'https://prx-feed.s3.amazonaws.com/thememorypalace/feed-rss.xml'
    ),
    new Program('The Moth', 'https://prx-feed.s3.amazonaws.com/themoth/feed-rss.xml'),
    new Program('Serial', 'https://prx-feed.s3.amazonaws.com/serial/feed-rss.xml'),
    new Program('Strangers', 'https://prx-feed.s3.amazonaws.com/strangers/feed-rss.xml')
  ];

  programFromURL(url: string): Program {
    return this.programs.find((p: Program) => p.url === url);
  }
}
