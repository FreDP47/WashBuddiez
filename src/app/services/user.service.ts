import {Injectable} from '@angular/core';
import {User} from '../models/model.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

  private user: User;

  constructor(private http:HttpClient) {
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
getUsers()
{
  return this.http.get(`${environment.api_url}/allusers`)
}

getUserDetails(userid: string){
  return this.http.get(`${environment.api_url}/user/${userid}`)
}

}


