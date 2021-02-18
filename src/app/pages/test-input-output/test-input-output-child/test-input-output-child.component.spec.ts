import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputOutputChildComponent } from './test-input-output-child.component';

describe('TestInputOutputChildComponent', () => {
  let component: TestInputOutputChildComponent;
  let fixture: ComponentFixture<TestInputOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInputOutputChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
