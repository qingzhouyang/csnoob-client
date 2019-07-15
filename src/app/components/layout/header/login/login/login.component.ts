import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false; 

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      email: [' ', Validators.compose([Validators.required, Validators.minLength(1)])],
      password: [' ', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }
    this.success = true;
  }

}
