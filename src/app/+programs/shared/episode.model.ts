import {Injectable} from '@angular/core';

export class Episode {
  constructor(
    public url: string,
    public title?: string
  ) {}

  paramURL(): string {
    return encodeURIComponent(this.url);
  }
}
