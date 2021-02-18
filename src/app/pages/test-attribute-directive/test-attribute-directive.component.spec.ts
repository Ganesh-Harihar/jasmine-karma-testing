import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HelloDirective } from 'src/app/directives/hello.directive';

import { TestAttributeDirectiveComponent } from './test-attribute-directive.component';

describe('TestAttributeDirectiveComponent', () => {
  let component: TestAttributeDirectiveComponent;
  let fixture: ComponentFixture<TestAttributeDirectiveComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAttributeDirectiveComponent, HelloDirective],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check expected behaviour of the "appHello" directive', () => {
    component.userInput = 'Ganesh';

    let showMessageBtn = debugElement.query(By.css('#showMessageBtn'));
    showMessageBtn.triggerEventHandler('click', {});

    fixture.detectChanges();

    let messageDiv = debugElement.query(By.css('#messageDiv'));

    expect(messageDiv.nativeElement.innerText).toContain(`Hello ${component.userInput}`);
    expect(messageDiv.nativeElement.style.backgroundColor).toBe('green');
    expect(messageDiv.nativeElement.style.fontSize).toBe('18px');

    messageDiv.triggerEventHandler('mouseover', null);

    fixture.detectChanges();

    expect(messageDiv.nativeElement.style.backgroundColor).toBe('orange');
    expect(messageDiv.nativeElement.style.fontSize).toBe('28px');

    messageDiv.triggerEventHandler('mouseout', null);

    fixture.detectChanges();

    expect(messageDiv.nativeElement.style.backgroundColor).toBe('green');
    expect(messageDiv.nativeElement.style.fontSize).toBe('18px');

  })

});
