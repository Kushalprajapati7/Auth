import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/register', { username, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>('http://localhost:3000/api/auth/login', { email, password }).pipe(
      map(response => {
        this.token = response.token;
        return response;
      })
    );
  }

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.token = null;
    this.router.navigate(['/login']);
  }
}
