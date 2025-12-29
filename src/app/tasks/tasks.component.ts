import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../models/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskRequestData } from '../models/new-task-request-data.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) username!: string;

  tasks!: Task[];
  showAddTaskForm: boolean = false;

  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
      this.tasks = this.tasksService.getUserTasks(this.userId);
  }

  showTaskDialog() {
    this.showAddTaskForm = true;
  }

  closeTaskDialog() {
    this.showAddTaskForm = false;
  }

  onTaskCompleted(taskId: string) {
    this.tasksService.removeTask(taskId);
    this.tasks = this.tasksService.getUserTasks(this.userId);
  }
  get selectedUserTasks(): Task[] {
    this.tasks = this.tasksService.getUserTasks(this.userId);
    return this.tasks;
  }
}
