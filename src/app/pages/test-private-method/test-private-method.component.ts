import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-private-method',
  templateUrl: './test-private-method.component.html',
  styleUrls: ['./test-private-method.component.scss']
})
export class TestPrivateMethodComponent implements OnInit {
  private message: string = '';

  constructor() { }

  ngOnInit(): void { }

  private setMessage(): void {
    this.message = 'Hello';
  }

  private getAddition(a: number, b: number): number {
    return (a + b);
  }

}
