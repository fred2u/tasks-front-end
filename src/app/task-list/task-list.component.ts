import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { TaskService } from '../task.service';
import { Task } from '../task';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService, private dialog: MdDialog) {
  }

  ngOnInit() {
    this.tasks = this.taskService.find();
  }

  openCreateTaskDialog() {
    const dialogRef = this.dialog.open(EditTaskComponent);
    const closedSub = dialogRef.afterClosed().subscribe(result => {
      console.info('Dialog closed', result);
      closedSub.unsubscribe();
    });
  }
}
