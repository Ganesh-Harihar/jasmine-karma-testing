import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TestTemplateDrivenFormComponent } from './test-template-driven-form.component';

describe('TestTemplateDrivenFormComponent', () => {
  let component: TestTemplateDrivenFormComponent;
  let fixture: ComponentFixture<TestTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestTemplateDrivenFormComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email- Check] - should check email is invalid', async(() => {
    fixture.whenStable().then(() => {
      let email = component.forgotForm.form.controls['email'];
      expect(email.invalid).toBeTruthy();
      expect(email.pristine).toBeTruthy();
      expect(email.errors && email.errors['required']).toBeTruthy();
      email.setValue('abd@');
      expect(email.errors && email.errors['email']).toBeTruthy();
    })
  }));

  it('[Email - Check] - should check email is valid', async(() => {
    fixture.whenStable().then(() => {
      let email = component.forgotForm.form.controls['email'];
      email.setValue('abc@e.com');
      expect(email.valid).toBeTruthy();
    })
  }));

  it('[Form - Check] - should check form is invalid if no values are entered', async(() => {
    fixture.whenStable().then(() => {
      expect(component.forgotForm.form.invalid).toBeTruthy();
    })
  }));

  it('[Form - Check] - should check form is valid if values are entered', async(() => {
    fixture.whenStable().then(() => {
      component.forgotForm.form.controls['email'].setValue('abe@ad.com');
      expect(component.forgotForm.form.valid).toBeTruthy();
    })
  }));


  it('[Form - Check] - should check form submitted', async(() => {
    fixture.whenStable().then(() => {
      expect(component.forgotForm.form.invalid).toBeTruthy();
      const sendEmailBtn = fixture.debugElement.query(By.css('#sendEmailBtn'));
      expect(sendEmailBtn.nativeElement.disabled).toBeTruthy();
      component.forgotForm.form.controls['email'].setValue('abe@ad.com');
      expect(component.forgotForm.form.valid).toBeTruthy();
      sendEmailBtn.triggerEventHandler('click', {});
      fixture.detectChanges();
      expect(component.message).toBe('Email sent successfully');
      expect(component.forgotForm.form.invalid).toBeTruthy();
    })
  }));

});
