import { Component, ViewChild, DoCheck } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  model: any = {};
  
  @ViewChild('loginForm', {static: true}) loginForm: NgForm;
  @ViewChild('signupForm', {static: true}) signupForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(postData) {
    console.log(postData);
    this.loginForm.reset();
    this.router.navigate(['/portal']);
  }

  onSubmitCreate(postData) {
    console.log(postData);
    this.signupForm.reset();
  }
}
