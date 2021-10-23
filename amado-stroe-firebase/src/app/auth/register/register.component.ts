import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {
  user!:FormGroup
  errors: string[] = []

  //Minimum eight characters, at least one letter, one number and one special character:
  passwordRgx="(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}";  


 constructor(private fb: FormBuilder, private router:Router) {
  this.user = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    userName:['',[Validators.required, Validators.pattern('^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$')]],
    password:['', [Validators.required,Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')]],
    confirmPassword:['', [Validators.required,Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')]],
    addresses: this.fb.array([  ]) ,

   });
  }
  
 ngOnInit(): void {
 console.log( this.addresses);
 }

  //get usercontrols
 get userControls() {
   return this.user.controls;
 }
 //get addresses
 get addresses() : FormArray {
  return this.user.get("addresses") as FormArray
}
//add form group
newAddress(): FormGroup {
  return this.fb.group({
    address:['',[Validators.required]],
    street: ['',[Validators.required]],
    city: ['',[Validators.required]],
    country: ['',[Validators.required]],
  })
}
//add address
addAddress() {
  this.addresses.push(this.newAddress());
}
///remove address
removeAddress(i:number) {
  this.addresses.removeAt(i);
}


///Register function
 register() {
   console.log(this.user.value);

if (!this.user.valid )return
this.router.navigate(['/home'])

 }

 ngOnChanges(): void {
}


}
