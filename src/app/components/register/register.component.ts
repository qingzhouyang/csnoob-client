import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/internal/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  messageForm: FormGroup;
  // emailReg = '.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$';
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) { 

            //  //redirect to header if already logged in
            //  if(this.authenticationService.currentUserValue){
            //    this.router.navigate(['']);
            //  }
  }

  ngOnInit() {
      this.messageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      // email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailReg)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
   }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }
    console.log(this.messageForm.value);
    this.userService.createUser(this.messageForm.value)
        .pipe(first())
        .subscribe(
            data => {
                console.log("Registration successful");
                // sessionStorage.setItem('token', this.user.token);
                this.router.navigate(['login']);
            },
            error => {
              console.log("Register fail");
            });

    this.messageForm.reset();
  }

  onClose() {
    console.log(this.messageForm);
    this.messageForm.reset();
  }
}
