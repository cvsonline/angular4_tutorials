/**
 * Created by hoangnd on 4/12/17.
 */
import {User} from './models/user'
import {USERS} from './mock-users';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  getUsers(): Promise<User[]> {
    //Promise "means" this action will be async and it will fetch results to callback function
    return Promise.resolve(USERS);
  }
}
