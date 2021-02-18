import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';

import { SpyOnComponent } from './spy-on.component';

describe('SpyOnComponent', () => {
  let component: SpyOnComponent;
  let fixture: ComponentFixture<SpyOnComponent>;
  let authService: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpyOnComponent],
      providers: [AuthService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyOnComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check we get salary slip', () => {
    let salarySlip = component.getSalarySlip();
    expect(salarySlip).toBe('Salary slip');
  })

  it('should check auth service checkAuthentication has been called or not using "spyOn"', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    let salarySlip = component.getSalarySlip();
    expect(salarySlip).toBe('Salary slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  })

});
