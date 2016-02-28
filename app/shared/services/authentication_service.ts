import {Injectable} from 'angular2/core';

import {LocalStorage} from '../../shared/services/local_storage';

export class AuthenticationRequest {
  constructor(
    public adzkerkAPIKey?: string
  ) {}
}

@Injectable()
export class AuthenticationService {
  constructor(private ls: LocalStorage) {}

  setAdzerkAPIKey(key: string): void {
    this.ls.set('adzerkApiKey', key);
  }

  unsetAdzerkAPIKey(): void {
    this.ls.remove('adzerkApiKey');
  }

  getAdzerkAPIKey(): string {
    return this.ls.get('adzerkApiKey');
  }
}
