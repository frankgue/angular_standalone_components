import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users = DUMMY_USERS;
  selectedUser: User = this.users[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  readSelectUserEvent(userId: string) {
    this.getSelectedUser(userId);
  } 


  private getSelectedUser(userId: string) {
    this.selectedUser = this.users.find(user => user.id === userId)!;
  }
}
