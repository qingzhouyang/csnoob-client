import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) { 

              //redirect to header if already logged in
             if(this.authenticationService.currentUserValue){
              this.router.navigate(['']);
             }
  }

  ngOnInit() { 
    this.messageForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }
    console.log(this.messageForm.value);
    this.authenticationService.login(this.messageForm.get('userName').value, this.messageForm.get('password').value)
            .pipe(first())
            .subscribe(
                data => {
                   alert("Registration successful");
                  //  sessionStorage.setItem('token', this.authenticationService.currentUserValue.token);
                  this.router.navigate(['login']);
                },
                error => {
                   alert("Register fail");
                });
    this.messageForm.reset();
  }

  onClose() {
    console.log(this.messageForm);
    this.messageForm.reset();
  }

}