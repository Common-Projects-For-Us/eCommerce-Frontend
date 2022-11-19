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


  submitted = false;


  constructor( private frm:FormBuilder) {

  }

  ngOnInit(): void {
    this.loginform = this.frm.group({


      Email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],

    });


  }



 

  get log() {
    return this.loginform.controls;
  }

  login(){
    this.submitted = true;
    console.log(this.loginform.value);
  }

}
