import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly loginService: LoginService){}

  public loginSubmit(loginForm: NgForm): void{

    this.loginService.login().subscribe({
      next: () => {

      },
      error: () => {
        
      }
    })

  }



}
