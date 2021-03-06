
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heros, MockHeroData } from './herosType';

@Injectable()
export class HeroService {
  heros: Array<Heros> = [];
  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl) { }

  getHero(id) {
    // tslint:disable-next-line: no-string-literal
    return this.heros.find(x => x['_id'] === id);
  }
}
