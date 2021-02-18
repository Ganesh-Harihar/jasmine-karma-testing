import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-test-input-output-child',
  templateUrl: './test-input-output-child.component.html',
  styleUrls: ['./test-input-output-child.component.scss']
})
export class TestInputOutputChildComponent implements OnInit {

  id!: number;
  name: string = '';
  age!: number;

  @Input() set setUser(user: UserModel) {
    if (user !== null && user !== undefined) {
      this.id = user.id;
      this.name = user.name;
      this.age = user.age;
    }
  }

  @Output() userUpdated = new EventEmitter<UserModel>();


  constructor() { }

  ngOnInit(): void { }

  updateUser() {
    const updatedUser = {
      id:this.id,
      name: this.name,
      age: this.age
    }
    this.userUpdated.emit(updatedUser);
  }
}
