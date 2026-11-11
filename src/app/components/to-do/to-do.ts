import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {


task: string = '';

  taskList: { id: number; task: string }[] = [];

  count = 0;

  getTask() {
    if (this.task === '') {
      return;
    }
    this.taskList.push({ id: this.count + 1, task: this.task });
    this.task = '';
    this.count++;
  }

  delete(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }


}
