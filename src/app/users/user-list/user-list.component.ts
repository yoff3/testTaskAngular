import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  template: `
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">
          List of users
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="users" >
          <div class="column is-4" 
            *ngFor="let user of users.data"> 
            
            <div class="card flex-card">
              <div class="card-content" >                
                <a routerLink="/users/{{user.id}}">
                  {{user.first_name}} {{user.last_name}}
                </a>
              </div>
              <button
                (click)="deleteUser(user)"
                class="delete is-large btn-delete" 
                type="button" 
                name="deleteUserBtn">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">
          Resources list
        </p>
      </div>
    </section>
    <section class="section">
        <div class="container">
          <div class="columns is-multiline" *ngIf="resources">
            <div class="column is-4" *ngFor="let resource of resources.data"> 
              
              <div class="card">
                <div class="card-content">
                  {{resource.name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `,
  styles: [`
    .flex-card{
      display: flex;
      justify-content: space-between;
    }

    .btn-delete{
      margin: auto 0;
      margin-right: 20px;
    }
    `
  ]
})
export class UserListComponent {
  users: any;
  userId: any;

  resources: any;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute
    ){}

  ngOnInit(){
    this.users = this.userService
      .getUsers()
      .subscribe(users => {
        console.log(users, '2');
        this.users = users;
      });

      
    this.resources = this.userService
      .getResource()
      .subscribe(resource => {
        console.log(resource);
        this.resources = resource;
      })

  }

  deleteUser(user: any){
      this.users.data.splice(user, 1);    
      this.userService
        .deleteUser(user);
      //  console.log(user); 
      // console.log(this.users.data); 
  }

}
