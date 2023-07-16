import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-auth-form',
  template: `
  <section class="hero is-info">
  <div class="hero-body">
    <p class="title">
      Authorization
    </p>
  </div>
  </section>
  <section class="form-container">
    <div>
      <form (ngSubmit)="submitForm()" #contactFrom="ngForm">
        <div class="field">
          <label class="label is-white">User email</label>
          <input 
            type="text" 
            name="userEmail" 
            class="input" 
            [(ngModel)]="email"
            #emailInput="ngModel"
            required
            email>
        </div>
        <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">Your email is required</div>

        <div class="field">
          <label class="label">User password</label>
          <input 
            type="password" 
            name="userPassword" 
            class="input" 
            [(ngModel)]="password"
            #passwordInput="ngModel"
            required>
        </div>
        <div class="help is-error" *ngIf="passwordInput.invalid && passwordInput.touched">Your password is required</div>

        <button 
          type="submit" 
          class="button is-large is-warning"
          [disabled]="contactFrom.invalid">
          Log in!
        </button>
          
      </form>
    </div>
  </section>
  `,
  styles: [`
    .form-container{
      width: 400px;
      margin: 50px 0 50px 50px;
    }
  `
  ]
})
export class AuthFormComponent{
  user: any;
  email: any;
  password: any;

  constructor(private userService: UserService){}

  ngOnInit() {

  }   
  
  submitForm(){
    const newValidUser = {
      "email": this.email,
      "password": this.password
    };
    console.log(newValidUser);
    this.userService
      .logUser(newValidUser)
      .subscribe((user) => console.log(user));
    this.email="";
    this.password="";
  }
}
