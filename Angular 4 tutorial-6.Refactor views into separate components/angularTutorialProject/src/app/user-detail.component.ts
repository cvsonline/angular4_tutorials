/**
 * Created by hoangnd on 4/11/17.
 */
import {Component, Input} from '@angular/core';
import {User} from './models/user'

@Component({
  //"user-detail" will be a CSS selector
  selector: 'user-detail',
  template: `<div *ngIf="selectedUser"> 
                <h2>You selected: {{selectedUser.name}} with details:</h2>
                <div><label>User's id: </label>{{selectedUser.id}}</div>
               <div>
                    <label>name: </label>
                    <input [(ngModel)]="selectedUser.name" placeholder="Edit your name here"/>
                </div>
            </div>
        
  `
})
//"export" => allow other file can access, or "public"
export class UserDetailComponent {
    @Input() selectedUser:User;
}
