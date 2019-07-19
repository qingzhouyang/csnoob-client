import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { UserService } from 'src/app/service/user.service';
// import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // user: User = new User();

  messageForm: FormGroup;
  submitted = false;
  // emailReg = '.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$';
  
  //private userService: UserService
  constructor(private formBuilder: FormBuilder,
             ) { 
    this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      // email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailReg)])],
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

  // createUser():void {
  //   this.userService.createUser(this.user).subscribe (data => {
  //     alert("User registered successfully.");
  //   })
  // }

  onClose() {
    console.log(this.messageForm);
    this.messageForm.reset();
  }
}
