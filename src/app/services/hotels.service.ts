import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment as ENV } from '../../environments/environment';
import { Hotel } from '../models/Hotel';

@Injectable()
export class HotelsService {

  public servicesUrl = `${ENV.hotels_api}/hotel`;

  constructor(private http: HttpClient) { }

  public getHotelsFilter(name?: string, stars?: Array<number>, id?: string) {
    let url = `${this.servicesUrl}?hotels=almundo`;
    url += `${name ? `&name=${name}` : ''}`;
    url += `${id ? `&id=${id}` : ''}`;
    url += `${stars && stars.length ? `&stars=[${stars}]` : ''}`;

    return this.http.get(url);
  }

}
