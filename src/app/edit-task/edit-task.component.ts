import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Task } from '../task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  isNew = true;
  task = new Task();
  confirmationText = "Create";

  constructor(private dialog: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    if (data && data.task) {
      this.isNew = false;
      this.task = data.task;
      this.confirmationText = "Update";
    }
  }

  close() {
    this.dialog.close(this.task);
  }
}
