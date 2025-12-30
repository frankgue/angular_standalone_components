import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
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
