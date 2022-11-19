import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup | any;
  submitted1=false;
  constructor(private frm:FormBuilder) { }

  ngOnInit(): void {
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

  get regi() {
    return this.registerform.controls;
  }

  register(){
    this.submitted1 = true;
    console.log(this.registerform.value);
  }


}
