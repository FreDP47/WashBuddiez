import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/model.interface';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  users : User[];
  user: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchAllUsers();
    this.fetchSingleUser("5c8fbb055d8ad203ce969b07");
  }
  

  fetchAllUsers(){
    this.userService
        .getUsers()
        .subscribe((data: User[]) => {
            this.users= data;
            console.log("data is " + data)
            console.log('alluser Data requested ...');
          console.log(this.users);
        });
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
  //console.log(this.user);
  
}
}
