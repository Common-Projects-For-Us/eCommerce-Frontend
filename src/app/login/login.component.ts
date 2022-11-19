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


      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });

    this.registerform = this.frm.group({

     Name: ['', [Validators.required]],
     UserName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],

    });
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
  }
  register(){
    this.submitted1 = true;
  }

}
