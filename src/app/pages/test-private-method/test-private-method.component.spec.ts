import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrivateMethodComponent } from './test-private-method.component';

describe('TestPrivateMethodComponent', () => {
  let component: TestPrivateMethodComponent;
  let fixture: ComponentFixture<TestPrivateMethodComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestPrivateMethodComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrivateMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test privated method with no parameters', () => {
    component['setMessage']();
    expect(component['message']).toBe('Hello');
  });

  it('should test privated method with parameters', () => {
    const addition = component['getAddition'](10, 20);
    expect(addition).toBe(30);
  });
});
