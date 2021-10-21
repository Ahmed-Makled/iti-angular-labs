import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]),
  });

  
  errors: string[] = []
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  get email() {
    return this.user.get('email')
  }

  get password() {
    return this.user.get('password')
  }

  login() {
    if (this.user.invalid) {
      if (this.email?.invalid) this.errors.push('Email Is Invalid');
      if (this.password?.invalid) this.errors.push('Password Is Invalid');
      return     

    }
    this.router.navigate(['/todo'])
  }
  
}
