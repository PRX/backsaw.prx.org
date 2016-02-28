import {Injectable} from 'angular2/core';

import {LocalStorage} from '../../shared/services/local_storage';

export class AuthenticationRequest {
  constructor(
    public adzkerkAPIKey?: string
  ) {}
}

@Injectable()
export class AuthenticationService {
  constructor(private _ls: LocalStorage) {}

  setAdzerkAPIKey(key: string): void {
    this._ls.set('adzerkApiKey', key);
  }

  unsetAdzerkAPIKey(): void {
    this._ls.remove('adzerkApiKey');
  }

  getAdzerkAPIKey(): string {
    return this._ls.get('adzerkApiKey');
  }
}
