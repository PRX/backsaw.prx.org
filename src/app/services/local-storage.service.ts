import {provide, Provider} from 'angular2/core';

export class LocalStorage {
  public localStorage: Storage;

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }

    this.localStorage = localStorage;
  }

  public get(key: string): string {
    return this.localStorage[key] || false;
  }

  public set(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  public remove(key: string): void {
  this.localStorage.removeItem(key);
  }
}

export const LOCAL_STORAGE_PROVIDERS: Provider[] = [
  provide(LocalStorage, {useClass: LocalStorage})
];
