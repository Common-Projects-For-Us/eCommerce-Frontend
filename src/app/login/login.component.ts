import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup | any;
  registerform: FormGroup | any;
  active = 1;
  submitted = false;
  submitted1 = false;

  constructor(config: NgbNavConfig, private frm:FormBuilder) {
    config.destroyOnHide = false;
		config.roles = false;
  }

  ngOnInit(): void {
    this.loginform = this.frm.group({


      Email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],

    });

    this.registerform = this.frm.group({

     FirstName: ['', [Validators.required]],
     LastName: ['', [Validators.required]],
      Email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],

    },
    {
      validator: this.ConfirmedValidator('Password', 'ConfirmPassword')
    }

    );
  }

  ConfirmedValidator(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {

      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordConfirmationInput.value == '') {
        return passwordConfirmationInput.setErrors({required: true})
      }
      else if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  form(){
    (<HTMLInputElement>document.getElementById('pills-home')).style.display = "none";
  }
  form1(){
    (<HTMLInputElement>document.getElementById('pills-home')).style.display = "block";
  }

  get log() {
    return this.loginform.controls;
  }
  get regi() {
    return this.registerform.controls;
  }
  login(){
    this.submitted = true;
    console.log(this.loginform.value);
  }
  register(){
    this.submitted1 = true;
    console.log(this.registerform.value);
  }

}
