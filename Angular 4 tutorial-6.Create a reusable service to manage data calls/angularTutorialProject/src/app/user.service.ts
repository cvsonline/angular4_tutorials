/**
 * Created by hoangnd on 4/12/17.
 */
import {Injectable} from '@angular/core';
import {User} from './models/user'
import {USERS} from './mock-users';

@Injectable()
export class UserService {
  getUsers():User[] {
    return USERS;
  }
}
