import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-test-input-output-parent',
  templateUrl: './test-input-output-parent.component.html',
  styleUrls: ['./test-input-output-parent.component.scss']
})
export class TestInputOutputParentComponent implements OnInit {

  users: Array<UserModel> = [
    { id: 1, name: 'Ganesh', age: 23 },
    { id: 2, name: 'Amit', age: 24 },
    { id: 3, name: 'Nikhil', age: 25 },
    { id: 4, name: 'Amol', age: 21 },
    { id: 5, name: 'Sachin', age: 23 },
  ]

  selectedUser!: UserModel;
  constructor() { }

  ngOnInit(): void { }

  updateUser(event: UserModel): void {
    const userIndex = this.users.findIndex(user => user.id === event.id);
    if (userIndex > -1) {
      this.users[userIndex] = event;
    }
  }

}
