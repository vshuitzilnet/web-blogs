import { Component, OnInit } from '@angular/core';
import {User} from '../../models/users.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public name='';
  public user;
  public password;
  public email;

  public newuser: {
    name: string,
    email: string,
    username: string,
    password:string
  }
  
  public __user: User={
    name: '',
    user: '',
    password: '',
    email: ''
  };

  constructor( private userService: UserService) { }

  createUser(){


    this.__user.name = this.name;
    this.__user.email = this.email;
    this.__user.user = this.user;
    this.__user.password = this.password;

    console.log("DATA: " + this.__user.name)

    this.userService.postUser(this.__user).subscribe( res => {
      console.log(JSON.stringify(res));
    })

    
  }

  ngOnInit(): void {
  }

}
