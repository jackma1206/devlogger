import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'Wassup@yahoo.com',
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Anna',
        lastName: 'Doe',
        email: 'Helloworld@gmail.com',
        isActive: true,
        hide: true,
        registered: new Date('09/04/2016 08:30:00')
      },
      {
        firstName: 'Bolo',
        lastName: 'Doe',
        email:'123@email.com',
        registered: new Date('11/02/2018 09:30:00'),
        hide: true
      }
    ];
  }
  getUsers(): Observable<User[]>{
    return of(this.users);
  }
  addUser(user: User){
    this.users.unshift(user);
  }
  getData(){
    this.data = new Observable(observer =>{
      setTimeout(()=>{
        observer.next(1);
      }, 1000);
      setTimeout(()=>{
        observer.next(2);
      }, 2000);
      setTimeout(()=>{
        observer.next(3);
      }, 3000);
      setTimeout(()=>{
        observer.next(4);
      }, 4000);
    });
    return this.data;
  }
}
