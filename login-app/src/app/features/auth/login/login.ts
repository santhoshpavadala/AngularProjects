import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  
  loginForm!: FormGroup;
  private apiUrl = 'http://localhost:4000/users';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  }


  login(): void {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;

  this.authService.login(email, password)
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }

    });
}

  // login() {
  //   if (this.loginForm.invalid) return;

  //   const { email, password } = this.loginForm.value;

  //   this.http.get<any[]>(
  //     `${this.apiUrl}?email=${email}&password=${password}`
  //   ).subscribe(res => {

  //     if (res.length > 0) {
  //       localStorage.setItem('token', 'fake-jwt-token');
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert('Invalid Credentials');
  //     }

  //   });
  // }

}
