import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!:FormGroup
   errors: string[] = []

   //Minimum eight characters, at least one letter, one number and one special character:

   passwordRgx="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";  

  //  passwordRgx="^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
          name:['', [Validators.required]],
          email:['', [Validators.required, Validators.email]],
          userName:['',[Validators.required, Validators.pattern('^/\\s/g$')]],
          // password:['', [Validators.required,Validators.pattern(this.passwordRgx)]],
          password:['', [Validators.required,Validators.minLength(8),]],
          confirmPassword:['', [Validators.required,Validators.minLength(8),]],
          // confirmPassword:['', [Validators.required,Validators.pattern(this.passwordRgx)]],
    });
  }
  get userControls() {
    console.log(this.user.controls);
    return this.user.controls;
  }
  // get name() {
  //   return this.user.get('name');
  // }
  // get userName() {
  //   return this.user.get('userName');
  // }


  // get email() {
  //   return this.user.get('email');
  // }

  // get password() {
  //   return this.user.get('password');
  // }

  // get confirmPassword() {
  //   return this.user.get('confirmPassword');
  // }

  register() {

 if (!this.user.valid )return
 console.log(this.user.value);




  }

}
