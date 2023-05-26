import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public user = 'sa';
  public password = '123';
  inputEmail: string = '';
  inputPassword: string = '';
  islogin = false;



  isLogin() {

    if (this.inputEmail == this.user && this.inputPassword == this.password) {
      this.islogin = true
      alert('SESION INICIADA EXITOSAMENTE');
      this.router.navigateByUrl('dashboard');
    } else {
      this.islogin = false
      alert('USUARIO O CONTRASEÑA INCORRECTOS');
      this.router.navigateByUrl("login");

    }
  }





}








