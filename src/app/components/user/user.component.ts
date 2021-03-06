import { Component } from '@angular/core';
import { User } from '../../models/User'


@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // styles: [`
  //   h2 {
  //     color: blue
  //   }`]
})

export class UserComponent {
  //properties

  //points to user interface
  user: User;

  //methods
  //runs when component is instantiated
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'hello@gmail.com'
    }
  }
}

//model
