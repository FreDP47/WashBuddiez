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
        this.fetchSingleUser("5c8fbb055d8ad203ce969b07");

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
      console.log(this.user.google.name)} 
  );
}
}
