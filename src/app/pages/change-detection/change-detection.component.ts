import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {

  salarySlip: string = '';

  constructor(private authService: AuthService) {
    authService.checkAuthentication();
  }

  ngOnInit(): void { }

  getSalarySlip(): void {
    this.salarySlip = this.authService.checkAuthentication() ? 'Salary slip' : 'Not authorized';
  }
}
