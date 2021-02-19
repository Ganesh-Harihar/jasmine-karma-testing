import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-template-driven-form',
  templateUrl: './test-template-driven-form.component.html',
  styleUrls: ['./test-template-driven-form.component.scss']
})
export class TestTemplateDrivenFormComponent implements OnInit {

  @ViewChild('forgotForm') forgotForm!: NgForm;
  message: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void { }

  public sendEmail(): void {
    this.message = 'Email sent successfully';
    this.forgotForm.reset();
  }
}
