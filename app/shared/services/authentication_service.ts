import {Injectable} from 'angular2/core';

import {LocalStorage} from '../../shared/services/local_storage'

export class AuthenticationRequest {
  constructor(
    public adzkerkAPIKey?: string
  ) {}
}

@Injectable()
export class AuthenticationService {
  constructor(private _ls: LocalStorage) {}

  setAdzerkAPIKey(key: string) {
    this._ls.set('adzerkApiKey', key);
  }

  unsetAdzerkAPIKey() {
    this._ls.remove('adzerkApiKey');
  }

  getAdzerkAPIKey() {
    return this._ls.get('adzerkApiKey');
  }
}
