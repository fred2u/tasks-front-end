import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { Task } from './task';

@Injectable()
export class TaskService {
  // TODO: remove hard coded user id
  private url = `${environment.backEnd.url}/10c0eb00-5325-11e7-b114-b2f933d5fe66/tasks`;

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
