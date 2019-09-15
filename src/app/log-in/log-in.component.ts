import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private appService: AppService, private router: Router) { }

  submit: boolean = false;
  logFail: boolean = false;
  signupMobile: boolean = false;
  loginMobile: boolean = false;

  model: any = {};
  
  @ViewChild('loginForm', {static: true}) loginForm: NgForm;
  @ViewChild('signupForm', {static: true}) signupForm: NgForm;


  // log in info
  loginData: any;
  loginError: any;

  ngOnInit() {
  }

  // TODO: it will cause error, need to fix
  // This error occurs when the name of the methods called in an event not matched with the template declaration and inside the class
  onSubmitLogin(postData) {
    let jsonData: any;

    // console.log(postData);

    jsonData = {
      "LocationID": 38698,
      "Email": postData.loginEmail,
      "Password": postData.loginPassword,
      "client_id": "3WCCU4EY81os",
      "client_secret": "ppDcPjF9Ex2G"
    };

    this.appService.onPostLogin(jsonData).subscribe(response => {
      console.log(response);
      this.loginData = response;
      this.appService.access_token_user = this.loginData.access_token;
      this.appService.user_first_name = this.loginData.Customer.Customer.FirstName;
      this.appService.user_last_name = this.loginData.Customer.Customer.LastName;
      this.loginError = this.loginData.error; },
    error => {console.log(error); },
      () => {
        this.loginForm.reset();
        this.router.navigate(['/portal']); });
  }

  onSubmitCreate(postData) {
    console.log(postData);
    this.signupForm.reset();
    this.submit = true;
  }

  displaySignUpMobile() {
    this.signupMobile = true;
    this.loginMobile = false;
  }
  displayLoginMobile() {
    this.loginMobile = true;
    this.signupMobile = false;
  }
}
