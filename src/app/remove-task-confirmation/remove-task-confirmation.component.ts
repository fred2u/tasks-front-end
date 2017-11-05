import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Task } from '../task';

@Component({
  selector: 'app-remove-task-confirmation',
  templateUrl: './remove-task-confirmation.component.html',
  styleUrls: ['./remove-task-confirmation.component.scss']
})
export class RemoveTaskConfirmationComponent {
  task: Task;

  constructor(private dialog: MatDialogRef<RemoveTaskConfirmationComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.task = data.task;
  }
}
