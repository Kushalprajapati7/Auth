import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error(err),
    });
  }
}
