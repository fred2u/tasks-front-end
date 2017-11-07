import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { Task } from './task';

@Injectable()
export class TaskService {
  // TODO: remove hard coded user id
  private url = `${environment.backEnd.url}/10c0eb00-5325-11e7-b114-b2f933d5fe66/tasks`;

  constructor(private http: HttpClient) {
  }

  find(): Observable<Array<Task>> {
    return this.http
      .get<Array<Task>>(this.url)
      .catch(this.handleError);
  }

  create(task: Task): Promise<Task> {
    return this.http
      .post<Task>(this.url, task)
      .toPromise()
    ;
  }

  update(task: Task): Promise<Task> {
    return this.http
      .put<Task>(`${this.url}/${task.id}`, task)
      .toPromise()
    ;
  }

  remove(task: Task): Promise<void> {
    return this.http
      .delete<void>(`${this.url}/${task.id}`)
      .toPromise()
    ;
  }

  private handleError(error: Response) {
    console.error(error);
    const msg = `[TaskService] ${error.statusText}.`;

    return Observable.throw(msg);
  }
}
