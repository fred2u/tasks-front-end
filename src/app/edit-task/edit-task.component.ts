import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Task } from '../task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  task = new Task();

  constructor(private dialog: MdDialogRef<EditTaskComponent>) {
  }

  close() {
    this.dialog.close(this.task);
  }
}
