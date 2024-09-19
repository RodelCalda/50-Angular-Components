import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  task: string = '';
  todoList: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.todoList.push(this.task.trim());
      this.task = ''; // Clear the input field
    }
  }

  removeTask(index: number) {
    this.todoList.splice(index, 1);
  }
}
