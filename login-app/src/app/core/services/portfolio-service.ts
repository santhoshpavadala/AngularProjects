import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<any>(`${this.baseUrl}/profile`);
  }

  getSkills() {
    return this.http.get<any[]>(`${this.baseUrl}/skills`);
  }

  getProjects() {
    return this.http.get<any[]>(`${this.baseUrl}/projects`);
  }

  getContact() {
    return this.http.get<any>(`${this.baseUrl}/contact`);
  }
}
