import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-spy-on',
  templateUrl: './spy-on.component.html',
  styleUrls: ['./spy-on.component.scss']
})
export class SpyOnComponent implements OnInit {

  constructor(private authService: AuthService) {
    authService.authenticate();
  }

  ngOnInit(): void { }

  getSalarySlip(): string {
    if (this.authService.checkAuthentication()) {
      return 'Salary slip';
    }

    return 'Not authorized';
  }

}
