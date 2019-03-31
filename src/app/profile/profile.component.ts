import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    user: any = {};

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.fetchSingleUser("5ca0f3e2ca4d6a3b52382873");

    }

    fetchSingleUser(id)
  {
    this.userService
    .getUserDetails(id)
  //   .subscribe((data: User[]) =>
  // {this.user=data;
  .subscribe(res=>
    {this.user= res;
      console.log(res)
      console.log(this.user.username)
    } 
  );
}
}
