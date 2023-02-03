import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { User } from 'src/models/user.models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly loginService: LoginService) { }

  public loginSubmit(loginForm: NgForm): void {

    //username
    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User | undefined) => {

        },
        error: () => {

        }
      })

  }
}
