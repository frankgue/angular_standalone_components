import { Component, inject, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  
  private tasksService = inject(TasksService);

  completeTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
