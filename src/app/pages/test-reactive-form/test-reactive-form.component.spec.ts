import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TestReactiveFormComponent } from './test-reactive-form.component';

describe('TestReactiveFormComponent', () => {
  let component: TestReactiveFormComponent;
  let fixture: ComponentFixture<TestReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestReactiveFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email - Check] - should check user email is invalid', () => {
    let email = component.loginForm.controls['email'];
    expect(email.invalid).toBeTruthy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors && email.errors['required']).toBeTruthy();
    email.setValue('ganesh');
    expect(email.errors && email.errors['email']).toBeTruthy();
  })

  it('[Email - Check] - should check user email is valid', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('ganesh@e.com');
    expect(email.errors).toBeNull();
  })

  it('[Password - Check] - should check user password is invalid', () => {
    let password = component.loginForm.controls['password'];
    expect(password.invalid).toBeTruthy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors && password.errors['required']).toBeTruthy();
    password.setValue('12345');
    expect(password.errors && password.errors['minlength']).toBeTruthy();
  })

  it('[Password - Check] - should check user password is valid', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('123456');
    expect(password.errors).toBeNull();
  })

  it('[Form - Check] - should check form is invalid if no values are entered', () => {
    expect(component.loginForm.invalid).toBeTruthy();
  })

  it('[Form - Check] - should check form is valid if values are entered', () => {
    component.loginForm.controls['email'].setValue('ganesh@e.com');
    component.loginForm.controls['password'].setValue('ganesh@123');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('[Form - Check] - should check form is submitted', () => {
    expect(component.loginForm.invalid).toBeTruthy();
    let submitBtn = fixture.debugElement.query(By.css('#submitBtn'));
    expect(submitBtn.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['email'].setValue('ganesh@e.com');
    component.loginForm.controls['password'].setValue('ganesh@123');

    fixture.detectChanges();

    expect(submitBtn.nativeElement.disabled).toBeFalsy();

    submitBtn.triggerEventHandler('click', {});

    fixture.detectChanges();

    let message = fixture.debugElement.query(By.css('#loginMessage')).nativeElement.innerText;

    expect(message).toBe('logged in succesfully');
  })

});
