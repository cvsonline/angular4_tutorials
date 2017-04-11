import { Component } from '@angular/core';
import { User } from './models/user'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{title}}</h1>
            <h2>Hello {{user.name}}. This is your details: </h2>
            <div><label>id: </label>{{user.id}}</div>
            <div><label>name: </label>{{user.name}}</div>
            <div><label>email: </label>{{user.email}}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="user.name" placeholder="Enter your name...">
            </div>
`,
})
export class AppComponent  {
  title = 'Angular Tutorial';
  user:User = {
      id: 1,
      name: 'Nguyen Duc Hoang',
      age: 30,
      email: "sunlight4d@gmail.com"
  }
}
