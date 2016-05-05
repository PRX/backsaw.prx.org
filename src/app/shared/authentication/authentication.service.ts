import {Injectable} from '@angular/core';

import {LocalStorageService} from '../';

@Injectable()
export class AuthenticationService {
  constructor(private ls: LocalStorageService) {}

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
