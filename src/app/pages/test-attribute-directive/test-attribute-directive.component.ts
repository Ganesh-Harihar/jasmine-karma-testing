import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-attribute-directive',
  templateUrl: './test-attribute-directive.component.html',
  styleUrls: ['./test-attribute-directive.component.scss']
})
export class TestAttributeDirectiveComponent implements OnInit {

  isClicked: boolean = false;
  userInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
