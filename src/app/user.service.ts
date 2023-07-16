import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://reqres.in/api/";

  // Create a user

  logUser(user: any){
    return this.http
      .post(`${this.apiUrl}login`, user);
  }

  registerUser(user: any){
    return this.http
      .post(`${this.apiUrl}register`, user);
  }

  // Get all users

  getUsers(){
    return this.http
      .get(`${this.apiUrl}users?page=2`);
  }

  // Get a single user by username

  getUser(userId: string){
    return this.http
      .get(`${this.apiUrl}users/${userId}`);
    
  }

  getResource(){
    return this.http
      .get(`${this.apiUrl}unknown`)
  }

  deleteUser(userId: string){
    return this.http
      .delete(`${this.apiUrl}users/${userId}`);
  }

  updateUser(userId: string, userToUpdate: any){
    return this.http
      .put(`${this.apiUrl}users/${userId}`, userToUpdate);
  }
}
