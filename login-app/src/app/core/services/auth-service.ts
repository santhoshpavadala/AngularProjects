import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl ="http://localhost:4000/users";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe( delay(2000), // ⬅ 2 second delay
        map(res => {
          if (res.length > 0) {
            localStorage.setItem('token', 'fake-jwt-token');
            return true;
          }
          return false;
        })
      );
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http
      .get<any[]>(`${this.apiUrl}?email=${email}`)
      .pipe(map(res => res.length > 0));
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
