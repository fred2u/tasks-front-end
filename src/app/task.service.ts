import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { Task } from './task';

@Injectable()
export class TaskService {
  private url = `${environment.backEnd.url}/tasks`;

  constructor(private http: Http) {
  }

  find(): Observable<Task[]> {
    return this.http
      .get(`${this.url}`)
      .map(response => response.json() as Task[])
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    const msg = `Error status code ${error.status} at ${error.url}`;

    return Observable.throw(msg);
  }
}
