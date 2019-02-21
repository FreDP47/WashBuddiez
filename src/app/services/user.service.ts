import {Injectable} from '@angular/core';
import {User} from '../models/model.interface';

@Injectable()
export class UserService {

  private user: User;

  constructor() {
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
