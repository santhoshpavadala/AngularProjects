import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  signupForm!: FormGroup;
  private apiUrl = 'http://localhost:4000/users';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  signup(): void {

  if (this.signupForm.invalid) {
    this.signupForm.markAllAsTouched();
    return;
  }

  const { email } = this.signupForm.value;

  this.authService.checkEmailExists(email).subscribe(exists => {
    if (exists) {
      alert('Email already registered');
      return;
    }
    this.authService.signup(this.signupForm.value)
      .subscribe(() => {
        alert('User created successfully');
        this.router.navigate(['/login']);
      });

  });
}

  // signup(): void {
  //   if (this.signupForm.invalid) {
  //     this.signupForm.markAllAsTouched();
  //     return;
  //   }

  //   this.http.post(this.apiUrl, this.signupForm.value)
  //     .subscribe({
  //       next: () => {
  //         alert('User created successfully');
  //         this.router.navigate(['/login']);
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         alert('Error creating user');
  //       }
  //     });
  // }
}
