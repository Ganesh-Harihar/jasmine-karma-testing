import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UserModel } from 'src/app/models/user.model';
import { TestInputOutputChildComponent } from '../test-input-output-child/test-input-output-child.component';

import { TestInputOutputParentComponent } from './test-input-output-parent.component';

describe('TestInputOutputParentComponent', () => {
  let parentComponent: TestInputOutputParentComponent;
  let parentFixture: ComponentFixture<TestInputOutputParentComponent>;
  let parentDebugElement: DebugElement;

  let childComponent: TestInputOutputChildComponent;
  let childFixture: ComponentFixture<TestInputOutputChildComponent>;
  let childDebugElement: DebugElement;

  let user: UserModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestInputOutputParentComponent, TestInputOutputChildComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    parentFixture = TestBed.createComponent(TestInputOutputParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentDebugElement = parentFixture.debugElement;

    user = {
      id: 1,
      name: 'Ganesh',
      age: 20
    }

    parentComponent.selectedUser = user;

    parentFixture.detectChanges();

    childFixture = TestBed.createComponent(TestInputOutputChildComponent);
    childComponent = childFixture.componentInstance;

    childFixture.detectChanges();

    childDebugElement = childFixture.debugElement;
  });

  it('should create', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('[Input] - should test the input changes',  () => {
    const id = parentDebugElement.query(By.css('#id')).nativeElement.innerText;
    expect(parseInt(id)).toBe(1);

    parentFixture.whenStable().then(() => {
      const name = parentDebugElement.query(By.css('#name')).nativeElement.value;
      expect(name).toBe('Ganesh');
    })
  })

  it('[Output] - should test the output changes', () => {
    user.age = 100;
    let selectedUser!: UserModel;

    childComponent.userUpdated.subscribe((data) => {
      selectedUser = data;
    })

    childComponent.id = user.id;
    childComponent.name = user.name;
    childComponent.age = user.age;

    childComponent.updateUser();

    expect(selectedUser.age).toBe(100);

  })

});
