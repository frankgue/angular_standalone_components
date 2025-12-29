import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../models/user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex = 0;

  @Input({required: true}) user! : User;
  @Input({required: true}) selected!: boolean;


  @Output() selectedUserEvent = new EventEmitter<string>();

  ramdomUser() {
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  }

  //getter methods
  get imagePath(): string {
    return 'assets/users/' + this.user!.avatar;
  }

  onSelectUser() {
    this.selectedUserEvent.emit(this.user!.id);
  }
}
