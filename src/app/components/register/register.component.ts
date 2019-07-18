import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  emailReg = '.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$';
  

  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailReg)])],
      // email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    this.messageForm.reset();
    if (this.messageForm.invalid) {
      return;
  }
  }

  onClose() {
    console.log(this.messageForm);
    this.messageForm.reset();
  }
}
