import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="containter container-layout">

        <div class="card user-card" *ngIf="user">
          <p class="user-header is-5 user-title">{{user.data.first_name}} {{user.data.last_name}}</p>
          <p class="user-title">{{user.data.email}}</p>
          <figure class="image is-96x96 user-image">
            <img class="is-rounded " [src]="user.data.avatar" alt="userPicture">
          </figure>
        </div>
        
        <div>
          <form #userEditForm="ngForm">
            <div class="field">
              <div class="user-field">
                <label class="label is-white">name</label>
                <input 
                  type="text" 
                  name="userName" 
                  class="input"
                  ngModel>
              </div>
              <div class="user-field">
                <label class="label is-white">job</label>
                <input 
                  type="text" 
                  name="userJob" 
                  class="input"
                  ngModel>
              </div>
            </div>
            <div class="button-layout">
              <button class="button is-info medium-size" (click)="onEditUser(user)">{{editmode ? 'Save': 'Edit'}}</button>
              <button class="button is-danger medium-size" (click)="onDeleteUserEditData()">delete</button>
            </div>
          </form>
        </div>

        <div>
          <form #userUpdatedAt="ngForm" class="user-field">
            <label class="label is-white">updatedAt</label>
              <input 
                type="text" 
                name="isUpdated" 
                class="input"
                ngModel>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .user-card{
      width: 300px;
      text-align: center;
    }

    .user-title{
      padding: 5px;
    }

    .user-header{
      font-weight: 700;
      font-size: 18px;
    }

    .user-image{
      margin: 0 auto;
      padding-bottom: 110px;
    }

    .container-layout{
      display: flex;
      justify-content: space-around;
    }

    .button-layout{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .medium-size{
      width: 120px;
    }

    .user-field{
      margin-right: 5px
    }
    .user-field:last-child{
      margin: 0;
    }
  `
  ]
})
export class UserSingleComponent {

  user: any;
  updatedUserInfo: any;
  editmode: boolean = false;

  @ViewChild('userEditForm') form!: NgForm;
  @ViewChild('userUpdatedAt') updatedForm!: NgForm;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ){}

  ngOnInit(){

    this.route.params.subscribe(params => {
      const userId = params['id'];

      this.userService
        .getUser(userId)
        .subscribe(user => this.user = user)

    })
  }

  onEditUser(user: any){
    if(!this.editmode){
      // console.log(user.data);
      // console.log(this.form);
      //console.log(this.form.value);
      this.editmode = true;
    }else{

      this.route.params.subscribe(params => {
        const userId = params['id'];
        const currentUser = {
          name: this.form.value.userName,
          job: this.form.value.userJob
        }
        // console.log(currentUser, userId);
        // console.log(this.user.data);
        //console.log(this.form);
        this.userService
          .updateUser(userId, currentUser)
          .subscribe((user) => {
            console.log(user);
            this.updatedUserInfo = user;
            this.updatedForm.value.isUpdated = this.updatedUserInfo.updatedAt;
            this.updatedForm.setValue({
              isUpdated: this.updatedForm.value.isUpdated
            });
          });  
      });      
      this.editmode = false;
    }
  }

  onDeleteUserEditData(){
    this.form.setValue({
      userName: "",
      userJob: ""
    });
    this.updatedForm.setValue({
      isUpdated: ""
    });
    console.log(this.updatedForm.value);
    this.editmode = false;
  }
}
