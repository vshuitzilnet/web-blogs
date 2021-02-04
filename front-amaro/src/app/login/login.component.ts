import { Component, OnInit } from '@angular/core';
import {User} from '../../models/users.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
