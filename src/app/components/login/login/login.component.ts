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

  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      userName: ['', Validators.required],
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