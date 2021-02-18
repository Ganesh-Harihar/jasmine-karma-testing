import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStringArrayComponent } from './test-string-array.component';

describe('TestStringArrayComponent', () => {
  let component: TestStringArrayComponent;
  let fixture: ComponentFixture<TestStringArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestStringArrayComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStringArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Strings testing
   */

  it('should check string is same using "toBe" ===', () => {
    let string = 'Hello world';
    expect(string).toBe('Hello world');
  })

  it('should check string is same using "toEqual" ==', () => {
    let string = 'Hello world';
    expect(string).toEqual('Hello world');
  })

  it('should check whether string contain other string using "toContain"', () => {
    let string = 'Hello world';
    expect(string).toContain('world');
  })

  it('should check string not contain other string using "not"', () => {
    let sting = 'Hello world';
    expect(sting).not.toBe('Hello World');
  })

  /**
   * Array testing
   */

  it('should check array is same usign "toEqual"', () => {
    let array = [1, 2, 3];
    expect(array).toEqual([1, 2, 3]);
  })

  it('should check whether array contain particular value using "toContain"', () => {
    let array = [1, 2, 3];
    expect(array).toContain(2);
  })

  /**
   * toBe vs ToEqual
   */

  it('should test "toBe" matcher', () => {
    let obj1 = {
      val: 10
    };

    let obj2 = {
      val: 10
    };
    // expect(obj1).toBe(obj2); // this will result in failed test case
    expect(obj1).not.toBe(obj2);
  })

  it('should test "toEqual" matcher', () => {
    let obj1 = {
      val: 10
    };

    let obj2 = {
      val: 10
    };

    expect(obj1).toEqual(obj2);
  })

});
