import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent implements OnInit {
  addForm!: FormGroup;

  @Input({required: true}) currentUserId!: string; 
  @Output() showAddTaskFormEvent = new EventEmitter<void>();

  private tasksService = inject(TasksService);


  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl(''),
      summary: new FormControl(''),
      dueDate: new FormControl(''),
    });
  }

  onCloseAddTaskForm() {
    this.showAddTaskFormEvent.emit();
  }

  addNewTask() {
    this.tasksService.addTask({
      title: this.addForm.get("title")?.value,
      summary: this.addForm.get("summary")?.value,
      date: this.addForm.get("dueDate")?.value
    }, this.currentUserId);
    
    this.onCloseAddTaskForm()
    
  }
}
