import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Hotel } from '../models/interfaces';

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) { }

  public getHotelsFilter(): Observable<any> {
    //return this.http.get(environment.Hotels);
    return this.http.get('/assets/data/data.json');
  }

}
